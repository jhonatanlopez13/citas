import React from 'react';
import './style.css'

const Cita = ({cita}) => ( 
    <div className="citas">
       <div className="cita">
         {/*<p className='title'>id: <span>{cita.id}</span> </p> */}
        <p className='title'>Mascota: <span>{cita.mascota}</span> </p>
        <p className='title'>Dueño: <span>{cita.propietario}</span> </p>
        <p className='title'>Fecha: <span>{cita.fecha}</span> </p>
        <p className='title'>Hora: <span>{cita.hora}</span> </p>
        <p className='title'>Sintomas: <span>{cita.sintomas}</span> </p>
       </div>
    </div>
);
 
export default Cita;