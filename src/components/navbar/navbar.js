import './navbar.css'
import logo from '../../logo.png'
import carritologo from '../../carritologo.png'

export const Navbar = () => {
    return (
        <header>

          <nav>
            <div class="logo">
              <img src={logo} alt="logo"/>
              </div> 
            <input type="search" placeholder="Buscar productos"/>
            <div class="carritologo">
            <img src={carritologo} alt="logo"/>
            </div>
           </nav>


           <ul>
            <li classname='link'>
            <a href='http://www.google.com'>Home</a>
            </li>

            <li classname='link'>
            <a href='http://www.google.com'>Contenido</a>
            </li>

            <li classname='link'>
            <a href='http://www.google.com'>Quienes Somos</a>
            </li>

            <li classname='link'>
            <a href='http://www.google.com'>Contacto</a>
            </li>
            </ul>
          </header> 
    )
  }