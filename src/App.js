import './App.css';
import NavigationBar from './navigationBar/NavigationBar';
import ImgMediaCard from './homepageCard';
import Button from '@mui/material/Button';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Article from './Article';
import Detect from './Detect';

function App() {
  return (
    <BrowserRouter>
      <div className="homepage-text">
        <NavigationBar />
        <ImgMediaCard />
        <h1 className="title">We understand the riskiness of Internet scams</h1>
        <p className="content">Phishing scams are a very dangerous form of cybercrime that aims to trick people into entering sensitive personal information such as account numbers, passwords, bank card numbers, social security numbers, etc. by spoofing legitimate websites.</p>
        <Link to="/Article"><Button variant="outlined" >Learn More About Internet Fraud</Button></Link>
        <Link to="/Detect"><Button variant="outlined" >Detect Web URL for free</Button></Link>
      </div>
      <Routes>
        <Route path="/Article" element={<Article />} />
        <Route path="/Detect" element={<Detect />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
