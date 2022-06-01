// Helper styles for demo
import React from "react";
// import { render } from "react-dom";
import LoginForm from './LoginForm'
import { Routes, Route, Link, BrowserRouter } from "react-router-dom";
import { Home } from './HomeScreen';

const App = () => (
  <div className="app">
  
    <Routes>
      <Route path="/login" element={< LoginForm />}/>
      <Route path="/home" element={<Home/>}/>
    </Routes>
  
    
  </div>
);

export default App;

// render(<App />, document.getElementById("root"));