import React from 'react'
import {Link} from 'gatsby'
import styles from './footer.module.css'

const Footer = () => (
  <footer className={styles.footer}>
    <div className={styles.footer__top}>
      <div className={styles.wrapper}>
        <div style={{marginRight: '120px'}}>
          <h2 style={{fontSize: '1rem'}}>Lamb&Co Realty</h2>
        </div>
        <div className={styles.footer__links}>
          <h4>Navigation</h4>
          <Link to='/'>Home</Link>
          <Link to='/about/'>About</Link>
          <Link to='/services/'>Services</Link>
          <Link to='/blog/'>Blog</Link>
          <Link to='/contact/'>Contact</Link>
        </div>
        <div className={styles.footer__links}>
          <h4>Social Media</h4>
          <Link to='/'>Facebook</Link>
          <Link to='/'>Instagram</Link>
          <Link to='/'>LinkedIn</Link>
        </div>
        <div className={styles.newsletter__form}>
          <h4>Join our Community</h4>
          <div className={styles.newsletter__signup}>
            <form name='subscribe' method='POST' netlify>
              <input type='email' placeholder='youremail@site.com' />
              <button className={styles.button}>Subscribe</button>
            </form>
          </div>
        </div>
      </div>
    </div>
    <div className={styles.footer__bottom}>
      <div className={styles.footer__container}>
        <p>Licensed at Brough Realty</p>
        <p>copyright 2019 - Designed by Jake Lamb</p>
      </div>
    </div>
  </footer>
)

export default Footer
