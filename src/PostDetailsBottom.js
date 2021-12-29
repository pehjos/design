import React,{useEffect,useState,useRef} from 'react'
import { FavoriteBorder,Phone, StarBorder } from '@material-ui/icons';
import { useDispatch, useSelector } from 'react-redux';
import { Paper, Typography, CircularProgress, Divider, } from '@material-ui/core/';
import { useParams, useHistory } from 'react-router-dom';
function PostDetailsBottom() {
    const {posts,post,isLoading}=useSelector((state)=>state.posts)
    const history = useHistory();
    const recommendedPosts = posts.filter(({ _id }) => _id !== post._id);
    const openPost = (_id) =>{
      history.push(`/posts/${_id}`);
     
     }
    if (isLoading) {
      return (
        <div  className="loadingPape">
          <CircularProgress size="2em" />
        </div>
      );
    }

    return (
        <div>
        <div className="post_details_bottom">
<div className="post_details_similar">

<h5>YOU MAY LIKE</h5>  
<div className="view">
{ recommendedPosts.map(({product_price,image,product_desc,_id})=>(
<div  onClick={openPost} key={_id} className="viewcontent">
<img  src={image}/> 
<p>{product_desc}</p> 
<
h6>¢{product_price}</h6>
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
<div onClick={() => openPost(_id)} key={_id} className="viewcontent">
<img src={image}/> 
<p>{product_desc}</p> 
<h6>¢{product_price}</h6>
</div>
)))}
</div>




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

export default PostDetailsBottom
