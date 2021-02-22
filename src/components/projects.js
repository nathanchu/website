import React from 'react'
import styled from 'styled-components'
import { StaticImage } from 'gatsby-plugin-image'
import { aProps } from '../utilities'

const ProjectImageContainer = styled.div`
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
`

const imageProps = {
  formats: ['auto', 'webp', 'avif'],
  width: 400,
  height: 300,
}

const projects = [
  {
    title: 'My Website',
    website: 'https://nathanchu.com/',
    repo: 'nathanchu/website',
    description:
      "The website you're looking at right now! It's built using Gatsby, and hosted on Vercel. It's highly customizable if you want to do that, too!",
    image: (
      <StaticImage
        src="../images/projects/website.png"
        alt="Screenshot of My Website"
        {...imageProps}
      />
    )
  },
  {
    title: 'Weather App',
    repo: 'Ryyn-Sd/weather',
    website: 'https://weather.rayyansaidi.com/',
    description:
      'A weather app I worked on using openweathermap and React. It detects your location through your ip, but also allows you to change your zip code.',
    image: (
      <StaticImage
        src="../images/projects/weather.png"
        alt="Screenshot of Weather App"
        {...imageProps}
      />
    )
  },
  {
    title: 'Rayyan Saidi Desktop',
    repo: 'rayyansaidi-com/app',
    website: 'https://github.com/rayyansaidi-com/app',
    description:
      'A desktop app for rayyansaidi.com built using react and electron. It uses the material design system for design, and autoupdates from a file on GitHub.',
    image: (
      <StaticImage
        src="../images/projects/rayyan-saidi-desktop.png"
        alt="Screenshot of Rayyan Saidi Desktop"
        {...imageProps}
      />
    )
  }
]

const Project = ({ title, repo, website, description }) => {
  return (
    <div className="max-w-full sm:min-w-lg shadow-card bg-gray-50 dark:bg-black-light rounded-lg p-6 my-12 mx-4 sm:w-screen-1/2 lg:pr-24">
      <h2 className="font-bold text-3xl">
        <a {...aProps} href={website}>
          {title}
        </a>
        <br />(
        <a {...aProps} href={`https://github.com/${repo}`}>
          {repo}
        </a>
        )
      </h2>
      <br />
      <p className="font-normal text-xl max-w-prose">{description}</p>
    </div>
  )
}

const Projects = () => {
  return (
    <div className="mt-12 flex items-center flex-col font-">
      <span className="href-anchor" id="projects" aria-hidden />
      <h1 className="font-bold text-6xl mt-12 mb-6">Projects</h1>
      {projects.map(({ title, repo, website, description, image }, i) => (
        <div className="flex items-center" key={i}>
          <Project
            title={title}
            repo={repo}
            website={website}
            description={description}
          />
          <div className="shadow-card hidden bg-gray-50 dark:bg-black-light rounded-lg m-4 -ml-24 overflow-hidden lg:block">
            <a {...aProps} href={website}>
              {image}
            </a>
          </div>
        </div>
      ))}
    </div>
  )
}

export default Projects
