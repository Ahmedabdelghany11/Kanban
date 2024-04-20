import { Link } from "react-router-dom"
import { MdDashboardCustomize, MdSpaceDashboard } from "react-icons/md";


function Navbar() {
  return (
    <nav className={`w-full flex flex-col gap-3 relative`}>
      <h4 className="uppercase text-sm font-bold tracking-wide text-gray-500 px-3">All broads (3)</h4>
      <div className={`w-full flex flex-col gap-3 relative`}>
        <Link to="" className={`nav_link active`}>
          <MdSpaceDashboard />
          Platform Launch
        </Link>
        <Link to="" className={`nav_link`}>
          <MdSpaceDashboard />
          Marketing Plan
        </Link>
        <Link to="" className={`nav_link`}>
          <MdSpaceDashboard />
          Roadmap
        </Link>
      </div>
      <button className={`nav_link text-[var(--third-color)] cursor-pointer`}>
        <MdDashboardCustomize />
        Create New Board
      </button>
    </nav>
  )
}

export default Navbar