import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from './components/Home';

import './App.css';

function App() {
  return (
    <Router>
      <div className="App">

        <Route exact path='/' component={Home} />

      </div>
    </Router>
  );
}

export default App;
