import "./App.css";
import React from "react";
import './App.css';
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './components/Pages/Home';
import About from './components/Pages/About';
import ProjectDescription from './components/Pages/ProjectDescription';
import Help from './components/Pages/Help'

function App() {
  return (
    <div className="App">
      <Router> 
      <Navbar />
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/about' component={About} />
        <Route path='/projectDescription' component={ProjectDescription} />
        <Route path='/help' component={Help} />
      </Switch>
      </Router> 
    </div>
  );
}

export default App;
