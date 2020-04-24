/* eslint-disable brace-style */
import React, {useState} from 'react'
import {Link} from 'gatsby'
import {motion} from 'framer-motion'

const NavLink = ({title, link, closeNav}) => {
  const [isActive, setIsActive] = useState(false)
  const close = (event) => {
    console.log('closing nav')
    event.preventDefault()
    closeNav()
  }
  const liAnimation = {
    closed: {opacity: 0, x: 240},
    open: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.4,
        type: 'spring',
        damping: 12
      }
    }
  }
  const isLinkActive = ({isCurrent}) => {
    setIsActive(isCurrent)
  }
  return (
    <motion.li
      initial='closed'
      variants={liAnimation}
      whileHover={{scale: 1.1}}
      style={{transformOrigin: 'right'}}
    >
      {isActive ? <a href='#' onClick={close}>{title}</a>
        : <Link getProps={isLinkActive} to={link}>{title}</Link>}
    </motion.li>
  )
}

export default NavLink
