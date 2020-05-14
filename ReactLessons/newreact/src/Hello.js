import React, {Component} from 'react';
import './Hello.css';
class Hello extends Component{
	render(){
		return (
		// Use () when you want to return multiple tags as a single component
		// tc -> text center 
		// Here we are adding html in javascript. This is done by JSX a library of react bot. It has its own syntax but similar to html
		// But you can also use html syntax here, but sometimes it leads to errors.
		<div className='f1 tc'>
		<h1>Hello World</h1>
		<p>{this.props.greeting}</p>
		</div>
		);
	}
}
export default Hello;