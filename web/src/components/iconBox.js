import React from 'react'

import {Link} from 'gatsby'
import styles from './iconBox.module.css'

const IconBox = (props) => {
  return (
    <Link to={props.link} className={styles.container}>
      <div className={styles.iconbox}>
        <object
          type='image/svg+xml'
          data={props.icon}
          className={styles.icon}
        >
          {props.title}
        </object>
        <h4>{props.subTitle}</h4>
        <p>{props.body}</p>
      </div>
    </Link>
  )
}

export default IconBox
