import React from 'react'

import ContentContainer from './contentContainer'
import camera from './svgIcons/camera.svg'
import interior from './svgIcons/interior.svg'
import seoAndWeb from './svgIcons/seo-and-web.svg'
import talk from './svgIcons/talk.svg'
import architecture from './svgIcons/architecture-and-city.svg'
import marketing from './svgIcons/marketing-online.svg'

import styles from './contentList.module.css'

const ContentList = props => {
  const content = [
    {
      title: 'Competitive Market Analysis',
      body: 'Compare the value of your home to others sold in the area to set a competitive price',
      icon: seoAndWeb
    },
    {
      title: 'Personal Consultations',
      body: 'Walk through the steps needed to make sure your home is ready to hit the market.',
      icon: talk
    },
    {
      title: 'Professional Photos',
      body: 'Utilize high quality, professional photos that showcase the best in your home.',
      icon: camera
    },
    {
      title: 'Social Media Marketing',
      body: 'Leverage Facebook, Instagram, and MLS marketing to ensure maximum exposure.',
      icon: marketing
    },
    {
      title: 'Hassle Free Open House',
      body: 'An open house is a great opportunity to let potential buyers preview your home.',
      icon: architecture
    },
    {
      title: 'Home Staging',
      body: 'The position of furniture, plants, and other objects gives your home the right feel.',
      icon: interior
    }
  ]

  return (
    <div className={styles.list}>
      <div className={styles.header}>
        <h1>{props.title}</h1>
      </div>
      <ul>
        {content.map((cur, index) => {
          return (
            <li key={index}>
              <ContentContainer
                small={props.small}
                title={cur.title}
                body={cur.body}
                icon={cur.icon}
                color='#37d5b2'
              />
            </li>
          )
        })}
      </ul>
    </div>
  )
}

export default ContentList
