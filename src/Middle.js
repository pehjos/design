import { ChevronRightRounded } from '@material-ui/icons'
import React from 'react'
import { Paper, Typography, CircularProgress, Divider } from '@material-ui/core/';
import Video from './Video'
import './middle.css'
import { Hidden } from '@material-ui/core'
import { useParams, useHistory } from 'react-router-dom';
import Promotion from './Promotion'
import { useDispatch, useSelector } from 'react-redux';
function MiddleSelections() {
    const {posts,isLoading}=useSelector((state)=>state.posts)
    const history = useHistory();
    const openPost = (_id) =>{
      history.push(`/posts/${_id}`);
     
     }
    if (!posts) {
      // window.location.reload()
      return (
        <div  className="loadingPape">
          <CircularProgress size="2em" />
        </div>
      );
    }


return (
<div  className="middle">
<div  className="middle_selective">
<div  className="middle_selective_p">
<p>Selectives</p>

</div>

<Hidden smDown>
<div className="promotion__banner">
    <Promotion />
</div>
</Hidden>

<Hidden smUp>
<div className="card__flex">
{ posts.map(({product_price,image,product_title,tags,_id})=>(
      tags!=="Selective"?"":(
<div key={_id}  onClick={() => openPost(_id)} className="middle_selective_card">
<div  className="middle_selective_cardimg">
<img src={image}/>
</div> 
<div  className="middle_selective_carddesc">
<p>{product_title}</p>
</div> 
<div  className="middle_selective_cardprice">
<p>¢{product_price}</p>
</div> 
</div>

 )))}
</div>
</Hidden>
{/* responsive */}
</div> 
{/* video component */}
 <Hidden smUp>
  <Video/>
</Hidden> 

<div className="middle_flex">
    {/* clearance */}
<div  className="middle_selective1">
<div  className="middle_selective_p1">
{/* <p>Clearance Sale</p> */}
<p style={{color:'#2196f3',fontWeight:600}}>Start in December</p>
<p>more</p>
<ChevronRightRounded/>
</div>
<div className="card__clearance">
{ posts.map(({product_price,product_cancelprice,product_percentage,image,product_title,tags,_id})=>(
      tags!=="commingsoon"?"":(
<div onClick={() => openPost(_id)}  key={_id} className="card__clearance__iner">  
<div className="card__clearance__img">
<img src={image}/>
</div>
<div className="card__clearance__text">
<div className="card__clearance_dec">
<p>
{product_title}</p>
</div>
<div className="card__clearance_per">
    <h6>Promo </h6>
<p>{product_percentage}% off</p>
</div>
<div className="card__clearance__price">
<h6>¢{product_price}</h6>

<s>¢{product_cancelprice}</s>

</div>

</div>

</div>
 )))}
</div>

<Hidden smDown>
<div className="hot__sales_baners_img1">


</div>
</Hidden>
</div> 
 
{/* HOT SALES */}
<div  className="middle_selective">
<div  className="middle_selective_p">
<p>Hot Sales</p>
</div> 
<div className="hot__sales">
{ posts.map(({product_price,product_cancelprice,product_percentage,image,product_title,tags,_id})=>(
     
     
     tags!=="hot"?"":(
<div onClick={() => openPost(_id)}   key={_id} className="hot__sales__card">

<div className="hot__sales__img_card">
<img src={image}/>
</div>
<div className="hot__sales__desc">
<p>
{product_title}</p>
</div>
<div className="hot__sales__price">
<h6>¢{product_price}</h6>
</div>

</div>
      )))}   
</div>


{/* ############midle#################### */}
<div className="hot__sales_baners">
{ posts.map(({image,tags,_id})=>(
      tags!=="banner"?"":(
<div onClick={() => openPost(_id)} key={_id} className="hot__sales_baners_img">
<img src={image}/>

</div>
      )))}
<div className="hot__sales_baners_pro">
<div className="card__flex">

{ posts.map(({product_price,image,product_title,category,_id})=>(
      category!=="computer"?"":(
<div onClick={() => openPost(_id)} key={_id}  className="middle_selective_card">
<div  className="middle_selective_cardimg">
<img src={image}/>
</div> 
<div  className="middle_selective_carddesc">
<p>{product_title}</p>
</div> 
<div  className="middle_selective_cardprice">
<p>¢{product_price}</p>
</div> 
</div>
      )))}
</div>

</div>

{ posts.map(({image,tags,_id})=>(
      tags!=="solarimg"?"":(
<div onClick={() => openPost(_id)} key={_id} className="hot__sales_baners_img">
<img src={image}/>

</div>
      )))}


</div>
</div> 

</div>




{/* SENIOR DIV%%%%%%%%%%%%%%%%%%%%%%%% */}
</div>

)
}

export default MiddleSelections
