import React from "react";
import "../../App.css"

export const RightPane = ({currentItem}) =>{
  return(
    <div className="right-pane">
      <div className="PatternTitile">
        <p>{currentItem.text}</p>
      </div>
      <div className="inst">
      <>{currentItem.array?.map((ingredient, index) => <li key={index}>{ingredient}</li>)}</>

      </div>
    </div>

  );
};
