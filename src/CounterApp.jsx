import { useState } from 'react'; //Hook
import PropTypes from 'prop-types';//^Properties




export const CounterApp = ({value}) => {

    const [ counter, setCounter ] = useState( value );


    const handleAdd = (event) => { 
        // console.log(event)
        setCounter( counter + 1 );
        //setCounter( (c)=> c + 1)  //ambas formas hacen lo mismo, depende de la circunstancia del momento

    }

    const handleRemove = (event) => setCounter( counter - 1 );
    const handleReset = (event) => setCounter( value );

    return(
        <>
            <h1>CounterApp</h1>
            <h2> { counter } </h2>

            <button onClick={ handleAdd }> +1 </button>
            <button onClick={ handleRemove }> -1 </button>
            <button onClick={ handleReset }> Reset </button>
        </>
    )


}

CounterApp.propTypes= {
    value: PropTypes.number.isRequired
}