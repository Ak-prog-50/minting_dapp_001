import { useState, useEffect } from "react";
import isOwnerFunction from "../../backEndCalls/isOwner";
import { useDispatch, useSelector } from "react-redux";
import NotFound from "../NotFound";
import { connect } from "../../redux/blockchain/blockchainActions";
import { Screen } from "../../styles/globalStyles";
import "./AdminPage.css";

const AdminPage = () => {
  const dispatch = useDispatch();
  const blockchain = useSelector((state) => state.blockchain);
  const [isOwner, setIsOwner] = useState(false);

  useEffect(() => {
    isOwnerFunction(blockchain, setIsOwner);
    console.log("loggeed", isOwnerFunction(blockchain, setIsOwner), isOwner);
  }, [isOwner, setIsOwner]);

  return (
    <Screen>
      <div id="container">
        <button
          onClick={(e) => {
            e.preventDefault();
            dispatch(connect());
          }}
          className="button"
        >
          CONNECT
        </button>
      </div>
      {isOwner && <div>AdminPage</div>}
    </Screen>
  );
};

export default AdminPage;