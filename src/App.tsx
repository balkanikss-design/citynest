import { Routes, Route } from 'react-router-dom'
import { Layout } from './components/Layout'
import { Home } from './pages/Home'
import { Services } from './pages/Services'
import { Work } from './pages/Work'
import { CaseStudy } from './pages/CaseStudy'
import { About } from './pages/About'
import { Approach } from './pages/Approach'
import { Insights } from './pages/Insights'
import { Article } from './pages/Article'
import { Contact } from './pages/Contact'
import { StartProject } from './pages/StartProject'
import { Careers } from './pages/Careers'
import { FAQ } from './pages/FAQ'
import { Privacy } from './pages/Privacy'
import { Cookies } from './pages/Cookies'
import { NotFound } from './pages/NotFound'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="services" element={<Services />} />
        <Route path="work" element={<Work />} />
        <Route path="work/:slug" element={<CaseStudy />} />
        <Route path="about" element={<About />} />
        <Route path="our-approach" element={<Approach />} />
        <Route path="insights" element={<Insights />} />
        <Route path="insights/:slug" element={<Article />} />
        <Route path="contact" element={<Contact />} />
        <Route path="start-a-project" element={<StartProject />} />
        <Route path="careers" element={<Careers />} />
        <Route path="faq" element={<FAQ />} />
        <Route path="privacy" element={<Privacy />} />
        <Route path="cookies" element={<Cookies />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  )
}

export default App

