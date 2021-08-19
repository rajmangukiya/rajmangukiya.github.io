import React from 'react';
import './App.css';
import { BrowserRouter as Router } from 'react-router-dom'
import logo from './logo.svg'
import Routes from './Routes/Routes';

const App: React.FC = () => {
  return (
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />  
    //   </header>
    // </div>
    <Router>
      <Routes/>
    </Router>
  );
}

export default App;
