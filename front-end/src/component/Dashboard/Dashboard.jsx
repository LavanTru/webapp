import React from 'react';
import { getSessionCookie } from "../../Session";
import WasherDashboard from "./WasherDashboard";
import WasheeDashboard from "./WasheeDashboard";

const Dashboard = (props) => {
    const session = getSessionCookie();
    console.log("session", session);
    
    if (session.userType === "WASHER") {
        return <WasherDashboard />
    } else if (session.userType === "WASHEE") {
        return <WasheeDashboard />
    }
    else return null;
}
export default Dashboard;