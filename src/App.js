import React from 'react';
import pic from './images/profile_pic.jpg';
import './styles/App.css';
import Sidebar from './components/sidebar';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App" activeKey='/home'>
      {/* <img src={pic} alt='professional_pic'/> */}
      <Sidebar />
    </div>
  );
  // comment
}

export default App;
