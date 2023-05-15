
import "./styles.scss" 
import Navbar from "./components/NavBar/navbar"
import { ItemListContainer } from "./components/ItemContainer/ItemListContainer"
// import {header} from "./components/Header/header"
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer"
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom" 



function App() {
  return(

   < BrowserRouter>
     <Navbar/>

    <Routes>
      
      <Route path="/" element={ <ItemListContainer/>} />
      <Route path="/categorias/:categoryId" element={<ItemListContainer/>} />
      <Route path="*" element={<Navigate to={"/"}/> }/>
      
      <Route path="/detail/:itemId" element={<ItemDetailContainer/>} />
    </Routes>
      
    
   
     
    
 
      

   

    </BrowserRouter>
  
)
}

export default App
