import React from 'react'


function FullName(props) {
  return (
    <div className='box1'>
       <img className='imgg' src={props.user} alt={"not defined"}/>
       <h1 className='para p1'>I AM <span className='tes'>{props.name}</span></h1>
       <p className='para p2'>I am a Web Developer for more than 4 years.<br/> My expertise is to develop and design creative websites and graphic designs.</p>
   <div className='social'>
   
    

   </div>
    </div>
  )
}

export default FullName