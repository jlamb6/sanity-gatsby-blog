import React, {useState} from 'react'
import {Link} from 'gatsby'
import styles from './footer.module.css'

function encode (data) {
  return Object.keys(data)
    .map((key) => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
    .join('&')
}

const Footer = () => {
  const [state, setState] = useState()

  const handleChange = (e) => {
    setState({...state, [e.target.name]: e.target.value})
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const form = e.target
    fetch('/', {
      method: 'POST',
      headers: {'Content-Type': 'application/x-www-form-urlencoded'},
      body: encode({
        'form-name': form.getAttribute('name'),
        ...state
      })
    })
      .then(() => console.log('Form submitted'))
      .catch((error) => alert(error))
  }

  return (
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
            <a href='https://www.instagram.com/kalielambrealty/' target='_blank'>Instagram</a>
            <a href='https://www.linkedin.com/in/kalie-lamb-1293a7133/' target='_blank'>LinkedIn</a>
          </div>
          <div className={styles.newsletter__form}>
            <h4>Join our Community</h4>
            <div className={styles.newsletter__signup}>
              <form name='subscribe' method='POST' data-netlify='true' data-netlify-honeypot='bot-field' onSubmit={handleSubmit}>
                <input type='hidden' name='form-name' value='contact' />
                <p hidden>
                  <label>
                    Don’t fill this out: <input name='bot-field' onChange={handleChange} />
                  </label>
                </p>
                <input type='email' placeholder='youremail@site.com' onChange={handleChange} />
                <button type='submit' className={styles.button}>Subscribe</button>
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
}

export default Footer
