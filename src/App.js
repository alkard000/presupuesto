import React, {useState, useEffect} from 'react';

import Pregunta from './components/Pregunta';
import Formulario from './components/Formulario';
import Listado from './components/Listado';
import ControlPresupuesto from './components/ControlPresupuesto';

function App() {

  //DEFINIR EL STATE
  const [presupuesto, setPresupuesto] = useState(0);
  const [restante, setRestante] = useState(0);
  const [mostrarpregunta, setMostrarpregunta] = useState(true);
  const [gastos, setGastos] = useState([]);
  const [gasto, setGasto] = useState({});
  const [creargasto, setCreargasto] = useState(false);

  //USEEFFECT QEU ACTUALIZA EL RESTANTE
  useEffect(() => {
    if(creargasto){

      //AGREGA EL NUEVO RPESUPUESTO
      setGastos([
        ...gastos, gasto
      ]);

      //RESTA DEL RPESUPUESTO ACTUAL
      const presupuestoRestante = restante - gasto.cantidad;
      setRestante(presupuestoRestante);

      //RESETEAR
      setCreargasto(false);
    }
  }, [gasto, creargasto, gastos, restante]);

  return (
    <div className="container">
      <header>
        <h1>Presupuesto</h1>

        <div className="contenido-principal contenido">
          { mostrarpregunta ? (
            <Pregunta
              setPresupuesto={setPresupuesto}
              setRestante={setRestante}
              setMostrarpregunta={setMostrarpregunta}
            />
          ) : (
            <div className="row">
            <div className="one-half column">
              <Formulario
                setGasto={setGasto}
                setCreargasto={setCreargasto}
              />
            </div>
            <div className="one-half column">
              <Listado
                gastos={gastos}
              />
              <ControlPresupuesto
                presupuesto={presupuesto}
                restante={restante}
              />
            </div>
          </div>           
          )}

        </div>
      </header>
    </div>
  );
}

export default App;
