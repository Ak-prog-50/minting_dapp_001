import { useState, useEffect } from "react";
import { Route, Redirect, Switch } from "react-router-dom";
import MintPage from "./containers/MintPage/MintPage";
import AdminPage from "./containers/AdminPage/AdminPage";
import NotFound from "./containers/NotFound";
import { useSelector } from "react-redux";
import StickyNotification from "./components/StickyNotification/StickyNotification";

// const ProtectedRoute = ({ component: Component, isOwner }) => {
//   return (
//     <Route
//       render={(props) =>
//         isOwner ? <Component {...props} /> : <Redirect to={"/"} />
//       }
//     />
//   );
// };

const Routes = () => {
//   const blockchain = useSelector((state) => state.blockchain);
//   const [isOwner, setIsOwner] = useState(false)
//   useEffect(() => {
//     isOwnerFunction(blockchain, setIsOwner)
//     console.log("loggeed", isOwnerFunction(blockchain, setIsOwner), isOwner)
//   }, [isOwner, setIsOwner])
  
  return (
    <>
  <StickyNotification />
      <Switch>
        <Route path={"/"} component={MintPage} exact/>
        <Route path={"/admin"} component={AdminPage} exact/>
        {/* <ProtectedRoute path={"/admin"} component={AdminPage} isOwner={isOwner}/> */}
        <Route component={NotFound} />
      </Switch>
      </>
  );
};

export default Routes;
