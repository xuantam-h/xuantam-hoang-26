import { Hero } from './components/sections/Hero'
import { Header } from './layouts/Header'
import "@fontsource/inter/400.css";
import "@fontsource/inter/600.css";
import "@fontsource/libre-caslon-text/400.css";
import "@fontsource/libre-caslon-text/400-italic.css";
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
