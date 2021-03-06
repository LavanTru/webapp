import React from "react";
import Cookies from "js-cookie";

// Session.js holds methods that are related to saving and retrieving the login data to cookies

export const setSessionCookie = (session) => {
    Cookies.remove("session");
    Cookies.set("session", session, { expires: 14 });
  };
  
  export const getSessionCookie = () => {
    const sessionCookie = Cookies.get("session");
    // return JSON.parse(sessionCookie);

    // below version is supposed to make handling the empty session better, but did not work
    if (sessionCookie === undefined) {
      return undefined;
    } else {
      return JSON.parse(sessionCookie);
    }
  };
  export const removeSessionCookie = () =>{
    Cookies.remove("session");
  }
  
  export const SessionContext = React.createContext(getSessionCookie());
