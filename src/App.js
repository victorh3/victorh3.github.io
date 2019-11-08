import React, { useState } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import About from './components/About';
import Resume from './components/Resume';
import './App.css';
import me from './assets/resumeData';

const App = () => {
  const [resumeData] = useState(me);

  return (
    <div className="App">
      <Header data={resumeData.main} />
      <About data={resumeData.main} />
      <Resume data={resumeData.resume} />
      {/* <Portfolio data={resumeData.portfolio} /> */}
      {/* <Contact data={resumeData.main} /> */}
      <Footer data={resumeData.main} />
    </div>
  );
};

export default App;
