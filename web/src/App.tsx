import './App.css'
import Home from './pages/home'
import EconomicOverview from './pages/economic-overview'
import ProductionComposition from './pages/production-composition'
import InflationAndPrices from './pages/inflation-&-prices'
import Navbar from './components/shared/Navbar'
import GeminiButton from './components/shared/GeminiButton'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

function App() {
  return (
    <BrowserRouter>

      <div className='min-h-screen min-w-[96%] overflow-x-hidden'>
        {/* Navigation */}
        <Navbar />

        {/* Routes */}
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/economic-overview" element={<EconomicOverview />} />
            <Route path="/production-composition" element={<ProductionComposition />} />
            <Route path="/inflation-&-prices" element={<InflationAndPrices />} />
        </Routes>

        {/* Chat */}
        <GeminiButton/>
      </div>

    </BrowserRouter>
  )
}

export default App
