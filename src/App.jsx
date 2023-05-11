
import "./styles.scss" 
import Navbar from "./components/NavBar/navbar"
import { ItemListContainer } from "./components/ItemContainer/ItemListContainer"
// import {header} from "./components/Header/header"
import Historia from "./Historia/Historia"
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom" 
import Category from "./components/Category/Categorias"


function App() {
  return(

   < BrowserRouter>
     <Navbar/>

    <Routes>
      
      <Route path="/" element={ <ItemListContainer/>} />
       <Route path="/categorias" element={<Category/>} />
      <Route path="/historia" element={<Historia/>} />
      <Route path="*" element={<Navigate to={"/"}/> }/>
      
    </Routes>
      
   
     
    
 
      

   

    </BrowserRouter>
  

)
}

export default App
