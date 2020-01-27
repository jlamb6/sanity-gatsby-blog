import React from 'react'

import styles from './contentList.module.css'

const ContentContainer = (props) => {
  if (props.small) {
    return (
      <div className={styles.small}>
        <div className={styles.highlight} style={{backgroundColor: props.color}} />
        <p className={styles.title}>
          <span style={{marginRight: '4px'}}>
            <strong>{props.title}</strong>
          </span>
          <em>{props.body}</em>
        </p>
      </div>
    )
  } else {
    return (
      <div className='large-container'>
        <div className={styles.largeContainerIcon}>
          <object
            type='image/svg+xml'
            data={props.icon}
            fill='#2f80ed'
            className={styles.largeIcon}
          >
            {props.title}
          </object>
        </div>
        <div className={styles.largeBody}>
          <h4>{props.title}</h4>
          <p>{props.body}</p>
        </div>
      </div>
    )
  }
}

export default ContentContainer
