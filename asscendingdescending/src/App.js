import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import FetchDataShow from './components/FetchDataShow';

function App() {
  


  const [updatedData, setUpdatedData] = useState([])
  const recivedData = async () => {
    try {
      const response = await fetch('https://jsonplaceholder.typicode.com/posts')
      const rec = await response.json()
      setUpdatedData(rec.map(data=>data.title))

    } catch (error) {
      console.log(error);
    }
  }
  useEffect(() => {
    recivedData()

  }, [])

const asscending=()=>{
const updatedDataCopy=[...updatedData].sort((first,second)=>first.localeCompare(second))
setUpdatedData(updatedDataCopy)//always remember when you doing anythin in refrence type first take a copy of it and do it
}
const descending=()=>{
  const updatedDataCopy=[...updatedData].sort((first,second)=>second.localeCompare(first))
  setUpdatedData(updatedDataCopy)
}
const compare=(event)=>{
  const value=event.target.value
  console.log(value);
  const updatedDataCopy=[...updatedData].filter(data=>data.startsWith(value))
  console.log(updatedDataCopy);
  setUpdatedData(updatedDataCopy)
}

  return (
    <div className="App">
      <div className='container mt-5'>
        <div className='row'>
          <div className='col-md-7'>
            <FetchDataShow updatedData={updatedData} setUpdatedData={setUpdatedData}  />
          </div>
          <div className='col-md-5'>
            <button className='btn btn-primary' onClick={()=>{asscending()}}>Ascending</button>
            <button className='btn btn-success' onClick={()=>{descending()}}>Descending</button>
            <br />
            <br />

            <input className='form-control' placeholder='Search here' onChange={(event)=>{compare(event)}}/>
          </div>

        </div>
      </div>


    </div>
  );
}

export default App;
