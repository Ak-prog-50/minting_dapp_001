import { useState, useEffect } from "react";
import isOwnerFunction from "../../backEndCalls/isOwner";
import { useDispatch, useSelector } from "react-redux";
import NotFound from "../NotFound";
import { connect } from "../../redux/blockchain/blockchainActions";
import { Screen } from "../../styles/globalStyles";
import "./AdminPage.css";
import Modal from "../../components/Modal/Modal";

const AdminPage = () => {
  const dispatch = useDispatch();
  const blockchain = useSelector((state) => state.blockchain);
  const [isOwner, setIsOwner] = useState(false);
  const [showModal, setShowModal] = useState(false)

  useEffect(() => {
    isOwnerFunction(blockchain, setIsOwner);
    console.log("loggeed", isOwnerFunction(blockchain, setIsOwner), isOwner);
  }, [isOwner, setIsOwner]);

  return (
    <Screen>
      <>
      <div id="container">
        <button
          onClick={(e) => {
            e.preventDefault();
            dispatch(connect());
            setShowModal(true)
          }}
          className="button"
        >
          REVEAL COLLECTION
        </button>
        {showModal && <Modal setShowModal={setShowModal} />}
      </div>
      <div className="image-div">
      <img src="config/images/logo.png" alt="Logo" className="responsive" width="600" height="400" />
      </div>

      </>
      {isOwner && <div>AdminPage</div>}
    </Screen>
  );
};

export default AdminPage;
