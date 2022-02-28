import { fetchData } from "../state/redux/data/dataActions";

export const getData = (blockchain, dispatch) => {
    if (blockchain.account !== "" && blockchain.smartContract !== null) {
      dispatch(fetchData(blockchain.account));
    }
};