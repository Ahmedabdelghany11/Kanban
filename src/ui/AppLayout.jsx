import Header from "./Header"

function AppLayout({children}) {
  return (
    <div className={``}>
        <Header />
        <main className={``}>
            {children}
        </main>
    </div>
  )
}

export default AppLayout