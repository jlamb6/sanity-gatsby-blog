import React from 'react'
import {graphql} from 'gatsby'
import {
  mapEdgesToNodes,
  filterOutDocsWithoutSlugs,
  filterOutDocsPublishedInTheFuture
} from '../lib/helpers'
import Container from '../components/container'
import GraphQLErrorList from '../components/graphql-error-list'
import SEO from '../components/seo'
import Layout from '../containers/layout'
import Landing from '../components/landing'
import Padding from '../components/padding'
import SplitView from '../components/splitView'
import IconBox from '../components/iconBox'
import GridContainer from '../components/gridContainer'
import ContactForm from '../components/contactForm'
import BackgroundOne from '../components/images/landing-one.png'
import trees from '../components/images/palm-trees.jpg'
import financeIcon from '../components/svgIcons/finance.svg'
import homeIcon from '../components/svgIcons/real-estate.svg'
import moneyIcon from '../components/svgIcons/money.svg'

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

  query BlogPageQuery {
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

const IndexPage = props => {
  const {data, errors} = props

  if (errors) {
    return (
      <Layout>
        <GraphQLErrorList errors={errors} />
      </Layout>
    )
  }

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
    <Layout color='white'>
      <SEO
        title={site.title}
        description={site.description}
        keywords={site.keywords}
      />
      <Landing
        title='Find your home in Utah.'
        buttonTitleOne='Our Services'
        buttonLinkOne='services'
        buttonTitleTwo='Contact Us'
        buttonLinkTwo='contact'
        backgroundImage={BackgroundOne}
      />
      <Container>
        <Padding>
          <SplitView
            title='Our Mission'
            body={
              <>
                <p>We are here to help you live where you love. As we get to know what’s important to you, what you want in a home, and more your experience with us will feel tailor made for you. You are the center of our company.</p>
                <p>We can’t wait to start working with you and help you grow in your life.</p>
                <p>Welcome to the Lamb&Co family!'</p>
              </>
            }
            link='/services'
            linkTitle='View our services'
            img={trees}
          />
        </Padding>
      </Container>
      <section>
        <Padding wide>
          <h1
            className='content__header'
            style={{
              fontWeight: '700',
              fontSize: '2rem',
              textAlign: 'center',
              lineHeight: '1.4em'
            }}
          >
            Let's Get Started
          </h1>
          <GridContainer>
            <IconBox
              icon={moneyIcon}
              title='Money Icon'
              subTitle='Sell Your Home'
              body='We provide all the services you need to sell your home for top dollar'
              link='/services#sell'
            />
            <IconBox
              icon={homeIcon}
              title='Home Icon'
              subTitle='Buy a Home'
              body='Find the perfect home for the next step in your life'
              link='/services#buy'
            />
            <IconBox
              icon={financeIcon}
              title='Finance Icon'
              subTitle='Market Analysis'
              body='Find out what your home is worth so you dont leave money on the table'
              link='/services#analysis'
            />
          </GridContainer>
        </Padding>
      </section>
      <Container>
        <Padding>
          <ContactForm />
        </Padding>
      </Container>
    </Layout>
  )
}

export default IndexPage
