import React from 'react'
import Main from '../components/layouts/Main';
import Blank from '../components/layouts/Blank';

import MainView from '../views/Main';
import MinorView from '../views/Minor';
import DatasourceView from '../views/Datasource';
import ModalListView from '../views/charts/ModalList';
import ChartListView from '../views/charts/ChartList';
import DashboardView from '../views/Dashboard';
import SqlToolsView from '../views/SqlTools';
import MyviewView from '../views/Myview';


import { Route, Router, IndexRedirect, browserHistory} from 'react-router';

export default (
    <Router history={browserHistory}>
        <Route path="/" component={Main}>
            <IndexRedirect to="/main" />
            <Route path="main" component={MainView}> </Route>
            <Route path="minor" component={MinorView}> </Route>
            <Route path="datasource" component={DatasourceView}></Route>
            <Route>
                <IndexRedirect to="/modalList" />
                <Route path="modalList" component={ModalListView}></Route>
                <Route path="chartList" component={ChartListView}></Route>
            </Route>
            <Route path="dashboard" component={DashboardView}></Route>
            <Route path="sqlTools" component={SqlToolsView}></Route>
            <Route path="myview" component={MyviewView}></Route>
        </Route>
    </Router>

);