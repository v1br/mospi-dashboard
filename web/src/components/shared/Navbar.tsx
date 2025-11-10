import { useState } from "react"
import { Link } from "react-router-dom"
import { House, BookText } from "lucide-react"

const Navbar = () => {

  const [currentPage, setCurrentPage] = useState<number>(0);

  return (
    <nav className="fixed left-4 top-4 bottom-4 flex flex-col justify-between items-center w-60 bg-secondary2 text-primary text-xs rounded-2xl border-2 border-secondary">
      
      <div className="px-4 w-full">
        <div className="text-lg pl-4 mt-4">
          MoSPI.gov
        </div>
        <hr className="border-1 my-2" />
        <ul>
            <Link to="/" onClick={() => setCurrentPage(0)}>
              <li className={`flex flex-row p-4 gap-2 rounded-2xl ${currentPage === 0? "bg-focus" : ""}`}>
                <House/>Home
              </li>
            </Link>
            <Link to="/economic-overview" onClick={() => setCurrentPage(1)}>
              <li className={`flex flex-row p-4 gap-2 rounded-2xl ${currentPage === 1? "bg-focus" : ""}`}>
                <BookText/>Economic Overview
              </li>
            </Link>
            <Link to="/expenditure-composition" onClick={() => setCurrentPage(2)}>
              <li className={`flex flex-row p-4 gap-2 rounded-2xl ${currentPage === 2? "bg-focus" : ""}`}>
                <BookText/>Expenditure Composition
              </li>
            </Link>
            <Link to="/inflation-&-prices" onClick={() => setCurrentPage(3)}>
              <li className={`flex flex-row p-4 gap-2 rounded-2xl ${currentPage === 3? "bg-focus" : ""}`}>
                <BookText/>Inflation & Prices
              </li>
            </Link>
            <Link to="/forecasting-&-scenarios" onClick={() => setCurrentPage(4)}>
              <li className={`flex flex-row p-4 gap-2 rounded-2xl ${currentPage === 4? "bg-focus" : ""}`}>
                <BookText/>Forecasting & Scenarios
              </li>
            </Link>
            <Link to="/macro-stability" onClick={() => setCurrentPage(5)}>
              <li className={`flex flex-row p-4 gap-2 rounded-2xl ${currentPage === 5? "bg-focus" : ""}`}>
                <BookText/>Macro Stability
              </li>
            </Link>
        </ul>
      </div>

      <div className="flex flex-col justify-center items-center w-full p-4">
        <div className="w-8 h-8 border-2 border-focus bg-accent2 rounded-full z-50">

        </div>
        <img 
          src="indian-citizens.jpg" 
          alt="indian-citizens.jpg"
          className="relative -top-4 w-full rounded-b-xl cursor-pointer border-2 border-focus" 
        />
      </div>
    </nav>
  )
}

export default Navbar