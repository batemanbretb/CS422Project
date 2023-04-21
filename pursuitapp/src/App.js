import logo from './logo.svg';
import './App.css';

import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Home from "./pages/home/Home";
import Activity from "./pages/activity/Activity";
import Explore from "./pages/explore/Explore";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/Explore" element={<Explore/>}/>
        <Route path="/Explore/:id" element={<Activity/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;