import React from 'react';
import './App.css';
import Details from './Component/Details';
import Login from './Component/Login';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';

function App() {

  return (
    <div >
      <Router>
        <Routes>
          <Route path='/' element={<Login />} />
          <Route path='/details' element={<Details />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
