import React from 'react'

import {Link} from 'gatsby'
import {buildImageObj, getBlogUrl} from '../lib/helpers'
import {imageUrlFor} from '../lib/image-url'
import styles from './imageCard.module.css'

const ImageCard = ({node}) => (
  <Link to={getBlogUrl(node.publishedAt, node.slug.current)} className={styles.cardContainer}>
    <div>
      <img
        src={imageUrlFor(buildImageObj(node.mainImage))
          .width(220)
          .height(Math.floor((9 / 16) * 220))
          .auto('format')
          .url()}
        alt={node.mainImage.alt} />
      <h4>{node.title}</h4>
      <p>{node.title}</p>
    </div>
  </Link>
)

export default ImageCard
