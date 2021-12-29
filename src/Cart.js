import React,{ useState }from 'react'
import './basket.css'
import {deleteCart} from '././actions/cart'
import { useStateValue } from "./Stateprovider";
import { useDispatch, useSelector } from 'react-redux';
import { DeleteOutlined,CheckBox,CheckBoxOutlineBlank, FavoriteBorder, FavoriteOutlined } from '@material-ui/icons'
function Cart({id,name,image,price,description,post}) {
    const dispatch =useDispatch()
    const [count, setCount] = useState(1);
    const [{basket},dispatch1]=useStateValue();
    const [state,setState] =useState(true)

    const addToBasket=()=>{
        dispatch1({
        type:'ADD_TO_BASKET',
        item:{
        id:id,
        name:name,
        description:description,
        price:price*count,
        image:image
        }
        })
        setState(false); 
        document.getElementById(id).style.pointerEvents="none"
        document.getElementById(id).style.opacity="0.4"
       
        }
       
        const removeFromBasket = () => {
            // remove the item from the basket
            dispatch1({
                type: 'REMOVE_FROM_BASKET',
                id: id,
            })
            setState(true);
            document.getElementById(id).style.opacity="1"
            document.getElementById(id).style.pointerEvents="initial"
           
        }    
console.log(basket);




    return (
        <div>
          


<div className="basketcontent">
  

<div className="basketcontenttop">
<div className="basketcontentimage">
 <img src={image} />          
</div> 
<div className="basketcontent__desc">
 <p>{description}</p>  
 <h1>{name}</h1>  
 <h5>¢{price*count}</h5>         
</div> 
{state?(<CheckBoxOutlineBlank  onClick={addToBasket}  />):(<CheckBox onClick={removeFromBasket}   />)}    
</div> 
<div className="basketcontentbottom">
<div className="basketcontent_left">
 <FavoriteBorder/>|
 <DeleteOutlined onClick={() => dispatch(deleteCart(post._id))}/>
 <p onClick={() => dispatch(deleteCart(post._id))} >REMOVE</p>           
 </div> 
 <div className="basketcontentright" id={id}>
 <button  onClick={() => setCount(count>1?count - 1 :1)}>-</button> 
  <p>{count}</p> 
  <button  onClick={() => setCount(count + 1)}>+</button>  
  
</div>          
</div>           
</div>
 
        </div>
    )
}

export default Cart
