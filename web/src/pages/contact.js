import React from 'react'

import Layout from '../containers/layout'
import SEO from '../components/seo'
import LandingWithForm from '../components/landingWithForm'
import BlueTriangle from '../components/images/blue-triangle.png'

const Contact = () => {
  const l1 = 'Group Director'
  const l2 = '(480)-438-2002'
  const l3 = 'lambandcorealty@gmail.com'

  return (
    <Layout active='contact' navbar='dark'>
      <SEO title='Contact' />
      <LandingWithForm
        title='Lets chat'
        backgroundImage={BlueTriangle}
        body={{
          contact: 'Kalie Lamb',
          first: l1,
          second: l2,
          third: l3
        }}
      />
    </Layout>
  )
}

export default Contact
