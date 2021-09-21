import React from 'react';
import { Link } from 'react-router-dom';

import './NavBar.css';

const NavBar = () => {
  return (
    <div>
      <h5>NAVBAR</h5>
      <ul>
        <li><Link to="/BarChart">BarChart</Link></li>
        <li><Link to="/StackedChart">StackedChart</Link></li>
     	</ul>
      <hr />
    </div>
  );
};

export default NavBar;