import { NavLink } from 'react-router-dom'
import './Hero.css'

function Hero() {
  return (
    <section className="hero-section">
      <div className="container">
        <div className="row align-items-center hero-content">

          {/* Hero Text */}
          <div className="col-lg-5">
            <p className="hero-label">
              LEARN • TEACH • CONNECT
            </p>

            <h1 className="hero-title">
              Your skills have value.
              <br />
              <span>Share them.</span>
            </h1>

            <p className="hero-text">
              SkillSwap connects people who want to teach what they know
              with people who want to learn something new.
            </p>

            <div className="hero-buttons d-flex flex-wrap gap-3">
              <NavLink
                to="/register"
                className="btn hero-primary-btn"
              >
                Get Started
              </NavLink>

              <NavLink
                to="/explore"
                className="btn hero-secondary-btn"
              >
                Explore Skills
              </NavLink>
            </div>
          </div>


          {/* Hero Visual */}
          <div className="col-lg-7">
            <div className="hero-scene">

              {/* Background Shape */}
              <div className="scene-blob"></div>

              {/* Decorative Ring */}
              <div className="scene-ring"></div>


              {/* Main Swap Card */}
              <div className="swap-card">

                <div className="swap-header">
                  <span className="swap-label">
                    SKILL SWAP
                  </span>

                  <span className="swap-value">
                    1 hour ↔ 1 hour
                  </span>
                </div>


                <div className="swap-people">

                  {/* Person 1 */}
                  <div className="swap-person">
                    <div className="swap-avatar">
                      AS
                    </div>

                    <div className="swap-name">
                      Asha
                    </div>

                    <div className="swap-role">
                      Teaches Guitar
                    </div>
                  </div>


                  {/* Swap Arrow */}
                  <div className="swap-arrow">
                    ↔
                  </div>


                  {/* Person 2 */}
                  <div className="swap-person">
                    <div className="swap-avatar you-avatar">
                      YOU
                    </div>

                    <div className="swap-name">
                      You
                    </div>

                    <div className="swap-role">
                      Teach Excel
                    </div>
                  </div>

                </div>


                {/* Swap Summary */}
                <div className="swap-summary">
                  <span>Skill exchange</span>
                  <strong>Guitar ↔ Excel</strong>
                </div>

              </div>


              {/* Time Credit Card */}
              <div className="float-card credit-card">

                <span className="credit-icon">
                  +
                </span>

                <div>
                  <strong>1 time credit</strong>
                  <small>Earned by teaching</small>
                </div>

              </div>


              {/* Match Card */}
              <div className="float-card match-card">

                <div className="avatar-stack">
                  <span>LR</span>
                  <span>MT</span>
                  <span>KS</span>
                </div>

                <div>
                  <strong>Possible matches</strong>
                  <small>People interested in Excel</small>
                </div>

              </div>


              {/* Skill Chips */}
              <span className="skill-chip chip-ui">
                UI Design
              </span>

              <span className="skill-chip chip-photo">
                Photography
              </span>

              <span className="skill-chip chip-language">
                Languages
              </span>

            </div>
          </div>

        </div>
      </div>
    </section>
  )
}

export default Hero