import React from 'react'
import Navbar from './Components/Navbar/Navbar'
import Hero from './Components/Hero/Hero'
import About from './Components/About/About'
import Services from './Components/Services/Services'
import Project from './Components/Project/Project'
import SkillsGrid from './Components/Skills/skills'
import { Contact } from 'lucide-react'
import ContactPage from './Components/ContactPage.jsx/contactpage'
import Footer from './Components/Footer/footer'
import { FloatButton } from 'antd'
import Test from './Components/Test'
import ProjectPage from './Components/Project/Project'

const App = () => {
  return (
    <div>
     
      <Navbar />
      <Hero />
      <About />
      <SkillsGrid/>
      <Services />
      <ProjectPage />
      <ContactPage />
      <Footer />
    </div>
  )
}

export default App
