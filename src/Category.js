import React from 'react'
import { Link } from 'react-router-dom'
import './Category.css'

function Category({title, Icon, noBorder, link}) {
    return (
        <Link className='categoryLink' to={link}>
        <div className={`category ${noBorder && 'category__bottom'}`}>
            <Icon className='category__icon' />
            <p className='category__title'>{title}</p>
        </div>
        </Link>
    )
}

export default Category
