import React,{useState,useEffect} from 'react'
import {getPostsBySearch} from './actions/posts'
import {getPosts} from './actions/posts'
import {useDispatch,} from 'react-redux'
import { useHistory,useLocation } from 'react-router-dom';
import {Link } from 'react-router-dom'
import './buttons.css'
import image1 from './images/new3.gif'
import {SearchOutlined} from '@material-ui/icons'

function useQuery() {
  return new URLSearchParams(useLocation().search);
}
function Buttons() {
 
    const query = useQuery();
    const page = query.get('page') || 1;
    const searchQuery = query.get('searchQuery');
  
    const [currentId, setCurrentId] = useState(0);
    const dispatch = useDispatch();
  
    const [search, setSearch] = useState('');
    const [tags, setTags] = useState([]);
    const history = useHistory();
     
  
    const handleKeyPress = (e) => {
        if (e.keyCode === 13) {
          searchPost();
        }
      };
  
  const searchPost = () => {
    if (search.trim() || tags) {
      dispatch(getPostsBySearch({ search}));
      history.push(`/search?searchQuery=${search || 'none'}`);
    } else {
      history.push('/search');
     
    }
  };


return (
    <div className="mainsection">
<div className="buttons">
<div className="buttonsgr">
  <Link to="/phones">
<div className="buttonsgr_ch">
<img  src="https://phoneaqua.com/products/xiaomi-redmi-note-9-pro-global.jpg"/>
<p>Phones</p>

</div>
</Link>
<Link to="/localmall">
<div className="buttonsgr_ch">
<img  src="https://ae01.alicdn.com/kf/HTB1hK31asfrK1Rjy1Xdq6yemFXap.jpg"/>
<p>Fashion</p>

</div>
</Link>
<Link to="/office">
<div className="buttonsgr_ch">
<img id="hot" src={image1}/>
<p>Hot Sales</p>

</div>
</Link>
<Link to="/foodelivery">
<div className="buttonsgr_ch">
<img  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRwhqAlYjXmjz6TGJn-O054SugeA9L8OeSuLBTEzuRVIXaaMXd4Yoar5iUfkxrwAvL2MZg&usqp=CAU"/>
<p>Foods</p>

</div>
</Link>
</div>
<div className="buttonsgr">
<Link to="/electronic">
<div className="buttonsgr_ch">
<img  src="https://image.made-in-china.com/202f0j00qntTdBNaCpoI/4-Way-Multi-UK-Power-Socket-with-USB-Outlet-250V-Electric-Outlets-Power-USB-Extension-Socket.jpg"/>
<p>Electronics</p>

</div>
</Link>
<Link to="/solar">
<div className="buttonsgr_ch">
<img  src="https://ae01.alicdn.com/kf/H492a82b1fa5740338d80a07e56074b09T/Portable-Solar-Light-15W-110LM-Solar-Powered-Energy-Lamps-5V-LED-Bulb-for-Outdoors-Camping-Light.jpg_220x220.jpg_.webp"/>
<p>Solar</p>

</div>
</Link>
<Link to="/warehouse">
<div className="buttonsgr_ch">
<img src="https://pictures-ghana.jijistatic.com/9083873_10-speed-blender-hamilton-beach-hb50167-1200x1200_1200x1200.jpg"/>
<p>Kitchen</p>

</div>
</Link>
<Link to="/media">
<div className="buttonsgr_ch">
<img  src="https://m.media-amazon.com/images/I/61xQRROBrRL._AC_SY355_.jpg"/>
<p>Digital</p>

</div>
</Link>
</div>
<div className="main__nav_search">
<div className="main__nav_search_input">
<input value={search}onChange={(e)=>setSearch(e.target.value) } name="search"
       onKeyDown={handleKeyPress} type="text"placeholder=" Search Product"/>
<SearchOutlined onClick={searchPost}/>

</div>
<div className="main__nav_popular_searches">
<p>Top Search :</p>
<p>Watches</p>
<p>Computers</p> 
<p>Shoes</p>
<p>Camera</p>
</div>
</div>
</div>
  
</div>

)
}

export default Buttons
