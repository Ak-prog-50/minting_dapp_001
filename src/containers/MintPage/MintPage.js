import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import * as s from "../../styles/globalStyles";
import {
  StyledLink,
  StyledLogo,
  ResponsiveWrapper,
} from "../../styles/styledComponents";
import { useContext } from "react";
import { AuthContext } from "../../state/context/AuthContext/AuthProvider";
import { AppContext } from "../../state/context/ApplicationContext/AppContextProvider";
import SideContainer from "../../components/SideContainer/SideContainer";
import Disclaimer from "../../components/Disclaimer/Disclaimer";
import {
  contractAddressDescStyles,
  countTitleStyles,
  mintContainerStyles,
  nftCostTitleStyles,
  normalTextStyles,
  parentContainerStyles,
} from "./MintPageStyles";
import SaleEndedComp from "./SaleEndedNotice/SaleEndedComp.js";
import ConnectWallet from "./ConnectWallet/ConnectWallet";
import { getData, getConfig } from "../../utils/applicationFunctions";
import BuyTokens from "./BuyTokens/BuyTokens";
import { truncate } from "../../utils/truncate";


function App() {
  const dispatch = useDispatch();
  const blockchain = useSelector((state) => state.blockchain);
  const data = useSelector((state) => state.data);

  const { isOwner, setIsOwner } = useContext(AuthContext);
  const {
    CONFIG,
    SET_CONFIG,
  } = useContext(AppContext);

  useEffect(() => {
    getConfig(SET_CONFIG);
  }, []);

  useEffect(() => {
    getData(blockchain, dispatch);
  }, [blockchain.account]);

  return (
    <s.Screen>
      <s.Container
        flex={1}
        ai={"center"}
        style={parentContainerStyles}
        image={CONFIG.SHOW_BACKGROUND ? "/config/images/bg.png" : null}
      >
        <StyledLogo alt={"logo"} src={"/config/images/logo.png"} />

        <s.SpacerSmall />

        <ResponsiveWrapper flex={1} style={{ padding: 24 }} test>
          <SideContainer />
          <s.SpacerLarge />

          <>
            <s.Container
              flex={2}
              jc={"center"}
              ai={"center"}
              style={mintContainerStyles}
            >
              {/* Count Title */}
              <s.TextTitle style={countTitleStyles}>
                {data.totalSupply} / {CONFIG.MAX_SUPPLY}
              </s.TextTitle>

              {/* Contract Address Link */}
              <s.TextDescription style={contractAddressDescStyles}>
                <StyledLink target={"_blank"} href={CONFIG.SCAN_LINK}>
                  {truncate(CONFIG.CONTRACT_ADDRESS, 15)}
                </StyledLink>
              </s.TextDescription>

              <s.SpacerSmall />

              {Number(data.totalSupply) >= CONFIG.MAX_SUPPLY ? (
                <SaleEndedComp />
              ) : (
                <>
                  <s.TextTitle style={nftCostTitleStyles}>
                    1 {CONFIG.SYMBOL} costs {CONFIG.DISPLAY_COST}{" "}
                    {CONFIG.NETWORK.SYMBOL}.
                  </s.TextTitle>
                  <s.SpacerXSmall />

                  <s.TextDescription style={normalTextStyles}>
                    Excluding gas fees.
                  </s.TextDescription>
                  <s.SpacerSmall />

                  {blockchain.account === "" ||
                  blockchain.smartContract === null ? (
                    <ConnectWallet />
                  ) : (
                    <BuyTokens />
                  )}
                </>
              )}

              <s.SpacerMedium />
            </s.Container>
          </>

          <s.SpacerLarge />
          <SideContainer />
        </ResponsiveWrapper>

        <s.SpacerMedium />

        <Disclaimer />
      </s.Container>
    </s.Screen>
  );
}

export default App;
