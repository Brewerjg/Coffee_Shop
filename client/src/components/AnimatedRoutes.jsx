import React from 'react'
import Main from '../views/main';
import Menu from '../views/menu';
import TruckMap from '../views/coffeeTruck';
import About from '../views/about';
import {useLocation, Routes, Route} from 'react-router-dom';
import {AnimatePresence} from 'framer-motion';
import Login from './login';
import Dash from '../views/dash';
import Register from './register';
import Update from './update';
import Product from './product';


function AnimatedRoutes () {
    const location = useLocation();
    

  return (
    <AnimatePresence mode='wait'>
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
    </AnimatePresence>
  )
}

export default AnimatedRoutes