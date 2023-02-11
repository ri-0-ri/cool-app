import React, {useState} from "react";

import '../../../../../src/App.css'

export const Patterns = ({handleClick}) =>
{
  const [items] = useState([
    { id: 1, text: 'Checker Board', array: ['a', 'r', 'R', '..']},
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

  );
};

