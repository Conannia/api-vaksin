import logo from './logo.svg';
import './App.css';
import Axios from 'axios';
import React, { useEffect } from 'react';


function App() {


  useEffect(() => {
    Axios.post(`https://kipi.covid19.go.id/api/get-province`)
      .then(hasil => {
        console.log(hasil.data)
      })

  });



  return (
    <div className="App">
      <div className='table'>
        <table>
          <thead>
            <th>NO</th>
            <th>NAMA FASKES</th>
            <th>ALAMAT</th>
            <th>KATEGORI</th>
            <th>TOTAL VAKSIN 1:</th>
            <th>TOTAL VAKSIN 2:</th>
            <th>TOTAL VAKSIN 1 DAN 2:</th>
          </thead>
          <tbody>
            <td>01</td>
            <td>Type Text</td>
            <td>Type Text</td>
            <td>Type Text</td>
            <td>Type Number</td>
            <td>Type Number</td>
            <td>Type Number</td>
          </tbody>
        </table>
      </div>


    </div>
  );
}

export default App;
