import React,{useEffect,useState,useRef} from 'react'
import videosrc from './images/video.mp4'
import './Video1.css'
import ViewMore from './images/ViewMore.jpg'
import { MusicVideoSharp, PlayCircleFilled } from '@material-ui/icons'


function Video() {
    const [isVideoplaying, setisVideoplaying]=useState(false)
    const Videoref=useRef(null)
    const Playvideo = () => {
        
    if(isVideoplaying){
    //stop
    Videoref.current.pause()
    setisVideoplaying(false)

    }else{
    //play
    Videoref.current.play()
    setisVideoplaying(true)

    }

    }
  
    
return (
    <div className="video">
        <div className="video__video">
             {isVideoplaying?"":(<PlayCircleFilled onClick={Playvideo}/> )  } 
        <video src={videosrc}
        ref={Videoref}
        onClick={Playvideo}
        className="video__player"
        loop
        alt="snap"
      


        />  
    </div>
        
        <div className="video__text">
            <h4 className="video__title">X'mas product</h4>
            <p>Twinkle Star Outdoor String Lights Christmas Lights 200 LED 66ft Mini Green Wire Fairy Lights with 8 Lighting Modes, Christmas Tree Garden Wreath Party Wedding Indoor Decorations, Warm White</p>
      <img src="https://res.cloudinary.com/forecastmall-inc/image/upload/v1637217572/ceskrvto80v4kp3bcqk6.jpg"/>
        </div>
        <div className="video__viewMore">
            <p>View more</p>
       </div>
    </div>
   )
}

export default Video
