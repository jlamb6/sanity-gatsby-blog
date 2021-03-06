import React from 'react'

import Layout from '../containers/layout'
import SEO from '../components/seo'
import LandingSecondary from '../components/landingSecondary'
import Container from '../components/container'
import SplitView from '../components/splitView'
import ContentList from '../components/contentList'
import Padding from '../components/padding'
import sellHome from '../components/images/sell-home.jpg'
import buyHome from '../components/images/buy-home.jpg'
import BlueTriangle from '../components/images/blue-triangle.png'
import bg from '../components/images/desk.jpg'

const Services = () => {
  const l1 = 'Here at Lamb&Co, we tailor our services to make your real estate experience as beneficial as possible.'
  const l2 = 'We understand that each person has their own story.'
  const l3 = 'Whether you are buying or selling a home, we will be there to walk you through the process.'

  return (
    <Layout active='services' navbar='dark'>
      <SEO title='Services' />
      <LandingSecondary
        title='Services'
        image={bg}
        backgroundImage={BlueTriangle}
        body={{
          first: l1,
          second: l2,
          third: l3
        }}
      />
      <Container>
        <div id='sell'>
          <Padding>
            <SplitView
              title='Sell Your Home'
              body={
                <>
                  <p>Selling your house is a big deal. You might be moving from your first home or the home your kids grew up in.</p>
                  <p>We understand there is a lot of emotion that goes into it. We will do our best to take as much stress out of it as possible.</p>
                  <p>Utilizing the MLS, Facebook, and Instgram to reach as many people as possible.</p>
                </>
              }
              link='/contact'
              linkTitle='Contact Us'
              img={sellHome}
              left
            />
          </Padding>
        </div>
      </Container>
      <div id='services'>
        <Padding wide>
          <ContentList title='All the services you need' />
        </Padding>
      </div>
      <Container>
        <div id='buy'>
          <Padding>
            <SplitView
              title='Buy a Home'
              body='Congratulations! You’re buying a home! Here at Lamb&Co. we share in your excitement and want to help you find the best home for you and your family. You will get notified instantly when a new home with your specifications hit the market.'
              link='/contact'
              linkTitle='Contact Us'
              img={buyHome}
            />
          </Padding>
        </div>
      </Container>
    </Layout>
  )
}

export default Services
