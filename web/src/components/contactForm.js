import React, {useEffect} from 'react'

import {cn} from '../lib/helpers'
import styles from './contactForm.module.css'
import './animations.css'

const ContactForm = (props) => {
  useEffect(() => {
    Array.from(document.querySelectorAll('.animate')).forEach((cur, index) => {
      let options = {
        threshold: 0.75
      }

      let target = cur
      let i = index + 6

      function callback (entries) {
        entries.forEach((entry, index) => {
          if (entry.isIntersecting) {
            if (Array.from(entry.target.classList).includes('flow')) {
              entry.target.style.animationDelay = `${i++ / 10}s`
              entry.target.classList.add('flow-up')
              entry.target.classList.remove('flow')
            } else entry.target.classList.add('fade-in')
            entry.target.classList.remove('animate')
            observer.unobserve(entry.target)
            observer.disconnect()
          }
        })
      }

      let observer = new IntersectionObserver(callback, options)
      observer.observe(target)
    })
  })

  if (props.small) {
    return (
      <div className={styles.contactSmall} id='contact-form'>
        <div className={styles.contactContainer} id='contact'>
          <div className={cn(styles.contact__form, 'animate')}>
            <form name='contact' method='POST' netlify>
              <div className='animate flow' style={{gridArea: 'fname'}}>
                <label>First Name</label>
                <input type='text' name='fname' />
              </div>
              <div className='animate flow' style={{gridArea: 'lname'}}>
                <label>Last Name</label>
                <input type='text' name='lname' />
              </div>
              <div className='animate flow' style={{gridArea: 'email'}}>
                <label>Email</label>
                <input type='email' name='email' />
              </div>
              <div className='animate flow' style={{gridArea: 'zipcode'}}>
                <label>Zipcode</label>
                <input type='text' name='zipcode' />
              </div>
              <div className='animate flow' style={{gridArea: 'message'}}>
                <label>Message</label>
                <textarea name='message' rows='6' />
              </div>
              <button className='animate flow' type='button' style={{gridArea: 'submit'}}>Submit</button>
            </form>
          </div>
        </div>
      </div>
    )
  } else {
    return (
      <section className={styles.contact} id='contact-form'>
        <div id='contact'>
          <h1 className={cn(styles.contact__header, 'animate')}>Contact us today!</h1>
          <div className={cn(styles.contact__form, 'animate')}>
            <form name='contact' method='POST' style={{margin: '0'}} netlify>
              <div className='animate flow' style={{gridArea: 'fname'}}>
                <label>First Name</label>
                <input type='text' name='fname' />
              </div>
              <div className='animate flow' style={{gridArea: 'lname'}}>
                <label>Last Name</label>
                <input type='text' name='lname' />
              </div>
              <div className='animate flow' style={{gridArea: 'email'}}>
                <label>Email</label>
                <input type='email' name='email' />
              </div>
              <div className='animate flow' style={{gridArea: 'zipcode'}}>
                <label>Zipcode</label>
                <input type='text' name='zipcode' />
              </div>
              <div className='animate flow' style={{gridArea: 'message', marginBottom: '24px'}}>
                <label>Message</label>
                <textarea name='message' rows='6' />
              </div>
              <button className='animate flow' type='button' style={{gridArea: 'submit'}}>Submit</button>
            </form>
          </div>
        </div>
      </section>
    )
  }
}

export default ContactForm
