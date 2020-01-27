import React from 'react'

import {graphql} from 'gatsby'
import {
  mapEdgesToNodes,
  filterOutDocsWithoutSlugs,
  filterOutDocsPublishedInTheFuture
} from '../lib/helpers'
import GraphQLErrorList from '../components/graphql-error-list'
import Layout from '../containers/layout'
import SEO from '../components/seo'
import Container from '../components/container'
import GridContainer from '../components/gridContainer'
import Padding from '../components/padding'
import LandingSecondary from '../components/landingSecondary'
import ImageCard from '../components/imageCard'
import bg from '../components/images/kalie.jpg'
import background from '../components/images/blue-triangle.png'

export const query = graphql`
  fragment SanityImage on SanityMainImage {
    crop {
      _key
      _type 
      top
      bottom
      left
      right
    }
    hotspot {
      _key
      _type
      x
      y
      height
      width
    }
    asset {
      _id
    }
  }

  query IndexPageQuery {
    site: sanitySiteSettings(_id: { regex: "/(drafts.|)siteSettings/" }) {
      title
      description
      keywords
    }
    posts: allSanityPost(
      limit: 6
      sort: { fields: [publishedAt], order: DESC }
      filter: { slug: { current: { ne: null } }, publishedAt: { ne: null } }
    ) {
      edges {
        node {
          id
          publishedAt
          mainImage {
            ...SanityImage
            alt
          }
          title
          _rawExcerpt
          slug {
            current
          }
        }
      }
    }
  }
`

const Blog = props => {
  const {data, errors} = props

  if (errors) {
    return (
      <Layout>
        <GraphQLErrorList errors={errors} />
      </Layout>
    )
  }
  const l1 = 'Welcome 👋.'
  const l2 = 'I\'m Kalie Lamb, travel enthusiast, swing dancing enthusiast and YOUR realtor.'
  const l3 = 'This is my blog where I talk all things real estate, perks of living in Utah, and life in general.'

  const site = (data || {}).site
  const postNodes = (data || {}).posts
    ? mapEdgesToNodes(data.posts)
      .filter(filterOutDocsWithoutSlugs)
      .filter(filterOutDocsPublishedInTheFuture)
    : []

  if (!site) {
    throw new Error(
      'Missing "Site settings". Open the studio at http://localhost:3333 and add some content to "Site settings" and restart the development server.'
    )
  }

  return (
    <Layout>
      <SEO title='About | Lamb&Co Realty' />
      <LandingSecondary
        backgroundImage={background}
        image={bg}
        alt='Kalie Lamb, group director of Lamb&Co Realty'
        title='My Blog'
        body={{
          first: l1,
          second: l2,
          third: l3
        }}
      />
      <Container>
        <Padding>
          <h1 style={{textAlign: 'center'}}>Articles</h1>
          <GridContainer>
            {console.log(postNodes)}
            {postNodes.map((cur, index) => {
              return (
                <ImageCard key={index} node={cur} />
              )
            })}
          </GridContainer>
        </Padding>
      </Container>
    </Layout>
  )
}

export default Blog
