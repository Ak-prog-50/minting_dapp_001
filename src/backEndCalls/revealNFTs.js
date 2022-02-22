const revealNFTs = (setFeedback, blockchain, CONFIG) => {
  if (blockchain.smartContract) {
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
  } else {
    console.error("Trying to call contract while not connected to the BlockChain.");
    return;
  }
};

export default revealNFTs;
