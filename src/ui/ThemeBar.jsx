import { HiMoon, HiSun } from "react-icons/hi"
import { useTheme } from "../context/ThemeContext"

function ThemeBar() {
  const {isDark, toggleTheme} = useTheme();

  function handleClickLight() {
    if (isDark) toggleTheme();
  }

  function handleClickDark() {
    if (!isDark) toggleTheme();
  }

  return (
    <div className={`w-full justify-center flex items-center gap-3 p-4 bg-[var(--main-color)] rounded-xl`}>
        <HiSun className={`text-2xl cursor-pointer`} onClick={handleClickLight}/>
        <span className={`w-16 h-6 rounded-xl bg-[var(--third-color)] relative p-1 flex items-center
          ${isDark ? "justify-end" : "justify-start"} cursor-pointer transition-[var(--main-transition)]`}
          onClick={toggleTheme}>
          <span className={`w-5 h-5 rounded-full bg-white relative`}></span>
        </span>
        <HiMoon className={`text-2xl cursor-pointer`} onClick={handleClickDark}/>
    </div>
  )
}

export default ThemeBar