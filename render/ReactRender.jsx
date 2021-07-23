import ReactDOM from 'react-dom';
import React, { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom';
// import { Divider } from 'antd';

import 'antd/dist/antd.css';

const Login = lazy(() => import('./Login'));

const RouteExample = () => {
    if(window.location.pathname === '/') history.pushState(null, '/Login', '/Login')

    return (
        <Router basename={window.__POWERED_BY_QIANKUN__ ? '/' : '/'}>
            <Suspense fallback={null}>
                <Switch>
                    <Route path="/login" component={Login} />
                </Switch>
            </Suspense>
        </Router>
    );
};
/**
 * 渲染子应用
 */
function Render(props) {
  const { loading } = props;

  return (
    <>
      {loading && <h4 className="subapp-loading">Loading...</h4>}
      <button type="button" >
        Go home
      </button>
      <div id="subapp-viewport" />
    </>
  );
}

export default function render({ loading }) {
  const container = document.getElementById('subapp-container');
  ReactDOM.render(<RouteExample loading={loading} />, container);
}
