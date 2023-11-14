import React from 'react'
import {motion} from 'framer-motion';
import DashBoard from '../components/dash';
import { useState } from 'react';
import Product from '../components/product';
import Displaypro from '../components/displaypro';
import Cal from '../components/calendar';





function Dash() {
    const [employee, setEmployee] = useState([]);
    const removeFromDom = employeeId => {
        setEmployee(employee.filter(employee => employee._id !== employeeId));
    }
    const [product, setProduct] = useState([]);
    const removeDom = productId => {
        setProduct(product.filter(product => product._id !== productId));
    }
  return (
    <motion.div
    initial={{opacity:0}}
    animate={{opacity:1}}
    exit={{opacity:0}}>
        <DashBoard 
        employee={employee} setEmployee={setEmployee} removeFromDom={removeFromDom}/>
        <Product/>
        <Displaypro product={product} setProduct={setProduct} removeDom={removeDom}/>
        <Cal/>

    </motion.div>
  )
}



export default Dash