import React, {useEffect, useState} from 'react'

import {cn} from '../lib/helpers'
import styles from './contactForm.module.css'
import './animations.css'

function encode (data) {
  return Object.keys(data)
    .map((key) => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
    .join('&')
}

const ContactForm = (props) => {
  const [state, setState] = useState()
  const [isComplete, setComplete] = useState(false)

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
      .then(() => {
        setComplete(true)
        console.log('Form submitted')
      })
      .catch((error) => alert(error))
  }

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

  const message = <div>
    <h1>Thank you!</h1>
    <p>We have received your sumbission and will be in touch with you soon.</p>
    <p>- Lamb&Co Realty</p>
  </div>

  const smallForm = <form name='contact' method='POST' data-netlify='true' data-netlify-honeypot='bot-field' onSubmit={handleSubmit}>    
    <input type='hidden' name='form-name' value='contact' />
    <p hidden>
      <label>
        Don’t fill this out: <input name='bot-field' onChange={handleChange} />
      </label>
    </p>
    <div className='animate flow' style={{gridArea: 'fname'}}>
      <label>First Name</label>
      <input type='text' name='fname' onChange={handleChange} required />
    </div>
    <div className='animate flow' style={{gridArea: 'lname'}}>
      <label>Last Name</label>
      <input type='text' name='lname' onChange={handleChange} required />
    </div>
    <div className='animate flow' style={{gridArea: 'email'}}>
      <label>Email</label>
      <input type='email' name='email' onChange={handleChange} required />
    </div>
    <div className='animate flow' style={{gridArea: 'zipcode'}}>
      <label>Zipcode</label>
      <input type='text' name='zipcode' onChange={handleChange} required />
    </div>
    <div className='animate flow' style={{gridArea: 'message'}}>
      <label>Message</label>
      <textarea name='message' rows='6' onChange={handleChange} required />
    </div>
    <button className='animate flow' type='submit' style={{gridArea: 'submit'}}>Submit</button>
  </form>

  const largeForm = <form name='contact' method='POST'data-netlify='true' data-netlify-honeypot='bot-field' onSubmit={handleSubmit}>
    <input type='hidden' name='form-name' value='contact' />
    <p hidden>
      <label>
        Don’t fill this out: <input name='bot-field' onChange={handleChange} />
      </label>
    </p>
    <div className='animate flow' style={{gridArea: 'fname'}}>
      <label>First Name</label>
      <input type='text' name='fname' onChange={handleChange} required />
    </div>
    <div className='animate flow' style={{gridArea: 'lname'}}>
      <label>Last Name</label>
      <input type='text' name='lname' onChange={handleChange} required />
    </div>
    <div className='animate flow' style={{gridArea: 'email'}}>
      <label>Email</label>
      <input type='email' name='email' onChange={handleChange} required />
    </div>
    <div className='animate flow' style={{gridArea: 'zipcode'}}>
      <label>Zipcode</label>
      <input type='text' name='zipcode' onChange={handleChange} required />
    </div>
    <div className='animate flow' style={{gridArea: 'message', marginBottom: '24px'}}>
      <label>Message</label>
      <textarea name='message' rows='6' onChange={handleChange} required />
    </div>
    <button type='submit' className='animate flow' style={{gridArea: 'submit'}}>Submit</button>
  </form>

  if (props.small) {
    return (
      <div className={styles.contactSmall} id='contact-form'>
        <div className={styles.contactContainer} id='contact'>
          <div className={cn(styles.contact__form, 'animate')}>
            {(isComplete) ? message : smallForm}
          </div>
        </div>
      </div>
    )
  } else {
    return (
      <div className={styles.contact} id='contact-form'>
        <div id='contact'>
          <h1 className={cn(styles.contact__header, 'animate')}>Contact Us Today!</h1>
          <div className={cn(styles.contact__form, 'animate')}>
            {(isComplete) ? message : largeForm}
          </div>
        </div>
      </div>
    )
  }
}

export default ContactForm
