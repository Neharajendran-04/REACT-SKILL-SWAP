import { NavLink } from 'react-router-dom'
import { useEffect, useRef } from 'react'
import './HowItWorks.css'


function HowItWorks() {
  const card1Ref = useRef(null)
  const card2Ref = useRef(null)
  const card3Ref = useRef(null)
  const card4Ref = useRef(null)

  useEffect(() => {
    const cards = [
      card1Ref.current,
      card2Ref.current,
      card3Ref.current,
      card4Ref.current,
    ]

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible')
            observer.unobserve(entry.target)
          }
        })
      },
      {
        threshold: 0.2,
      }
    )

    cards.forEach((card) => {
      if (card) {
        observer.observe(card)
      }
    })

    return () => {
      observer.disconnect()
    }
  }, [])
  return (
    <section className="how-section" id="how-it-works">

      <div className="how-ring"></div>

      <div className="container">

        {/* Section Heading */}
        <div className="row align-items-end g-4">

          <div className="col-lg-7">
            <p className="how-label">
              HOW IT WORKS
            </p>

            <h2 className="how-title">
              Four steps to <span>your first swap.</span>
            </h2>
          </div>

          <div className="col-lg-5">
            <p className="how-sub">
              No money, no complicated setup. Just people trading
              what they know.
            </p>
          </div>

        </div>


        {/* Steps */}
        <div className="how-steps">

          {/* Step 1 */}
          <div className="how-ticket scroll-reveal"  ref={card1Ref}>

            <div className="how-num">
              01
            </div>

            <h3>
              Create your profile
            </h3>

            <p>
              Sign up and tell people a little about yourself.
            </p>

            <div className="how-perf"></div>

            <div className="how-stub">
              <span>PROFILE</span>
              <span>→</span>
            </div>

          </div>


          {/* Step 2 */}
          <div className="how-ticket scroll-reveal"  ref={card2Ref}>

            <div className="how-num">
              02
            </div>

            <h3>
              Add your skills
            </h3>

            <p>
              List what you can teach and what you want to learn.
            </p>

            <div className="how-perf"></div>

            <div className="how-stub">
              <span>SKILLS</span>
              <span>→</span>
            </div>

          </div>


          {/* Step 3 */}
          <div className="how-ticket scroll-reveal"  ref={card3Ref}>

            <div className="how-num">
              03
            </div>

            <h3>
              Send a swap request
            </h3>

            <p>
              Find someone on Explore and propose a skill swap.
            </p>

            <div className="how-perf"></div>

            <div className="how-stub">
              <span>REQUEST</span>
              <span>→</span>
            </div>

          </div>


          {/* Step 4 */}
          <div className="how-ticket scroll-reveal"  ref={card4Ref}>

            <div className="how-num">
              04
            </div>

            <h3>
              Start swapping
            </h3>

            <p>
              Once they accept, you teach each other and both grow.
            </p>

            <div className="how-perf"></div>

            <div className="how-stub">
              <span>SWAP</span>
              <span>✓</span>
            </div>

          </div>

        </div>


        {/* CTA */}
        <div className="how-cta">

          <NavLink
            to="/register"
            className="how-btn"
          >
            Create your profile
          </NavLink>

        </div>

      </div>
    </section>
  )
}

export default HowItWorks