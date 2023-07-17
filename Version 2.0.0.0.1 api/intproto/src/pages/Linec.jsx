import {
    Chart as ChartJS,
    LineElement,
    PointElement,
    CategoryScale,
    LinearScale,
    Tooltip,
    Legend
  } from 'chart.js';
import { Line } from 'react-chartjs-2';
import React, { useState, useEffect } from 'react';

ChartJS.register(
  LineElement,
  PointElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend
)


export const LineC = () => {
/*   const [chart, setchart] = useState([]);

  var baseUrl = 'http://localhost:4000/api/ph/4';
  var proxyUrl = 'http://localhost:5173/';

  useEffect(() => {
    const fetch_ph = async () => {
      await fetch(`${proxyUrl}${baseUrl}`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'x-access-token':"",
          'Access-Control-Allow-Origin': "*"
        }
      })
        .then((response) => {
          if (response.ok) {
            response=> response.json().then((json) => {
              console.log(json.data);
              setchart(json.data)
            });
          }
        }).catch((error) => {
          console.log(error);
        });
    }
    fetch_ph() 
  }, [baseUrl,proxyUrl,""])

  console.log("chart", chart); */
  
  /* datos para la tabla de linea */
  const dataLine={
    labels: ['Lunes','Martes','Miercoles','Jueves','Sabado','Domingo'],
    datasets:[{
      label:'Nivel promedio del ph',
      data: "",
      borderColor: 'green',
      backgroundColor:'green',
      tension: 0.4
    }]}
    return(
        <Line style={{display:'grid', alignItems:'center', justifyContent:'center'}} data={dataLine}></Line>

    )

}