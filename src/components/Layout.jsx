import Header from "./Header"
import Footer from "./Footer"
function Layout({ children }){
  return (
    <div className="containerPagina">
      <Header/>
      <main>{children}</main>
      <Footer/>
    </div>
  )
}

export default Layout

