import React ,{Component}from 'react';
import  './Avatar.css';
import Avatarlist from './Avatarlist';
import 'tachyons';

//by using class component

class Avatarclass extends Component{

    constructor(){

          super(); //used for access the properties of main class like component class
          this.state = { //use of state

            name: "Welcome To Avatar World"
          }

    }    
    namechange(){

      this.setState({

        name: "Welcome To My Channel"
      })

    }
     
    render(){


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

             return <Avatarlist key={i} id={avatarlistarray[i].id} name={avatarlistarray[i].name} work={avatarlistarray[i].work} />

  })
  return (
       <div className="tc main-page"> 
         <h1>{this.state.name}</h1>
         <div className="db">

                   {avatatarraycard}

          </div>

           <button onClick = { () => this.namechange() } className="f6 link dim ph3 pv2 mb2 dib white pointer smb-btn"> Subscribe </button>
         </div>
         )
         

    }
  
}

export default Avatarclass;




		      