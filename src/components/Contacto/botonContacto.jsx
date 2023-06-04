
import { Link, useLocation } from "react-router-dom";

const BotonFlotante = () => {
const location = useLocation();
const enContacto = location.pathname === "/contacto";  

    if(enContacto){
        return null;
    }
  return (
    <Link to="/contacto">
      <button className="boton-flotante">
        Contacto
      </button>
    </Link>
  );
};

export default BotonFlotante;
