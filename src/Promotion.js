import React from 'react'
import './Promotion1.css'
import Product from './Product__promo'
import Prom03 from './images/Prom03.jpg'
import Pro1 from './images/Pro1.jpg'
import Pro2 from './images/Pro2.jpg'
import Pro3 from './images/Pro3.jpg'
import { useDispatch, useSelector } from 'react-redux';
import { useParams, useHistory } from 'react-router-dom';
function Promotion() {
    const {posts,isLoading}=useSelector((state)=>state.posts)
    const history = useHistory();
    const openPost = (_id) =>{
        history.push(`/posts/${_id}`);
       
       }
    return (
        <div className='promotion1'>
            <div className="promotion__left">
                <img
                    className='promotion__ad'
                    src={Prom03}
                    alt=''
                />
                <p >View more</p>
            </div>

            <div className="promotion__right">
            { posts.map((post)=>(
      post.tags!=="hot"?"":( 
                 <Product
                 post={post} 
                 key={post._id}
                    title='Shop direct from factory.'
                    description='Forecast deal with product manufacturering companies directly'
                     image={post.image}
                />
                )))} 
            </div>
        </div>
    )
}

export default Promotion
