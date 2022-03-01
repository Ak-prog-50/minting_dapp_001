import { useContext } from "react";
import { AppContext } from "../../../state/context/ApplicationContext/AppContextProvider";
import { Container, TextDescription, SpacerSmall } from "../../../styles/globalStyles";

const Disclaimer = () => {

    const { CONFIG } = useContext(AppContext)
  return (
    <Container jc={"center"} ai={"center"} style={{ width: "70%" }}>
      <TextDescription
        style={{
          textAlign: "center",
          color: "var(--primary-text)",
        }}
      >
        Please make sure you are connected to the right network (
        {CONFIG.NETWORK.NAME} Mainnet) and have the correct address. Please note:
        Once you make the purchase, you cannot undo this action.
      </TextDescription>
      <SpacerSmall />
      <TextDescription
        style={{
          textAlign: "center",
          color: "var(--primary-text)",
        }}
      >
        We have set the gas limit to {CONFIG.GAS_LIMIT} for the contract to
        successfully mint your NFT. We recommend that you don't lower the gas
        limit.
      </TextDescription>
    </Container>
  );
};

export default Disclaimer;
