import React from 'react'
import codebackground from '../images/codebackground.svg'
import Highlight from './highlight'
import ReactMarkdown from 'react-markdown'
import { aProps } from '../utilities'
import { graphql, useStaticQuery } from 'gatsby'
import { GatsbyImage } from 'gatsby-plugin-image'
const query = graphql`
  query MainAds {
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
const Main = () => {
  const data = useStaticQuery(query)
  const allAd = data.allAd.edges
  const randAd = () => allAd[Math.floor(Math.random() * allAd.length)].node
  const [ad, setAd] = React.useState(null)
  React.useEffect(() => {
    setAd(randAd())
  }, [])
  return (
    <div
      className="flex flex-col m-24 mt-36 items-center justify-between lg:flex-row lg:mt-48 2xl:m-48 2xl:mb-24"
      id="home"
    >
      <div className="text-center">
        <h1 className="text-7xl font-bold font-title">Nathan Chu</h1>
        <br />
        <hr />
        <br />
        <h2 className="text-4xl font-light font-title">
          A web developer |{' '}
          <a {...aProps} href="https://github.com/nathanchu">
            GitHub
          </a>
        </h2>
        <br />
        <br />
        <a href={ad?.url || '#'}>
          <div className="flex flex-col mx-auto font-sans bg-gray-100 dark:bg-black-light rounded-md w-80 h-36 py-2 px-4">
            <h3 className="text-xl font-bold w-72">{ad?.title || ''}</h3>
            <div className="flex flex-1 items-center justify-center content-center align-center">
              {ad?.image?.childImageSharp?.gatsbyImageData ? (
                <GatsbyImage
                  className="float-left object-contain flex-none"
                  image={ad.image.childImageSharp.gatsbyImageData}
                />
              ) : null}
              <div className="text-left px-4 text-xs">
                {ad?.body ? (
                  <ReactMarkdown className="overflow-elipses break-words overflow-hidden max-h-24">
                    {ad.body}
                  </ReactMarkdown>
                ) : null}
              </div>
            </div>
          </div>
        </a>
      </div>
      <div className="relative pt-12 lg:ml-48">
        <Highlight
          code={JSON.stringify(
            {
              person: {
                name: 'Nathan Chu',
                skills: ['JavaScript', 'React', 'CSS', 'HTML']
              },
              website: {
                colors: ['#4169e1', '#fada5e']
              }
            },
            null,
            2
          )}
          className="font-mono rounded-xl p-6 text-xl leading-6"
        />
        <img
          src={codebackground}
          alt="Abstract Triangle Background"
          className="absolute top-1/2 -z-10 h-auto w-52 right-64 transform -translate-y-1/2 lg:w-80"
        />
      </div>
    </div>
  )
}

export default Main
