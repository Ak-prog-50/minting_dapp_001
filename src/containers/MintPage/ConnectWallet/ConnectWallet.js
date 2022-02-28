import React from "react";
import {
  Container,
  TextDescription,
  SpacerSmall,
} from "../../../styles/globalStyles";
import { StyledButton } from "../../../styles/styledComponents";
import { normalTextStyles } from "../MintPageStyles";
import { connect } from "../../../state/redux/blockchain/blockchainActions";
import { useDispatch } from "react-redux";
import { useContext } from "react";
import { AppContext } from "../../../state/context/ApplicationContext/AppContextProvider";
import { useSelector } from "react-redux";
import { getData } from "../../../utils/applicationFunctions";

const ConnectWallet = () => {
  const dispatch = useDispatch();
  const {CONFIG, setIsOwner} = useContext(AppContext)
  const blockchain = useSelector((state) => state.blockchain);

  return (
    <Container ai={"center"} jc={"center"}>
      <TextDescription style={normalTextStyles}>
        Connect to the {CONFIG.NETWORK.NAME} network
      </TextDescription>
      <SpacerSmall />
      <StyledButton
        onClick={(e) => {
          e.preventDefault();
          dispatch(connect(blockchain, setIsOwner));
          getData(blockchain, dispatch);
        }}
      >
        CONNECT
      </StyledButton>
      {blockchain.errorMsg !== "" ? (
        <>
          <SpacerSmall />
          <TextDescription
            style={{
              textAlign: "center",
              color: "var(--accent-text)",
            }}
          >
            {blockchain.errorMsg}
          </TextDescription>
        </>
      ) : null}
    </Container>
  );
};

export default ConnectWallet;
