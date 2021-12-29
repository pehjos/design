import React,{useState,useEffect} from 'react'
import './CategoryPage.css'
import CategoryPageProduct from './CategoryPageProduct'
import { ArrowBackIos, KeyboardArrowDown, Search } from '@material-ui/icons'
import AppsOutlined from '@material-ui/icons/AppsOutlined'
import { useDispatch, useSelector } from 'react-redux';
import { Paper, Typography, CircularProgress, Divider } from '@material-ui/core/';
import {Link } from 'react-router-dom'
import {getPostsBySearch} from '../actions/posts'
import { useHistory,useLocation } from 'react-router-dom';


function useQuery() {
    return new URLSearchParams(useLocation().search);
  }
function CategoryPage() {
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
      history.push('/media');
     
    }
  };
    const {posts,isLoading}=useSelector((state)=>state.posts)
    if(!posts.length && !isLoading){
        return 'no data'
      }
      if (isLoading) {
         return (
           <div  className="loadingPaper">
             <CircularProgress size="2em" />
           </div>
         );
       } 
   
    return (
        <div className="categoryPage">
            <div className="categoryPage__top">
            <Link to="/">
                <ArrowBackIos className="categoryPage__topBackIcon" />
                </Link>
                <div className="categoryPage__topSearch">
                    <Search className='categoryPage__topSearchIcon'/>
                    <input value={search}onChange={(e)=>setSearch(e.target.value) } name="search"
       onKeyDown={handleKeyPress} placeholder='Enter key words' type="text" />
                </div>
                <p onClick={searchPost}>Search</p>
            </div>
            <div className="categoryPage__flex">
                <p>
                    Overall Rank
                    <span><KeyboardArrowDown className='categoryPage__flexIcon' /></span>
                </p>
                <p>
                    Popularity
                    <span><KeyboardArrowDown className='categoryPage__flexIcon' /></span>
                </p>
                <p>
                   Price
                    <span><KeyboardArrowDown className='categoryPage__flexIcon' /></span>
                </p>
                <p>
                   <AppsOutlined className='categoryPage__flexIcon'/>
                </p>
            </div>

           <div className="categoryPage__products">
           { posts.map((post)=>(
      post.category!=="computer"?"":(
          
        <CategoryPageProduct
        key={post._id}
        post={post}
        image={post.image}
        title={post.product_title}
        discountPrice={post.product_price}
        actualPrice={post.product_cancelprice}
        noOfSales={post.product_stock}
        country={post.product_counrty}
    />
                )))}
           </div>
        </div>
    )
}

export default CategoryPage
