import React,{useState} from 'react'
import  './appbar.css'
import {Link} from 'react-router-dom'
import Watchlist from'./Watchlist'
import DrawerMenu from './DrawerMenu'
import Rightmobileslider from'@material-ui/core/Drawer'
import { useStateValue } from './Stateprovider'
import {makeStyles} from '@material-ui/core/styles'
import image3 from './images/new1.png'
import image from './images/new2.gif';
import {Hidden,Box,Avatar,List,Divider,IconButton} from '@material-ui/core'
import { useDispatch, useSelector } from 'react-redux';
import{
Search,
ExpandMoreOutlined,
CheckCircleOutline,
AddShoppingCart,
NotificationImportant,
PersonOutline,
ExpandLess,Menu,

} from '@material-ui/icons'
import { auth } from './firebase'

const style= makeStyles(theme=>({

    menuSliderContainer:{
        width:259,
        height:"100%",
        background:"white"
    },
    avater:{
       background:"khaki",
        margin:"0.5 rem auto",
        display:"block",
        height:theme.spacing(10),
        width:theme.spacing(10),
        alignItems:"center",
        display:"flex"


    },
    item:{
     
    
    },
    icons:{
        color:" rgb(233, 174, 65)"
    }
    }));
function Appbar() {
    const [showdrop, setshowState ]=useState('false')
 
// retrieve user

    const [{basket,user},dispatch]=useStateValue();
        const classses=style();
       
        const userDetails=JSON.parse(localStorage.getItem("user"))
        const {  cart, Loading } = useSelector((state) => state.cart);
        
        let counter=0;
        if (userDetails) {
        cart?.map(post=> {
           if(userDetails?.uid==post.product_userId){
       console.log(post.product_price)
       counter++
           }
       
       })}
       console.log(counter)
        
//  basket Store
// localStorage.setItem("basket",JSON.stringify(basket));
// const basketSave=JSON.parse(localStorage.getItem("product"))
    const [stated,setStated]=useState({
        right:false
    })
    const togleslider=(slider,open)=>()=>{
    
        setStated({...stated,[slider]:open })
    }
    const sliderlist= slider=>(
        <Box component="div"className={classses.menuSliderContainer} 
        onClick={togleslider(slider,false)}>
     <DrawerMenu onClose={togleslider("right",false)}/>
        </Box>
        )  

const [state, setState] = useState(false)
const ShowWatch=()=>{
if(state){
setState(false)
}
else{
setState(true)
}
}
const ArowState=()=>{
    if(showdrop){
    setshowState(false)
    
    }
    else{
    setshowState(true)
    
    }
    
    }
    const Arowfalse=()=>{
    if(showdrop){
    setshowState(false)
    
    
    }
    else{
    
    setshowState(true)
    
    }
    
    }

return (
<div className="appbar">
    <>
    <Link to="/">
<div className="appbardiv1">
<p>ForeCastMall</p>
{/* <img src={image3}/> */}
<div className="demima">
<img src={image}/>
</div> 
</div> 
</Link>
<div className="appbardiv2">
<p>Watchlist</p>

{state?(<ExpandLess onClick={ShowWatch} />):(<ExpandMoreOutlined onClick={ShowWatch}/>)}
{state?(<Watchlist />):""}
</div>
<div className="appbardiv">
    <marquee><img src="https://thumbs.dreamstime.com/z/last-hour-offer-badge-sale-countdown-banner-badge-hot-sales-limited-time-last-hour-offer-badge-sale-countdown-banner-badge-hot-203190722.jpg"/></marquee> 

</div>
<div className="appbardiv3">
<Link to="/notification">
<div className="icons_texts" >
<NotificationImportant/>
<h6>Notification</h6>
</div>
</Link>

<Link to="/nearby">
<div className="icons_texts" >
{/* <Search /> */}

</div>
</Link>

<Hidden smUp>
<Link to="/profile">

<div className="icons_texts">
<PersonOutline/>
<div className="check">
{userDetails?(<CheckCircleOutline/>):""}
</div>
<h6>Profile</h6>
</div>
</Link>
</Hidden>

<Hidden smDown>
<Link to="/profile">
    <div className="icons_texts" onMouseEnter={ArowState} onMouseLeave={Arowfalse}>
    <PersonOutline/>
    <div className="check">
    {userDetails?(<CheckCircleOutline/>):""}
    </div>
    <h6>Profile</h6>
    
{showdrop?"":(<div className="desktopDrop" ><DrawerMenu />  </div>) }
</div>
  
</Link>
</Hidden>



<Link to="/basket">
<div className="icons_texts" >
{counter<=0?"":<p>{counter }</p>}
<AddShoppingCart/>
<h6>Basket</h6>
</div>
</Link>

<div className="icons_texts">
<Hidden only={['lg','xl','md','sm']}>
    <IconButton className="iconbutton" onClick={togleslider("right",true)}>
    <Menu style={{color:"red"}}  className="iconbutton"/>
    </IconButton>
    </Hidden>
  
</div>
<Rightmobileslider open={stated.right} anchor="left"
    onClose={togleslider("right",false)}>
 {sliderlist("right ")}
 {/* <Footerbar/> */}
 
  </Rightmobileslider >
</div>
</>
</div>
)
}

export default Appbar;



