import React from 'react';
import { getSessionCookie } from "../../Session";
import WasherDashboard from "./WasherDashboard";
import WasheeDashboard from "./WasheeDashboard";

// Dashboard container for both Washers and Washees
const Dashboard = (props) => {
    const session = getSessionCookie();
    
    if (session.userType === "WASHER") {
        return <WasherDashboard history={props.history} washerId={session.id}/>
    } else if (session.userType === "WASHEE") {
        return <WasheeDashboard />
    }
    else return null;
}
export default Dashboard;