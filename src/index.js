import React from 'react';
import ReactDOM from 'react-dom';
import "./styles/main.css";
import App from './App';
import {
	BrowserRouter as Router,
	// Route,
	// Link,
	// Redirect
  } from 'react-router-dom';

ReactDOM.render(
		<App />, 
	
document.getElementById('root'));

document.querySelectorAll('a').forEach(element => {
	element.addEventListener('click', (e)=>{
		e.preventDefault(); 
	})
});

window.addEventListener("resize", function() {
	window.innerWidth >= 900 ? document.querySelector('.Menu-contain').style.display= 'block' : '';
});