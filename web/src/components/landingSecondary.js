import React from 'react'

import styles from './landing.module.css'
import './animations.css'

const LandingSecondary = (props) => {
  const {image, alt, title, body} = props

  return (
    <section className={styles.landing2}>
      <div className={styles.shape} />
      <div className={styles.landing__grid}>
        <div>
          <h1
            className='fade-in'
            style={{fontWeight: '600', color: 'black'}}
          >
            {title}
          </h1>
          <div className='fade-in delay'>
            <p>{body.first}</p>
            <p>{body.second}</p>
            <p>{body.third}</p>
          </div>
        </div>
        <div className={styles.leftImage}>
          <div
            className='toTopCorner delay full'
            style={{
              display: 'block',
              position: 'absolute',
              top: '15%',
              right: '10%',
              backgroundColor: 'rgba(255,255,255,.5)',
              height: '70%',
              width: '80%',
              opacity: '0',
              border: '1px solid black'
            }}
          />
          <img
            src={image}
            className='fade'
            alt={alt || 'site image'}
            style={{
              zIndex: '100',
              width: '80%',
              position: 'relative',
              margin: '60px auto',
              display: 'block',
              boxShadow: '0 10px 20px rgba(91,107,174,.15)'
            }}
          />
          <div
            className='toBottomCorner delay full'
            style={{
              display: 'block',
              position: 'absolute',
              bottom: '15%',
              left: '10%',
              backgroundColor: 'rgba(255,255,255,.5)',
              height: '70%',
              width: '80%',
              opacity: '0',
              border: '1px solid black'
            }}
          />
        </div>
      </div>
    </section>
  )
}

export default LandingSecondary
