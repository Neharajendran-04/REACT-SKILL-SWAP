import { NavLink, useNavigate } from 'react-router-dom'
import './Login.css'
import { useState } from 'react'
import { loginApi, getUserByIdApi } from '../services/apiServices'

function Login() {
  const navigate = useNavigate()
  const [details, setDetails] = useState({
    email: "",
    password: ""
  })

  const handleLogin = async (e) => {
    e.preventDefault()
    try {
      const response = await loginApi(details.email)
      if (response.data.length > 0 && response.data[0].password === details.password) {
        const userId = response.data[0].id
        localStorage.setItem('userId', userId)
        const userResponse = await getUserByIdApi(userId)
        const user = userResponse.data
        if (
          !user.location ||
          !user.skillsToTeach?.length ||
          !user.skillsToLearn?.length
        ) {
          navigate('/profile')
        } else {
          navigate('/dashboard')
        }
      } else {
        alert('Invalid email or password.')
      }
    } catch (error) {
      alert('Unable to login. Please try again.')
    }

  }

  return (
    <section className="login-section">
      <div className="container">
        <div className="row align-items-center justify-content-center g-5">
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

              <form onSubmit={handleLogin}>
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
                    value={details.email}
                    onChange={e => setDetails({ ...details, email: e.target.value })}
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
                    value={details.password}
                    onChange={e => setDetails({ ...details, password: e.target.value })}
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