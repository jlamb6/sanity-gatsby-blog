import React, {useState} from 'react'
import Header from './header'
import Footer from './footer'

import styles from './layout.module.css'
import '../styles/layout.css'
import Helmet from 'react-helmet'
import favicon from '../components/icon/Lamb&Co_60.png'

const Layout = ({children, siteTitle, ...props}) => {
  const [isNavOpen, setNavOpen] = useState(false)
  return (
    <>
      <Helmet>
        <link rel='icon' href={favicon} />
        <link rel='stylesheet' href='https://unpkg.com/pattern.css' />
      </Helmet>
      <Header siteTitle={siteTitle} color={props.color} blur={setNavOpen} />
      <div
        className={styles.content}
        style={isNavOpen ? {filter: 'brightness(0.5)'} : {transitionDelay: '800ms'}}
      >{children}</div>
      <Footer />
    </>
  )
}

export default Layout
