const checkRevealed = (blockchain, setisRevealed, CONFIG) => {
    if (blockchain.smartContract) {
      let gasLimit = CONFIG.GAS_LIMIT;
      blockchain.smartContract.methods
        .revealed()
        .call({
          gasLimit: String(gasLimit),
          from: blockchain.account,
        })
        .then((result) => {
          setisRevealed(result)
        })
        .catch((err) =>
          console.error("Error Occured When Checking Revealed.", err)
        );
    } else {
      console.error("Trying to call contract while not connected to the BlockChain.");
      return;
    }
  };
  
  export default checkRevealed;