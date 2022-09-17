import React from 'react'
import "./services.css"

import Tagbox from '../tagger/Tagbox'

import Webdevtile from './Webdevtile'
import Uxtile from './Uxtile'
import Contenttile from './Contenttile'

const Services = () => {
  return (
    <div className="divbox" id="services">
      <Tagbox subtop="I'm hirable for the below" heading="Services" />
      <Webdevtile />
      <Uxtile />
      <Contenttile />
    </div>
  )
}

export default Services