import { useState } from 'react'
import Navbar from './components/Navbar'
import Banner from './components/Banner'
import Resume from './components/Resume'
import Projects from './components/projects/Projects'
import Contact from './components/Contact'
import Footer from './components/Footer'
import { Toaster } from 'react-hot-toast';
import { Routes, Route } from 'react-router-dom';
import Chatbot from './components/Chatbot'; // The compact chatbot
import ChatbotPage from './components/ChatbotPage'; // The full-page chatbot

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Toaster position='top-right'/>
      <Routes>
        <Route path="/" element={(
          <div className="w-full h-auto bg-bodyColor text-lightText px-4">
            <Navbar />
            <div className="max-w-screen-xl mx-auto">
              <Banner />
             /// <Chatbot /> {/* Compact chatbot below the Banner component */}
              <Resume />
              <Projects />
              <Contact />
              <Footer />
            </div>
          </div>
        )} />
        <Route path="/chatbot" element={<ChatbotPage />} />
      </Routes>
    </>
  )
}

export default App
