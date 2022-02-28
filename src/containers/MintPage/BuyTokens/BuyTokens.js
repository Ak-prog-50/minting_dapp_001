import React from "react";
import { useContext } from "react";
import { useDispatch } from "react-redux";
import { AppContext } from "../../../state/context/ApplicationContext/AppContextProvider";
import { useSelector } from "react-redux";
import {
  Container,
  TextDescription,
  SpacerSmall,
  SpacerMedium,
} from "../../../styles/globalStyles";
import {
  StyledButton,
  StyledRoundButton,
} from "../../../styles/styledComponents";
import { normalTextStyles } from "../MintPageStyles";
import { incrementMintAmount, decrementMintAmount, getData } from "../../../utils/applicationFunctions";
import { fetchData } from "../../../state/redux/data/dataActions";
import claimNFTs from "../../../backEndCalls/claimNFTs";

const BuyTokens = () => {
  const {
    CONFIG,
    claimingNft,
    setClaimingNft,
    feedback,
    setFeedback,
    mintAmount,
    setMintAmount,
  } = useContext(AppContext);

  const dispatch = useDispatch()
  const blockchain = useSelector((state) => state.blockchain);

  return (
    <>
      <TextDescription style={normalTextStyles}>{feedback}</TextDescription>
      <SpacerMedium />
      <Container ai={"center"} jc={"center"} fd={"row"}>
        <StyledRoundButton
          style={{ lineHeight: 0.4 }}
          disabled={claimingNft ? 1 : 0}
          onClick={(e) => {
            e.preventDefault();
            decrementMintAmount(mintAmount, setMintAmount);
          }}
        >
          -
        </StyledRoundButton>
        <SpacerMedium />
        <TextDescription style={normalTextStyles}>{mintAmount}</TextDescription>
        <SpacerMedium />
        <StyledRoundButton
          disabled={claimingNft ? 1 : 0}
          onClick={(e) => {
            e.preventDefault();
            incrementMintAmount(mintAmount, setMintAmount);
          }}
        >
          +
        </StyledRoundButton>
      </Container>
      <SpacerSmall />
      <Container ai={"center"} jc={"center"} fd={"row"}>
        <StyledButton
          disabled={claimingNft ? 1 : 0}
          onClick={(e) => {
            e.preventDefault();
            claimNFTs(
              CONFIG,
              setClaimingNft,
              setFeedback,
              dispatch,
              fetchData,
              blockchain,
              mintAmount
            );
            getData(blockchain, dispatch);
          }}
        >
          {claimingNft ? "BUSY" : "BUY"}
        </StyledButton>
      </Container>
    </>
  );
};

export default BuyTokens;
