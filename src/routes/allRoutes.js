import React from "react"
import { Redirect } from "react-router-dom"



// Telephony
import Telephony from "../pages/telephony"


const userRoutes = [
  { path: "/dashboard", component: Telephony },

  // this route should be at the end of all other routes
  { path: "/", exact: true, component: () => <Redirect to="/dashboard" /> },
];

export { userRoutes }
