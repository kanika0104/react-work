
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

import {BrowserRouter as Router,Routes,Route} from "react-router-dom";
import { Fragment } from 'react';
import Home from './Components/Home';
import About from './Components/About';
import Blog from './Components/Blog';
import Contact from './Components/Contact';

function App() {
  return (
   <Fragment>
     <Router>
     <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/about" element={<About/>} />
      <Route path="/blog" element={<Blog/>}/>
     <Route path="/contact" element={<Contact/>}/>
     </Routes>
     </Router>
   </Fragment>
  );
}

export default App;
