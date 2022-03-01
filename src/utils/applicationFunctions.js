import { fetchData } from "../state/redux/data/dataActions";

export const getData = (blockchain, dispatch) => {
  if (blockchain.account !== "" && blockchain.smartContract !== null) {
    dispatch(fetchData(blockchain.account)); //@dev blockchain.account parameter can be omitted (!should test further)
  }
};

export const decrementMintAmount = (mintAmount, setMintAmount) => {
  let newMintAmount = mintAmount - 1;
  if (newMintAmount < 1) {
    newMintAmount = 1;
  }
  setMintAmount(newMintAmount);
};

export const incrementMintAmount = (mintAmount, setMintAmount) => {
  let newMintAmount = mintAmount + 1;
  if (newMintAmount > 10) {
    newMintAmount = 10;
  }
  setMintAmount(newMintAmount);
};

export const getConfig = async (SET_CONFIG) => {
  const configResponse = await fetch("/config/config.json", {
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
  });
  const config = await configResponse.json();
  SET_CONFIG(config);
};