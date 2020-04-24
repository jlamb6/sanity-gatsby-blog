import React from 'react'
import {Link, useStaticQuery, graphql} from 'gatsby'
import Img from 'gatsby-image'
// import './animations.css'
import styles from './landing.module.css'
import {motion} from 'framer-motion'

const Landing = props => {
  const data = useStaticQuery(graphql`
    query {
      file(relativePath: { eq: "images/dark-house.jpg" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return (
    <section className={styles.landing}>
      <div className={styles.titleContainer}>
        <div>
          <motion.h1
            animate={{
              x: 0,
              opacity: 1,
              transition: {
                type: 'spring',
                duration: 1.2,
                delay: 0.12
              }}
            }
            initial={{x: -40, opacity: 0}}
          >
            {props.title}
          </motion.h1>
          <motion.p
            animate={{
              x: 0,
              opacity: 1,
              transition: {
                type: 'spring',
                duration: 1.2,
                delay: 0.24
              }}
            }
            initial={{x: -40, opacity: 0}}
          >
            We can help you find the perfect home here in Utah. Check out what we have today!
          </motion.p>
          <motion.a
            animate={{
              x: 0,
              opacity: 1,
              transition: {
                type: 'spring',
                duration: 1.2,
                delay: 0.36
              }}
            }
            initial={{x: -40, opacity: 0}}
            className={styles.buttonSecondary}
            href={props.buttonLink}
            target='_blank'
          >
            {props.buttonTitle}
          </motion.a>
        </div>
        <div className={styles.colorContainer}>
          <h2>Get in touch</h2>
          <h4>Looking for a home and don't know where to start? <Link to='/contact' style={{color: 'var(--brand-orange)'}}>Contact Us!</Link></h4>
        </div>
      </div>
      <div>
        <Img
          fadeIn
          durationFadeIn={1200}
          placeholderStyle={{'backgroundColor': '#0d2c54'}}
          fluid={data.file.childImageSharp.fluid}
          alt='Picture of a modern style house at night'
        />
      </div>
    </section>
  )
}

export default Landing
