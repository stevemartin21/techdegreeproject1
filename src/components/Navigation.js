import React from 'react';
import {NavLink } from 'react-router-dom';


const Navigation = () => (

	 <nav className="main-nav">
        <ul>
          <li><NavLink to='/search'>Search</NavLink></li>
          <li><NavLink to='/start/mountain'>Mountain</NavLink></li>
          <li><NavLink to='/start/river'>River</NavLink></li>
          <li><NavLink to='/start/lake'>Lake</NavLink></li>
          <li><NavLink to='/start/desert'>Desert</NavLink></li>
          <li><NavLink to='/start/forest'>Forest</NavLink></li>

        </ul>
      </nav>
	);

export default Navigation;