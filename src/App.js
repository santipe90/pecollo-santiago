import './App.css'
import { Navbar } from './components/navbar/navbar'
import { ItemListContainer } from './components/itemlistcontainer/itemlistcontainer'
import { Product } from './components/product/product'

function App() {

  const products = [
    {
      title: 'Remera Classic Cresta',
      price: 1200,
      description: 'Color Negro'
      
    },
    {
      title: 'Remera New Cresta',
      price: 1200,
      description: 'Color Amarillo'
      
    },
    {
      title: 'Remera Oldie Cresta',
      price: 1200,
      description: 'Color Blanco'
      
    },
    {
      title: 'Remera Classic2 Cresta',
      price: 1200,
      description: 'Color Verde'
      
    },
      ]

  return (
    <div className='App'>
      <Navbar />
      {products.map((product) => (
        <Product
        title={product.title}
        price={product.price}
        description={product.description} 
        />
    
         )
         )
         
         }
      <ItemListContainer/>
    </div>
  )
}

export default App;
