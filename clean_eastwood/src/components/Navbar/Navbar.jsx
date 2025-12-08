import "./Navbar.css"
import React  from "react"

const Navbar = () => {
    return (
        <section className="header">
            <h1 className="logo"> TR<span>ENDY</span> </h1>
            <nav className="navbar">
                <ul className="nav-links">
                    <li>
                        <link to="/"> Home </link>
                    </li>
                </ul>

            </nav>
            <div className="icon">
              <button className="search-button">
                <i className="fas fa-search"></i>
                 </button>  

                 <link to= "/carrito" className="icon-button">
                    <i className="fas fa shopping-cart"></i>
                    <span className="counter">0</span>
                  </link>
            </div>
        </section>
    )
}

export default Navbar