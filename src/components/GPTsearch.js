import React from 'react'
import GPTsearchBar from './GPTsearchBar'
import GPTmovieSuggestions from './GPTmovieSuggestions'
import { BACKDROP } from '../utils/constants'

const GPTsearch = () => {
  return (
    <div>
       <img
        className="absolute -z-10"
        src={BACKDROP}
        alt="Background"
      />
      <GPTsearchBar />
      <GPTmovieSuggestions />
    </div>
  )
}

export default GPTsearch