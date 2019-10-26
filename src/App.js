import React from 'react';
import { Route } from 'react-router-dom'
import './App.css';

import DashBorad from './Page/Dashborad'
import Sidebar from './Component/Sidebar'

function App() {
  return (
    <div className="App">
      <div className="App container">
        <Route path="/" component={DashBorad} exact/>
        <Route path="/Sidebar" component={Sidebar} />
      </div>
    </div>
  );
}

export default App;
