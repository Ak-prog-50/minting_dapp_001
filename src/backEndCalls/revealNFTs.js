const revealNFTs = (setFeedback, blockchain, CONFIG) => {
  console.log("smartcon", blockchain);
  let gasLimit = CONFIG.GAS_LIMIT;
  blockchain.smartContract.methods
    .reveal()
    .send({
      gasLimit: String(gasLimit),
      from: blockchain.account,
    })
    .then((receipt) => {
      console.log(receipt);
      setFeedback(`You Revealed It!.`);
    })
    .catch((err) => console.log("Error When Revealing", err));
};

export default revealNFTs;
