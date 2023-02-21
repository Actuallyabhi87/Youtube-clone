import { Avatar } from '@mui/material'
import React from 'react'
import './VideoCard.css';

function VideoCard(props) {
  return (
    <>
    {props.details.map((value,index) => (
    <div className='videoCard'>
    
      <img key = {index} className='videoCard__thumbnail' src={value.image} alt=''/>
      <div className='videoCard__info'>
        <Avatar className='videoCard__avatar' 
        alt={value.channel}
        src={value.channelImage}/>
        <div className="videoCard__text">
            <h4>{value.title}</h4>
            <p>{value.channel}</p>
            <p>{value.views} . {value.timestamp}</p>
        </div>
      </div>
    </div>
    ))};
    </>
  )
}

export default VideoCard
