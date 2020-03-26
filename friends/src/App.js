import React from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import './App.css';
import Login from "./components/Login";
import PrivateRoute from './components/PrivateRoute';
import FriendsList from './components/FriendsList';

function App() {
  return (
    <Router>
      <div className="App">
        <Route path="/login" component={Login}/>
        <PrivateRoute exact path="/friends-list" component={FriendsList}/>
      </div>
    </Router>
  );
}

export default App;
