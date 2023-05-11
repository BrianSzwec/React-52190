

const Categorias = () => {
  return (
    <div className="categorias-container">
      <h2>Categorías</h2>
      <div className="cards-container">
        <div className="card">
          <img src="https://d3ugyf2ht6aenh.cloudfront.net/stores/001/372/435/products/hojas-teopicales-vinilo-exotico-planeta-vinilo-20221-8a12127c595131b3d616476370657293-1024-1024.jpg" alt="Vinilos" />
          <div className="card-content">
            <h3>Vinilos</h3>
            <p>Descripción de los vinilos</p>
            <button>Ver más</button>
          </div>
        </div>
        <div className="card">
          <img src="https://www.zonaplastica.com/wp-content/uploads/pvc-esp-sin-scaled.jpg" alt="Plásticos" />
          <div className="card-content">
            <h3>Plásticos</h3>
            <p>Descripción de los plásticos</p>
            <button>Ver más</button>
          </div>
        </div>
        <div className="card">
          <img src="https://http2.mlstatic.com/D_NQ_NP_819526-MLA41667575232_052020-O.jpg" alt="Transfers" />
          <div className="card-content">
            <h3>Transfers</h3>
            <p>Descripción de los transfers</p>
            <button>Ver más</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Categorias;