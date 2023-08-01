import React, { useState, useEffect } from 'react';
import {
  Chart as ChartJS,
  BarElement,
  CategoryScale, //x
  LinearScale, //y
  Tooltip,
  Legend
} from 'chart.js';
import { Bar } from 'react-chartjs-2';




/* import axios from 'axios'; */

ChartJS.register(
  BarElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend
)

export const BarC = () => {

const [chart, setChart] = useState([]);

  var baseUrl = 'http://localhost:4000/api/ph/4';

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

  const promedio =chart.map(x=>x.promedio)
  
  var dataBar = {
    labels: ['Semana 1', 'Semana 2', 'Semana 3', 'Semana 4'],
    datasets: [{
      label: 'Nivel promedio del ph',
      data:promedio,
      borderColor: 'green',
      backgroundColor: 'green',
      borderWidth: 1
    }]
  }


  return (
    <Bar data={dataBar}></Bar>

  )
}