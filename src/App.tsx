import { Routes, Route, useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { CartProvider } from './context/CartContext'
import { ToastProvider } from './context/ToastContext'
import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'
import CartDrawer from './components/layout/CartDrawer'
import WhatsAppButton from './components/layout/WhatsAppButton'
import ScrollToTop from './components/layout/ScrollToTop'
import HomePage from './pages/HomePage'
import MenuPage from './pages/MenuPage'
import AboutPage from './pages/AboutPage'
import ReservationsPage from './pages/ReservationsPage'
import GalleryPage from './pages/GalleryPage'
import ContactPage from './pages/ContactPage'
import TestimonialsPage from './pages/TestimonialsPage'
import FAQPage from './pages/FAQPage'
import CareersPage from './pages/CareersPage'
import NotFoundPage from './pages/NotFoundPage'

function ScrollToTopOnNavigate() {
  const { pathname } = useLocation()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])

  return null
}

function PageWrapper({ children }: { children: React.ReactNode }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.3 }}
    >
      {children}
    </motion.div>
  )
}

export default function App() {
  const location = useLocation()

  return (
    <ToastProvider>
      <CartProvider>
        <div className="min-h-screen bg-background">
          <Navbar />
          <CartDrawer />
          <WhatsAppButton />
          <ScrollToTop />
          <ScrollToTopOnNavigate />
          
          <main>
            <AnimatePresence mode="wait">
              <Routes location={location} key={location.pathname}>
                <Route
                  path="/"
                  element={
                    <PageWrapper>
                      <HomePage />
                    </PageWrapper>
                  }
                />
                <Route
                  path="/menu"
                  element={
                    <PageWrapper>
                      <MenuPage />
                    </PageWrapper>
                  }
                />
                <Route
                  path="/about"
                  element={
                    <PageWrapper>
                      <AboutPage />
                    </PageWrapper>
                  }
                />
                <Route
                  path="/reservations"
                  element={
                    <PageWrapper>
                      <ReservationsPage />
                    </PageWrapper>
                  }
                />
                <Route
                  path="/gallery"
                  element={
                    <PageWrapper>
                      <GalleryPage />
                    </PageWrapper>
                  }
                />
                <Route
                  path="/contact"
                  element={
                    <PageWrapper>
                      <ContactPage />
                    </PageWrapper>
                  }
                />
                <Route
                  path="/testimonials"
                  element={
                    <PageWrapper>
                      <TestimonialsPage />
                    </PageWrapper>
                  }
                />
                <Route
                  path="/faq"
                  element={
                    <PageWrapper>
                      <FAQPage />
                    </PageWrapper>
                  }
                />
                <Route
                  path="/careers"
                  element={
                    <PageWrapper>
                      <CareersPage />
                    </PageWrapper>
                  }
                />
                <Route
                  path="*"
                  element={
                    <PageWrapper>
                      <NotFoundPage />
                    </PageWrapper>
                  }
                />
              </Routes>
            </AnimatePresence>
          </main>

          <Footer />
        </div>
      </CartProvider>
    </ToastProvider>
  )
}
