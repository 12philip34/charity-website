import Navbar from './Components/Navbar'
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./Pages/HomePage";
import Footer from "./Components/Footer";
import Events from "./Pages/Events";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import Blog from "./Pages/Blog";
import Donation from "./Pages/Donation";


function App() {
  return (
    <div className="App">
        <BrowserRouter>
            <Navbar />
            <Routes>
                <Route path='/' exact element={<HomePage />}/>
                <Route path='/donation' element={<Donation />}/>
                <Route path='/event' element={<Events />}/>
                <Route path='/blog' element={<Blog />}/>
                <Route path='/about' element={<About />}/>
                <Route path='/contact' element={<Contact />}/>
            </Routes>
            <Footer />
        </BrowserRouter>
    </div>
  );
}

export default App;
