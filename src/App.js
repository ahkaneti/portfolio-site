import React, { useState, useEffect} from 'react';
import pic from './assets/profile_pic.jpg';
import './styles/App.css';
import Sidebar from './components/sidebar';
import 'bootstrap/dist/css/bootstrap.min.css';
import Logos from './components/Logos';
import Home from './pages/Home';
import Resume from './pages/Resume';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';




function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route exact path="/resume" component={Resume}/>
      </Switch>
    </Router>
      // <div className="App" activeKey='/home'>
      //   <Sidebar />
      //   <div className="midpart">
      //     <div 
      //     className="pro_pic_holder">
      //       <img className={"pro_pic"} src={pic} alt='professional_pic'/>
      //       <div className="welcome_text"><p styles={{fontFamily: "Montserrat"}}></p></div>
      //     </div>
          
      //     Hi, I am <span>Aaron Kaneti, developer, student</span> 
      //     <div className="expertise">
      //       <ul>
      //         <li>JavaScript</li>
      //         <li>React</li>
      //         <li>HTML</li>
      //       </ul>
      //       </div> 
      //   </div>
      //   <Logos/>
      // </div> 
  );
}

export default App;
