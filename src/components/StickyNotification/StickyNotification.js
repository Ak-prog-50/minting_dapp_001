import "./stickyNotification.css";

const StickyNotification = () => {
  return (
    <div id="notification-bar">
      <div className="container">
        <div id="main-text">
          <p className="countdown-text">
            <a href="https://testnets.opensea.io/collection/uglyeyes" id="main-link" target={"_blank"}>
              View Collection at Opensea.io
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default StickyNotification;