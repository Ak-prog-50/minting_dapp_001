import { useState, useEffect } from "react";
import isOwnerFunction from "../backEndCalls/isOwner";
import { useDispatch, useSelector } from "react-redux";
import NotFound from "./NotFound";
import { connect } from "../redux/blockchain/blockchainActions";

const AdminPage = () => {
  const dispatch = useDispatch();
  const blockchain = useSelector((state) => state.blockchain);
  const [isOwner, setIsOwner] = useState(false);

  useEffect(() => {
    isOwnerFunction(blockchain, setIsOwner);
    console.log("loggeed", isOwnerFunction(blockchain, setIsOwner), isOwner);
  }, [isOwner, setIsOwner]);

  return (
    <>
      <button
        onClick={(e) => {
          e.preventDefault();
          dispatch(connect());
        }}
      >
        Connect
      </button>
      {isOwner && <div>AdminPage</div>}
    </>
  );
};

export default AdminPage;
