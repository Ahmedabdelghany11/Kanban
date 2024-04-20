import Logo from "./Logo";
import Navbar from "./Navbar"
import ThemeBar from "./ThemeBar"

function Aside() {
  return (
    <aside className={`h-[100vh] w-64 bg-[var(--secondary-color)] sm:flex hidden flex-col gap-8`}>
      <Logo />
      <Navbar />
      <div className={`flex-1 w-full flex flex-col gap-3 items-center justify-end px-5 py-10`}>
        <ThemeBar />
      </div>
    </aside>
  )
}

export default Aside