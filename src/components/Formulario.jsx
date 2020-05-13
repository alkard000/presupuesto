import React, {useState} from 'react';

import shortid from 'shortid';
import PropTypes from 'prop-types';

import Error from './Error';


const Formulario = ({setGasto, setCreargasto}) => {

    const [nombre, setNombre] = useState('');
    const [cantidad, setCantidad] = useState(0);
    const [error, setError] = useState(false);

    //CUANDO EL UUARIO AGREGUE UN GASTO
    const handleSubmit = e => {
        e.preventDefault();

        //VALIDAR
        if(cantidad < 1 || isNaN(cantidad) || nombre.trim() === ''){
            setError(true);
            return;
        }

        //SI NO HAY ERROR
        setError(false);

        //CONSTRUIR GASTO
        const gasto = {
            nombre, 
            cantidad, 
            id : shortid.generate()
        }

        //PASAR EL GASTO PRINCIPAL
        setGasto(gasto);
        setCreargasto(true);

        //RESETEAR EL FORM
        setNombre('');
        setCantidad(0);
    }

    return (  
        <form
            onSubmit={handleSubmit}
        >
            <h2>Agrega tus Gastos Aqui</h2>

            {error ? <Error mensaje='Ambos campos son obligatorios o presupuesto incorrecto'/> : null}

            <div className="campo">
                <label>Nombre Gasto</label>
                <input 
                    type="text" 
                    className="u-full-width" 
                    placeholder='Ej. Trnasporte'
                    value={nombre}
                    onChange={e => setNombre(e.target.value)}
                />
            </div>
            <div className="campo">
                <label>Cantidad Gasto</label>
                <input 
                    type="number" 
                    className="u-full-width" 
                    placeholder='Ej. 300'
                    value={cantidad}
                    onChange={e => setCantidad(parseInt(e.target.value, 10))}
                />
            </div>
            <input 
                type="submit"
                className='button-primary u-full-width'
                value='Agregar gasto'
            />
        </form>
    );
}

Formulario.propTypes = {
    setGasto : PropTypes.func.isRequired,
    setCreargasto : PropTypes.func.isRequired
}
 
export default Formulario;