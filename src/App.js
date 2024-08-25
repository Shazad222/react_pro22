// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Signup } from './utils/utils.js';  // Adjust the path if necessary
import DisplayData from './utils/DisplayData.js';  // Import the display data component
import Login from './utils/Login.js';  // Import the login component

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/display-data" element={<DisplayData />} />
      </Routes>
    </Router>
  );
}

export default App;
