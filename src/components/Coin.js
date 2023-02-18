import React from 'react'

const Coin = ({name,icon,price,symbol}) => {
  return (
    <div className='coin' id='myDiv'>
        <h1>Name:{name} </h1>
        <img src={icon} alt="coin logo loading..."/>
        <h3>Price:{price} </h3>
        <h3>Symbol:{symbol} </h3>
      
    </div>
  )
}

export default Coin
