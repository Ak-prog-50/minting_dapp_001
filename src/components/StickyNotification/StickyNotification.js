import "./stickyNotification.css";

const StickyNotification = () => {
  return (
    <div id="notification-bar">
      <div className="container">
        <div id="main-text">
          <p>
            <strong>00.30.43 to the Big Reveal !</strong>
          </p>  
          <a href="https://testnets.opensea.io/collection/uglyeyes" id="main-link" target={"_blank"}>
            View Collection at Opensea.io
          </a>
        </div>
      </div>
    </div>
  );
};

export default StickyNotification;
