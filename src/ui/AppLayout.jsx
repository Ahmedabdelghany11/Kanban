import Header from "./Header";
import Aside from "./Aside"

function AppLayout({children}) {
  return (
    <div className={`home w-full h-[100vh] relative flex`}>
      <Aside />
      <main className={`h-[100vh] bg-[var(--main-color)] flex-1 shadow-[0_-2px_1px_0_var(--text-color)] overflow-hidden`}>
        <Header />
        {children}
      </main>
    </div>
  )
}

export default AppLayout