import React from 'react';
import bgVideo from '../assets/bgVideo.mp4';

const HomePage = () => (
  <div className="homepage-container">
    <div className="homepage-bg">
      <video src={bgVideo} autoPlay loop muted type="video/mp4" />
    </div>
  </div>
);

export default HomePage;
