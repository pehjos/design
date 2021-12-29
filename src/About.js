
import React from 'react'
import './about.css'
import {withRouter} from 'react-router-dom'
import { Link, useHistory } from 'react-router-dom'
import image from './images/cert1.jpg'
import image1 from './images/cert2.jpg'
import image2 from './images/cert3.jpg'
import pic1 from './images/pic1.jpg'
import pic2 from './images/pic2.jpg'
import pic3 from './images/pic3.jpg'
import pic4 from './images/pic4.jpg'
import pic5 from './images/pic5.jpg'
import pic6 from './images/pic6.jpg'
import {ArrowBackIos} from '@material-ui/icons'
export default withRouter(({ history }) => {
    return (
        <div className="main_about">
            <div className="categoryPage__top">
  
                <ArrowBackIos onClick={() => history.goBack()} className="categoryPage__topBackIcon" />
         </div>
          <h2>About Us</h2>
          <div className="imageprofile">
              <div className="Lincence">
               
  <div className="images">
  <img src={image}/>
          <img src={image1}/>
          <img src={image2}/>
          </div>
          <div className="content1">
        
        <p>
<h2> COMPANY PROFILE</h2>

shenzhen Danny cross-border Ecommerce and forecastmall ghana  are licensed companies based in China and ghana ，new emerging businesses unit of Ecommerce that specializes in distance selling with shipping across ghana。

The design of shenzhen Danny cross-border Ecommerce and forecastmall ghana business processes and interfaces are based on international best practices. Our online store （forecastmall） was developed through ground-breaking e-commerce solutions.


<h2> MISSION</h2>
shenzhen Danny cross-border Ecommerce and forecastmall ghana corporate mission is to make efficient use of market opportunities, thus developing a profitable and stable business for the greater good of our consumers, shareholders, employees, partners and society. 

We are committed to ensuring  shenzhen Danny cross-border Ecommerce and forecastmall ghana customers can buy products of impeccable quality with maximum ease and enjoy our top-notch service.


<h2> 
PRINCIPLES</h2>
shenzhen Danny cross-border Ecommerce and forecastmall ghana strives to create  environment that makes purchases as convenient, easy and efficient as possible.

While pursuing these goals, we are guided by several principles:

follow the latest trends in creating and developing the product range,

anticipate customers' needs,

comply with all applicable laws,

ensure information transparency and availability for dialog.
<h2>Photos</h2>
        </p>


          </div>
          <div className="images">
       
          <img src={pic1}/>
          <img src={pic2}/>
          <img src={pic3}/>
          <img src={pic4}/>
          <img src={pic5}/>
          <img src={pic6}/>
        
          </div>
          </div>
          </div>
        </div>
    )
}
)

