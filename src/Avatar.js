import React from 'react';
import  './Avatar.css';
import Avatarlist from './Avatarlist';
import 'tachyons';

//by using functinal component

const Avatar = (props) => {


  const avatarlistarray =[

              {
              	id:1,
              	name:'Hasnain',
              	work:'Web Developer'
              },
              {
              	id:2,
              	name:'Mehmood',
              	work:'Web Designer'
              },
              {
              	id:3,
              	name:'Noor',
              	work:'Web Developer'
              },
              {
              	id:4,
              	name:'Hassan',
              	work:'Web Designer'
              }
  ]

  //map function works as it as foreach loop
  const avatatarraycard = avatarlistarray.map( (avatarcard,i) => {

  	         return <Avatarlist key = {i} id={avatarlistarray[i].id} name={avatarlistarray[i].name} work={avatarlistarray[i].work} />

  })
	return (
		   <div className="tc main-page"> 
		     <h1>Welcome To Avatar World</h1>
		     <div className="db">

                   {avatatarraycard}

		      </div>

	         <button className="f6 link dim ph3 pv2 mb2 dib white pointer smb-btn"> Subscribe </button>
	       </div>
	       )
}

export default Avatar;




		      /* 
		      <Avatarlist id={avatarlistarray[0].id} name={avatarlistarray[0].name} work={avatarlistarray[0].work} />
		      <Avatarlist id={avatarlistarray[1].id} name={avatarlistarray[1].name} work={avatarlistarray[1].work} />
		      <Avatarlist id={avatarlistarray[1].id} name={avatarlistarray[2].name} work={avatarlistarray[2].work} />
		      <Avatarlist id={avatarlistarray[3].id} name={avatarlistarray[3].name} work={avatarlistarray[3].work} />
		      */