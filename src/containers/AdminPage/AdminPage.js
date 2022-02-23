import { useState, useEffect } from "react";
import isOwnerFunction from "../../backEndCalls/isOwner";
import { useDispatch, useSelector } from "react-redux";
import NotFound from "../NotFound";
import { connect } from "../../redux/blockchain/blockchainActions";
import * as s from "../../styles/globalStyles";
import "./AdminPage.css";
import Modal from "../../components/Modal/Modal";

const AdminPage = () => {
  const dispatch = useDispatch();
  const blockchain = useSelector((state) => state.blockchain);
  const [isOwner, setIsOwner] = useState(false);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    isOwnerFunction(blockchain, setIsOwner);
    console.log("isOwner", isOwner);
  }, [isOwner, setIsOwner, blockchain.smartContract]);

  return (
    <s.Screen>
      <>
        <div id="container">
          {blockchain.account === "" || blockchain.smartContract === null ? (
            <>
              <s.SpacerSmall />

              <button
                className="button"
                onClick={(e) => {
                  e.preventDefault();
                  dispatch(connect(blockchain, setIsOwner));
                }}
              >
                CONNECT
              </button>

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
                <button className="button"
                  onClick={(e) => {
                    e.preventDefault();
                    setShowModal(true)
                  }}
                >
                  REVEAL COLLECTION
                </button>
              </s.Container>
            </>
          )}

          {showModal && <Modal setShowModal={setShowModal} blockchain={blockchain} />}
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

