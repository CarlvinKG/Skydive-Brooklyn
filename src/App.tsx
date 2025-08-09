import { Routes, Route, BrowserRouter } from 'react-router-dom'
import { PriceProvider } from './components/Context/PriceProvider'
import Layout from './layout/Layout'
import Home from './pages/Home/Home'
import AboutUs from './pages/AboutUs/AboutUs'
import Prices from './pages/Prices/Prices'
import Gallery from './pages/Gallery/Gallery'
import ContactUs from './pages/ContactUs/ContactUs'
import BookNow from './pages/BookNow/BookNow'

function App() {

  return (
    <BrowserRouter>
      <Layout>
        <PriceProvider>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/about-us" element={<AboutUs />} />
            <Route path="/prices" element={<Prices />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/contact-us" element={<ContactUs />} />
            <Route path="/book-now" element={<BookNow />} />
          </Routes>
        </PriceProvider>
      </Layout>
    </BrowserRouter>
  )
}

export default App
