/* eslint-disable brace-style */
import {Link} from 'gatsby'
import React, {useState, useRef, useEffect} from 'react'
import logo from '../components/icon/Lamb&Co_32.svg'
import {motion} from 'framer-motion'
import styles from './header.module.css'
import MenuButton from './menu-button'
import NavLink from './mobile-nav-link'

const MobileNav = ({isShowing, option, blur}) => {
  const [showNav, setShowNav] = useState(isShowing)
  const containerRef = useRef(null)
  const ul = useRef(null)
  const toggleNav = () => {
    if (showNav) {
      setShowNav(false)
      option(false)
      blur(false)
      setTimeout(() => {
        ul.current.style.display = 'none'
      }, 800)
    }
    else {
      setShowNav(true)
      option(true)
      blur(true)
      ul.current.style.display = 'block'
    }
  }
  const ulAnimation = {
    closed: {
      transition: {staggerChildren: 0.07, staggerDirection: -1}
    },
    open: {
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.2
      }
    }
  }
  const menu = {
    open: (height = 1000) => ({
      clipPath: `circle(${height * 2 + 200}px at 355px 42px)`,
      transition: {
        type: 'spring',
        stiffness: 20,
        restDelta: 2
      }
    }),
    closed: {
      clipPath: 'circle(25px at 355px 42px)',
      transition: {
        delay: 0.5,
        type: 'spring',
        stiffness: 400,
        damping: 40
      }
    }
  }
  const nav = {
    open: {
      position: 'fixed'
    },
    closed: {
      position: 'absolute',
      transition: {
        delay: 0.8
      }
    }
  }
  const links = ['Home', 'Services', 'About', 'Blog', 'Contact']
  useEffect(() => {
    ul.current.style.display = 'none'
  }, [])
  return (
    <motion.nav
      animate={showNav ? 'open' : 'closed'}
      variants={nav}
      custom='800'
      ref={containerRef}
      className={styles.menuCollapse}
    >
      <motion.div
        className={styles.circleBackground}
        variants={menu}
        initial='closed'
      />
      <motion.ul
        variants={ulAnimation}
        initial='closed'
        ref={ul}
      >
        {links.map((link, index) => (
          <NavLink
            key={index}
            title={link}
            link={(link === 'Home') ? '/' : `/${link.toLowerCase()}/`}
            closeNav={toggleNav}
          />
        ))}
      </motion.ul>
      <MenuButton toggle={toggleNav} />
    </motion.nav>
  )
}

const Header = ({siteTitle, color, blur}) => {
  const [showMobile, setShowMobile] = useState((typeof window !== 'undefined') ? window.innerWidth < 998 : false)
  const [showNav, setShowNav] = useState(false)
  const resize = () => {
    if (typeof window !== 'undefined') {
      if (window.innerWidth < 998) {
        setShowMobile(true)
      }
      else if (showMobile && window.innerWidth >= 998) {
        setShowMobile(false)
        setShowNav(false)
        blur(false)
      }
    }
  }
  useEffect(() => {
    if (typeof window !== 'undefined') {
      window.addEventListener('resize', resize)
      resize()
    }
  })
  return (
    <div className={styles.root} style={showNav ? {borderColor: 'grey'} : {transitionDelay: '800ms'}}>
      <div className={styles.wrapper} style={showNav ? {background: 'grey'} : {transitionDelay: '800ms'}}>
        <div className={styles.branding}>
          <Link to='/'>
            <img src={logo} alt={siteTitle} />
            {!showMobile ? <h4>Lamb&Co<br />Realty Group</h4> : null}
          </Link>
          {(!showMobile) ? <nav className={styles.nav}>
            <ul>
              <li>
                <a href='https://kalielamb.exprealty.com/index.php' target='_blank'>Listings</a>
              </li>
              <li>
                <Link to='/services/'>Services</Link>
              </li>
              <li>
                <Link to='/about/'>About</Link>
              </li>
              <li>
                <Link to='/blog/'>Blog</Link>
              </li>
              <li>
                <Link to='/contact/'>Contact</Link>
              </li>
            </ul>
          </nav>
            : <MobileNav isShowing={false} option={setShowNav} blur={blur} /> }
        </div>
      </div>
    </div>
  )
}

export default Header
