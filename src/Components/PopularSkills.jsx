import { NavLink } from 'react-router-dom'
import { useEffect, useRef } from 'react'
import './PopularSkills.css'

function PopularSkills() {
    const skill1Ref = useRef(null)
  const skill2Ref = useRef(null)
  const skill3Ref = useRef(null)
  const skill4Ref = useRef(null)
  const skill5Ref = useRef(null)
  const skill6Ref = useRef(null)

  useEffect(() => {

    const elements = [
      skill1Ref.current,
      skill2Ref.current,
      skill3Ref.current,
      skill4Ref.current,
      skill5Ref.current,
      skill6Ref.current
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
        threshold: 0.2
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
    <section className="skills-section">
      <div className="container">

        {/* Section Header */}
        <div className="row align-items-end skills-heading">

          <div className="col-lg-7">
            <p className="skills-label">
              EXPLORE SKILLS
            </p>

            <h2 className="skills-title">
              Something worth
              <span> learning.</span>
            </h2>
          </div>

          <div className="col-lg-5">
            <p className="skills-subtitle">
              From creative skills to practical knowledge, find
              something you can learn — or something you can teach.
            </p>
          </div>

        </div>


        {/* Skills Grid */}
        <div className="row g-4 skills-grid">

          {/* Programming */}
          <div className="col-lg-4 col-md-6">
            <div className="skill-card skill-card-large scroll-reveal" ref={skill1Ref}>
              
              <div className="skill-card-top">
                <span className="skill-number">
                  01
                </span>

                <span className="skill-arrow">
                  ↗
                </span>
              </div>

              <div className="skill-symbol">
                &lt;/&gt;
              </div>

              <h3>
                Programming
              </h3>

              <p>
                Web development, JavaScript, Python and more.
              </p>

              <div className="skill-tags">
                <span>JavaScript</span>
                <span>Python</span>
                <span>Web</span>
              </div>

            </div>
          </div>


          {/* UI/UX */}
          <div className="col-lg-4 col-md-6">
            <div className="skill-card skill-card-coral scroll-reveal" ref={skill2Ref}>
              
              <div className="skill-card-top">
                <span className="skill-number">
                  02
                </span>

                <span className="skill-arrow">
                  ↗
                </span>
              </div>

              <div className="skill-symbol">
                ✦
              </div>

              <h3>
                UI / UX Design
              </h3>

              <p>
                Turn ideas into interfaces people enjoy using.
              </p>

              <div className="skill-tags">
                <span>Figma</span>
                <span>Design</span>
                <span>UX</span>
              </div>

            </div>
          </div>


          {/* Photography */}
          <div className="col-lg-4 col-md-6">
            <div className="skill-card skill-card-sand scroll-reveal"  ref={skill3Ref}>
             
              <div className="skill-card-top">
                <span className="skill-number">
                  03
                </span>

                <span className="skill-arrow">
                  ↗
                </span>
              </div>

              <div className="skill-symbol">
                ◉
              </div>

              <h3>
                Photography
              </h3>

              <p>
                Learn composition, editing and how to capture better moments.
              </p>

              <div className="skill-tags">
                <span>Camera</span>
                <span>Editing</span>
                <span>Portraits</span>
              </div>

            </div>
          </div>


          {/* Languages */}
          <div className="col-lg-4 col-md-6">
            <div className="skill-card skill-card-light scroll-reveal" ref={skill4Ref}>
              
              <div className="skill-card-top">
                <span className="skill-number">
                  04
                </span>

                <span className="skill-arrow">
                  ↗
                </span>
              </div>

              <div className="skill-symbol">
                あ
              </div>

              <h3>
                Languages
              </h3>

              <p>
                Practice a new language with someone who speaks it.
              </p>

              <div className="skill-tags">
                <span>English</span>
                <span>Spanish</span>
                <span>Japanese</span>
              </div>

            </div>
          </div>


          {/* Music */}
          <div className="col-lg-4 col-md-6">
            <div className="skill-card skill-card-teal scroll-reveal" ref={skill5Ref}>
               
              <div className="skill-card-top">
                <span className="skill-number">
                  05
                </span>

                <span className="skill-arrow">
                  ↗
                </span>
              </div>

              <div className="skill-symbol">
                ♪
              </div>

              <h3>
                Music
              </h3>

              <p>
                Exchange what you know about instruments, rhythm and sound.
              </p>

              <div className="skill-tags">
                <span>Guitar</span>
                <span>Piano</span>
                <span>Vocals</span>
              </div>

            </div>
          </div>


          {/* Business */}
          <div className="col-lg-4 col-md-6">
            <div className="skill-card skill-card-outline scroll-reveal" ref={skill6Ref}>
             
              <div className="skill-card-top">
                <span className="skill-number">
                  06
                </span>

                <span className="skill-arrow">
                  ↗
                </span>
              </div>

              <div className="skill-symbol">
                +
              </div>

              <h3>
                Business & Excel
              </h3>

              <p>
                Learn practical tools for work, productivity and business.
              </p>

              <div className="skill-tags">
                <span>Excel</span>
                <span>Finance</span>
                <span>Business</span>
              </div>

            </div>
          </div>

        </div>


        {/* Bottom CTA */}
        <div className="skills-footer">

          <p>
            Don't see your skill?
          </p>

          <NavLink
            to="/explore"
            className="skills-link"
          >
            Explore all skills <span>→</span>
          </NavLink>

        </div>

      </div>
    </section>
  )
}

export default PopularSkills