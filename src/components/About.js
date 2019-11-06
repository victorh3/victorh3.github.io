import React from 'react';
import ProfileAvatar from '../assets/profile-avatar.png';

const About = ({ data }) => {
  return (
    <section id="about">
      <div className="row">
        <div className="three columns">
          <img
            className="profile-pic"
            src={ProfileAvatar}
            alt="victorh3 Profile Pic"
          />
        </div>
        <div className="nine columns main-col">
          <h2>About Me</h2>
          <p>{data.bio}</p>
        </div>
      </div>
    </section>
  );
};

export default About;
