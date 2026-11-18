import { NavLink } from 'react-router-dom'
import './Footer.css'

function Footer() {
  return (
    <footer className="footer-section">

      <div className="container">

        <div className="row g-5">

          {/* Brand */}
          <div className="col-lg-5">

            <NavLink to="/" className="footer-logo">
              Skill<span>Swap</span>
            </NavLink>

            <p className="footer-description">
              Learn something new. Teach what you know.
              Connect with people who want to swap skills.
            </p>

            <NavLink to="/register" className="footer-cta">
              Start swapping
              <span>→</span>
            </NavLink>

          </div>

          {/* Explore */}
          <div className="col-6 col-lg-2">

            <h3 className="footer-heading">
              Explore
            </h3>

            <ul className="footer-links">
              <li>
                <NavLink to="/">
                  Home
                </NavLink>
              </li>

              <li>
                <NavLink to="/explore">
                  Explore Skills
                </NavLink>
              </li>

              <li>
                <a href="/#how-it-works">
                  How It Works
                </a>
              </li>
            </ul>

          </div>

          {/* Account */}
          <div className="col-6 col-lg-2">

            <h3 className="footer-heading">
              Account
            </h3>

            <ul className="footer-links">
              <li>
                <NavLink to="/login">
                  Login
                </NavLink>
              </li>

              <li>
                <NavLink to="/register">
                  Register
                </NavLink>
              </li>
            </ul>

          </div>

          {/* Project */}
          <div className="col-6 col-lg-3">

            <h3 className="footer-heading">
              SkillSwap
            </h3>

            <p className="footer-small-text">
              A simple way to exchange knowledge,
              discover new skills, and learn from each other.
            </p>

          </div>

        </div>

        {/* Bottom */}
        <div className="footer-bottom">

          <p>
            © 2026 SkillSwap. Built for learning and sharing.
          </p>

          <div className="footer-bottom-links">
            <span>
              Learn
            </span>

            <span>•</span>

            <span>
              Teach
            </span>

            <span>•</span>

            <span>
              Swap
            </span>
          </div>

        </div>

      </div>

    </footer>
  )
}

export default Footer