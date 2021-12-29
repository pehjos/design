import React from 'react'
import Product from './Product'
import {  useQuery } from 'react-query'
import video from './video.mp4'
import ghana from './images/ghana.jpg'
import china from './images/china.png'
import { useDispatch, useSelector } from 'react-redux';
import {fetchPosts2} from './api/index'
import { getPosts } from './actions/posts';
import './homep.css'
import {AirportShuttleOutlined,Flight,} from '@material-ui/icons'
import { Paper, Typography, CircularProgress, Divider } from '@material-ui/core/';
function ProductHome() {
const {posts,isLoading}=useSelector((state)=>state.posts)
console.log(posts)

// const { DtaLoading, error, data } = useQuery('poData', () =>
// fetch('http://localhost:5000/cart').then(res =>
//   res.json()

// )
// )
// console.log(data)


if(!posts?.length && !isLoading){
return 'no data'
}
if (!posts) {
//  window.location.reload()
return (
<div  className="loadingPaper">
<CircularProgress size="2em" />
</div>
);
}
return (

<div className="productu">

<div className="productus">


<div className="home_row">
{posts.map((post,index)=>(  

index<6&&(

post.category!=="fashion"?"":(

<Product
post={post}  key={post?._id}
image={post?.image}
atualp={post?.product_price}
percentage={post?.product_percentage}
cancelp={post?.product_cancelprice}
status={post?.product_status=="sold"?(<p id="status">{post?.product_status}</p>):<p></p>}
ship={post?.product_counrty=="Ghana"?(<div className="ship"><AirportShuttleOutlined/><p>Local store</p></div>):(<div className="ship"><Flight/><p>Ship from China</p></div>)}
itemdesc={post?.product_title}
country={post?.product_counrty=="Ghana"?(<img id="country" src={ghana}/>):(<img id="country" src={china}/>)}
/> ))))}
{posts.map((post,index)=>(  
  
      
      post.category!=="shoes"?"":(
    
        <Product
        post={post}  key={post?._id}
     image={post?.image}
     atualp={post?.product_price}
     percentage={post?.product_percentage}
     cancelp={post?.product_cancelprice}
    status={post?.product_status=="sold"?(<p id="status">{post?.product_status}</p>):<p></p>}
    ship={post?.product_counrty=="Ghana"?(<div className="ship"><AirportShuttleOutlined/><p>Local store</p></div>):(<div className="ship"><Flight/><p>Ship from China</p></div>)}
     itemdesc={post?.product_title}
     country={post?.product_counrty=="Ghana"?(<img id="country" src={ghana}/>):(<img id="country" src={china}/>)}
     /> )))}
{posts.map((post,index)=>(  

index<26&&(

post.category!=="phone"?"":(

<Product
post={post}  key={post?._id}
image={post?.image}
atualp={post?.product_price}
percentage={post?.product_percentage}
cancelp={post?.product_cancelprice}
status={post?.product_status=="sold"?(<p id="status">{post?.product_status}</p>):<p></p>}
ship={post?.product_counrty=="Ghana"?(<div className="ship"><AirportShuttleOutlined/><p>Local store</p></div>):(<div className="ship"><Flight/><p>Ship from China</p></div>)}
itemdesc={post?.product_title}
country={post?.product_counrty=="Ghana"?(<img id="country" src={ghana}/>):(<img id="country" src={china}/>)}
/> ))))}
{posts.map((post,index)=>(  


post.category!=="watches"?"":(

<Product
post={post}  key={post?._id}
image={post?.image}
atualp={post?.product_price}
percentage={post?.product_percentage}
cancelp={post?.product_cancelprice}
status={post?.product_status=="sold"?(<p id="status">{post?.product_status}</p>):<p></p>}
ship={post?.product_counrty=="Ghana"?(<div className="ship"><AirportShuttleOutlined/><p>Local store</p></div>):(<div className="ship"><Flight/><p>Ship from China</p></div>)}
itemdesc={post?.product_title}
country={post?.product_counrty=="Ghana"?(<img id="country" src={ghana}/>):(<img id="country" src={china}/>)}
/> )))}
{posts.map((post,index)=>(  

index>6&&(

post.category!=="fashion"?"":(

<Product
post={post}  key={post?._id}
image={post?.image}
atualp={post?.product_price}
percentage={post?.product_percentage}
cancelp={post?.product_cancelprice}
status={post?.product_status=="sold"?(<p id="status">{post?.product_status}</p>):<p></p>}
ship={post?.product_counrty=="Ghana"?(<div className="ship"><AirportShuttleOutlined/><p>Local store</p></div>):(<div className="ship"><Flight/><p>Ship from China</p></div>)}
itemdesc={post?.product_title}
country={post?.product_counrty=="Ghana"?(<img id="country" src={ghana}/>):(<img id="country" src={china}/>)}
/> ))))}
{posts.map((post,index)=>(  


post.category!=="solar"?"":(

<Product
post={post}  key={post?._id}
image={post?.image}
atualp={post?.product_price}
percentage={post?.product_percentage}
cancelp={post?.product_cancelprice}
status={post?.product_status=="sold"?(<p id="status">{post?.product_status}</p>):<p></p>}
ship={post?.product_counrty=="Ghana"?(<div className="ship"><AirportShuttleOutlined/><p>Local store</p></div>):(<div className="ship"><Flight/><p>Ship from China</p></div>)}
itemdesc={post?.product_title}
country={post?.product_counrty=="Ghana"?(<img id="country" src={ghana}/>):(<img id="country" src={china}/>)}
/> )))}
{posts.map((post,index)=>(  

index>26&&(

post.category!=="phone"?"":(

<Product
post={post}  key={post?._id}
image={post?.image}
atualp={post?.product_price}
percentage={post?.product_percentage}
cancelp={post?.product_cancelprice}
status={post?.product_status=="sold"?(<p id="status">{post?.product_status}</p>):<p></p>}
ship={post?.product_counrty=="Ghana"?(<div className="ship"><AirportShuttleOutlined/><p>Local store</p></div>):(<div className="ship"><Flight/><p>Ship from China</p></div>)}
itemdesc={post?.product_title}
country={post?.product_counrty=="Ghana"?(<img id="country" src={ghana}/>):(<img id="country" src={china}/>)}
/> ))))}
{posts.map((post,index)=>(  
    
  
      
      post.category!=="bag"?"":(
    
        <Product
        post={post}  key={post?._id}
     image={post?.image}
     atualp={post?.product_price}
     percentage={post?.product_percentage}
     cancelp={post?.product_cancelprice}
    status={post?.product_status=="sold"?(<p id="status">{post?.product_status}</p>):<p></p>}
   ship={post?.product_counrty=="Ghana"?(<div className="ship"><AirportShuttleOutlined/><p>Local store</p></div>):(<div className="ship"><Flight/><p>Ship from China</p></div>)}
     itemdesc={post?.product_title}
     country={post?.product_counrty=="Ghana"?(<img id="country" src={ghana}/>):(<img id="country" src={china}/>)}
     /> )))}
{posts.map((post,index)=>(  



post.category!=="wear"?"":(

<Product
post={post}  key={post?._id}
image={post?.image}
atualp={post?.product_price}
percentage={post?.product_percentage}
cancelp={post?.product_cancelprice}
status={post?.product_status=="sold"?(<p id="status">{post?.product_status}</p>):<p></p>}
ship={post?.product_counrty=="Ghana"?(<div className="ship"><AirportShuttleOutlined/><p>Local store</p></div>):(<div className="ship"><Flight/><p>Ship from China</p></div>)}
itemdesc={post?.product_title}
country={post?.product_counrty=="Ghana"?(<img id="country" src={ghana}/>):(<img id="country" src={china}/>)}
/> )))}
{posts.map((post,index)=>(  


post.category!=="electronics"?"":(

<Product
post={post}  key={post?._id}
image={post?.image}
atualp={post?.product_price}
percentage={post?.product_percentage}
cancelp={post?.product_cancelprice}
status={post?.product_status=="sold"?(<p id="status">{post?.product_status}</p>):<p></p>}
ship={post?.product_counrty=="Ghana"?(<div className="ship"><AirportShuttleOutlined/><p>Local store</p></div>):(<div className="ship"><Flight/><p>Ship from China</p></div>)}
itemdesc={post?.product_title}
country={post?.product_counrty=="Ghana"?(<img id="country" src={ghana}/>):(<img id="country" src={china}/>)}
/> )))}
</div>

</div>

</div>
)
}

export default ProductHome
