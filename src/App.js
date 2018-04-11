import React, { Component } from 'react';

import routes from './routes';
import Header from './components/header/Header';

import './base.css';
import './App.css';

import axios from 'axios';

if (process.env.NODE_ENV === 'production'){
	axios.defaults.baseURL = 'https://houser.devmountain.com/v2/part2/'
}

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        {routes}
      </div>
    );
  }
}

export default App;
