import React from 'react'
export const Reporte = () => {
  return (
  
  
    <div className='contreport' >
      
      <h2>Historial de los ultimos 5 reportes</h2>
      <br />
      <table className='tabla' >
        <thead>
          <tr>
            <th style={{borderRadius:'20px 0px 0px 0px '}}>Nivel de ph</th>
            <th>Estado</th>
            <th>Fecha</th>
            <th style={{borderRadius:'0px 20px 0px 0px '}}>Hora</th>
          </tr>
          <tr>
            <td>7.8</td>
            <td>Normal</td>
            <td>23/05/2023</td>
            <td>3:45</td>
          </tr>
          <tr>
            <td>7.8</td>
            <td>Normal</td>
            <td>23/07/2023</td>
            <td>12:45</td>
          </tr>
          <tr>
            <td>2.8</td>
            <td>Acido</td>
            <td>23/05/2023</td>
            <td>3:45</td>
          </tr>
          <tr>
            <td>8.8</td>
            <td>Alcalino</td>
            <td>31/06/2023</td>
            <td>9:25</td>
          </tr>
          <tr >
            <td>7.0</td>
            <td>Normal</td>
            <td>17/04/2023</td>
            <td>11:55</td>
          </tr>
          
        </thead>
      </table>
    </div>
  )
}