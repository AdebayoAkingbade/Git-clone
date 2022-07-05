import React from 'react';
import './Loader.css'
import loader from "../../assets/loader.gif"

const Loader = () => {
  return (
    <div>
        <img src={loader} alt='spinner'/>
    </div>
  )
}

export default Loader