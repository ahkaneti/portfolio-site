import React from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
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
  );
}

export default App;
