import React from 'react'

import {Link} from 'gatsby'
import styles from './splitView.module.css'
import {cn} from '../lib/helpers'

const SplitView = props => {
  if (props.left) {
    return (
      <div className={styles.split}>
        <div className={styles.split__header}>
          <h1>{props.title}</h1>
        </div>
        <div className={styles.split__body}>
          <div>{props.body}</div>
          <Link to={props.link} className={cn(styles.button, styles.link)}>{props.linkTitle}</Link>
        </div>
        <div className={cn(styles.split__image, styles.right)}>
          <img src={props.img} alt={props.alt || 'site image'} />
        </div>
      </div>
    )
  } else {
    return (
      <div className={styles.split}>
        <div className={styles.split__header}>
          <h1>{props.title}</h1>
        </div>
        <div className={cn(styles.split__image, styles.left)}>
          <img src={props.img} alt={props.alt || 'site image'} />
        </div>
        <div className={styles.split__body}>
          <p>{props.body}</p>
          <Link to={props.link} className={cn(styles.button, styles.link)}>{props.linkTitle}</Link>
        </div>
      </div>
    )
  }
}

export default SplitView
