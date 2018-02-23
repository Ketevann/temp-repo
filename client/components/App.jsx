/*
    ./client/components/App.jsx
*/
import React from 'react';
import Dashboard from './Dashboard.component';
import './App.css';

export default class App extends React.Component {
  render() {
    return (
     <div className="App" >
        <Dashboard/>
      </div>);
  }
}