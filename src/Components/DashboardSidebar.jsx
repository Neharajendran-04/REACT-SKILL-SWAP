import { NavLink } from 'react-router-dom'
import './DashboardSidebar.css'

function DashboardSidebar() {
  return (
    <aside className="dashboard-sidebar">

      {/* Logo */}
      <div className="sidebar-brand">
        <NavLink to="/dashboard" className="sidebar-logo">
          Skill<span>Swap</span>
        </NavLink>

        <p>Learn • Teach • Grow</p>
      </div>

      {/* Main Navigation */}
      <nav className="sidebar-nav">

        <p className="sidebar-section-title">MENU</p>

        <NavLink
          to="/dashboard"
          className={({ isActive }) =>
            `sidebar-link ${isActive ? 'active' : ''}`
          }
        >
          <span className="sidebar-icon">◉</span>
          <span>Dashboard</span>
        </NavLink>

        <NavLink
          to="/explore"
          className={({ isActive }) =>
            `sidebar-link ${isActive ? 'active' : ''}`
          }
        >
          <span className="sidebar-icon">✦</span>
          <span>Explore Skills</span>
        </NavLink>

        <NavLink
          to="/profile"
          className={({ isActive }) =>
            `sidebar-link ${isActive ? 'active' : ''}`
          }
        >
          <span className="sidebar-icon">♡</span>
          <span>My Profile</span>
        </NavLink>

        <NavLink
          to="/requests"
          className={({ isActive }) =>
            `sidebar-link ${isActive ? 'active' : ''}`
          }
        >
          <span className="sidebar-icon">⇄</span>
          <span>Swap Requests</span>
          <span className="request-count">2</span>
        </NavLink>

      </nav>

      {/* Skills */}
      <div className="sidebar-skills">

        <p className="sidebar-section-title">YOUR SKILLS</p>

        <div className="sidebar-skill">
          <span className="skill-dot"></span>
          JavaScript
        </div>

        <div className="sidebar-skill">
          <span className="skill-dot"></span>
          UI/UX Design
        </div>

        <div className="sidebar-skill">
          <span className="skill-dot"></span>
          Excel
        </div>

      </div>

      {/* Bottom User Area */}
      <div className="sidebar-bottom">

        <NavLink to="/profile" className="sidebar-user">
          <div className="user-avatar">A</div>

          <div className="user-info">
            <strong>Alex</strong>
            <span>View profile</span>
          </div>
        </NavLink>

        <button className="sidebar-logout">
          <span>↪</span>
          Logout
        </button>

      </div>

    </aside>
  )
}

export default DashboardSidebar