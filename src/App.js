import './App.css'
import Navbar from './Components/Navbar'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./Pages/HomePage";

function App() {
  return (
    <div className="App">
        <BrowserRouter>
            <Navbar />
            <Routes>
                <Route path='/' exact element={<HomePage />}/>
            </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
