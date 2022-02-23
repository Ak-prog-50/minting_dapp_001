const revealNFTs = ( blockchain) => {
  if (blockchain.smartContract) {
    let gasLimit = 285000;
    blockchain.smartContract.methods
      .reveal()
      .send({
        gasLimit: String(gasLimit),
        from: blockchain.account,
      })
      .then((receipt) => {
        console.log(receipt, "revealed");
      })
      .catch((err) => console.log("Error When Revealing", err));
  } else {
    console.error("Trying to call contract while not connected to the BlockChain.");
    return;
  }
};

export default revealNFTs;
