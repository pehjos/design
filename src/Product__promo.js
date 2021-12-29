import React from 'react'
import './Product__promo.css'
import { useParams, useHistory, Link } from 'react-router-dom';

function Product({title,post, description,id,image}) {
    const history = useHistory();
    const openPost=()=>
    {
    history.push(`/posts/${post._id}`)
      
    
    }

    return (
        <div onClick={openPost} className='product3' >
            <p className='product__title1'>{title}</p>
            <p className='product__desc1'>{description}</p>
            <img className='product__image1' src={image} />
        </div>
    )
}

export default Product
