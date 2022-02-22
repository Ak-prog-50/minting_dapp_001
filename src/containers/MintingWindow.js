const MintingWindow = () => {
  return (
    <>
      <s.Container
        flex={2}
        jc={"center"}
        ai={"center"}
        style={{
          backgroundColor: "var(--accent)",
          padding: 24,
          borderRadius: 24,
          border: "4px dashed var(--secondary)",
          boxShadow: "0px 5px 11px 2px rgba(0,0,0,0.7)",
        }}
      >
        <s.TextTitle
          style={{
            textAlign: "center",
            fontSize: 50,
            fontWeight: "bold",
            color: "var(--accent-text)",
          }}
        >
          {data.totalSupply} / {CONFIG.MAX_SUPPLY}
        </s.TextTitle>
        <s.TextDescription
          style={{
            textAlign: "center",
            color: "var(--primary-text)",
          }}
        >
          <StyledLink target={"_blank"} href={CONFIG.SCAN_LINK}>
            {truncate(CONFIG.CONTRACT_ADDRESS, 15)}
          </StyledLink>
        </s.TextDescription>
        <s.SpacerSmall />
        {Number(data.totalSupply) >= CONFIG.MAX_SUPPLY ? (
          <>
            <s.TextTitle
              style={{ textAlign: "center", color: "var(--accent-text)" }}
            >
              The sale has ended.
            </s.TextTitle>
            <s.TextDescription
              style={{ textAlign: "center", color: "var(--accent-text)" }}
            >
              You can still find {CONFIG.NFT_NAME} on
            </s.TextDescription>
            <s.SpacerSmall />
            <StyledLink target={"_blank"} href={CONFIG.MARKETPLACE_LINK}>
              {CONFIG.MARKETPLACE}
            </StyledLink>
          </>
        ) : (
          <>
            <s.TextTitle
              style={{ textAlign: "center", color: "var(--accent-text)" }}
            >
              1 {CONFIG.SYMBOL} costs {CONFIG.DISPLAY_COST}{" "}
              {CONFIG.NETWORK.SYMBOL}.
            </s.TextTitle>
            <s.SpacerXSmall />
            <s.TextDescription
              style={{ textAlign: "center", color: "var(--accent-text)" }}
            >
              Excluding gas fees.
            </s.TextDescription>
            <s.SpacerSmall />
            {blockchain.account === "" || blockchain.smartContract === null ? (
              <s.Container ai={"center"} jc={"center"}>
                <s.TextDescription
                  style={{
                    textAlign: "center",
                    color: "var(--accent-text)",
                  }}
                >
                  Connect to the {CONFIG.NETWORK.NAME} network
                </s.TextDescription>
                <s.SpacerSmall />
                <StyledButton
                  onClick={(e) => {
                    e.preventDefault();
                    dispatch(connect());
                    getData();
                  }}
                >
                  CONNECT
                </StyledButton>
                {blockchain.errorMsg !== "" ? (
                  <>
                    <s.SpacerSmall />
                    <s.TextDescription
                      style={{
                        textAlign: "center",
                        color: "var(--accent-text)",
                      }}
                    >
                      {blockchain.errorMsg}
                    </s.TextDescription>
                  </>
                ) : null}
              </s.Container>
            ) : (
              <>
                <s.TextDescription
                  style={{
                    textAlign: "center",
                    color: "var(--accent-text)",
                  }}
                >
                  {feedback}
                </s.TextDescription>
                <s.SpacerMedium />
                <s.Container ai={"center"} jc={"center"} fd={"row"}>
                  <StyledRoundButton
                    style={{ lineHeight: 0.4 }}
                    disabled={claimingNft ? 1 : 0}
                    onClick={(e) => {
                      e.preventDefault();
                      decrementMintAmount();
                    }}
                  >
                    -
                  </StyledRoundButton>
                  <s.SpacerMedium />
                  <s.TextDescription
                    style={{
                      textAlign: "center",
                      color: "var(--accent-text)",
                    }}
                  >
                    {mintAmount}
                  </s.TextDescription>
                  <s.SpacerMedium />
                  <StyledRoundButton
                    disabled={claimingNft ? 1 : 0}
                    onClick={(e) => {
                      e.preventDefault();
                      incrementMintAmount();
                    }}
                  >
                    +
                  </StyledRoundButton>
                </s.Container>
                <s.SpacerSmall />
                <s.Container ai={"center"} jc={"center"} fd={"row"}>
                  <StyledButton
                    disabled={claimingNft ? 1 : 0}
                    onClick={(e) => {
                      e.preventDefault();
                      claimNFTs(
                        CONFIG,
                        setClaimingNft,
                        setFeedback,
                        dispatch,
                        fetchData,
                        blockchain,
                        mintAmount
                      );
                      getData();
                    }}
                  >
                    {claimingNft ? "BUSY" : "BUY"}
                  </StyledButton>
                </s.Container>
              </>
            )}
          </>
        )}
        <s.SpacerMedium />
      </s.Container>
    </>
  );
};

export default MintingWindow;
