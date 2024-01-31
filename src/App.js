import './App.css';
import NewsC from './Components/NewsC';
import Navbar from './Components/Navbar';
import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,

} from 'react-router-dom';
import About from  './Components/About';
export default function App() {
  // let Apikey = process.env.REACT_APP_NewsApi;
  let Apikey = "405fa8956bd04ba99283baa26be6ea8d"
  return (
    <div  >
      <Router>
        <Navbar />
        <Routes>
       
          <Route exact path="/" element={<NewsC apikey={Apikey}  key="a" pagesize={16} category="general" />} />
          <Route exact path="/about" element={<About/>} />
          <Route exact path="/general" element={<NewsC apikey={Apikey}  key="b" pagesize={16}  category="general" />} />
          <Route exact path="/business" element={<NewsC apikey={Apikey} key="c"  pagesize={16} category="business" />} />
          <Route exact path="/sports" element={<NewsC  apikey={Apikey} key="d" pagesize={16}  category="sports" />} />
          <Route exact path="/technology" element={<NewsC apikey={Apikey}  key="e" pagesize={16} category="technology" />} />
          <Route exact path="/health" element={<NewsC apikey={Apikey}  key="f" pagesize={16} category="health" />} />
          <Route exact path="/entertainment" element={<NewsC apikey={Apikey}  key="g" pagesize={16}  category="entertainment" />} />
          <Route exact path="/science" element={<NewsC apikey={Apikey}   key="h" pagesize={16} category="science" />} />
        
        </Routes>
      </Router>
    </div>
  );
}
