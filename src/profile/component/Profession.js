import PropTypes from "prop-types";
import React from 'react'
function Profession(props) {
  return (
    <div className='prof'>
                <h1 className='pp para p1'>Profession</h1>
                <p>How To Make Your Website Responsive</p>
               <p>{props.children}</p>

    </div>
  )
}

export default Profession