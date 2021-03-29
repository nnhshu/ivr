import React, { useEffect } from "react";

// MetisMenu
import MetisMenu from "metismenujs";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink as Link
} from "react-router-dom";


const SidebarContent = (props) => {

  return (
    <React.Fragment>
      <div id="sidebar-menu">
        <ul className="metismenu list-unstyled" id="side-menu">
          <li>
            <Link to="/telephony" className="waves-effect">
              <i className="fas fa-genderless"/>
              <span>Telephony</span>
            </Link>
          </li>
          <li>
            <Link to="/scripts" className="waves-effect">
            <i className="fas fa-genderless"/>
              <span>Scripts</span>
            </Link>
          </li>
          <li>
            <Link to="/schedules" className="waves-effect">
              <i className="fas fa-genderless"/>  
              <span>Schedules</span>
            </Link>
          </li>
          <li>
            <Link to="/messeage" className="waves-effect">
              <i className="fas fa-genderless"/>  
              <span>Messages</span>
            </Link>
          </li>
          <li>
            <Link to="/statistics" className="waves-effect">
              <i className="fas fa-genderless"/>  
              <span>Statistics</span>
            </Link>
          </li>
        </ul>
      </div>
    </React.Fragment>
  )
}


export default SidebarContent;
