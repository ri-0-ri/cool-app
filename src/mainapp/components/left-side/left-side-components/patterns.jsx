import React, {useState} from "react";

export const Patterns = () =>{
  const [items, setItems] = useState([
    { id: 1, text: 'Checker Board' },
    { id: 2, text: 'Checkerboard Cube' },
    { id: 3, text: 'Plus Minus' },
    { id: 4, text: 'Gift Box' },
    { id: 5, text: 'Cross' },
    { id: 6, text: '4 Crosses' },
    { id: 7, text: 'Cube in Cube' },
    { id: 8, text: 'Cube in Cube in Cube' },
    { id: 9, text: '4 Spots' },
    { id: 10, text: '6 Sopts' }

  ]);

  function addItem() {
    setItems([...items, { id: items.length + 1, text: `Item ${items.length + 1}` }]);
  }

  
  return(
    <div>
      <p className="patterns">
        Patterns
      </p>
      <a href="" className="patternslist">
        <ul className="ul" id="ul">
          {items.map(item => (
            <li key={item.id}>{item.text}</li>
          ))}
        </ul>
      </a> 
    </div>

  );
};

