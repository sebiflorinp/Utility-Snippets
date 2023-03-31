import Header from "./Header"

function Layout({ children }){
  return (
    <div className="containerPagina">
      <Header/>
      <main>{children}</main>
    </div>
  )
}

export default Layout

