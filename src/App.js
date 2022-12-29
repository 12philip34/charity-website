import './App.css'
import Navbar from './Components/Navbar'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./Pages/HomePage";
import Footer from "./Components/Footer";

function App() {
  return (
    <div className="App">
        <BrowserRouter>
            <Navbar />
            <Routes>
                <Route path='/' exact element={<HomePage />}/>
            </Routes>
            <Footer />
        </BrowserRouter>
    </div>
  );
}

export default App;
