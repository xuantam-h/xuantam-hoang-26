import { Hero } from './components/sections/Hero'
import { Header } from './layouts/Header'
import "@fontsource/inter/400.css";
import "@fontsource/inter/600.css";
import "@fontsource-variable/newsreader";
import './App.css'
import { About } from './components/sections/About';
import { Skills } from './components/sections/Skills';
import { Projects } from './components/sections/Projects';

function App() {

  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <Projects />
      </main>
    </>
  )
}

export default App
