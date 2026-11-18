import { NavLink } from 'react-router-dom'
import { useEffect, useRef } from 'react'
import './WhySkillSwap.css'

function WhySkillSwap() {
      const contentRef = useRef(null)
  const benefit1Ref = useRef(null)
  const benefit2Ref = useRef(null)
  const benefit3Ref = useRef(null)
  useEffect(() => {
  const elements = [
    contentRef.current,
    benefit1Ref.current,
    benefit2Ref.current,
    benefit3Ref.current,
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

  elements.forEach((element) => {
    if (element) {
      observer.observe(element)
    }
  })

  return () => {
    observer.disconnect()
  }
}, [])
  return (
    <section className="why-section">

      {/* Background overlay / image layer */}
      <div className="why-overlay"></div>

      <div className="container why-container">

        <div className="row align-items-center g-5">

          {/* Main Content */}
          <div className="col-lg-7 scroll-reveal"  ref={contentRef}>

            <p className="why-label">
              WHY SKILLSWAP
            </p>

            <h2 className="why-title">
              Your next skill could come from
              <span> someone just like you.</span>
            </h2>

            <p className="why-text">
              SkillSwap makes learning more personal. Instead of paying
              for lessons or scrolling through endless tutorials, exchange
              what you know with someone who wants to learn it.
            </p>

            <div className="why-actions">
              <NavLink to="/register" className="why-btn">
                Get Started
              </NavLink>

              <NavLink to="/explore" className="why-link">
                Explore skills
                <span>→</span>
              </NavLink>
            </div>

          </div>

          {/* Benefits */}
          <div className="col-lg-5">

            <div className="why-benefits">

              <div className="why-item scroll-reveal"  ref={benefit1Ref}>
                <div className="why-number">
                  01
                </div>

                <div>
                  <h3>Learn for free</h3>
                  <p>
                    Exchange knowledge instead of paying for lessons.
                  </p>
                </div>
              </div>

              <div className="why-item scroll-reveal"  ref={benefit2Ref}>
                <div className="why-number">
                  02
                </div>

                <div>
                  <h3>Teach what you know</h3>
                  <p>
                    Turn your existing skills into something valuable.
                  </p>
                </div>
              </div>

              <div className="why-item scroll-reveal"  ref={benefit3Ref}>
                <div className="why-number">
                  03
                </div>

                <div>
                  <h3>Meet curious people</h3>
                  <p>
                    Connect with people who are ready to learn and share.
                  </p>
                </div>
              </div>

            </div>

          </div>

        </div>

        {/* Final CTA */}
        <div className="why-cta">

          <div>
            <p className="why-cta-label">
              READY TO SWAP?
            </p>

            <h3>
              One skill can lead to another.
            </h3>
          </div>

          <NavLink to="/register" className="why-cta-btn">
            Create your profile
            <span>→</span>
          </NavLink>

        </div>

      </div>
    </section>
  )
}

export default WhySkillSwap