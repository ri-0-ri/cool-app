import React, {useState} from "react";
import "../../App.css"

export const LeftPane = ({handleClick}) =>{

    const [items] = useState([
      { id: 1, text: 'Checker Board', 
      array: ["U2 - Ux2", "D2 - Dx2", "F2 - Fx2", "B2 - Bx2", "L2 - Lx2", "R2 - Rx2"]},

      { id: 2, text: 'Checkerboard in Cube', 
      array: ["B - B", "D - D", "F' - Shift+F", "B' - Shift+B", "D - D", "L2 - Lx2", "U - U", "L - L", 
      "U' - Shift+U", "B - B", "D' - Shift+D", "R - R", "B - B", "R - R", "D' - Shift+D", "R - R", 
      "L' - Shift+L", "F - F", "U2 - Ux2", "D - D" ]},

      { id: 3, text: 'Plus Minus', 
      array: ["U2 - Ux2", "R2 - Rx2", "L2 - Lx2", "U2 - Ux2", "R2 - Rx2", "L2 - Lx2"]},

      { id: 4, text: 'Gift Box', 
      array: ["U - U", "B2 - Bx2", "R2 - Rx2", "B2 - Bx2", "L2 - Lx2", "F2 - Fx2", "R2 - Rx2", "D' - Shift+D", 
      "F2 - Fx2", "L2 - Lx2", "B - B", "F' - Shift+F", "L - L", "F2 - Fx2", "D - D", "U' - Shift+U", 
      "R2 - Rx2", "F' - Shift+F", "L' - Shift+L", "R' - Shift+R"]},

      { id: 5, text: 'Cross', 
      array: ["R2 - Rx2", "L' - Shift+L", "D - D", "F2 - Fx2", "R' - Shift+R", "D' - Shift+D", 
      "R' - Shift+R", "L - L", "U' - Shift+U", "D - D", "R - R" ,"D - D" ,"B2 - Bx2", "R' - Shift+R", 
      "U - U", "D2 - Dx2"]},

      { id: 6, text: '4 Crosses', 
      array: ["U2 - UX2", "R2 - Rx2", "L2 - Lx2", "F2 - Fx2", "B2 - Bx2", "D2 - Dx2", "L2 - Lx2", 
      "R2 - Rx2", "F2 - Fx2", "B2 - Bx2"]},

      { id: 7, text: 'Cube in Cube', 
      array: ["F - F", "L - L", "F - F", "U' - Shift+U", "R - R", "U - U", "F2 - Fx2",
      "L2 - Lx2", "U' - Shift+U", "L' - Shift+L", "B - B", "D' - Shift+D", 
      "B' - Shift+B", "L2 - Lx2", "U - U"]},

      { id: 8, text: 'Cube in Cube in Cube', 
      array: ["U' - Shift+U", "L' - Shift+L", "U' - Shift+U", "F' - Shift+F", 
      "R2 - Rx2", "B' - Shift+B", "R - R", "F - F", "U - U", "B2 - Bx2", "U - U", 
      "B' - Shift+B", "L - L", "U' - Shift+U", "F - F", "U - U", "R - R", "F' - Shift+F"]},

      { id: 9, text: '4 Spots', 
      array: ["F2 - FX2", "B2 - Bx2", "U - U", "D' - Shift+D", "R2 - Rx2", "L2 - Lx2", 
      "U - U", "D' - Shift+D"] },

      { id: 10, text: '6 Sopts', 
      array: ["U - U", "D' - Shift+D", "R - R", "L' - Shift+L", "F - F", 
      "B' - Shift+B", "U - U", "D' - Shift+D"] }
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




