import React from "react";
import {Contactus} from "./left-side-components/contactus"
import {Logo} from "./left-side-components/logo"
import {Patterns} from "./left-side-components/patterns"

export const LeftPane = () =>{
  return(
    <div className="left-pane">
      <Logo/>
      <Patterns/>
      <Contactus/>
    </div>
  );
};

