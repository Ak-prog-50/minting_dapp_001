import "./modalStyles.css";

const Modal = ({ setShowModal }) => {
  return (
    <>
      <div id="id01" className="modal">
        <span
          onClick={() => setShowModal(false)}
          className="close"
          title="Close Modal"
        >
          &times;
        </span>
        <div className="modal-content">
          <div className="container">
            <h1>Are you sure you want to reveal your NFT collection?</h1>

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
                onClick={() => setShowModal(false)}
              >
                Reveal
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Modal;
