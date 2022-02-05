import './App.css';
import React, { useState } from 'react';
// import Data from './component/Data';
import Forms from './components/Forms';
function App() {
  const [actualDetail, setactualDetail] = useState([])
  let [detail, setdetail] = useState({
    firstName: "",
    lastName: "",
    age: "",
    mobile: "",
    password: "",
    gender: "",
    subject:"",
    term: false


  })
  // const Tabledata = (value) => {
  //   setdetail(value)
  //   console.log(value);
  // }
  return (
    <fieldset>
    <div className=' container-fluid mt-3'>
      <div className='row'>
        <div className='col-lg-10' >

          <Forms p={detail} send={setdetail} actualDetail={actualDetail} setactualDetail={setactualDetail} />
        </div>
        <div className='col-lg-10'>
          {/* <Data actualDetail={actualDetail} />
*/} 
        </div>
      </div>




    </div>
    </fieldset>
  )

}

export default App;