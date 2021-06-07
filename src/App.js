import './App.css'
import { Navbar } from './components/navbar/navbar'

function App() {

  const ecommerceName = 'Cresta FM'
  const handleLogo = () => alert(`Bienvenido a ${ecommerceName}`)

  return (
    <div className='App'>
      <Navbar/>
    </div>
  )
}

export default App;
