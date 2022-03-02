import revealNFTs from "../../backEndCalls/revealNFTs";
import { SpacerSmall } from "../../styles/globalStyles";
import "./modalStyles.css";

const Modal = ({
  setShowModal,
  blockchain,
  isRevealed,
}) => {
  return (
    <>
      <div id="id01" className="modal">
        <div className="modal-content">
          <div className="container">
            {!isRevealed ? (
              <h1>Are you sure you want to reveal your NFT collection?</h1>
            ) : (
              <div className="isRevealedContainer">
                <h1>You have already revealed</h1>
                <SpacerSmall />
                <span
                  onClick={() => setShowModal(false)}
                  className="close"
                  title="Close Modal"
                >
                  &times;
                </span>
              </div>
            )}

            {!isRevealed && (
              <div className="clearfix">
                <button
                  type="button"
                  className="cancelbtn"
                  onClick={() => setShowModal(false)}
                >
                  Cancel
                </button>
                <button
                  type="button"
                  className="deletebtn"
                  onClick={() => {
                    setShowModal(false);
                    revealNFTs(blockchain);
                  }}
                >
                  Reveal
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Modal;
