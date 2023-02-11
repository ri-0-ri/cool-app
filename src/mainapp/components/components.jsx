import React, {useState} from "react";
import {LeftPane} from "./left-pane";
import {RightPane} from "./right-pane";
import { MiddlePane } from "./middle-pane";
import "../../App.css"


export const Components = () =>{
  const[currentItem, setCurrentItem] = useState({})

  const handleClick = (item) => {
    setCurrentItem(item)
  }

  return(
    <main>
      <LeftPane handleClick={handleClick} />
      <MiddlePane/>
      <RightPane currentItem={currentItem}/>
      </main>
  );
};
