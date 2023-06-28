// Write your JS code here
import './index.css'
import {Link} from 'react-router-dom'

const Header = () => (
  <nav className="nav-bar">
    <div className="logo-card">
      <img
        src="https://assets.ccbp.in/frontend/react-js/wave-logo-img.png"
        alt="wave"
        className="logo-img"
      />
      <p>Wave</p>
    </div>
    <ul className="nav-list">
      <li>
        <Link to="/" className="list-link">
          Home
        </Link>
      </li>
      <li>
        <Link to="/about" className="list-link">
          About
        </Link>
      </li>
      <li>
        <Link to="/contact" className="list-link">
          Contact
        </Link>
      </li>
    </ul>
  </nav>
)

export default Header
