import React from 'react'
import codebackground from '../images/codebackground.svg'
import Highlight from './highlight'
import { aProps } from '../utilities'

const Main = () => (
  <div
    className="flex flex-col m-24 mt-36 items-center justify-between lg:flex-row lg:mt-48 2xl:m-48 2xl:mb-24"
    id="home"
  >
    <div className="text-center xl:text-left">
      <h1 className="text-7xl font-bold">Nathan Chu</h1>
      <br />
      <hr />
      <br />
      <h2 className="text-4xl font-light">
        A web developer |{' '}
        <a {...aProps} href="https://github.com/nathanchu">
          GitHub
        </a>
      </h2>
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

export default Main
