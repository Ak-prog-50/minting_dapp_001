const isOwner = (blockchain, CONFIG, setIsOwner) => {
  if (blockchain.smartContract) {
    let gasLimit = CONFIG.GAS_LIMIT;
    blockchain.smartContract.methods
      .owner()
      .call({
        gasLimit: String(gasLimit),
        from: blockchain.account,
      })
      .then((result) => {
        setIsOwner((result.toLowerCase() === blockchain.account.toLowerCase()))
      })
      .catch((err) =>
        console.error("Error Occured When Checking Ownership.", err)
      );
  } else {
    console.error("Trying to call contract while not connected to the BlockChain.");
    return;
  }
};

export default isOwner;
