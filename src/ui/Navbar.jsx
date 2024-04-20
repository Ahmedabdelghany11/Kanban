import { NavLink } from "react-router-dom"
import { MdDashboardCustomize, MdSpaceDashboard } from "react-icons/md";
import Spinner from "./Spinner";
import useBroadsList from "../features/useBroadsList";


function Navbar() {
  const {isLoading, broads} = useBroadsList();

  if(isLoading) return <Spinner />

  return (
    <nav className={`w-full flex flex-col gap-3 relative`}>
      <h4 className="uppercase text-sm font-bold tracking-wide text-gray-500 px-3">
        {broads ?
          `All broads (${broads.length})` :
          `No broads right now`
        }
      </h4>
      <div className={`w-full flex flex-col gap-3 relative`}>
        {broads &&
          broads.map(broad => (
            <NavLink to={`/${broad.id}`} className={`nav_link`} key={broad.id}>
              <MdSpaceDashboard />
              {broad.name}
            </NavLink>
          ))
        }
      </div>
      <button className={`nav_link text-[var(--third-color)] cursor-pointer`}>
        <MdDashboardCustomize />
        Create New Board
      </button>
    </nav>
  )
}

export default Navbar