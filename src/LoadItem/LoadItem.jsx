import React from 'react'
import './LoadItem.css'
const LoadItem = ({date,pickup,delivery,company,weight,trucktype,price,tel,email}) => {
  return (
    <div className="item-box">
      <div className="date">
        <span>{date}</span>
        </div>
        <div className="trucktype">
            <span>{trucktype}</span>
            </div>
            <div className="pickup">
                <span>{pickup}</span> 
            </div>
            <div className="arrow">
                <span><i className="fa fa-duotone fa-arrow-right"></i></span>
            </div>
            <div className="delivery">
                <span>{delivery}</span>
            </div>
            <div className="company">
                <span>{company}</span>
            </div>
            <div className="weight">
                <span>{weight}տ</span>
            </div>
          
            <div className="tell">
                <span>{tel}</span>
            </div>
            <div className="email">
                <span><a href="mailto:someone@yoursite.com">{email}</a>  </span>
            </div>
            <div className="price">
                <span>${price}</span>
            </div>
            
        </div>
  )
}

export default LoadItem