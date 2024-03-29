import './App.css';

import Navbar from './components/Navbar/Navbar';

import { Routes, Route } from "react-router-dom";
import travel from "./data/db.json";
import TourDetails from "./components/TourDetails/TourDetails";
import Home from './components/home/Home';
function App() {
  return (
    <>
    <Navbar/>
    <Routes>
      <Route path='/' element= {<Home data={travel}/>}/>
      <Route path='/city/:id' element= {<TourDetails data={travel}/>}/>
    </Routes>
    </>
  );
}
export default App;
