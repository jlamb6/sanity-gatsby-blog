import React from 'react'
import styles from './landing.module.css'
import {motion} from 'framer-motion'
import './animations.css'

const LandingSecondary = (props) => {
  const {image, alt, title, body} = props
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
        <div className={[styles.leftImage, 'pattern-dots-lg gray-lighter', 'fade delay'].join(' ')}>
          <img
            src={image}
            className='adjust'
            alt={alt || 'site image'}
            style={{
              zIndex: '90',
              width: '100%',
              position: 'relative',
              display: 'block',
              boxShadow: '0 8px 16px rgba(0,2,12,.12)'
            }}
          />
        </div>
      </div>
    </section>
  )
}

export default LandingSecondary
