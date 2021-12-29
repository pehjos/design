import React, { useState } from 'react'
import './Banner.css'
import Paper from "@material-ui/core/Paper";
import Tab from "@material-ui/core/Tab";
import Box from '@material-ui/core/Box'
import { Camera, ChildCareOutlined,ExitToAppOutlined, ComputerOutlined, EditAttributesOutlined, FavoriteBorder, ForwardOutlined, GamesOutlined, HdSharp, HealingOutlined, HelpOutlineRounded, HomeOutlined, LanguageOutlined, LocalMallOutlined, NotificationImportantOutlined, PartyModeOutlined, PhoneAndroidOutlined, Rotate90DegreesCcwOutlined, Settings, ShoppingBasketOutlined, ShoppingCartOutlined, Store, StoreMallDirectoryOutlined, WbIncandescent } from '@material-ui/icons'
import Product1 from './images/item1.jpg'
import Product2 from './images/item2.jpg'
import Product3 from './images/item3.jpg'
import Carosel from './Carosel'
import CaroselMenu from './CaroselAndMenu'
import TabPanel from '@material-ui/lab/TabPanel';
import TabList from '@material-ui/lab/TabList';
import TabContext from '@material-ui/lab/TabContext';
import Categories from './Categories';
import { useDispatch, useSelector } from 'react-redux';
import {  Typography, CircularProgress, Divider } from '@material-ui/core/';
import { useParams, useHistory } from 'react-router-dom';
function Banner() {
  const [value, setValue] = React.useState('1');
  const {posts,isLoading}=useSelector((state)=>state.posts)
  const history = useHistory();
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
   

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
      <div className='banner'>
        
            <div className="banner__left"
              style={{
                width: "39%",
               height:"100%" 
              }}
            >
        <Paper square>
        <TabContext value={value}>
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
          <TabList onChange={handleChange} aria-label="lab API tabs example">
            <Tab label="MARKET" value="1" />
            <Tab label="CHRISTMASS DEAL" value="2" />

          </TabList>
        </Box>
        <TabPanel value="1"><CaroselMenu/></TabPanel>
        <TabPanel value="2"><Categories /></TabPanel>
      
      </TabContext>
          </Paper>
          
            </div>
            <Paper square>
            <div className="banner__image">
              <Carosel/>
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
            </div>
             </Paper>
            <div className="banner__right">
                <p className="banner__rightTop">
                  Sports & Entertainment and Toys &
                </p>
          <div className="banner__rightPromo">
            
                  <div className="promotion__option">
                      <div className="promotion__optionText">
                        <p className="promotion__optionTitle">
                          Hot selections from leading suppliers
                        </p>
                        <span>Source now</span>
                      </div>
                     <img 
                       className='promotion__optionImage'
                       src={Product1} alt='' 
                     />
                  </div>
                 
                 <div className="promotion__option">
                      <div className="promotion__optionText">
                          <p className="promotion__optionTitle">
                        Trending products
                        </p>
                        <span>Source now</span>
                      </div>
                     <img className='promotion__optionImage' src={Product2} alt='' />
                  </div>
                  
                   <div className="promotion__option">
                      <div className="promotion__optionText">
                          <p className="promotion__optionTitle">
                         Ready to ship within 7days
                        </p>
                        <span>Source now</span>
                      </div>
                     <img className='promotion__optionImage' src={Product3} alt='' />
                  </div>
                </div>
            </div>
        </div>
    )
}

export default Banner
