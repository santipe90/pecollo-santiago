import './App.css'
import { Switch, Route } from "react-router-dom";
import { Navbar } from './components/navbar/navbar'
import { ItemListContainer } from './components/ItemListContainer/ItemListContainer'
import { ItemDetailContainer } from "./components/ItemDetailContainer/ItemDetailContainer";

function App() {

  return (
    <div className='App'>
      <Switch>
      <Route exact path="/">
           <Navbar />
      </Route>
      <Route exact path='/category/:id'>
           <ItemListContainer/>
      </Route>
      <Route exact path='/item/:id'>
           <ItemDetailContainer/>
      </Route>
      </Switch>
    </div>
  )
}

export default App;