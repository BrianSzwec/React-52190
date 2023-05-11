import Producto from './Producto';
import MOCK_DATA from './MOCK_DATA';

const Tienda = () => {
  return (
    <div className="container">
      <h1>Tienda</h1>
      <div className="row">
        {MOCK_DATA.map((producto) => (
          <div key={producto.id} className="col-md-4">
            <Producto producto={producto} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Tienda;