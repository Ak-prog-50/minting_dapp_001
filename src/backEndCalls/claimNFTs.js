const claimNFTs = (CONFIG, setClaimingNft, setFeedback, dispatch, fetchData, blockchain, mintAmount) => {
  let cost = CONFIG.WEI_COST;
  let gasLimit = CONFIG.GAS_LIMIT;
  let totalCostWei = String(cost * mintAmount);
  let totalGasLimit = String(gasLimit * mintAmount);
  console.log("Cost: ", totalCostWei);
  console.log("Gas limit: ", totalGasLimit);
  setFeedback(`Minting your ${CONFIG.NFT_NAME}...`);
  setClaimingNft(true);
  blockchain.smartContract.methods
    .mint(mintAmount)
    .send({
      gasLimit: String(totalGasLimit),
      to: CONFIG.CONTRACT_ADDRESS,
      from: blockchain.account,
      value: totalCostWei,
    })
    .once("error", (err) => {
      console.log(err);
      setFeedback("Sorry, something went wrong please try again later.");
      setClaimingNft(false);
    })
    .then((receipt) => {
      console.log(receipt);
      setFeedback(
        `WOW, the ${CONFIG.NFT_NAME} is yours! go visit Opensea.io to view it.`
      );
      setClaimingNft(false);
      dispatch(fetchData(blockchain.account));
    });
};

export default claimNFTs;
