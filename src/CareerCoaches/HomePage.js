import React from 'react';
import bgVideo from '../assets/bgVideo.mp4';

const HomePage = () => {
  const { user } = JSON.parse(window.localStorage.getItem('userObj'));

  return (
    <div className="homepage-container">
      <div className="homepage-bg">
        <video src={bgVideo} autoPlay loop muted type="video/mp4" />
      </div>
      <div className="homepage-content">
        <h2 className="px-2 text-center">
          Hello
          <strong>
            {` ${user.username}`}
          </strong>
          , welcome to
          <em>
            <strong>{' BACC(Book a Career Coach)'}</strong>
          </em>
        </h2>
        <h3 className="p-3 text-center">
          Here at
          <strong>
            {' BACC'}
          </strong>
          , we provide you with highly dedicated and experienced
          career coaches to help with insights and in making those important
          career decisions.
        </h3>
        <h3 className="p-3 text-center">
          Our career coaches are highly empathic and pride themsleves in how well
          the careers of people that consult with them changes for the better
        </h3>
        <h3 className="p-3 text-center">
          {
            'click the "Coaches" link to see the collection of our coaches and book an appointment today '
          }
        </h3>
      </div>
    </div>
  );
};

export default HomePage;
