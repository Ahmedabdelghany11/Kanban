import { Link } from "react-router-dom";
import { useTheme } from "../context/ThemeContext"
import logoPathDark from "/logo-dark.svg"
import logoPathLight from "/logo-light.svg"

function Logo() {
  const {isDark} = useTheme();

  return (
    <Link to="/" className={`w-full relative flex items-start justify-start h-16 px-3 py-5`}>
        <img src={isDark ? logoPathLight : logoPathDark} alt="Kanban" title="Kanban" className={`w-[80%] object-cover`}/>
    </Link>
  )
}

export default Logo