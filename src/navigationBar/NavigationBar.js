import './NavigationBar.css';
import { Link } from 'react-router-dom';

const NavigationBar = () =>{
    return (
        <ul>
            <li><Link className="active" to="/">Home</Link></li>
            <li><Link to="/Detect">Detect</Link></li>
            <li><Link to="/Article">Article</Link></li>
            <li><Link to="/Quiz">Quiz</Link></li>
        </ul>
    )
};

export default NavigationBar;