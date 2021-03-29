import React from "react";

import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";

// Import Routes all

// Import scss
import "./assets/scss/theme.scss";
import '@devexpress/dx-react-grid-bootstrap4/dist/dx-react-grid-bootstrap4.css';


import Layout from "./components/VerticalLayout/index";
import Telephony from "./pages/telephony/telephony";
import TelephonyDetail from './pages/telephony/telephonyDetail';
import SchedulesDetail from './pages/schedules/schedulesDetail';
import Schedules from './pages/schedules/index';
import Messeage from './pages/messeage/index';
import Scripts from './pages/scripts/index';
import TriggerDetail from './pages/scripts/trigger-detail'; 
import Statistics from './pages/statistics/index'

function App() {
  return (
    <React.StrictMode>
    <Router>
        <Layout>
            <Switch>
                <Route exact path="/telephony">
                    <Telephony/>
                </Route>
                <Route exact path="/detail">
                    <TelephonyDetail/>
                </Route>
                <Route exact path="/schedules">
                    <Schedules/>
                </Route>
                <Route exact path="/schedules-detail">
                    <SchedulesDetail />
                </Route>
                <Route exact path="/messeage">
                    <Messeage />
                </Route>
                <Route exact path="/scripts">
                    <Scripts />
                </Route>
                <Route exact path="/scripts-trigger">
                    <TriggerDetail />
                </Route>
                <Route exact path="/statistics">
                    <Statistics />
                </Route>
            </Switch>
        </Layout>
      </Router>
    </React.StrictMode>
  );
}

export default App;
