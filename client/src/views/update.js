import React from 'react'
import {motion} from 'framer-motion';
import { useState } from 'react';
import Update from '../components/update';






function Dash() {
    const [employee, setEmployee] = useState([]);
    const removeFromDom = employeeId => {
        setEmployee(employee.filter(employee => employee._id !== employeeId));
    }
  return (
    <motion.div
    initial={{opacity:0}}
    animate={{opacity:1}}
    exit={{opacity:0}}>
        <Update employee={employee} setEmployee={setEmployee} removeFromDom={removeFromDom}/>
    </motion.div>
  )
}



export default Dash