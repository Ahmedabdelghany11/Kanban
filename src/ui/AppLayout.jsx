import Header from "./Header";
import Aside from "./Aside"

function AppLayout({children}) {
  return (
    <div className={`home w-full h-full relative flex`}>
      <Aside />
      <main className={`bg-[var(--main-color)] flex-1 shadow-[0_-2px_1px_0_var(--text-color)]`}>
        <Header />
        {children}
      </main>
    </div>
  )
}

export default AppLayout