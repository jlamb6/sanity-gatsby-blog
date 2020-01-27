import React from 'react'

import styles from './padding.module.css'

const Padding = (props) => (
  <div className={(props.wide) ? styles.contentContainerWide : styles.contentContainer}>
    {props.children}
  </div>
)

export default Padding
