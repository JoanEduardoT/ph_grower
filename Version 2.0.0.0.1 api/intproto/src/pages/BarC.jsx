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
  const [chart, setchart] = useState([]);

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
      .then(response=> response.json())
      .then(response=> console.log(response))
        setchart(response.data)
    }
    fetch_ph() 
  }, [baseUrl,proxyUrl])

  console.log("chart", chart);


  /* async function fetch_ph(){
    const url= 'http://localhost:4000/api/ph/4'
    const response = await fetch(url)
    const ph= await response.json()
    console.log(ph[0])
    return ph
  }
  fetch_ph()
 
  const [state, setstate]= useState()
  useEffect (()=>{
    const fetch_ph= async()=>{
      await fetch('http://localhost:4000/api/ph/4').then((data)=>{
        console.log("promedio ph",data)
        const res =data.json();
        return res
      }).then((res)=>{
        console.log("resss",res)
      }).catch(e=>{
        console.log("error", e)
      })
    }
    fetch_ph()
  },[]) */

/*   const [chart, setchart] = useState([]);

  var baseUrl = 'http://localhost:4000/api/ph/4';
  var proxyUrl = 'http://localhost:5173/';

  useEffect(() => {
    const fetch_ph = async () => {

      const {data} = await axios.get(`${proxyUrl}${baseUrl}`, {
       
        headers: {
          'Content-Type': 'application/json',
          'x-access-token':"",
          'Access-Control-Allow-Origin': "*"
        }})
      console.log(data.data)
    }
    fetch_ph() 
  }, [baseUrl,proxyUrl,""]) */
 
/*   const [chart, setchart] = useState({});
  useEffect(async()=>{
    await fetch('http://localhost:4000/api/ph/4', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'x-access-token':"",
        'Access-Control-Allow-Origin': "*"
      }})
    .then(response=> response.json())
    .then(json => console.log(json)
    )
  },[]) */

/*const [chart, setchart] = useState([]);

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token){
      const axiosConfig={
        headers:{
          Accept:"application/json",
          Authorization:`Bearer ${token}`
        }
      };
      axios.get('http://localhost:4000/api/ph/4', axiosConfig)
        if(res.data.data.lengt > 0){

        }
        else{
          console.log("No DATA")
        }
    }
*/

/*   const [data, setChartData] = useState({});

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch('http://localhost:4000/api/ph/4');
      const data = await response.json();
      const processedData = dataBar(data);
      setChartData(processedData);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };
  const dataBar = (data) => {
      const datos = data.data.map((ph) => ph.promedio);
    return {
      labels: ['Semana 1', 'Semana 2', 'Semana 3', 'Semana 4'],
      datasets: [{
      label: 'Nivel promedio del ph',
      data:datos,
      borderColor: 'green',
      backgroundColor: 'green',
      borderWidth: 1
        },
      ],
    };
  }; */


  const dataBar = {
    labels: ['Semana 1', 'Semana 2', 'Semana 3', 'Semana 4'],
    datasets: [{
      label: 'Nivel promedio del ph',
      data:"",
      borderColor: 'green',
      backgroundColor: 'green',
      borderWidth: 1
    }]
  }


  return (
    <Bar data={dataBar}></Bar>

  )
}