import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Button from './assets/components/Button'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <h1>Hello World</h1>
    <div>
      <Button label ="Home Page"/>
      <Button label ="Contact Us" />
      <Button label ="About Us"/>
      <Button label ="Help"/>
    </div>
    </>
  )
}

export default App
