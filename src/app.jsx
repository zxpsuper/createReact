import React from "react";
import { HashRouter as Router } from "react-router-dom";
import routes from "./router/index";
import { Route, Redirect } from "react-router-dom";
import "./index.less";
import RouteWithSubRoutes from "./RouteWithSubRoutes";
const Home = () => <div />;
const App = () => (
  <Router>
    <div>
      {/* <Redirect from="/" to="/introduce" /> */}
      {routes.map((route, i) => {
        return <RouteWithSubRoutes key={i} {...route} />;
      })}
    </div>
  </Router>
);

export default App;
