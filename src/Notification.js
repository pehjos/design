
import './notification.css'
import React,{useState} from 'react'
import { useStateValue } from "./Stateprovider";
import { getBasketTotal } from "./reducer";
import {deleteCart} from '././actions/cart'
import Userpost from './Userposts'
import { Paper, Typography, CircularProgress, Divider } from '@material-ui/core/';

import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

  
function Notification() {

    const userDetails=JSON.parse(localStorage.getItem("user"))
    const {order,isLoading}=useSelector((state)=>state.order)
    const {posts,Loading}=useSelector((state)=>state.posts)
    console.log(order)
    console.log(posts)
return (
<div className="notification">
<div className="notification_cont">
<h5>SUMMARY RECIEPT FROM foreCast</h5> 
{ order?.map((post)=>(
 userDetails?.uid!==post.userId?"":(
    <div className="notificationlabel">
<p>Date:{post.createdAt}</p>
<h4>Ref ID:{post.product_title }</h4>
<p>Customer Name:{post.userName}</p>
<p>Email Address:{post.userEmail}</p>
<p>Telephone Number:{post.customer_pnone}</p>
<p>Delivery Address:{post.customer_adress}</p>
<p>Delivery Status From:{post.customer_delivery_option}</p>
<p>Customer Region:{post.customer_region}</p>
<p>Customer District: {post.customer_district}</p>
<p>Total Cost:{post.product_fees}</p>

  {post.product_name?.map((post) =>( 
    <p>Product name:{post}</p>
  ))}
   {post.product_price?.map((post) =>( 
 <p>Product Prices:{post}</p>
  ))}
   {post.image?.map((post) =>( 
    <img src={post}/>
   ))}
   
 
</div>
   )))}
 
</div>
<Userpost/>
</div>

)
}

export default Notification
