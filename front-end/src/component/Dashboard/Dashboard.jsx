import React from 'react';
import { getSessionCookie } from "../../Session";
import WasherDashboard from "./WasherDashboard";

const Dashboard = (props) => {
    const session = getSessionCookie();
    console.log("session", session);
    
    if (session.userType === "WASHER") {
        return <WasherDashboard />
    } else if (session.userType === "WASHEE") {
        return null
    }
    else return null;
}
export default Dashboard;