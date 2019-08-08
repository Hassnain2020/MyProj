import React from 'react';

const Avatarlist = (props) => {

	return (
		   
		   <div className="avatarstyle ma3 bg-light-purple dib tc pa4 link black dim grow mw5 pa2 br2 ba b--black-10 shadow-4 pointer">
		     <img src={`https://joeschmoe.io/api/v1/male/${props.name}`} alt="Avatar" />
	         <h1 className=""> {props.name} </h1>
	         <p> {props.work} </p> 
	       </div> 
	       
	       )
}

export default Avatarlist;