

const Categoria = () => {
  return (
    
      <div className="d-flex flex-column align-items-center justify-content-center my-5">
        <div className="row w-75 h-80">
          <div className="col-3 m-3 text-center bg-white rounded">
            <img
              className="my-2"
              src="https://www.zonaplastica.com/wp-content/uploads/pvc-esp-sin-scaled.jpg"
              alt="Plásticos"
              width={180}
              height={180}
            />
            <h2 className="mt-3">Plásticos</h2>
            <p>Descripción de los plásticos</p>
            <button className="btn btn-primary mt-3">
              Ver más </button>
            
          </div>
          <div className="col-3 m-3 text-center bg-white rounded">
            <img
              className="my-2"
              src="https://d3ugyf2ht6aenh.cloudfront.net/stores/001/372/435/products/hojas-teopicales-vinilo-exotico-planeta-vinilo-20221-8a12127c595131b3d616476370657293-1024-1024.jpg"
              alt="Vinilos"
              width={180}
              height={180}
            />
            <h2 className="mt-3">Vinilos</h2>
            <p>Descripción de los vinilos</p>
            <button className="btn btn-primary mt-3">
              Ver más</button>
            
          </div>
          <div className="col-3 m-3 text-center bg-white rounded">
            <img
              className="my-2"
              src="https://http2.mlstatic.com/D_NQ_NP_819526-MLA41667575232_052020-O.jpg"
              alt="Transfers"
              width={180}
              height={180}
            />
            <h2 className="mt-3">Transfer</h2>
            <p>Descripción de los transfers</p>
            <button className="btn btn-primary mt-3">Ver más</button>
          </div>
        </div>
        
      </div>
    
  );
};

export default Categoria;