import React from 'react'
import {motion} from 'framer-motion';
import Login from '../components/login';
import Register from '../components/register';



function Login() {
  return (
    <motion.div
    initial={{opacity:0}}
    animate={{opacity:1}}
    exit={{opacity:0}}>
        <Register/>
        <Login/>

    </motion.div>
  )
}



export default Login