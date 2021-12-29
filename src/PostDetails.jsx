import React,{useEffect,useState,useRef} from 'react'
import { useStateValue } from "./Stateprovider";
import { Paper, Typography, CircularProgress, Divider, } from '@material-ui/core/';
import { useDispatch, useSelector } from 'react-redux';
import {Link} from 'react-router-dom'
import { useParams, useHistory } from 'react-router-dom';
import {getPostsBySearch,getPost} from './actions/posts'
import SwipeableViews from 'react-swipeable-views';
import './postDetails.css'
import {createCart} from '././actions/cart'
import { FavoriteBorder,Phone, StarBorder } from '@material-ui/icons';
import PostDetailsBottom  from './PostDetailsBottom';




const styles = {
slide: {
minWidth:120,
minHeight: 400,
color: '#fff',
},
slide1: {
// backgroundColor: '#FEA900',
},
slide2: {
// backgroundColor: '#B3DC4A',
},
//   slide3: {
//     backgroundColor: '#6AC0FF',
//   },
};


const PostDetails = ({ids,image,itemdesc,percentage,atualp,cancelp,}) => {


const [state,setState] =useState(false)
// const addToBasket=()=>{
// dispatch1({
// type:'ADD_TO_BASKET',
// item:{
// ids:ids,
// image:image,
// description:itemdesc,
// percentageprice:percentage,
// price:atualp,
// rating:cancelp,

// }
// })}


const [postData, setPostData] = useState({ 
//    product_name:'',
// product_desc:'',
// product_brand: '',
// product_title: '',
// product_price: '',
// product_percentage:'',
// product_fees: '',
// product_stock: '',
// product_userId:'',
// image: '',
// ptoduct__id:'',


});


const userDetails=JSON.parse(localStorage.getItem("user"))
const { post, posts, isLoading } = useSelector((state) => state.posts);
const dispatch = useDispatch();
const history = useHistory();

const { id } = useParams();

useEffect(() => {
dispatch(getPost(id));
}, [id]);

// useEffect(() => {
// if (post) {
// dispatch(getPostsBySearch({ search: 'none', tags: post.tags }));
// }
// }, [post]);


 if (!post) return null;

 const openPost = (_id) => history.push(`/posts/${_id}`);
if (!post) {
    window.location.reload()
return (
<div  className="loadingPaper">
<CircularProgress size="2em" />
</div>

);

}

const recommendedPosts = posts.filter(({ _id }) => _id !== post._id);

// onClick={() => openPost(_id)} key={_id}
const scrolltop= () => window.scrollTo({top:"0",behavior:"smooth"})
const handleSubmit = () => {


dispatch(createCart({ ...postData,
product_name:post.product_name,
product_desc:post.product_desc,
product_brand:post.product_brand,
product_title: post.product_title,
product_price: post.product_price,
product_percentage:post.product_percentage,
product_fees: post.product_fees,
product_stock: post.product_stock,
image: post.image,
product_userId:userDetails.uid,
ptoduct__id:post._id,
}, ));
// clear();

};

return (
<div className="post_details">
<div className="post_details__top">
<div className="post_details_images">
<SwipeableViews enableMouseEvents>

<div className="demo_img" style={Object.assign({}, styles.slide, styles.slide1)}><img src={post.image} /><p>1/3</p></div>


<div className="demo_img" style={Object.assign({}, styles.slide, styles.slide2)}><img  src={post.image1} /><p>2/3</p></div>


<div className="demo_img" style={Object.assign({}, styles.slide, styles.slide3)}><img src={post.image2}/><p>3/3</p></div>


</SwipeableViews>    

</div>  
<div className="post_details_buttons">
{userDetails?(<Link to="/basket"><h6 >VIEW CART</h6></Link>):(<Link to="/login"><h6>VIEW CART</h6></Link>)}

{userDetails?(<p onClick={handleSubmit} id="linkme">ADD TO CART</p>):(<Link to="/login"><p>ADD TO CART</p></Link>)}
<a href="tel:0596188679"><p><Phone/>Call suplier</p></a>
</div>
<div className="post_details_tag_fav">

{post.product_counrty=="Ghana"?(<p>Available in local store</p>):(<p>Ship from Abroad</p>)}
<FavoriteBorder/>
</div> 
<div className="post_details_descmain">

<div className="post_details_desc">
<p>{post.product_name}</p>
<p>{post.product_title}</p>
</div> 
<div className="post_details_desc">
<h4>¢{post.product_price}</h4>
<h6> delivery fee:+¢({post.product_fees} )</h6>
{post.product_counrty=="Ghana"?(<p>You recieve your product within 4--5 working days</p>):(<p>Shipping takes 40 days for ship and 7 days for Plane</p>)}
<Link to="/policy"><h6>Shipping Policy</h6></Link>

</div> 
</div> 
<div className="post_details_returns">
<p>{post.product_warranty} days return</p>  
<h6>|</h6>
<p>{post.product_stock} Product in Stock</p> 
</div> 
<div className="post_details_returns">
<h4>Quantity</h4>
<form >

<input type="number"placeholder={post.product_stock}/>

</form>

</div>

</div>
<div className="post_details_bottom">
<div className="post_details_similar">
<p>NOTE</p>
<ul>
<li>Once you pay, we deliver your product to the address you specify .</li>
<li>Also you pay delivery fees Once its delivered. </li>
<li>When you select PAY ON DELIVERY ,we deliver to you, then you PAY us </li>
<li>Feel free to shop on forecastMall.</li>
<li>For any enquiries call +233596188679</li>
</ul>
<h5>YOU MAY LIKE</h5>  
<div className="view">
{ recommendedPosts.map(({product_price,image,product_desc,_id})=>(
        <div onClick={scrolltop} className="menu">
<div  onClick={() => openPost(_id)} key={_id} className="viewcontent">
<img  src={image}/> 
<p>{product_desc}</p> 
<
h6>¢{product_price}</h6>
</div>
</div>
))}
</div>


</div>
<div className="product__discription">
<h6>DESCRIPTION</h6>
<p>{post.product_desc}</p>

</div>
<div className="post_details_similar">

<h5>LATEST PRODUCTS</h5>  
<div className="view">
{ posts.map(({tags,product_price,image,product_desc,_id})=>(
tags!=="hot"?"":(
    <div onClick={scrolltop} className="menu">
<div  onClick={() => openPost(_id)} key={_id} className="viewcontent">
<img src={image}/> 
<p>{product_desc}</p> 
<h6>¢{product_price}</h6>
</div>
</div>
)))}
</div>


{/* <PostDetailsBottom/> */}

</div>
<div className="seller">
<h4>Forecast Mall</
h4>
<div className="star">
<StarBorder/>
<StarBorder/>
<StarBorder/>
<StarBorder/>
</div>
<p>Performance 88%</p>
<p>Comments</p>
<p>"They are good when you do business wuth them"</p>
<div className="comment">
</div>
</div>
</div>
</div>
)
}

export default PostDetails;
