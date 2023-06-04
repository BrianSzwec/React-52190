
import "./styles.scss"
import Navbar from "./components/NavBar/navbar"
import { ItemListContainer } from "./components/ItemContainer/ItemListContainer"
// import {header} from "./components/Header/header"
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer"
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom"
import { CartProvider } from "./context/CartContext"
import Cart from "./components/Carrito/Cart"
import Contacto from "./components/Contacto/Contacto"
import Checkout from "./components/Checkout/Checkout"
import BotonFlotante from "./components/Contacto/botonContacto"

function App() {

  
  return (
  
<CartProvider>
      <BrowserRouter>
      <BotonFlotante/>
        <Navbar />
            <Routes>
              <Route path="/" element={<ItemListContainer />} />
              <Route path="/categorias/:categoryId" element={<ItemListContainer />} />
              <Route path="*" element={<Navigate to={"/"} />} />
              <Route path="/detail/:itemId" element={<ItemDetailContainer />} />
              <Route path="/cart" element = { <Cart/> } />
              <Route path="/contacto" element = { <Contacto/> } />
              <Route path="/checkout" element = { <Checkout/> } />
             </Routes>
      </BrowserRouter>

</CartProvider>
    


    

  )
}

export default App
