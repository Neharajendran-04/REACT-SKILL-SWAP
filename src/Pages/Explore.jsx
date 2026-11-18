import { NavLink } from 'react-router-dom'
import Header from '../Components/Header'
import './Explore.css'

function Explore() {
  return (
    <>
      <Header />

      <section className="explore-section">
        <div className="container">

          {/* Page Header */}
          <div className="explore-header">
            <div>
              <p className="explore-label">DISCOVER SKILLS</p>

              <h1 className="explore-title">
                Find something
                <br />
                <span>worth learning.</span>
              </h1>

              <p className="explore-subtitle">
                Explore skills shared by people in the SkillSwap community
                and find someone who can teach you something new.
              </p>
            </div>

            <div className="explore-header-note">
              <span>✦</span>
              <p>
                Everyone has something
                <br />
                worth sharing.
              </p>
            </div>
          </div>

          {/* Search + Filters */}
          <div className="explore-tools">

            <div className="explore-search">
              <span className="search-icon">⌕</span>

              <input
                type="text"
                placeholder="Search for a skill or person..."
              />
            </div>

            <div className="explore-filters">
              <button className="filter-btn active">
                All
              </button>

              <button className="filter-btn">
                Programming
              </button>

              <button className="filter-btn">
                Design
              </button>

              <button className="filter-btn">
                Languages
              </button>

              <button className="filter-btn">
                Music
              </button>

              <button className="filter-btn">
                Business
              </button>
            </div>

          </div>

          {/* Results Header */}
          <div className="explore-results-header">
            <div>
              <p className="results-label">SKILL COMMUNITY</p>
              <h2>People you might learn from</h2>
            </div>

            <span className="results-count">
              6 people
            </span>
          </div>

          {/* People Grid */}
          <div className="row g-4">

            {/* Person 1 */}
            <div className="col-md-6 col-xl-4">
              <div className="person-card">

                <div className="person-top">
                  <div className="person-avatar avatar-coral">
                    A
                  </div>

                  <div>
                    <h3>Asha Menon</h3>
                    <p>Kochi, Kerala</p>
                  </div>
                </div>

                <div className="person-skills">

                  <div className="skill-group">
                    <span className="skill-group-label">TEACHES</span>

                    <div className="skill-tags">
                      <span>Photography</span>
                      <span>Lightroom</span>
                    </div>
                  </div>

                  <div className="skill-group">
                    <span className="skill-group-label">
                      WANTS TO LEARN
                    </span>

                    <div className="skill-tags wanted">
                      <span>JavaScript</span>
                      <span>Excel</span>
                    </div>
                  </div>

                </div>

                <NavLink to="/profile" className="person-btn">
                  View Profile
                  <span>→</span>
                </NavLink>

              </div>
            </div>

            {/* Person 2 */}
            <div className="col-md-6 col-xl-4">
              <div className="person-card">

                <div className="person-top">
                  <div className="person-avatar avatar-sand">
                    R
                  </div>

                  <div>
                    <h3>Rahul Mathew</h3>
                    <p>Bengaluru, India</p>
                  </div>
                </div>

                <div className="person-skills">

                  <div className="skill-group">
                    <span className="skill-group-label">TEACHES</span>

                    <div className="skill-tags">
                      <span>Excel</span>
                      <span>Business</span>
                    </div>
                  </div>

                  <div className="skill-group">
                    <span className="skill-group-label">
                      WANTS TO LEARN
                    </span>

                    <div className="skill-tags wanted">
                      <span>Photography</span>
                      <span>Guitar</span>
                    </div>
                  </div>

                </div>

                <NavLink to="/profile" className="person-btn">
                  View Profile
                  <span>→</span>
                </NavLink>

              </div>
            </div>

            {/* Person 3 */}
            <div className="col-md-6 col-xl-4">
              <div className="person-card">

                <div className="person-top">
                  <div className="person-avatar avatar-teal">
                    K
                  </div>

                  <div>
                    <h3>Keerthi Shah</h3>
                    <p>Mumbai, India</p>
                  </div>
                </div>

                <div className="person-skills">

                  <div className="skill-group">
                    <span className="skill-group-label">TEACHES</span>

                    <div className="skill-tags">
                      <span>UI/UX Design</span>
                      <span>Figma</span>
                    </div>
                  </div>

                  <div className="skill-group">
                    <span className="skill-group-label">
                      WANTS TO LEARN
                    </span>

                    <div className="skill-tags wanted">
                      <span>Spanish</span>
                      <span>Photography</span>
                    </div>
                  </div>

                </div>

                <NavLink to="/profile" className="person-btn">
                  View Profile
                  <span>→</span>
                </NavLink>

              </div>
            </div>

            {/* Person 4 */}
            <div className="col-md-6 col-xl-4">
              <div className="person-card">

                <div className="person-top">
                  <div className="person-avatar avatar-sand">
                    S
                  </div>

                  <div>
                    <h3>Sarah Thomas</h3>
                    <p>Chennai, India</p>
                  </div>
                </div>

                <div className="person-skills">

                  <div className="skill-group">
                    <span className="skill-group-label">TEACHES</span>

                    <div className="skill-tags">
                      <span>Spanish</span>
                      <span>English</span>
                    </div>
                  </div>

                  <div className="skill-group">
                    <span className="skill-group-label">
                      WANTS TO LEARN
                    </span>

                    <div className="skill-tags wanted">
                      <span>UI/UX Design</span>
                      <span>Figma</span>
                    </div>
                  </div>

                </div>

                <NavLink to="/profile" className="person-btn">
                  View Profile
                  <span>→</span>
                </NavLink>

              </div>
            </div>

            {/* Person 5 */}
            <div className="col-md-6 col-xl-4">
              <div className="person-card">

                <div className="person-top">
                  <div className="person-avatar avatar-coral">
                    V
                  </div>

                  <div>
                    <h3>Vishnu Raj</h3>
                    <p>Kozhikode, Kerala</p>
                  </div>
                </div>

                <div className="person-skills">

                  <div className="skill-group">
                    <span className="skill-group-label">TEACHES</span>

                    <div className="skill-tags">
                      <span>Guitar</span>
                      <span>Music Theory</span>
                    </div>
                  </div>

                  <div className="skill-group">
                    <span className="skill-group-label">
                      WANTS TO LEARN
                    </span>

                    <div className="skill-tags wanted">
                      <span>JavaScript</span>
                      <span>Photography</span>
                    </div>
                  </div>

                </div>

                <NavLink to="/profile" className="person-btn">
                  View Profile
                  <span>→</span>
                </NavLink>

              </div>
            </div>

            {/* Person 6 */}
            <div className="col-md-6 col-xl-4">
              <div className="person-card">

                <div className="person-top">
                  <div className="person-avatar avatar-teal">
                    N
                  </div>

                  <div>
                    <h3>Nisha Kapoor</h3>
                    <p>Delhi, India</p>
                  </div>
                </div>

                <div className="person-skills">

                  <div className="skill-group">
                    <span className="skill-group-label">TEACHES</span>

                    <div className="skill-tags">
                      <span>JavaScript</span>
                      <span>React</span>
                    </div>
                  </div>

                  <div className="skill-group">
                    <span className="skill-group-label">
                      WANTS TO LEARN
                    </span>

                    <div className="skill-tags wanted">
                      <span>Guitar</span>
                      <span>Spanish</span>
                    </div>
                  </div>

                </div>

                <NavLink to="/profile" className="person-btn">
                  View Profile
                  <span>→</span>
                </NavLink>

              </div>
            </div>

          </div>

        </div>
      </section>
    </>
  )
}

export default Explore