import React from 'react'
import ContactForm from './contactForm'
import styles from './landing.module.css'
import {motion} from 'framer-motion'
import './animations.css'

const LandingWithForm = (props) => {
  const {title, body} = props

  return (
    <section className={styles.landing2}>
      <div className={styles.shape} />
      <div className={styles.landingGrid}>
        <div>
          <motion.h1
            animate={{
              x: 0,
              opacity: 1,
              transition: {
                type: 'spring',
                duration: 1.2,
                delay: 0.12
              }}
            }
            initial={{x: -40, opacity: 0}}
            style={{fontWeight: '600', color: 'black'}}
          >
            {title}
          </motion.h1>
          <div>
            <motion.h2
              initial={{x: -40, opacity: 0}}
              animate={{x: 0, opacity: 1, transition: {delay: 0.28, type: 'spring'}}}
            >{body.contact}</motion.h2>
            <motion.p
              initial={{x: -40, opacity: 0}}
              animate={{x: 0, opacity: 1, transition: {delay: 0.4, type: 'spring'}}}
            >{body.first}</motion.p>
            <motion.p
              initial={{x: -40, opacity: 0}}
              animate={{x: 0, opacity: 1, transition: {delay: 0.52, type: 'spring'}}}
            >{body.second}</motion.p>
            <motion.p
              initial={{x: -40, opacity: 0}}
              animate={{x: 0, opacity: 1, transition: {delay: 0.64, type: 'spring'}}}
            >{body.third}</motion.p>
          </div>
        </div>
        <div className={styles.secondDiv} style={{position: 'relative', margin: '0 !important'}}>
          <ContactForm small />
        </div>
      </div>
    </section>
  )
}

export default LandingWithForm
