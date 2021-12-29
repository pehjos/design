import { LocationOn } from '@material-ui/icons'
import {Link } from 'react-router-dom'
import React from 'react'
import './footer.css'
function Fotter() {
    return (
        <div className="footer">
                <div className="footertop">
                <div className="footertopch1">
                <div className="footertopch">
             
            <p>Contacts && About</p>
            <Link to="/about"> <p>About ForecastMall</p></Link>
           <Link to="/policy"> <p>Shipping policy</p></Link>
           <Link to="/privacy"> <p>Privacy policy</p></Link>
            <p>Wechat:+8613380332842</p>
            <p>WhatsApp:+8613380332842</p>
           <p>Call:+8613380332842</p>
            <p>Email:shiedaniel@163.com</p>
    
            </div>
            <div className="footertopch">
            <h5>China</h5>
            <p>china, guangdong, shenzhen.</p>
            <p>guangming district, fenghuang street,  </p>
              <p> tangwei community.  </p>

            <p>nantai yun park,  tower 1</p>
            <p>room 7-  A12</p>
            </div>
            <div className="footertopch">
            <h5> Accra</h5>
            <p>Accra-Kotobabi near Ayawaso</p>
            <p>North Education Directories. </p>
              <p> Phone:0549370908 </p>
            <p>kwameacheampong768@gmail.com</p>
           
            </div>
            </div>
            <div className="footertopch2">
            <div className="footertopch">
            <h5> Kumasi</h5>
            <p>Plot 2block 12</p>
            <p>New Amakom </p>
              <p> Opposite city hospital</p>
            <p>Behind vayon Pub</p>
            <p>+233242109360</p>
            </div>
            <div className="footertopch">
           <h5>PAYMENT </h5>
         
            <p>Momo</p>
            <p>Cash</p>
            <p>MasterCard</p>
            <p>VisaCard</p>
            </div>
            <div className="footertopch">
            {/* <h5>HELP </h5>
            <p>Your Account</p>
            <p>HookIte Help</p>
            <p>How to start with Us</p>
            <p>Terms & Condictions</p> */}
            <h5>Developers address </h5>
            <p>Pehjos Inc</p>
            <p>pehjos4@gmail.com</p>
            <p>+233596188679</p>
            <p>hookwal.com </p>
            <p>All rights reserved</p>
            </div>
           
            </div>
            </div>
            <div className="footerbotom">
            <div className="brands">
            <p>SM-forecast</p>

            </div>
            <div className="companybrand">
<p>China<LocationOn/></p>
<p>Currency <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQMF8LPkw3RS5h4Hf76P_Oqm3Rn0DikuiQx5g&usqp=CAU"/></p>
            </div>
          
            </div>
          
        </div>
    )
}

export default Fotter
