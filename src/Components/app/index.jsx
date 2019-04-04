import React from 'react';
import { NavLink } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import './style.css';

export default class App extends React.Component{
	constructor(props){
		super(props);
		this.handleClick = this.handleClick.bind(this);
	}
	handleClick(){
	  const x = document.getElementById("myTopnav");
	  if (x.className === "topnav") {
	    x.className += " responsive";
	  } else {
	    x.className = "topnav";
	  }
	}
	render(){
		return(
			<div className="nav-wrapper">
					<div className="topnav" id="myTopnav">
						<div className="container">
						  <NavLink to="/home">Home</NavLink>
						  <NavLink to="/about">About</NavLink>
						  <NavLink to="/feat">Feat</NavLink>
						  <NavLink to="!#">Contact Us</NavLink>
						  <a href="javascript:void(0);" className="icon" onClick={this.handleClick}>
						    <i className="fa fa-bars"></i>
						  </a>
						</div>
				</div>
			</div>
		) 
	}
}