import React from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';

//Pages
import Home from './pages/Home';
import Resume from './pages/Resume';
import AboutMe from './pages/AboutMe';

//Handlers
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';




function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route exact path="/resume" component={Resume}/>
        <Route exact path="/aboutme" component={AboutMe}/>
      </Switch>
    </Router>
  );
}

export default App;
