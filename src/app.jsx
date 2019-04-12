import React from 'react';
import { HashRouter as Router, Redirect } from 'react-router-dom';
import routes from './router/index';
import RouteWithSubRoutes from './RouteWithSubRoutes';

import './index.less';
import DevTools from 'mobx-react-devtools'; // mobx调试工具

const App = () => (
    <Router>
        <div style={{ width: '800px', textAlign: 'center', margin: '0 auto' }}>
            <DevTools />
            {routes.map((route, i) => {
                return <RouteWithSubRoutes key={i} {...route} />;
            })}
        </div>
    </Router>
);

export default App;
