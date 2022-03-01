import React, {useEffect} from "react";
import { useContext } from "react";
import { AppContext } from "../state/context/ApplicationContext/AppContextProvider";
import { getConfig } from "../utils/applicationFunctions";

const NotFound = () => {
  const {SET_CONFIG} = useContext(AppContext)

  useEffect(() => {
    getConfig(SET_CONFIG);
  }, []);

  return (
    <div
      style={{
        display: "flex",
        height: "50vh",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <div
        style={{
          fontSize: "3rem",
        }}
      >
        404 : Page Not Found!
      </div>
    </div>
  );
};

export default NotFound;
