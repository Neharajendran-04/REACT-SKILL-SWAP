import { NavLink } from 'react-router-dom'
import './Header.css'

function Header() {
  return (
    <nav className="navbar navbar-expand-lg skill-navbar">
      <div className="container">

        {/* Logo */}
        <NavLink to="/" className="navbar-brand skill-logo">
          Skill<span>Swap</span>
        </NavLink>


        {/* Mobile Toggle */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#mainNavbar"
          aria-controls="mainNavbar"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>


        {/* Navbar Content */}
        <div className="collapse navbar-collapse" id="mainNavbar">

          {/* Navigation Links */}
          <ul className="navbar-nav mx-auto">

            <li className="nav-item">
              <NavLink
                to="/"
                className="nav-link skill-nav-link"
              >
                Home
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink
                to="/explore"
                className="nav-link skill-nav-link"
              >
                Explore
              </NavLink>
            </li>

            <li className="nav-item">
              <a
                href="/#how-it-works"
                className="nav-link skill-nav-link"
              >
                How It Works
              </a>
            </li>

          </ul>


          {/* Right Side */}
          <div className="d-flex align-items-center gap-3">

            <NavLink
              to="/login"
              className="skill-login"
            >
              Login
            </NavLink>

            <NavLink
              to="/register"
              className="btn skill-btn"
            >
              Get Started
            </NavLink>

          </div>

        </div>
      </div>
    </nav>
  )
}

export default Header