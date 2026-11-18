import { NavLink } from 'react-router-dom'
import DashboardSidebar from '../Components/DashboardSidebar'
import './Dashboard.css'

function Dashboard() {
  const userId = localStorage.getItem('userId')
  
  return (
      <div className="dashboard-layout">
         <DashboardSidebar />
          <main className="dashboard-main">
    <section className="dashboard-section">
      <div className="container">
        <div className="dashboard-header">
          <div>
            <p className="dashboard-label">
              YOUR DASHBOARD
            </p>

            <h1 className="dashboard-title">
              Good morning, <span>Alex.</span>
            </h1>

            <p className="dashboard-subtitle">
              Here's what's happening with your skills and swaps.
            </p>
          </div>

          <NavLink
            to="/explore"
            className="dashboard-main-btn"
          >
            Explore Skills
            <span>→</span>
          </NavLink>

        </div>

        <div className="row g-3 dashboard-overview">
          <div className="col-md-4">
            <div className="overview-card">
              <div className="overview-top">
                <span>01</span>
                <span className="overview-icon">
                  ↗
                </span>
              </div>
              <div className="overview-content">
                <strong>3</strong>
                <div>
                  <p>SKILLS I TEACH</p>
                  <span>
                    JavaScript, UI/UX, Excel
                  </span>
                </div>
              </div>
            </div>
          </div>


          <div className="col-md-4">
            <div className="overview-card overview-sand">
              <div className="overview-top">
                <span>02</span>
                <span className="overview-icon">
                  +
                </span>
              </div>

              <div className="overview-content">
                <strong>2</strong>
                <div>
                  <p>SKILLS I WANT</p>
                  <span>
                    Photography, Guitar
                  </span>
                </div>
              </div>
            </div>
          </div>


          <div className="col-md-4">
            <div className="overview-card overview-teal">
              <div className="overview-top">
                <span>03</span>
                <span className="overview-icon">
                  ↔
                </span>
              </div>
              <div className="overview-content">
                <strong>2</strong>
                <div>
                  <p>PENDING REQUESTS</p>
                  <span>
                    Waiting for responses
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>


        <div className="row g-4 dashboard-content">
          <div className="col-lg-7">
            <div className="skills-panel">
              <div className="panel-header">
                <div>
                  <p className="section-label">
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


              <div className="skills-list">
                <div className="skill-row">
                  <div className="skill-symbol">
                    &lt;/&gt;
                  </div>
                  <div className="skill-details">
                    <h3>JavaScript</h3>
                    <p>Web development</p>
                  </div>
                  <span className="skill-level">
                    Intermediate
                  </span>
                </div>


                <div className="skill-row">
                  <div className="skill-symbol symbol-coral">
                    ✦
                  </div>
                  <div className="skill-details">
                    <h3>UI / UX Design</h3>
                    <p>Figma & interface design</p>
                  </div>

                  <span className="skill-level">
                    Intermediate
                  </span>

                </div>


                <div className="skill-row">
                  <div className="skill-symbol symbol-sand">
                    +
                  </div>
                  <div className="skill-details">
                    <h3>Excel</h3>
                    <p>Spreadsheets & formulas</p>
                  </div>
                  <span className="skill-level">
                    Beginner
                  </span>
                </div>
              </div>


              <NavLink
                to="/profile"
                className="add-skill-link"
              >
                + Add another skill
              </NavLink>

            </div>

          </div>

          <div className="col-lg-5">
            <div className="learn-panel">
              <div className="panel-header">
                <div>
                  <p className="section-label">
                    I WANT TO LEARN
                  </p>
                  <h2>
                    Skills I'm looking for
                  </h2>
                </div>
              </div>


              <div className="learn-list">
                <div className="learn-item">
                  <span className="learn-number">
                    01
                  </span>
                  <div>
                    <h3>Photography</h3>
                    <p>Creative</p>
                  </div>
                  <span className="learn-arrow">
                    →
                  </span>
                </div>


                <div className="learn-item">
                  <span className="learn-number">
                    02
                  </span>
                  <div>
                    <h3>Guitar</h3>
                    <p>Music</p>
                  </div>
                  <span className="learn-arrow">
                    →
                  </span>
                </div>


                <div className="learn-item">
                  <span className="learn-number">
                    03
                  </span>
                  <div>
                    <h3>Spanish</h3>
                    <p>Language</p>
                  </div>
                  <span className="learn-arrow">
                    →
                  </span>
                </div>
              </div>


              <NavLink
                to="/explore"
                className="learn-btn"
              >
                Find someone to teach you
                <span>→</span>
              </NavLink>

            </div>

          </div>

        </div>


        <div className="dashboard-heading">
          <div>
            <p className="section-label">
              DISCOVER
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
          <div className="col-lg-4 col-md-6">
            <div className="person-card">
              <div className="person-header">
                <div className="person-avatar">
                  AS
                </div>
                <span>
                  MATCH
                </span>
              </div>

              <h3>
                Asha Menon
              </h3>

              <p className="person-location">
                Kochi, Kerala
              </p>


              <div className="person-swap">
                <div>
                  <small>TEACHES</small>
                  <strong>Guitar</strong>
                </div>
                <span>↔</span>
                <div>
                  <small>WANTS</small>
                  <strong>JavaScript</strong>
                </div>
              </div>


              <button className="person-btn">
                View Profile →
              </button>
            </div>
          </div>


          <div className="col-lg-4 col-md-6">
            <div className="person-card person-coral">
              <div className="person-header">
                <div className="person-avatar avatar-coral">
                  RM
                </div>
                <span>
                  NEW
                </span>
              </div>
              <h3>
                Rahul Mathew
              </h3>

              <p className="person-location">
                Bengaluru, India
              </p>


              <div className="person-swap">
                <div>
                  <small>TEACHES</small>
                  <strong>Photography</strong>
                </div>
                <span>↔</span>
                <div>
                  <small>WANTS</small>
                  <strong>UI / UX</strong>
                </div>
              </div>


              <button className="person-btn">
                View Profile →
              </button>
            </div>
          </div>


          <div className="col-lg-4 col-md-6">
            <div className="person-card person-sand">
              <div className="person-header">
                <div className="person-avatar avatar-sand">
                  KS
                </div>
                <span>
                  MATCH
                </span>

              </div>

              <h3>
                Keerthi Shah
              </h3>

              <p className="person-location">
                Mumbai, India
              </p>


              <div className="person-swap">
                <div>
                  <small>TEACHES</small>
                  <strong>Spanish</strong>
                </div>

                <span>↔</span>

                <div>
                  <small>WANTS</small>
                  <strong>Excel</strong>
                </div>

              </div>


              <button className="person-btn">
                View Profile →
              </button>

            </div>

          </div>

        </div>


        <div className="dashboard-heading request-heading">
          <div>
            <p className="section-label">
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


        <div className="requests-panel">
          <div className="request-row">
            <div className="request-avatar">
              AS
            </div>
            <div className="request-info">
              <h3>
                Asha Menon
              </h3>

              <p>
                Wants to exchange skills with you
              </p>
            </div>

            <div className="request-swap">
              <span>Guitar</span>
              <strong>↔</strong>
              <span>JavaScript</span>
            </div>

            <span className="request-status pending">
              Pending
            </span>

          </div>


          <div className="request-row">

            <div className="request-avatar avatar-coral">
              RM
            </div>

            <div className="request-info">
              <h3>
                Rahul Mathew
              </h3>

              <p>
                Your swap request was accepted
              </p>
            </div>

            <div className="request-swap">
              <span>Photography</span>
              <strong>↔</strong>
              <span>UI / UX</span>
            </div>

            <span className="request-status accepted">
              Accepted
            </span>
          </div>
        </div>
      </div>
    </section>
    </main>
    </div>
  )
}

export default Dashboard