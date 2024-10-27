import React, {useState} from 'react';
import '../css/formulario.css';

const Formulario = ()=>{

    const [nombre,setNombre] = useState('');
    const [email,setEmail] = useState('');
    const [mensaje,setMensaje] = useState('');

    const manejarEvento = (event)=>{
        event.preventDefault();
        alert(`Nombre enviado: ${nombre}\n Email enviado: ${email}\n mensaje enviado: ${mensaje}`)
    }

    return(
        <div className='contenedor_general'>
            <form onSubmit={manejarEvento}>
                <div className='contenedor_titulo'>
                    <h1>Formulario</h1>
                </div>
                <div className='contenedor_campos'>
                    <div className='contenedor_campo_formulario'>
                        <label form='nombre'>Nombre: </label>
                        <input type='text' name='nombre' value={nombre} placeholder='ej. Paulo Jaeger' onChange={(e)=>{
                            setNombre(e.target.value);
                        }} required id='nombre'></input>
                    </div>
                </div>
                <div className='contenedor_campos'>
                    <div className='contenedor_campo_formulario'>
                        <label form='email'>Email: </label>
                        <input type='text' name='nombre' value={email} placeholder='ej. paulodev@gmail.com' onChange={(e)=>{
                            setEmail(e.target.value);
                        }} required id='email'></input>
                    </div>
                </div>
                <div className='contenedor_campos'>
                    <div className='contenedor_campo_formulario'>
                        <label form='mensaje'>Mensaje: </label>
                        <input type='text' name='nombre' value={mensaje} placeholder='ej. Este es un mensaje' onChange={(e)=>{
                            setMensaje(e.target.value);
                        }} required id='mensaje'></input>
                    </div>
                </div>
                <button typeof='submite'>Enviar</button>
            </form>
        </div>
    )
}

export default Formulario