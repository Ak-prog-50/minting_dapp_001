import { useState, useEffect } from "react";
import { Route, Redirect, Switch } from "react-router-dom";
import App from "./App";
import AdminPage from "./containers/AdminPage";
import NotFound from "./containers/NotFound";
import isOwnerFunction from "./backEndCalls/isOwner";
import { useSelector } from "react-redux";

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
      <Switch>
        <Route path={"/"} component={App} exact/>
        <Route path={"/admin"} component={AdminPage} exact/>
        {/* <ProtectedRoute path={"/admin"} component={AdminPage} isOwner={isOwner}/> */}
        <Route component={NotFound} />
      </Switch>
  );
};

export default Routes;
