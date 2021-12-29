import { DeleteOutlined, FavoriteBorder, FavoriteOutlined } from '@material-ui/icons'
import React,{useState} from 'react'
import { useStateValue } from "./Stateprovider";
import { getBasketTotal } from "./reducer";
import {deleteCart} from '././actions/cart'
import './basket.css'
import './homep.css'
import { Paper, Typography, CircularProgress, Divider } from '@material-ui/core/';
import Cart from './Cart'
import {addToBasket} from './Cart'
import { useDispatch, useSelector } from 'react-redux';
import { Link ,useHistory  } from 'react-router-dom';
function Basket({id,image,itemdesc  , price,}) {
  const [{basket},dispatch]=useStateValue();
  const [count, setCount] = useState(1);
    const userDetails=JSON.parse(localStorage.getItem("user"))
    const {posts,isLoading}=useSelector((state)=>state.posts)
    const {  cart, Loading } = useSelector((state) => state.cart);
    const [postData, setPostData] = useState({ 
        product_customer:"",
        product_cart:0,
      
      }); 
     const dispatch1 = useDispatch();
     const history = useHistory();
    // const handleSubmit=()=>{
    //     dispatch1(updatePost(post._id,{  product_customer:"",
    //        product_cart:0
    //     }));
    //     console.log("remove")
    //     console.log(postData)
    //     }
           




  let counter1=0;
  let total1=0;
  if(userDetails!==null){
 cart.map(post=> {
    if(userDetails?.uid==post.product_userId){
      parseFloat(total1)
     let loopPrice=  parseFloat(post.product_price)
      total1+=loopPrice  ;
counter1++
    }

})
}
console.log(parseInt(total1) )

const chekbox=()=>{
if(basket.length<=0){
alert("Please Tick the chekbox to select product")
history.push('/basket')
}else{

    history.push('/order')  
}
}

    console.log(posts)
      const removeFromBasket = () => {
            // remove the item from the basket
            dispatch({
                type: 'REMOVE_FROM_BASKET',
                id: id,
            })
        }
    
    
return (
    <div className="basketmain">
<div className="basket">
    <p>Total items in Basket({counter1})</p>
<div className="basketbody">
    <p>INITIAL SUB PRICE (¢{total1})</p>
 <h6 onClick={chekbox}>CHECKOUT</h6>
    <h6>CALL SUPLIER</h6>


    {cart.map(post=> (
        userDetails?.uid!==post.product_userId?"":(


<Cart id={post._id}
post={post}
image={post.image}
price={post.product_price}
description={post.product_title}
name={post.product_name}

/>
     ) ))}



</div>  

</div>
<h5>RECENTLY VIEWED ITEMS</h5>  
{/* <div className="view">

<div className="viewcontent">
<img src="https://cdn1.vectorstock.com/i/1000x1000/11/60/electric-cooker-oven-vector-571160.jpg"/> 
<p>centuries. As a result, the lorem ipsum is no longer
      considered Latin, even though it looks a lot</p> 
<h6>$400</h6>
</div>
</div> */}
</div>
)
}

export default Basket
