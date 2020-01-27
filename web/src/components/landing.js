import React from 'react'
import {Link} from 'gatsby'
import './animations.css'
import styles from './landing.module.css'

const Landing = props => {
  return (
    <section style={{backgroundImage: `url(${props.backgroundImage}`}} className={styles.landing}>
      <div className={styles.landing__container}>
        <h1
          className='fade-in'
          style={{fontWeight: '400', color: 'white'}}
        >
          {props.title}
        </h1>
        <div className='fade-in delay'>
          <Link className={styles.buttonOutline} style={{marginRight: '12px'}} to={props.buttonLinkOne}>{props.buttonTitleOne}</Link>
          <Link className={styles.button} to={props.buttonLinkTwo}>{props.buttonTitleTwo}</Link>
        </div>
      </div>
    </section>
  )
}

export default Landing
