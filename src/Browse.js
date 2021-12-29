import React from 'react'
import './browse.css'
import SecurityIcon from '@material-ui/icons/Security';
import ContactSupportIcon from '@material-ui/icons/ContactSupport';
import DoubleArrowIcon from '@material-ui/icons/DoubleArrow';
import AllInboxIcon from '@material-ui/icons/AllInbox';
import TouchAppIcon from '@material-ui/icons/TouchApp';
function Browse() {
    return (
        <div className="browse">
            <p> ForeCastMall is Reliable and trusted</p>
            <ul>
<li>Supplies cheap and quality product from China.</li>
<li>Direct from the manufacturer.</li>
<li>Buy from China, we deliver your product safely</li>
<li>Ghana And China Market.</li>
<li>Buy Online.</li>
<li>Quality Solar Product.</li>
<li> 95% of world Electronics from China Shenzen.</li>
           </ul>     
            <p>24/7 Support</p>
           <div className="browseitems">
           <div className="browseitemsch">
         <SecurityIcon/>
         <ContactSupportIcon/>
         <AllInboxIcon/>
         <TouchAppIcon/>
            </div>
            </div> 
            <div className="browseitemsimg">
                <p>Click the button below and browse more product from forecast Mall product base.</p>
            <h5>CLICK Now  <DoubleArrowIcon/>  </h5>
          
            </div> 
        </div>
    )
}

export default Browse
