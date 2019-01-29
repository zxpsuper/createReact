import React from "react";
import {
  Route
  // Redirect
} from "react-router-dom";
const RouteWithSubRoutes = route => (
  <Route
    exact={route.exact}
    path={route.path}
    render={props => {
      console.log(props);
      // if (props.holdUp) {
      //   return <Redirect to={{
      //             pathname: '/login',
      //             state: { from: props.location }
      //           }}/>
      // }
      // pass the sub-routes down to keep nesting
      return <route.component strict {...props} routes={route.routes} />;
    }}
  />
);
export default RouteWithSubRoutes;
