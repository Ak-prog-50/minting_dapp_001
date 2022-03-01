import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import NotFound from "../NotFound";
import { connect } from "../../state/redux/blockchain/blockchainActions";
import * as s from "../../styles/globalStyles";
import "./AdminPage.css";
import Modal from "../../components/Modal/Modal";

const AdminPage = () => {
  const dispatch = useDispatch();
  const blockchain = useSelector((state) => state.blockchain);
  const [showModal, setShowModal] = useState(false);

  // useEffect(() => {
  //   isOwnerFunction(blockchain, setIsOwner);
  //   console.log("isOwner", isOwner);
  // }, [isOwner, setIsOwner, blockchain.smartContract]);

  return (
    <s.Screen>
      <>
        <div id="container">

          <div id="text-container">
            <s.TextTitle style={{textAlign:"center"}}>Revealing will incur gas fees.</s.TextTitle>
            <s.TextSubTitle
              style={{
                color: "var(--danger)",
                textAlign:"center"
              }}
            >
              *Make Sure You are logged in as the owner of the smart contract
              before revealing!
            </s.TextSubTitle>
          </div>

          {blockchain.account === "" || blockchain.smartContract === null ? (
            <>
              <s.SpacerMedium />

              <div className="button-container">
                <button
                  className="button"
                  onClick={(e) => {
                    e.preventDefault();
                    dispatch(connect(blockchain));
                  }}
                >
                  CONNECT
                </button>
              </div>

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
            </>
          ) : (
            <>
              <s.SpacerMedium />
              <s.SpacerSmall />
              <s.Container ai={"center"} jc={"center"} fd={"row"}>
                <div className="button-container">
                  <button
                    className="button"
                    onClick={(e) => {
                      e.preventDefault();
                      setShowModal(true);
                    }}
                  >
                    REVEAL COLLECTION
                  </button>
                </div>
              </s.Container>
            </>
          )}

          {showModal && (
            <Modal setShowModal={setShowModal} blockchain={blockchain} />
          )}
        </div>

        <div className="image-div">
          <img
            src="config/images/logo.png"
            alt="Logo"
            className="responsive"
            width="600"
            height="400"
          />
        </div>
      </>
    </s.Screen>
  );
};

export default AdminPage;
