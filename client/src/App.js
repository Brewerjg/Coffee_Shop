import React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';

import AnimatedRoutes from './components/AnimatedRoutes';


function App() {
  return (
    <div>
    	<BrowserRouter>
        <Routes location={location} key={location.pathname}>
            <Route element={<Main/>} path="/" default/>  
            <Route element={<Menu/>} path="/menu" />
            <Route element={<TruckMap/>} path="/location" />
            <Route element={<About/>} path="/about" />
            <Route element={<Login/>} path="/login" />
            <Route element={<Dash/>} path="/dashboard" />
            <Route element={<Register/>} path="/register" />
            <Route element={<Update/>} path="/employee/:id"/>
        </Routes>
    	</BrowserRouter>
        </div>
  );
}

export default App;
