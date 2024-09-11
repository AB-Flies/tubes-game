import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Tube } from './Tube.jsx'

const tubes = ['Tube 1', 'Tube 2', 'Tube 3', 'Tube 4', 'Tube 5', 'Tube 6', 'Tube 7']

tubes[1] = 'Tube 2.1'

function App() {
  return (
    tubes.map((tube, index) => (
      <Tube key={index} n={8}/>
    ))
  )
}

export default App
