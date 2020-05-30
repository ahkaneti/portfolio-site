import React from 'react';
import Sidebar from '../components/sidebar';
import Logos from '../components/Logos';
import '../styles/App.css';
import '../styles/Projects.css';


function Projects()
{
  return(
  <div className="App">
    <Sidebar/>
    <div className="midpart">
      <div className="outer-holder">

      </div>
    </div>
    <Logos/>
  </div>
  );
}

export default Projects;