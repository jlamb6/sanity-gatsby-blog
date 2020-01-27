import React from 'react'

import Layout from '../containers/layout'
import SEO from '../components/seo'
import Container from '../components/container'
import Padding from '../components/padding'
import LandingSecondary from '../components/landingSecondary'
import SplitView from '../components/splitView'
import bg from '../components/images/kalie.jpg'
import background from '../components/images/blue-triangle.png'
import palmTrees from '../components/images/palm-trees.jpg'
import welcome from '../components/images/welcome.jpg'

const About = () => {
  return (
    <Layout>
      <SEO title='About | Lamb&Co Realty' />
      <LandingSecondary
        backgroundImage={background}
        image={bg}
        alt='Kalie Lamb, group director of Lamb&Co Realty'
        title='About'
        body={{
          first: 'Hello 👋.',
          second: 'I\'m Kalie Lamb, travel enthusiast, swing dancing enthusiast and YOUR realtor.',
          third: 'I am here to help you find your new home.'
        }}
      />
      <Container>
        <Padding>
          <SplitView
            title='The value of a home'
            body='We beleive that a house becomes a home when it is filled with Love and Family.
                  It is a place a safety and acceptance.
                  At Lamb&Co, we want to know what home means to you and help you find it.
                  Learn more about the ways we can help you start your new home.'
            img={welcome}
            alt='Welcome sign hanging on a door'
            link='/services/'
            linkTitle='View our services'
            left
          />
        </Padding>
        <Padding>
          <SplitView
            title='Get in touch'
            body='We want to be there for all of your realty needs. Whether you are buying or selling a home, we can help you get the most out of this experience.'
            img={palmTrees}
            alt='Palm trees'
            link='/contact/'
            linkTitle='Contact us'
          />
        </Padding>
      </Container>
    </Layout>
  )
}

export default About
