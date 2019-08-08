import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import './Demo.css';

//React has two approaches 1:Functional Component,2:Class Component 

//React Functional Component Approach

const Demo=({name}) => {   //must pass reserv word "props" or you can directly pass props attribute from parrent like "{name}"
                   //in functional approach change props like "{this.props.name}" to "{props.name}"
                   //if you are using "const Demo=({name})" then use only {name} in the div's or if you are using "const Demo=(props)" then use {props.name} in div's.
                return <div className="maindiv-style">
                           <h1> Hello {name} ...! </h1>  
                           <p> Welcome to my channel :) </p>
	                     </div> 
             
} 


///React Class Component Approach
/* class Demo extends Component{

	render(){

    	return <div className="maindiv-style">
                    <h1> Hello {this.props.name} ...! </h1>
                    <p> Welcome to my channel :) </p>
	            </div> 
	}

} */

export default Demo;