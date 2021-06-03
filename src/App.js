import './App.css'

function App() {

  const ecommerceName = 'Cresta FM'
  const handleLogo = () => alert(`Bienvenido a ${ecommerceName}`)

  return (
    <div className='App'>
      <header className='barnav'>
        <p classname='logo' onClick={handleLogo}>
          {ecommerceName}
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
    </div>
  )
}

export default App;
