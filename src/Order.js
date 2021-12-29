import React,{useEffect,useState,useRef} from 'react'
import { getBasketTotal } from "./reducer";
import CurrencyFormat from "react-currency-format";
import { useDispatch, useSelector } from 'react-redux';
import './order.css'
import {createOrder} from '././actions/order'
import emailjs from 'emailjs-com'
import { usePaystackPayment } from 'react-paystack';
import { useStateValue } from "./Stateprovider";
import { Link, useHistory } from "react-router-dom";
function Order() {
const userDetails=JSON.parse(localStorage.getItem("user"))
const [{basket},dispatch1]=useStateValue();
const [currentRoom, setCurrentRoom] = useState(1)
const value=getBasketTotal(basket) // Part of the homework
const history =useHistory()
const dispatch = useDispatch();
const changeRoom = (newRoom) => {
setCurrentRoom(newRoom)
}
const [currentRoom1, setCurrentRoom1] = useState(1)

const changeRoom1 = (newRoom1) => {
setCurrentRoom1(newRoom1)
}
const [currentRoom2, setCurrentRoom2] = useState(1)

const changeRoom2 = (newRoom2) => {
setCurrentRoom2(newRoom2)
}

const [postData, setPostData] = useState({ 
product_name:"",
product_desc:"",
product_brand:"",
product_title: "",
product_price:"",
customer_delivery_option:"",
product_fees: "",
customer_region:"",
customer_district:"",
customer_adress:"",
customer_pnone:"",
userId: "",
userName: "",
userEmail: "",
image: "",
product_userId:"",
ptoduct__id:"",

});
// PAY ON DELIVERY FUNCTION
const handleSubmit = () => {
  history.push("/notification")

dispatch(createOrder({ ...postData,
  product_name:basket.map(item => item.name),
  product_desc:"post.product_desc",
  customer_delivery_option:currentRoom1,
  product_title: "NO PAYMENT WAS MADE",
  product_price:basket.map(item => item.price),
  product_percentage:"post.product_percentage",
  product_fees: value,
  customer_region:currentRoom2,
  image: basket.map(item => item.image),
  product_userId:userDetails.uid,
  userId:userDetails.uid,
  userName:userDetails.displayName,
  userEmail:userDetails.email,
  ptoduct__id:"post._id",
}, ));
// clear();

};

const config = {
reference: (new Date()).getTime().toString(),
email: "pehjos4@gmail.com",
amount:value *100 ,
currency: "GHS",
publicKey: 'pk_live_4ab838fef1c8e9dae83b0b76addb2f2c811a3422',

};
let ref;
// you can call this function anything
const onSuccess = (reference) => {

alert(reference,"Keep this number in safe place")
history.push("/notification")
console.log(reference);
ref= reference
dispatch(createOrder({ ...postData,
product_name:basket.map(item => item.name),
product_desc:"post.product_desc",
customer_delivery_option:currentRoom1,
product_title: reference.trxref,
product_price:basket.map(item => item.price),
product_percentage:"post.product_percentage",
product_fees: value,
customer_region:currentRoom2,
image: basket.map(item => item.image),
product_userId:userDetails.uid,
userId:userDetails.uid,
userName:userDetails.displayName,
userEmail:userDetails.email,
ptoduct__id:"post._id",
}, ));

//TEMPLATES
//   var templateParams = {
//     name: userDetails.displayName,
//   message: 'Check this out!'
// };

// emailjs.send('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', templateParams)
//     .then(function(response) {
//        console.log('SUCCESS!', response.status, response.text);
//     }, function(error) {
//        console.log('FAILED...', error);
//     });

};

// you can call this function anything
const onClose = () => {
// implementation for  whatever you want to do when the Paystack dialog closed.
console.log('closed')
}

const PaystackHookExample = () => {
const initializePayment = usePaystackPayment(config);
return (
<div className="checkbooking_body1">
{ ref?(<button>hello</button>):(<button onClick={() => {
initializePayment(onSuccess, onClose)
}}>PROCEED TO PAYMENT</button>)}
<button id="btn" onClick={handleSubmit}>PAY ON DELIVERY</button>  

</div>
);
};


return (
<div className="order">
<div  className="content">
<p>Order Data </p>
<div className="inputitems">
<select  onChange={(event) => changeRoom2(event.target.value)}
value={currentRoom2}>
<option value={""}> Select Region</option>
<option value="Ashanti">Ashanti</option>
<option value="Bono">Bono</option>
<option value=" Ahafo"> Ahafo</option>
<option value="Central">Central</option>
<option value="Eastern">Eastern</option>
<option value="Greater Accra">Greater Accra</option>
<option value="Northern">Northern</option>
<option value="Volta"> Volta</option>
<option value="Savanna">Savanna</option>
<option value="North East">North East</option>
<option value="Upper East">Upper East</option>
<option value="Upper West">Upper West</option>
<option value="Volta">Volta</option>
<option value="Oti">Oti</option>
<option value="Western">Western</option>
<option value="Western North">Western North</option>
</select><br/>
<input type="text" placeholder="Enter your District"value={postData.customer_district}
onChange={(e)=>setPostData({...postData,  customer_district:e.target.value})}/><br/>
<input type="text" placeholder="Enter your delivery adress"
value={postData. customer_adress}
onChange={(e)=>setPostData({...postData,  customer_adress:e.target.value})}
/><br/>
<input type="text" placeholder="Phone Number"
value={postData.customer_pnone}
onChange={(e)=>setPostData({...postData,       customer_pnone:e.target.value})}
/><br/>
<select  onChange={(event) => changeRoom1(event.target.value)}
value={currentRoom1}>
<option value={""}> Select Delivery station</option>
<option value="Ghana">Bus Station</option>
<option value="China">Post Office</option>

</select><br/>


</div>
<div className="detailsorder">
<h5 >Order Details</h5>
<CurrencyFormat
renderText={(value) => (
<>
<p>
{/* Part of the homework */}
Subtotal ({basket.length} Items ): <strong>{value}</strong>
</p>

</>
)}
decimalScale={2}
value={getBasketTotal(basket)} // Part of the homework
displayType={"text"}
// thousandSeparator={false}
prefix={"¢"}
/>


{/* <h6>Delivery Fees:$78</h6> */}
</div>
</div>
<div className="productName">
{basket.map(item => (
<div className="productName_items">

<p>{item.name}</p>
<h6>¢{item.price}</h6> 

</div>
))}
</div>
<div className="productName_itemss">
<h5>Your Adress</h5>
<p>{userDetails.displayName}</p>
<p>{userDetails.email}</p>
<p>{userDetails.Phone}</p>
</div>
<div className="payment">
<PaystackHookExample />
<p>NOTE</p>
<ul>
<li>Once you pay, we deliver your product to the address you specify .</li>
<li>Also you pay delivery fees Once its delivered. </li>
<li>When you select PAY ON DELIVERY ,we deliver to you, then you PAY us </li>
<li>Feel free to shop on forecastMall.</li>
<li>For any enquiries call +233596188679</li>
</ul>
</div>
</div>
)
}

export default Order
