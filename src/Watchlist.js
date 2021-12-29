import React from 'react'
import './watchlist.css'
import { useDispatch, useSelector } from 'react-redux';
import { Paper, Typography, CircularProgress, Divider } from '@material-ui/core/';
function Watchlist() {
    const userDetails=JSON.parse(localStorage.getItem("user"))
const {posts,isLoading}=useSelector((state)=>state.posts)
const {  cart, Loading } = useSelector((state) => state.cart);
if (isLoading) {
    return (
    <div  className="loadingPaper">
    <CircularProgress size="2em" />
    </div>
    );
    }
    
if(!cart.length && !isLoading){
    return 'empty watchlist'
  }
    return (
        <div className="watch_list">
 {cart.map(post=> (
        userDetails?.uid!==post.product_userId?"":(
<p>{post.product_name}</p>
            ) ))}
        </div>
    )
}

export default Watchlist
