import React from 'react'
import './CategoryPage.css'
import {Link } from 'react-router-dom'
import CategoryPageProduct from './CategoryPageProduct'
import { ArrowBackIos, KeyboardArrowDown, Search } from '@material-ui/icons'
import AppsOutlined from '@material-ui/icons/AppsOutlined'
import Phone from './Phone.jpg'
import { Paper, Typography, CircularProgress, Divider } from '@material-ui/core/';
import { useDispatch, useSelector } from 'react-redux';
import Pro1 from './Pro1.jpg'
import { useHistory, useLocation } from 'react-router-dom';

function CategoryPage() {
const history = useHistory() 

const push=()=>{
history.push("/")
window.location.reload(false)
}
window.onbeforeunload=function(){
window.location.reload(true)

}
    const {posts,isLoading}=useSelector((state)=>state.posts)
    if(!posts.length && !isLoading){
        return 'no data'
      }
      if (isLoading) {
         return (
           <div  className="loadingPaper">
             <CircularProgress size="2em" />
           </div>
         );
       }
    return (
        <div className="categoryPage">
            <div  onClick={push} className="categoryPage__top">
       
                <ArrowBackIos onClick={push} className="categoryPage__topBackIcon" />
              <p>Back</p>
               
            </div>
            <div className="categoryPage__flex">
                <p>
                    Overall Rank
                    <span><KeyboardArrowDown className='categoryPage__flexIcon' /></span>
                </p>
                <p>
                    Popularity
                    <span><KeyboardArrowDown className='categoryPage__flexIcon' /></span>
                </p>
                <p>
                   Price
                    <span><KeyboardArrowDown className='categoryPage__flexIcon' /></span>
                </p>
                <p>
                   <AppsOutlined className='categoryPage__flexIcon'/>
                </p>
            </div>
            { posts.map((post)=>(
           <div className="categoryPage__products">
             
             <CategoryPageProduct
        image={post.image}
        key={post._id}
        post={post}
        title={post.product_title}
        discountPrice={post.product_price}
        actualPrice={post.product_cancelprice}
        noOfSales={post.product_stock}
        country={post.product_counrty}
    />
               
           </div>
                ))}
        </div>
    )
}

export default CategoryPage
