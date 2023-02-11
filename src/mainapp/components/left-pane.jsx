import React, {useState} from "react";
import "../../App.css"

export const LeftPane = ({handleClick}) =>{

    const [items] = useState([
      { id: 1, text: 'Checker Board', 
      array: ['U2 - Click U 2 times', 'U2 - Click U 2 times', 'F2 - Click F 2 times', 'B2 - Click B 2 times', 'L2 - Click L 2 times', 'R2 - Click R 2 times']},
      { id: 2, text: 'Checkerboard Cube', array: ['b', 'R', 'l', 'r'] },
      { id: 3, text: 'Plus Minus', array: ['c', 'R', 'r'] },
      { id: 4, text: 'Gift Box', array: ['d', 'R', ''] },
      { id: 5, text: 'Cross', array: ['e', 'R', '..'] },
      { id: 6, text: '4 Crosses', array: ['f', 'R', '..'] },
      { id: 7, text: 'Cube in Cube', array: ['g', 'R', '..'] },
      { id: 8, text: 'Cube in Cube in Cube', array: ['h', 'R', '..'] },
      { id: 9, text: '4 Spots', array: ['i', 'R', '..'] },
      { id: 10, text: '6 Sopts', array: ['j', 'R', '..'] }
  ]);



  return(
    <div className="left-pane">
      <div className="logonname">
      <a href="../src/mainapp/Home Page/homepage.html"><script>//cant remove a tag for now</script>
        <span className="img">
            <img src="../src/assets/logo.png" alt="Logo"></img>
        </span>
        <span className="RCS">
          RCS
        </span>
      </a>
    </div>



    
    <div>
      <p className="patterns">
        Patterns
      </p>
      
        <ul className="ul" id="ul">
          
        {items.map((item) => (
        <li key={item.id} onClick={() => handleClick(item)}>
          <a className="patternslist">{item.text}</a>
        </li>
      ))}
    </ul>
    </div>



      <div className="contactus">
      <a href="../src/mainapp/BusinessCard/BusinessCard.html" target="_blank">
        <button className="Contact">Contact Us</button>
      </a>
    </div>

    </div>
  );
};


