import { NavLink } from 'react-router-dom'
import './Dashboard.css'

function Dashboard() {
  return (
    <section className="dashboard-section">

      <div className="container">

        {/* Dashboard Header */}
        <div className="dashboard-header">

          <div>
            <p className="dashboard-label">
              YOUR DASHBOARD
            </p>

            <h1 className="dashboard-title">
              Good morning, <span>Alex.</span>
            </h1>

            <p className="dashboard-subtitle">
              Here's what's happening with your skill swaps.
            </p>
          </div>

          <NavLink
            to="/explore"
            className="btn dashboard-explore-btn"
          >
            Explore Skills →
          </NavLink>

        </div>


        {/* Stats */}
        <div className="row g-4 dashboard-stats">

          <div className="col-md-4">
            <div className="dashboard-stat">

              <div className="stat-top">
                <span className="stat-number-small">
                  01
                </span>

                <span className="stat-symbol">
                  ↗
                </span>
              </div>

              <span className="stat-label">
                SKILLS I TEACH
              </span>

              <strong>
                3
              </strong>

              <span className="stat-link">
                View skills →
              </span>

            </div>
          </div>


          <div className="col-md-4">
            <div className="dashboard-stat dashboard-stat-sand">

              <div className="stat-top">
                <span className="stat-number-small">
                  02
                </span>

                <span className="stat-symbol">
                  +
                </span>
              </div>

              <span className="stat-label">
                SKILLS I WANT
              </span>

              <strong>
                2
              </strong>

              <span className="stat-link">
                Find people →
              </span>

            </div>
          </div>


          <div className="col-md-4">
            <div className="dashboard-stat dashboard-stat-accent">

              <div className="stat-top">
                <span className="stat-number-small">
                  03
                </span>

                <span className="stat-symbol">
                  ↔
                </span>
              </div>

              <span className="stat-label">
                PENDING REQUESTS
              </span>

              <strong>
                2
              </strong>

              <span className="stat-link">
                View requests →
              </span>

            </div>
          </div>

        </div>


        {/* Main Dashboard */}
        <div className="row g-4 dashboard-main">

          {/* My Skills */}
          <div className="col-lg-7">

            <div className="dashboard-card">

              <div className="dashboard-card-header">

                <div>
                  <p className="card-label">
                    MY SKILLS
                  </p>

                  <h2>
                    What I can teach
                  </h2>
                </div>

                <NavLink to="/profile">
                  Edit profile
                </NavLink>

              </div>


              <div className="my-skills-list">

                <div className="my-skill">

                  <div className="skill-icon">
                    &lt;/&gt;
                  </div>

                  <div>
                    <h3>
                      JavaScript
                    </h3>

                    <p>
                      Web development
                    </p>
                  </div>

                  <span className="skill-level">
                    Intermediate
                  </span>

                </div>


                <div className="my-skill">

                  <div className="skill-icon skill-icon-coral">
                    ✦
                  </div>

                  <div>
                    <h3>
                      UI / UX Design
                    </h3>

                    <p>
                      Figma & interface design
                    </p>
                  </div>

                  <span className="skill-level">
                    Intermediate
                  </span>

                </div>


                <div className="my-skill">

                  <div className="skill-icon skill-icon-sand">
                    +
                  </div>

                  <div>
                    <h3>
                      Excel
                    </h3>

                    <p>
                      Spreadsheets & formulas
                    </p>
                  </div>

                  <span className="skill-level">
                    Beginner
                  </span>

                </div>

              </div>

            </div>

          </div>


          {/* Want to Learn */}
          <div className="col-lg-5">

            <div className="dashboard-card learn-card">

              <div className="dashboard-card-header">

                <div>
                  <p className="card-label">
                    I WANT TO LEARN
                  </p>

                  <h2>
                    Skills I'm looking for
                  </h2>
                </div>

              </div>


              <div className="learn-tags">

                <span>
                  Photography
                </span>

                <span>
                  Guitar
                </span>

                <span>
                  Spanish
                </span>

                <span>
                  Public Speaking
                </span>

              </div>

              <NavLink
                to="/explore"
                className="learn-link"
              >
                Find someone to teach you →
              </NavLink>

            </div>

          </div>

        </div>


        {/* Suggested People */}
        <div className="dashboard-section-heading">

          <div>
            <p className="card-label">
              POSSIBLE MATCHES
            </p>

            <h2>
              People you might learn from
            </h2>
          </div>

          <NavLink to="/explore">
            View all →
          </NavLink>

        </div>


        <div className="row g-4">

          <div className="col-md-4">

            <div className="person-card">

              <div className="person-avatar">
                AS
              </div>

              <h3>
                Asha Menon
              </h3>

              <p className="person-location">
                Kochi, Kerala
              </p>

              <div className="person-skills">
                <span>Guitar</span>
                <span>Music</span>
              </div>

              <button className="person-btn">
                View Profile →
              </button>

            </div>

          </div>


          <div className="col-md-4">

            <div className="person-card">

              <div className="person-avatar person-avatar-coral">
                RM
              </div>

              <h3>
                Rahul Mathew
              </h3>

              <p className="person-location">
                Bengaluru, India
              </p>

              <div className="person-skills">
                <span>Photography</span>
                <span>Editing</span>
              </div>

              <button className="person-btn">
                View Profile →
              </button>

            </div>

          </div>


          <div className="col-md-4">

            <div className="person-card">

              <div className="person-avatar person-avatar-sand">
                KS
              </div>

              <h3>
                Keerthi Shah
              </h3>

              <p className="person-location">
                Mumbai, India
              </p>

              <div className="person-skills">
                <span>Spanish</span>
                <span>Languages</span>
              </div>

              <button className="person-btn">
                View Profile →
              </button>

            </div>

          </div>

        </div>


        {/* Recent Requests */}
        <div className="dashboard-section-heading requests-heading">

          <div>
            <p className="card-label">
              RECENT ACTIVITY
            </p>

            <h2>
              Swap requests
            </h2>
          </div>

          <NavLink to="/requests">
            View all →
          </NavLink>

        </div>


        <div className="requests-card">

          <div className="request-row">

            <div className="request-avatar">
              AS
            </div>

            <div className="request-info">
              <h3>
                Asha wants to swap skills
              </h3>

              <p>
                Guitar ↔ JavaScript
              </p>
            </div>

            <span className="request-status pending">
              Pending
            </span>

          </div>


          <div className="request-row">

            <div className="request-avatar request-avatar-coral">
              RM
            </div>

            <div className="request-info">
              <h3>
                You sent Rahul a request
              </h3>

              <p>
                Photography ↔ UI / UX Design
              </p>
            </div>

            <span className="request-status accepted">
              Accepted
            </span>

          </div>

        </div>

      </div>

    </section>
  )
}

export default Dashboard