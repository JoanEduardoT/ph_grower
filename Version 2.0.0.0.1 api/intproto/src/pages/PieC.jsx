import {
    Chart as ChartJS,
    ArcElement,
    Tooltip,
    Legend
  } from 'chart.js';
import { Pie } from 'react-chartjs-2';

ChartJS.register(
    ArcElement,
    Tooltip,
    Legend
)


export const PieC = () => {
  
  /* datos para la tabla de pie */
  const dataPie={
    labels: ['Ácido','Normal','Alcalino'],
    datasets:[{
      label:'Nivel promedio del ph',
      data: [8.0,3.3, 9.6],
      backgroundColor:['red','blue','green'],
      tension: 0.4
    }]}
    return(
        <Pie  data={dataPie}></Pie>

    )

}