import React from 'react'

import ContactForm from './contactForm'
import styles from './landing.module.css'
import './animations.css'

const LandingWithForm = (props) => {
  const {title, body} = props

  return (
    <section style={{backgroundImage: `url(${props.backgroundImage}`}} className={styles.landing2}>
      <div className={styles.landing__grid}>
        <div>
          <h1
            className='fade-in'
            style={{fontWeight: '600', color: 'black'}}
          >
            {title}
          </h1>
          <div className='fade-in delay'>
            <h4>{body.contact}</h4>
            <p>{body.first}</p>
            <p>{body.second}</p>
            <p>{body.third}</p>
          </div>
        </div>
        <div style={{position: 'relative'}}>
          <ContactForm small />
        </div>
      </div>
    </section>
  )
}

export default LandingWithForm
