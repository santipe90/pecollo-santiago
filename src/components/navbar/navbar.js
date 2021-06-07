import './navbar.css'

export const Navbar = () => {
    return (
        <header className='barnav'>
          <p classname='logo'>Cresta FM
          </p>
        <nav classname='navigation'> 
          <ul classname='links'>

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
            </nav>
          </header> 
    )
  }