import './App.css'
import Home from './pages/home'
import EconomicOverview from './pages/economic-overview'
import ExpenditureComposition from './pages/expenditure-composition'
import InflationAndPrices from './pages/inflation-&-prices'
import ForecastingAndScenarios from './pages/forecasting-&-scenarios'
import MacroStability from './pages/macro-stability'
import Navbar from './components/shared/Navbar'
import GeminiButton from './components/interfaces/GeminiButton'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

function App() {
  return (
    <BrowserRouter>

      <div className='flex flex-row min-h-screen'>
        {/* Navigation */}
        <Navbar />

        {/* Routes */}
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/economic-overview" element={<EconomicOverview />} />
            <Route path="/expenditure-composition" element={<ExpenditureComposition />} />
            <Route path="/inflation-&-prices" element={<InflationAndPrices />} />
            <Route path="/forecasting-&-scenarios" element={<ForecastingAndScenarios />} />
            <Route path="/macro-stability" element={<MacroStability />} />
        </Routes>

        {/* Chat */}
        <GeminiButton/>
      </div>

    </BrowserRouter>
  )
}

export default App
