import { NavLink } from 'react-router-dom'
import './Register.css'

function Register() {
  return (
    <section className="register-section">

      <div className="container">
        <div className="row align-items-center justify-content-center g-5">

          {/* Left Content */}
          <div className="col-lg-5">

            <div className="register-intro">

              <p className="register-label">
                JOIN SKILLSWAP
              </p>

              <h1 className="register-title">
                Learn something.
                <br />
                <span>Teach something.</span>
              </h1>

              <p className="register-text">
                Create your profile and start connecting with people
                who want to exchange skills just like you.
              </p>

              <div className="register-points">

                <div className="register-point">
                  <span>01</span>
                  <p>Share the skills you already know.</p>
                </div>

                <div className="register-point">
                  <span>02</span>
                  <p>Discover skills you want to learn.</p>
                </div>

                <div className="register-point">
                  <span>03</span>
                  <p>Connect and start swapping.</p>
                </div>

              </div>

            </div>

          </div>


          {/* Register Form */}
          <div className="col-lg-5">

            <div className="register-card">

              <div className="register-card-header">
                <p className="register-card-label">
                  CREATE ACCOUNT
                </p>

                <h2>
                  Get started
                </h2>

                <p>
                  It only takes a minute.
                </p>
              </div>


              <form>

                {/* Full Name */}
                <div className="mb-3">
                  <label
                    htmlFor="name"
                    className="form-label"
                  >
                    Full Name
                  </label>

                  <input
                    type="text"
                    className="form-control skill-input"
                    id="name"
                    placeholder="Enter your name"
                  />
                </div>


                {/* Email */}
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


                {/* Password */}
                <div className="mb-3">
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
                    placeholder="Create a password"
                  />
                </div>


                {/* Confirm Password */}
                <div className="mb-4">
                  <label
                    htmlFor="confirmPassword"
                    className="form-label"
                  >
                    Confirm Password
                  </label>

                  <input
                    type="password"
                    className="form-control skill-input"
                    id="confirmPassword"
                    placeholder="Confirm your password"
                  />
                </div>


                <button
                  type="submit"
                  className="btn register-btn w-100"
                >
                  Create Account
                </button>

              </form>


              <div className="register-login">
                <span>
                  Already have an account?
                </span>

                <NavLink to="/login">
                  Login
                </NavLink>
              </div>

            </div>

          </div>

        </div>
      </div>

    </section>
  )
}

export default Register