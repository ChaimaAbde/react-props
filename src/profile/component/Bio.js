import React from 'react'
import PropTypes from "prop-types";


function Bio(props) {
  return (
    <div className='box2'>
        <h1 className='pp para p1'><span className='tes'>About</span>Me</h1>
        <hr className='hr pp'/>
        <div className='min-box'>
        <div>
       <img className='img2 ' src={props.user} alt={"not defined"}/>
       </div>
       <div className='box22'>
        <h2>My name is {props.name}.</h2>
        <p>Lorem Ipsum Dolor Sit Amet Consectetur Adipisicing Elit. Eum Voluptatibus Dolores Aspernatur Animi Perferendis Iste! Culpa Aut Enim Debitis Optio Illum Ipsum Quis Perferendis Dolor Expedita. Similique Necessitatibus Inventore Doloremque.

</p>
<p>Age: {props.age}</p>
<p>Gender:{props.gender}</p>
<input type="submit" value="Submit" /> 
       </div>
</div>
    </div>
  )
}

export default Bio
Bio.propTypes = {
  name: PropTypes.string,
  age: PropTypes.number,
  gender: PropTypes.string,
};