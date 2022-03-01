import { useContext } from "react";
import { AppContext } from "../../state/context/ApplicationContext/AppContextProvider";
import "./stickyNotification.css";

const StickyNotification = () => {
  const {CONFIG} = useContext(AppContext)
  return (
    <div id="notification-bar">
      <div className="container">
        <div id="main-text">
          <p className="countdown-text">
            <a href={CONFIG.MARKETPLACE_LINK} id="main-link" target={"_blank"}>
              View Collection at {CONFIG.MARKETPLACE}
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default StickyNotification;
