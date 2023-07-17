import React from 'react'
import {
	Link
} from 'react-router-dom';
import { LineC } from './Linec';
import { BarC } from './BarC';
import { PieC } from './PieC';





export const Dashboard = () => {
  
  //PETICION DE DATOS A LA API
/*   var api = 'http://localhost:4000/api/ph/1'
  var proxyUrl = 'http://localhost:5173/';
  fetch(`${proxyUrl}${api}`,{
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': "*"
    }})
    .then(response=> response.json())
    .then(response=> console.log(response)) */


    

  return (
    
      <>
      <div className='contenedor'>
        <div className='box'>
          <h2 >Niveles de ph: 14.0</h2>
          <h2 >Estado: Normal</h2>
          <h2 >Fecha: 30/06/2023 </h2>
          <h2 >Hora: 12:39</h2>
          <Link className='b' style={{textDecoration:"None",color:'Black'}} to='/Reporte'>Ver los ultimos 5 reportes</Link>
          
        </div>
        
        <div className='boxPh'>¿Quieres saber cuál es el nivel de ph que debe tener el agua para tus plantas?, haz click <b><Link to='/Tabla'>AQUÍ</Link></b> para ver la tabla de ph recomendados.</div>
        
        {/* tabla diaria (tabla de linea o Line) */}
        <div className='box2'>
          <h2 style={{justifyItems:'center', padding:'30px'}}> Promedio diario del ph</h2>
           <LineC ></LineC>
        </div>
        
        <div className='box2'>
        <h2 style={{justifyItems:'center', padding:'30px'}}> Promedio semanal del ph</h2>
          <BarC></BarC>
        </div>
        
        
        
        <div className='box2'>
        <h2 style={{justifyItems:'center', padding:'30px'}}> Promedio mensual del ph</h2>
          <div style={{width:'330px', justifyContent:'center',  marginLeft:'30px'}}><PieC></PieC></div>
        </div>
        
        
        
        
        

      </div>
      </>
  )
};
