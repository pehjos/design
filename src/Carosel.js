import React from 'react';
import SwipeableViews from 'react-swipeable-views';
import { autoPlay } from 'react-swipeable-views-utils';
import Pagination from './Pagination';
import image1 from './2 (3).jpg'

import image3 from './2 (2).jpg'
import image4 from './2 (4).jpg'
import image5 from './2 (1).jpg'
import image6 from './2 (5).jpg'
import image7 from './2 (6).jpg'

import image9 from './Phone.jpg'


import './carosel.css'
const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const styles = {
root: {
position: 'relative',
},
slide: {

minHeight: 200,
color: '#fff',
},
slide1: {
// backgroundColor: '#FEA900',
},
slide2: {
// backgroundColor: '#B3DC4A',
},
slide3: {
// backgroundColor: '#6AC0FF',
},
slide1: {
// backgroundColor: '#FEA900',
},
slide2: {
// backgroundColor: '#B3DC4A',
},
slide3: {
// backgroundColor: '#6AC0FF',
},
slide1: {
// backgroundColor: '#FEA900',
},
slide2: {
// backgroundColor: '#B3DC4A',
},
slide3: {
// backgroundColor: '#6AC0FF',
},
};

class DemoAutoPlay extends React.Component {
state = {
index: 0,
};

handleChangeIndex = index => {
this.setState({
index,
});
};

render() {
const { index } = this.state;

return (
<div className="
">
<div className="demima" style={styles.root}>

<AutoPlaySwipeableViews index={index} onChangeIndex={this.handleChangeIndex}>


<div  className="img" style={Object.assign({}, styles.slide, styles.slide1)}><img src={image5}></img></div>
<div  className="img" style={Object.assign({}, styles.slide, styles.slide2)}><img src={image6}></img></div>
<div  className="img" style={Object.assign({}, styles.slide, styles.slide3)}><img src={image7}></img></div>
<div  className="img" style={Object.assign({}, styles.slide, styles.slide1)}><img src={image3}></img></div>
<div  className="img" style={Object.assign({}, styles.slide, styles.slide2)}><img src={image4}></img></div>
<div  className="img" style={Object.assign({}, styles.slide, styles.slide3)}><img src={image1}></img></div>
</AutoPlaySwipeableViews>
<Pagination dots={6} index={index} onChangeIndex={this.handleChangeIndex} />
</div>
</div>
);
}
}

export default DemoAutoPlay;
