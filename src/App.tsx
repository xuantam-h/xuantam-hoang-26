import { Container } from './layouts/Container'
import { Navbar } from './layouts/Navbar'
import { Hero } from './components/sections/Hero'
import { Header } from './layouts/Header'
import './App.css'

function App() {

  return (
    <>
      <Header />
      <main>
        <Hero />
      </main>
    </>
  )
}

export default App
