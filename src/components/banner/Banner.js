import React from 'react'
import {DATA} from "../../static/Static"
import "./Banner.css"


console.log(DATA);
function Banner() {
  return (
    <div>
<div className="banner">
    {
 DATA?.map((item,index)=> <div key={index} className="card">
    
     <img  className='photo' src={item.url} alt="" />
     <br />
     <p className='name'>{item.title}</p>
  
     <p className='text'>{item.text}</p>
   
     <button className='price'>{item.price}</button>


 </div>

 
 )
    }
  
</div>
    </div>
  )
}

export default Banner