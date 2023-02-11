import React, {useState} from "react";
import { LeftPane } from "./left-side/left-pane";
import { MiddlePane } from "./middle/middle-pane";
import { RightPane } from "./right-side/right-pane";
import '../../../src/App.css'
import { Patterns } from "./left-side/left-side-components/patterns";

export const Components = () =>{
  const[currentItem, setCurrentItem] = useState({})

  const handleClick = (item) => {
    setCurrentItem(item)
  }

  return(
    <main>
      <LeftPane />
      <Patterns handleClick={handleClick}/>
      <MiddlePane/>
      <RightPane currentItem={currentItem}/>
      </main>
  );
};
