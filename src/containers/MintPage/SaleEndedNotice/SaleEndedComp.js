import React from "react";
import { useContext } from "react";
import { AppContext } from "../../../state/context/ApplicationContext/AppContextProvider";
import {
  TextTitle,
  TextDescription,
  SpacerSmall,
} from "../../../styles/globalStyles";
import { StyledLink } from "../../../styles/styledComponents";

const SaleEndedComp = () => {
  const { CONFIG } = useContext(AppContext);
  return (
    <>
      <TextTitle style={{ textAlign: "center", color: "var(--accent-text)" }}>
        The sale has ended.
      </TextTitle>
      <TextDescription
        style={{ textAlign: "center", color: "var(--accent-text)" }}
      >
        You can still find {CONFIG.NFT_NAME} on
      </TextDescription>
      <SpacerSmall />
      <StyledLink target={"_blank"} href={CONFIG.MARKETPLACE_LINK}>
        {CONFIG.MARKETPLACE}
      </StyledLink>
    </>
  );
};

export default SaleEndedComp;
