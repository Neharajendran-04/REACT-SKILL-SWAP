import { NavLink } from 'react-router-dom'
import './Login.css'

function Login() {
  return (
    <section className="login-section">

      <div className="container">
        <div className="row align-items-center justify-content-center g-5">

          {/* Left Content */}
          <div className="col-lg-5">
            <div className="login-intro">

              <p className="login-label">
                WELCOME BACK
              </p>

              <h1 className="login-title">
                Your skills are
                <br />
                <span>waiting for you.</span>
              </h1>

              <p className="login-text">
                Sign in to explore new skills, manage your profile,
                and connect with people ready to swap knowledge.
              </p>

              <div className="login-points">

                <div className="login-point">
                  <span>01</span>
                  <p>Discover people with skills you want to learn.</p>
                </div>

                <div className="login-point">
                  <span>02</span>
                  <p>Share your knowledge with the community.</p>
                </div>

                <div className="login-point">
                  <span>03</span>
                  <p>Keep track of your swap requests.</p>
                </div>

              </div>

            </div>
          </div>

          {/* Login Form */}
          <div className="col-lg-5">
            <div className="login-card">

              <div className="login-card-header">

                <p className="login-card-label">
                  SIGN IN
                </p>

                <h2>
                  Welcome back
                </h2>

                <p>
                  Enter your details to continue.
                </p>

              </div>

              <form>

                <div className="mb-3">
                  <label
                    htmlFor="email"
                    className="form-label"
                  >
                    Email Address
                  </label>

                  <input
                    type="email"
                    className="form-control skill-input"
                    id="email"
                    placeholder="Enter your email"
                  />
                </div>

                <div className="mb-4">
                  <label
                    htmlFor="password"
                    className="form-label"
                  >
                    Password
                  </label>

                  <input
                    type="password"
                    className="form-control skill-input"
                    id="password"
                    placeholder="Enter your password"
                  />
                </div>

                <button
                  type="submit"
                  className="btn login-btn w-100"
                >
                  Login
                </button>

              </form>

              <div className="login-register">
                <span>
                  Don't have an account?
                </span>

                <NavLink to="/register">
                  Create one
                </NavLink>
              </div>

            </div>
          </div>

        </div>
      </div>

    </section>
  )
}

export default Login