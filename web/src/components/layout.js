import React from 'react'
import Header from './header'
import Footer from './footer'

import styles from './layout.module.css'
import '../styles/layout.css'

const Layout = ({children, onHideNav, onShowNav, showNav, siteTitle, ...props}) => (
  <>
    <Header siteTitle={siteTitle} onHideNav={onHideNav} onShowNav={onShowNav} showNav={showNav} color={props.color} />
    <div className={styles.content}>{children}</div>
    <Footer />
  </>
)

export default Layout
