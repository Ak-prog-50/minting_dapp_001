import React, { createContext, useState } from "react";

const initialState = {
  claimingNft: false,
  feedback: `Click buy to mint your NFT`,
  mintAmount: 1,
  isRevealed: false,
  CONFIG: {
    CONTRACT_ADDRESS: "",
    SCAN_LINK: "",
    NETWORK: {
      NAME: "",
      SYMBOL: "",
      ID: 0,
    },
    NFT_NAME: "",
    SYMBOL: "",
    MAX_SUPPLY: 1,
    WEI_COST: 0,
    DISPLAY_COST: 0,
    GAS_LIMIT: 0,
    MARKETPLACE: "",
    MARKETPLACE_LINK: "",
    SHOW_BACKGROUND: false,
  },
};

export const AppContext = createContext(initialState);

const AppContextProvider = (props) => {
  const [claimingNft, setClaimingNft] = useState(initialState.claimingNft);
  const [feedback, setFeedback] = useState(initialState.feedback);
  const [mintAmount, setMintAmount] = useState(initialState.mintAmount);
  const [CONFIG, SET_CONFIG] = useState(initialState.CONFIG);
  const [isRevealed, setIsRevealed] = useState(initialState.isRevealed);

  return (
    <AppContext.Provider
      value={{
        claimingNft,
        setClaimingNft,
        feedback,
        setFeedback,
        mintAmount,
        setMintAmount,
        CONFIG,
        SET_CONFIG,
        isRevealed,
        setIsRevealed
      }}
    >
      <>{props.children}</>
    </AppContext.Provider>
  );
};

export default AppContextProvider;
