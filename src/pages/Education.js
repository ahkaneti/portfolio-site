import React from 'react';
import Sidebar from '../components/sidebar';
import Logos from '../components/Logos';
import '../styles/App.css';

function Education()
{
  return(
    <div className="App">
      <Sidebar/>
      <div className='midpart'></div>
      <Logos/>
    </div>
  );
}
export default Education;