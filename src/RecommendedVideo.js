import React from 'react';
import VideoCard from './VideoCard';
import './Recommendedvideos.css';
import data from './data';

function RecommendedVideo() {
  return (
    <div className='recommendedvideos'>
      <h2>Recommended</h2>
      <div className='recommendedvideos__videos'>
        <VideoCard details = {data}/>
      </div>
    </div>
  )
}

export default RecommendedVideo
