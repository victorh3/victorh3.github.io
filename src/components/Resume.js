import React from 'react';
import GatorLogo from '../assets/florida_gators-logo.svg';
import VerizonLogo from '../assets/verizon-logo.svg';

const Resume = ({ data }) => {
  const education = data.education.map(education => {
    return (
      <div key={education.school}>
        <h3>{education.school}</h3>
        <p className="info">
          {education.degree} <span>&bull;</span>
          <em className="date">{education.graduated}</em>
        </p>
        <p>{education.description}</p>
      </div>
    );
  });
  const work = data.work.map(work => {
    return (
      <div key={work.company}>
        <h3>{work.company}</h3>
        <p className="info">
          {work.title}
          <span>&bull;</span> <em className="date">{work.years}</em>
        </p>
        <p>{work.description}</p>
      </div>
    );
  });

  return (
    <section id="resume">
      <div className="row education">
        <div className="twelve columns header-col">
          <h1>
            <span>Education</span>
          </h1>
        </div>
        <div className="three columns Resume-logo">
          <img
            className="profile-pic"
            src={GatorLogo}
            alt="Florida Gators logo"
          />
        </div>
        <div className="nine columns main-col">
          <div className="row item">
            <div className="twelve columns">{education}</div>
          </div>
        </div>
      </div>

      <div className="row work">
        <div className="twelve columns header-col">
          <h1>
            <span>Work</span>
          </h1>
        </div>
        <div className="three columns Resume-logo">
          <img className="profile-pic" src={VerizonLogo} alt="Verizon logo" />
        </div>
        <div className="nine columns main-col">{work}</div>
      </div>
    </section>
  );
};

export default Resume;
