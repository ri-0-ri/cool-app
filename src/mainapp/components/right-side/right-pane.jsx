import React from "react";
import '../../../../src/App.css'

export const RightPane = ({currentItem}) =>{
  return(
    <div className="right-pane">
      <div className="PatternTitile">
        <p>{currentItem.text}</p>
      </div>
      <div className="inst">
      <>{currentItem.array?.map(ingredient => <li key={ingredient}>{ingredient}</li>)}</>

      </div>
    </div>

  );
};
