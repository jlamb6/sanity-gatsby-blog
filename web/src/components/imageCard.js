import React from 'react'

import {Link} from 'gatsby'
import {buildImageObj, getBlogUrl} from '../lib/helpers'
import {imageUrlFor} from '../lib/image-url'

const ImageCard = ({node}) => (
  <Link to={getBlogUrl(node.publishedAt, node.slug.current)} style={{display: 'contents', textDecoration: 'none', color: 'initial'}}>
    <div
      style={{
        border: '1px solid #e4e4e4',
        borderRadius: '3px',
        padding: '20px 20px',
        boxShadow: '0 1px 1px -1px #909090'
      }}
    >
      <img
        src={imageUrlFor(buildImageObj(node.mainImage))
          .width(220)
          .height(Math.floor((9 / 16) * 220))
          .auto('format')
          .url()}
        alt={node.mainImage.alt} />
      <h4 style={{marginBottom: '14px'}}>{node.title}</h4>
      <p style={{fontSize: '.8em', lineHeight: '1.6em', marginBottom: '0'}}>{node.title}</p>
    </div>
  </Link>
)

export default ImageCard
