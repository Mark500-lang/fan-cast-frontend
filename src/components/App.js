import React from 'react';
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from './common/Layout.js';
import Home from './Home'
import SignUp from './SignUp.js';

function App() {
  return (
    <BrowserRouter>
          <Routes >
            <Route path="/" element={<Layout/>}>
              <Route index element={<Home/>}/>
              <Route path='/SignUp' element={<SignUp/>}/>
            </Route >
          </Routes>
      </BrowserRouter>
  );
  
}

export default App;
