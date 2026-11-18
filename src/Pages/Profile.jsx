import { NavLink } from 'react-router-dom'
import DashboardSidebar from '../Components/DashboardSidebar'
import './Profile.css'

function Profile() {
  return (
    <div className="profile-layout">

      <DashboardSidebar />

      <main className="profile-main">
        <section className="profile-section">

          <div className="container">

            {/* Profile Header */}
            <div className="profile-header">

              <div className="profile-identity">

                <div className="profile-avatar">
                  A
                </div>

                <div>
                  <p className="profile-label">MY PROFILE</p>

                  <h1>
                    Alex Thomas
                  </h1>

                  <p className="profile-location">
                    Kochi, Kerala · Joined 2026
                  </p>
                </div>

              </div>

              <button className="profile-edit-btn">
                Edit Profile
              </button>

            </div>

            {/* About + Availability */}
            <div className="row g-4 profile-top-grid">

              <div className="col-lg-8">
                <div className="profile-panel about-panel">

                  <p className="panel-label">ABOUT ME</p>

                  <h2>
                    Curious, creative and
                    <span> always learning.</span>
                  </h2>

                  <p className="about-text">
                    I'm a frontend developer who enjoys building
                    useful things, learning from others and sharing
                    what I know along the way.
                  </p>

                </div>
              </div>

              <div className="col-lg-4">
                <div className="profile-panel availability-panel">

                  <p className="panel-label">AVAILABILITY</p>

                  <div className="availability-status">
                    <span className="availability-dot"></span>
                    Usually available
                  </div>

                  <p>
                    Evenings & weekends
                  </p>

                </div>
              </div>

            </div>

            {/* Skills */}
            <div className="row g-4 profile-skills-grid">

              <div className="col-lg-6">
                <div className="profile-panel skills-panel">

                  <div className="panel-heading">
                    <div>
                      <p className="panel-label">I CAN TEACH</p>
                      <h2>My skills</h2>
                    </div>

                    <span className="skill-count">
                      3 skills
                    </span>
                  </div>

                  <div className="profile-skill-list">

                    <div className="profile-skill">
                      <div className="skill-number">
                        01
                      </div>

                      <div>
                        <strong>JavaScript</strong>
                        <span>Web Development</span>
                      </div>
                    </div>

                    <div className="profile-skill">
                      <div className="skill-number">
                        02
                      </div>

                      <div>
                        <strong>UI/UX Design</strong>
                        <span>Design & Prototyping</span>
                      </div>
                    </div>

                    <div className="profile-skill">
                      <div className="skill-number">
                        03
                      </div>

                      <div>
                        <strong>Excel</strong>
                        <span>Business & Productivity</span>
                      </div>
                    </div>

                  </div>

                  <button className="add-skill-btn">
                    + Add another skill
                  </button>

                </div>
              </div>

              <div className="col-lg-6">
                <div className="profile-panel skills-panel wanted-panel">

                  <div className="panel-heading">
                    <div>
                      <p className="panel-label">I WANT TO LEARN</p>
                      <h2>My interests</h2>
                    </div>

                    <span className="skill-count">
                      3 skills
                    </span>
                  </div>

                  <div className="profile-skill-list">

                    <div className="profile-skill">
                      <div className="skill-number">
                        01
                      </div>

                      <div>
                        <strong>Photography</strong>
                        <span>Creative</span>
                      </div>
                    </div>

                    <div className="profile-skill">
                      <div className="skill-number">
                        02
                      </div>

                      <div>
                        <strong>Guitar</strong>
                        <span>Music</span>
                      </div>
                    </div>

                    <div className="profile-skill">
                      <div className="skill-number">
                        03
                      </div>

                      <div>
                        <strong>Spanish</strong>
                        <span>Languages</span>
                      </div>
                    </div>

                  </div>

                  <button className="add-skill-btn">
                    + Add another skill
                  </button>

                </div>
              </div>

            </div>

            {/* Bottom CTA */}
            <div className="profile-cta">

              <div>
                <p className="cta-label">
                  READY TO SWAP?
                </p>

                <h2>
                  Find someone to learn
                  <span> from.</span>
                </h2>
              </div>

              <NavLink
                to="/explore"
                className="profile-cta-btn"
              >
                Explore Skills
                <span>→</span>
              </NavLink>

            </div>

          </div>

        </section>
      </main>

    </div>
  )
}

export default Profile