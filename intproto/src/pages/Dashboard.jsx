
import {
	Link
} from 'react-router-dom';
import { LineC } from './Linec';
import { BarC } from './BarC';
import { PieC } from './PieC';
import React, { useState, useEffect } from 'react';


export const Dashboard = () => {
  
  const [chart, setChart] = useState([]);

  var baseUrl = 'http://localhost:4000/api/ph/1';

  useEffect(() => {
    const fetch_ph = async () => {
      await fetch(`${baseUrl}`)
      .then((response)=> {
        response.json().then((json)=>{
          console.log(json)
          setChart(json)
        })
      }).catch(error =>{
        console.log(error)
      })
    }
    fetch_ph() 
  }, [baseUrl])

  const fecha = chart.map(x=>x.fecha).toString()
  const hora =chart.map(x=>x.hora)
  const ph =chart.map(x=>x.ph)

  
  return (
    
      <>
      <div className='contenedor'>
        <div className='box'>
          <h1>Reporte reciente del ph</h1>
          <h2 >Nivel del ph: {ph}</h2>
          {ph >= 6 && ph <=10  && <h2>Estado: Neutro</h2>}
          {ph <=5  && <h2>Estado: Ácido</h2>}
          {ph >=11  && <h2>Estado: Alcalino</h2>}
          <h2 >Última fecha registrada: {fecha.slice(0,10)} </h2>
          <h2 >Última hora registada: {hora}</h2>
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
        <h2 style={{justifyItems:'center', padding:'30px'}}> Porcentaje mensual del ph</h2>
          <div style={{width:'330px', justifyContent:'center',  marginLeft:'30px'}}><PieC></PieC></div>
        </div>
        
        
        
        
        

      </div>
      </>
  )
};
