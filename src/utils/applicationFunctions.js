import { fetchData } from "../state/redux/data/dataActions";

export const getData = (blockchain, dispatch) => {
  if (blockchain.account !== "" && blockchain.smartContract !== null) {
    dispatch(fetchData(blockchain.account));
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
