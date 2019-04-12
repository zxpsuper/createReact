import React from 'react';
import {
    Route,
    // Redirect
} from 'react-router-dom';
const RouteWithSubRoutes = route => (
    <Route
        exact={route.exact}
        path={route.path}
        render={props => {
            return <route.component strict {...props} routes={route.routes} />;
        }}
    />
);
export default RouteWithSubRoutes;
