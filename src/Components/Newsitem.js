import React from 'react'

export default function Newsitem(props) {
  return (
    <div className="card" style={{color:"blue" ,width:"20rem" ,display:"block",height:"500px"}}>
    <img className="card-img-top" src= { props.imageurl?props.imageurl:"https://source.unsplash.com/random"}  style={{height:"200px"}} />
    <div className="card-body">
      <div style={{height:"100px",overflow:"hidden"}}>  <h5 className="card-title">{props.title}</h5></div>
      <div style={{height:"150px",overflow:"hidden"}}> <p className="card-text">{props.description}</p> </div>
      
      <a href={props.newsurl} target="_blank"className="btn btn-primary"  style={{position:"absolute", bottom:"2px" ,right:"2px"}}>Read More </a>
    </div>
  </div>
   
  )
}



  