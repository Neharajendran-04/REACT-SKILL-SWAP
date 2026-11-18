import DashboardSidebar from '../Components/DashboardSidebar'
import './Requests.css'

function Requests() {
  return (
    <div className="requests-layout">

      <DashboardSidebar />

      <main className="requests-main">

        <section className="requests-section">

          <div className="container">

            {/* Header */}
            <div className="requests-header">

              <div>
                <p className="requests-label">SWAP REQUESTS</p>

                <h1>
                  People want to
                  <br />
                  <span>swap skills.</span>
                </h1>
              </div>

              <div className="request-summary">
                <strong>2</strong>
                <span>pending</span>
              </div>

            </div>

            {/* Tabs */}
            <div className="requests-tabs">

              <button className="request-tab active">
                Incoming
                <span>2</span>
              </button>

              <button className="request-tab">
                Sent
              </button>

            </div>

            {/* Requests */}
            <div className="requests-list">

              {/* Request 1 */}
              <div className="request-card">

                <div className="request-person">

                  <div className="request-avatar coral-avatar">
                    A
                  </div>

                  <div>
                    <h2>Asha Menon</h2>
                    <p>Kochi, Kerala</p>
                  </div>

                </div>

                <div className="swap-details">

                  <div className="swap-skill">
                    <span>THEY TEACH</span>
                    <strong>Photography</strong>
                  </div>

                  <div className="swap-arrow">
                    ⇄
                  </div>

                  <div className="swap-skill">
                    <span>THEY WANT</span>
                    <strong>JavaScript</strong>
                  </div>

                </div>

                <div className="request-actions">

                  <button className="accept-btn">
                    Accept
                  </button>

                  <button className="decline-btn">
                    Decline
                  </button>

                </div>

              </div>

              {/* Request 2 */}
              <div className="request-card">

                <div className="request-person">

                  <div className="request-avatar sand-avatar">
                    R
                  </div>

                  <div>
                    <h2>Rahul Mathew</h2>
                    <p>Bengaluru, India</p>
                  </div>

                </div>

                <div className="swap-details">

                  <div className="swap-skill">
                    <span>THEY TEACH</span>
                    <strong>Excel</strong>
                  </div>

                  <div className="swap-arrow">
                    ⇄
                  </div>

                  <div className="swap-skill">
                    <span>THEY WANT</span>
                    <strong>Photography</strong>
                  </div>

                </div>

                <div className="request-actions">

                  <button className="accept-btn">
                    Accept
                  </button>

                  <button className="decline-btn">
                    Decline
                  </button>

                </div>

              </div>

            </div>

            {/* Sent Requests */}
            <div className="sent-section">

              <div className="sent-heading">
                <div>
                  <p>YOUR ACTIVITY</p>
                  <h2>Recent sent requests</h2>
                </div>
              </div>

              <div className="sent-card">

                <div className="sent-avatar">
                  K
                </div>

                <div className="sent-person">
                  <strong>Keerthi Shah</strong>
                  <span>UI/UX Design</span>
                </div>

                <div className="sent-swap">
                  You offer <strong>JavaScript</strong>
                </div>

                <span className="pending-badge">
                  Pending
                </span>

              </div>

              <div className="sent-card">

                <div className="sent-avatar">
                  V
                </div>

                <div className="sent-person">
                  <strong>Vishnu Raj</strong>
                  <span>Guitar</span>
                </div>

                <div className="sent-swap">
                  You offer <strong>Excel</strong>
                </div>

                <span className="accepted-badge">
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

export default Requests