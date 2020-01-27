import React from 'react'

import styles from './gridContainer.module.css'

const GridContainer = props => {
  return (
    <div className={styles.container}>
      {props.children}
    </div>
  )
}

export default GridContainer
