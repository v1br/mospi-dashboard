import { useState } from "react"
import { Link } from "react-router-dom"
import { House, BookText, BadgeQuestionMark, CircleEllipsis, CircleX } from "lucide-react"

const Navbar = () => {

  const [currentPage, setCurrentPage] = useState<number>(0);
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <>

    {/* Mobile Null Space */}
    <div className="md:hidden min-h-16 fixed left-0 top-0 right-0 bg-primary"></div>

    {/* Navigation Bar */}
    <nav className={`fixed left-4 top-4 right-4 md:right-0 md:bottom-4 md:w-64 flex flex-col justify-between items-center bg-secondary2 text-primary text-xs rounded-t-2xl ${isOpen? "rounded-b-2xl":""} md:rounded-t-none md:rounded-l-2xl border-2 border-secondary`}>
      <div className="block md:px-4 w-full">

        <div className="flex flex-row justify-between items-center px-4">
          {/* Navbar heading */}
          <div className="text-lg pl-4 mt-4 mb-4 md:mb-0">
            MoSPI.gov
          </div>

          {/* Hamburger Icon */}
          <div className="md:hidden">
            <button 
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen?
              <CircleX className="text-accent"/>
              :<CircleEllipsis className="text-primary"/>
              }
            </button>
          </div>
        </div>


        {/* Mobile Drawer */}

        {isOpen &&
          <ul className= {`block md:hidden bg-secondary rounded-b-2xl`}>
            <Link to="/" onClick={() => setCurrentPage(0)}>
              <li className={`flex flex-row p-4 gap-2 rounded-2xl ${currentPage === 0? "text-blue-200" : ""}`}>
                <House/>Home
              </li>
            </Link>
            <Link to="/economic-overview" onClick={() => setCurrentPage(1)}>
              <li className={`flex flex-row p-4 gap-2 rounded-2xl ${currentPage === 1? "text-blue-200" : ""}`}>
                <BookText/>Economic Overview
              </li>
            </Link>
            <Link to="/production-composition" onClick={() => setCurrentPage(2)}>
              <li className={`flex flex-row p-4 gap-2 rounded-2xl ${currentPage === 2? "text-blue-200" : ""}`}>
                <BookText/>Production Composition
              </li>
            </Link>
            <Link to="/inflation-&-prices" onClick={() => setCurrentPage(3)}>
              <li className={`flex flex-row p-4 gap-2 rounded-2xl ${currentPage === 3? "text-blue-200" : ""}`}>
                <BookText/>Inflation & Prices
              </li>
            </Link>
            <Link to="/faqs" onClick={() => setCurrentPage(4)}>
              <li className={`flex flex-row p-4 gap-2 rounded-2xl ${currentPage === 4? "text-blue-200" : ""}`}>
                <BadgeQuestionMark/>FAQs
              </li>
            </Link>
          </ul>
        }

        {/* Separator */}
        <hr className="hidden md:block border-1 my-2" />

        {/* Desktop Panel */}
        <ul className="hidden md:block">
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
            <Link to="/production-composition" onClick={() => setCurrentPage(2)}>
              <li className={`flex flex-row p-4 gap-2 rounded-2xl ${currentPage === 2? "bg-focus" : ""}`}>
                <BookText/>Production Composition
              </li>
            </Link>
            <Link to="/inflation-&-prices" onClick={() => setCurrentPage(3)}>
              <li className={`flex flex-row p-4 gap-2 rounded-2xl ${currentPage === 3? "bg-focus" : ""}`}>
                <BookText/>Inflation & Prices
              </li>
            </Link>
            <Link to="/faqs" onClick={() => setCurrentPage(4)}>
              <li className={`flex flex-row p-4 gap-2 rounded-2xl ${currentPage === 4? "bg-focus" : ""}`}>
                <BadgeQuestionMark/>FAQs
              </li>
            </Link>
        </ul>
      </div>

      {/* Sticky Note */}
      <div className="hidden md:flex flex-col justify-center items-center w-full p-4">
        <div className="flex justify-center items-center w-8 h-8 p-1 border-2 border-focus bg-accent rounded-full z-50">
          <div className="w-4 h-4 bg-accent2 rounded-full"></div>
        </div>
        <a href="https://mospi.gov.in/publication/national-accounts-statistics-2025" target="_blank" rel="noopener noreferrer">
          <img 
            src="indian-citizens.jpg" 
            alt="indian-citizens.jpg"
            className="relative -top-4 w-full rounded-b-xl cursor-pointer border-2 border-focus transform hover:scale-105 transition duration-300 ease-in-out" 
          />
        </a>
      </div>
    </nav>
    </>
  )
}

export default Navbar