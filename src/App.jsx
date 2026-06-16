import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { HelmetProvider } from 'react-helmet-async'
import { Toaster } from 'react-hot-toast'
import { useState } from 'react'
import { ThemeProvider } from './context/ThemeContext'
import Navbar from './components/Navbar/Navbar'
import Footer from './components/Footer/Footer'
import Home from './pages/Home'
import Loader from './components/common/Loader'
import CustomCursor from './components/common/CustomCursor'
import BackToTop from './components/common/BackToTop'
import FloatingContact from './components/common/FloatingContact'

function App() {
  const [loading, setLoading] = useState(true)

  return (
    <HelmetProvider>
      <ThemeProvider>
        <BrowserRouter>
          {/* Loading screen */}
          {loading && <Loader onComplete={() => setLoading(false)} />}

          {/* Custom cursor */}
          <CustomCursor />

          {/* Toast notifications */}
          <Toaster
            position="top-right"
            toastOptions={{
              style: {
                background: '#1E293B',
                color: '#fff',
                border: '1px solid rgba(253,184,19,0.2)',
              },
              success: {
                iconTheme: { primary: '#FDB813', secondary: '#0F172A' },
              },
            }}
          />

          {!loading && (
            <>
              <Navbar />
              <Routes>
                <Route path="/" element={<Home />} />
              </Routes>
              <Footer />
              <BackToTop />
              <FloatingContact />
            </>
          )}
        </BrowserRouter>
      </ThemeProvider>
    </HelmetProvider>
  )
}

export default App