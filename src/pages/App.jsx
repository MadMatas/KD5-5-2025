import { Link } from 'react-router'
import './App.css'
import Hero from '../components/hero'

function App() {
 

  return (
    <>
    <Hero />

    <Link to={"/about"}>About Page</Link>
    </>
  )
}

export default App
