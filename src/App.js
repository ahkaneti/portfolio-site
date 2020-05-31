import React from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';

//Pages
import Home from './pages/Home';
import Resume from './pages/Resume';
import AboutMe from './pages/AboutMe';
import Education from './pages/Education';
import Projects from './pages/Projects';
import Sidebar from './components/sidebar';

//Handlers
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';




function App() {
  return (
    <Router>
      <Switch>
        <Sidebar/>
        <Route exact path="/" component={Home}/>
        <Route exact path="/resume" component={Resume}/>
        <Route exact path="/aboutme" component={AboutMe}/>
        <Route exact path="/educationexperience" component={Education} />
        <Route exact path="/projects" component={Projects}/>
      </Switch>
    </Router>
  );
}

export default App;
