import React from 'react';
import './App.css';
import { Link } from 'react-router-dom';
 
function Nav(params) {
	const navStyle = {
		color: 'white'
	}; 

	return(
		<nav>
			<h3>logo</h3>
			<ul className="nav-links">
				<Link style={navStyle} to="/about">
					<li>About</li>
				</Link>
				<Link style={navStyle} to="/shop">
					<li>Shop</li>
				</Link>
				<Link style={navStyle} to="/">
					<li>Home</li>
				</Link>
			</ul>
		</nav>
	);
	
}

export default Nav;