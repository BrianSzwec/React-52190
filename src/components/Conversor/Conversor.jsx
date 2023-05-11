

const Conversor = () =>{

    return(
        <div class="container">
        <div class="moneda">
            <select id="moneda-uno">
                <option value="ARS">ARS</option>
                <option value="BRL">REAL</option>
                <option value="USD" selected>USD</option>
                

            </select>

            <input type="number" id="cantidad-uno" placeholder="0"  value="1"/>

        </div>

        <div class="taza-cambio-container">
            <button class="btn" id="taza">
                cambio
            </button>

            <div class="cambio" id="cambio"></div>

        </div>

        <div class="moneda">
            <select id="moneda-dos">
                <option value="USD">USD</option>
                <option value="ARS" selected>ARS</option>
                <option value="BRL">REAL</option>
                

            </select>

            <input type="number" id="cantidad-dos" placeholder="0"/>

        </div>
    </div>
    )
        
        
    
 }
export default Conversor