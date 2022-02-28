import React from "react"
import { Container } from "../../styles/globalStyles";

const SideContainer = () => {
  return (
    <Container
      flex={1}
      jc={"center"}
      ai={"center"}
      style={{
        justifyContent: "flex-end",
        alignItems: "flex-start",
      }}
    >
      {/* <i className="bi bi-discord" style={{
         color: "#6A5ACD",
         textShadow: "1 1 1 #ccc",
         fontSize: "2em",
   }}></i> */}
    </Container>
  );
};

export default SideContainer;
