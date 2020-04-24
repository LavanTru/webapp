import React from "react";
import Cookies from "js-cookie";

export const setSessionCookie = (session) => {
    Cookies.remove("session");
    Cookies.set("session", session, { expires: 14 });
  };
  
  export const getSessionCookie = () => {
    const sessionCookie = Cookies.get("session");
    return JSON.parse(sessionCookie);

    // below version is supposed to make handling the empty session better, but did not work
    // if (sessionCookie === undefined) {
    //   return {};
    // } else {
    //   // return JSON.parse(sessionCookie);
    // }
  };
  export const removeSessionCookie = () =>{
    Cookies.remove("session");
  }
  
  export const SessionContext = React.createContext(getSessionCookie());
