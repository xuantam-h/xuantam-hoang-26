import { Hero } from './components/sections/Hero'
import { Header } from './layouts/Header'
import "@fontsource/inter/300.css";
import "@fontsource/inter/600.css";
import "@fontsource-variable/newsreader";
import './App.css'
import { About } from './components/sections/About';
import { Skills } from './components/sections/Skills';

function App() {

  return (
    <>
      <Header />
      <main className='scroll-snap-vertical'>
        <Hero />
        <About />
        <Skills />
      </main>
    </>
  )
}

export default App
