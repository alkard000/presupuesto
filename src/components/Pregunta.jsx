import React, {useState, Fragment} from 'react';

import PropTypes from 'prop-types';

import Error from './Error';

const Pregunta = ({setPresupuesto, setRestante, setMostrarpregunta}) => {

    //DEFINIR STATE
    const [cantidad, setCantidad] = useState(0);
    const [error, setError] = useState(false);

    //FUNCION QUE LEE EL PRESUPUESTO 
    const handleChange = e => {
        setCantidad(parseInt(e.target.value, 10));
    }

    //SUBMIT PARA DEFINIR EL PRESUPUESTO
    const handleSubmit = e => {
        e.preventDefault();

        //VALIDAR
        if(cantidad < 1 || isNaN(cantidad)){
            setError(true);
            return;
        }

        //SI SE PASA A LA VALIDACION
        setError(false);
        setPresupuesto(cantidad);
        setRestante(cantidad);
        setMostrarpregunta(false);

    }

    return (  
        <Fragment>

            <h2>Coloca tu presupuesto</h2>

            {error ? <Error mensaje='El presupuesto es Incorrecto' /> : null}

            <form
                onSubmit={handleSubmit}
            >
                <input 
                    type="number" 
                    className="u-full-width" 
                    placeholder='Coloca tu presupuesto'
                    onChange={handleChange}
                />
                <input
                    type='submit'
                    className='button-primary u-full-width'
                    value='Definir presupuesto'
                />
            </form>
        </Fragment>
    );
}

Pregunta.propTypes = {
    setPresupuesto : PropTypes.func.isRequired,
    setRestante : PropTypes.func.isRequired,
    setMostrarpregunta : PropTypes.func.isRequired
}

export default Pregunta;
