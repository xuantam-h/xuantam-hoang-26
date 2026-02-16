import { Container } from './layouts/Container'
import { Navbar } from './layouts/Navbar'
import { Hero } from './components/sections/Hero'
import './App.css'

function App() {

  return (
    <>
      <Navbar />
      <main>
        <Hero />
      </main>
    </>
  )
}

export default App
