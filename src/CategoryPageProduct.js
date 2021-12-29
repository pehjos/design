import React from 'react'
import './CategoryPageProduct.css'
import Phone from './images/Phone.jpg'
import { useParams, useHistory, Link } from 'react-router-dom';
import Pro1 from './images/Pro1.jpg'
import { useDispatch, useSelector } from 'react-redux';
function CategoryPageProduct({image,post, title, actualPrice, discountPrice, country, noOfSales}) {
    const dispatch1 = useDispatch();
    const history = useHistory();  
    const openPost=()=>
{
history.push(`/posts/${post._id}`)
  

}

    return (
        <div onClick={openPost}  className='categoryPageProduct'>
            <img className='product__image' src={image} alt='' />

            <div className="product__text">
                    <p className="product__textTitle"> {title} </p>
                    <div className="product__textBottom">
                        <div className="product__textBottomLeft">
                           
                                <span>{country}</span>
                               <p>
                                    <small>$</small> <strong>{discountPrice}</strong> <s>${actualPrice}</s>
                                </p>
                        </div>
                        <p className='product__textBottomSales'> Sales:{noOfSales}</p>
                    </div>
            </div>
        </div>
    )
}

export default CategoryPageProduct
