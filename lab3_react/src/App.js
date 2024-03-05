import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Navigation from './components/Navigation';
import SportsNews from './components/SportsNews';
import BusinessNews from './components/BusinessNews';
import TechNews from './components/TechNews';
import ScienceNews from './components/ScienceNews';
import Home from "./components/Home";
import './App.css';

const App = () => {
    return (
        <Router>
            <div>
                <Header /> 
                <Navigation />
                <div className="content">
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/sports" element={<SportsNews />} />
                        <Route path="/business" element={<BusinessNews />} />
                        <Route path="/tech" element={<TechNews />} />
                        <Route path="/science" element={<ScienceNews />} />
                    </Routes>
                </div>
            </div>
        </Router>
    );
};

export default App;
