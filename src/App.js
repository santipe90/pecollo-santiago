import './App.css'
import { Navbar } from './components/navbar/navbar'
import { ItemListContainer } from './components/itemlistcontainer/itemlistcontainer'

function App() {

  //const ecommerceName = 'Cresta FM'
  //const handleLogo = () => alert(`Bienvenido a ${ecommerceName}`)

  return (
    <div className='App'>
      <Navbar />
      <ItemListContainer/>
    </div>
  )
}

export default App;
