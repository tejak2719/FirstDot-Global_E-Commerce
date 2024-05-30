import { Link } from 'react-router-dom';
import './index.css'
const HomeNavbar =()=>{
  return (
    <div>
      <nav className='nav-bar-container'>
        <img src="https://res.cloudinary.com/drw030kab/image/upload/v1715014815/f3s2oy4jj11gqyjakug5.jpg" height="50px" width="70px" alt="logo"/>
        <ul className="nav-items-container">
          <li className='nav-items'>
            <Link to="/">Home</Link>
          </li>
          <li className='nav-items'>
            <Link to="/About">About</Link>
          </li>
          <li className='nav-items'>
            <Link to="/signup">SignUp</Link>
          </li>
          
          <li className='nav-items'>
            <Link to="/login">Login</Link>
          </li>
          <li className='nav-items'>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default HomeNavbar;