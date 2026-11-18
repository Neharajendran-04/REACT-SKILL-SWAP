import { NavLink } from 'react-router-dom'
import './Register.css'
import { useState } from 'react'
import { getUserApi, setUserApi } from '../services/apiServices'



function Register() {
  const [user, setUser] = useState({ name: "", email: "", password: "", confirmPassword: "" })
  const [passwordError, setPasswordError] = useState('')

  const saveUser = async (e) => {
    e.preventDefault()


    if (user.password !== user.confirmPassword) {
      setPasswordError('Passwords do not match.')
      return
    }


    const newUser = {
      name: user.name,
      email: user.email,
      password: user.password
    }

    try {
      const existingUserResponse = await getUserApi(user.email)
      if (existingUserResponse.data.length > 0) {
        alert('You have already registered. Please login!')
        return
      }
      const response = await setUserApi(newUser)
      if (response.status === 201) {
        alert('Account created successfully!')
      }
    } catch (error) {
      console.log('Something went wrong. Please try again');
    }

  }


  return (
    <section className="register-section">
      <div className="container">
        <div className="row align-items-center justify-content-center g-5">
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


              <form onSubmit={saveUser}>
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
                    value={user.name}
                    onChange={e => setUser({ ...user, name: e.target.value })}
                  />
                </div>

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
                    value={user.email}
                    onChange={e => setUser({ ...user, email: e.target.value })}
                  />
                </div>

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
                    value={user.password}
                    onChange={e => setUser({ ...user, password: e.target.value })}
                  />
                </div>

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
                    value={user.confirmPassword}
                    onChange={e => {
                      const value = e.target.value

                      setUser({
                        ...user,
                        confirmPassword: value
                      })

                      if (user.password !== value) {
                        setPasswordError('Passwords do not match.')
                      } else {
                        setPasswordError('')
                      }
                    }}
                  />

                  {passwordError && (
                    <div className="text-danger mt-2">
                      {passwordError}
                    </div>
                  )}
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