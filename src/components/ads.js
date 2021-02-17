import React from 'react'
import styled from 'styled-components'
import { graphql, useStaticQuery } from 'gatsby'
import { GatsbyImage } from 'gatsby-plugin-image'
import Center from './center'

const query = graphql`
  query Ads {
    allAd {
      edges {
        node {
          body
          image {
            childImageSharp {
              gatsbyImageData(
                formats: [AUTO, WEBP, AVIF]
                layout: FIXED
                height: 96
                width: 112
                transformOptions: { fit: INSIDE }
              )
            }
          }
          title
          url
        }
      }
    }
  }
`

const SmallAdContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  background-color: rgb(243, 244, 246);
  width: 320px;
  height: 144px;
  padding: 8px 16px;
  border-radius: 6px;
  @media (prefers-color-scheme: dark) {
    background-color: rgb(48, 48, 48);
  }
`

const StyledGatsbyImage = styled(GatsbyImage)`
  float: left;
  flex: none;
`

export const Small = () => {
  const data = useStaticQuery(query)
  const allAd = data.allAd.edges
  const randAd = () => allAd[Math.floor(Math.random() * allAd.length)].node
  const [ad, setAd] = React.useState(null)
  React.useEffect(() => {
    setAd(randAd())
  }, [])
  if (ad) {
    return (
      <a href={ad?.url || '#'}>
        <SmallAdContainer>
          <h3
            css={`
              font-weight: 700;
              font-size: 1.25rem;
              line-height: 1.75rem;
              width: 288px;
            `}
          >
            {ad?.title || ''}
          </h3>
          <Center
            css={`
              flex: 1;
              align-content: center;
            `}
          >
            {ad?.image?.childImageSharp?.gatsbyImageData ? (
              <StyledGatsbyImage
                image={ad.image.childImageSharp.gatsbyImageData}
                alt={ad?.title || ''}
              />
            ) : null}
            <div
              css={`
                text-align: left;
                padding: 0 16px;
                font-size: 0.75rem;
                line-height: 1rem;
              `}
            >
              {ad?.body || null}
            </div>
          </Center>
        </SmallAdContainer>
      </a>
    )
  } else {
    return <SmallAdContainer />
  }
}
