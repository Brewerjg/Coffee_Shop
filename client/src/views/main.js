import Footer from '../components/Footer';
import HeadingOne from '../components/headingOne';
import Navbar from '../components/navbar';
import {motion} from 'framer-motion';
import Procard from '../components/procard';

function Main() {
  return (
    <motion.div
    initial={{opacity:0}}
    animate={{opacity:1}}
    exit={{opacity:0}}>
      <Navbar/>
      <HeadingOne/>
      <Procard/>
      <Footer/>
    </motion.div>
  );
}

export default Main;