import React,{useEffect, useState} from 'react'
import axios from 'axios'
import './carditem.css'
function CardItem(props) {
    const { name, brand, price, rating, image_link, product_link, description } = props;
    
    
    const handleClick = () => {
        window.open(product_link, "_blank")
    }

    return (
        <div className='cardContainer' onClick={handleClick} >
            <div className="imgContainer">
                <img className='img' src={image_link} alt={brand} />
            </div>
            <div className="info">
                <h4>{name}</h4>
                <span className='spanPart'>
                    <div id="priceDisplay">Rs. {price}</div>
                    <div id='ratingDisplay'>{rating}</div>
                    </span>
                {description?description.slice(0, 40):"" /* to shorten the description*/}... 
            </div>

        </div>
    )
}

export default CardItem