import React from "react";
import Cookies from "js-cookie";

export const setSessionCookie = (session) => {
    console.log(session);
    Cookies.remove("session");
    Cookies.set("session", session, { expires: 14 });
  };
  
  export const getSessionCookie = () => {
    const sessionCookie = Cookies.get("session");
    console.log(sessionCookie);
    if (sessionCookie === undefined) {
      return {};
    } else {
      // return JSON.parse(sessionCookie);
      return sessionCookie;
    }
  };
  
  export const SessionContext = React.createContext(getSessionCookie());
