import React, { useState } from 'react'
function Data(props) {
    // const [record, setrecord] = useState(props.p)
    // console.log(props.p);

    return (
       <div className='col-xl-12'>
       <div className='container'>
    
           <table className='table table-striped table-bordered text-center table-darkinfo'>
               <thead>
                   <tr>
                       <th>FirstName </th>
                       <th>Last Name</th>
                       <th>Age</th>
                       <th>Contact No</th>
                       <th>Password</th>
                       <th>subject</th>
                       <th>Gender</th>
                       
                   </tr>
               </thead>
               <tbody>
                   {
                       props.actualDetail.map((come, index) => {
                           return (
                               <tr key={index}>
                                   <td>{come.firstName}</td>
                                   <td>{come.lastName}</td>
                                   <td>{come.age}</td>
                                   <td>{come.mobile}</td>
                                   <td>{come.password}</td>
                                    <td> {come.subject}</td>
                                   <td>{come.gender}</td>
                               </tr>
                           )
                       })
                   }


               </tbody>

           </table>
       

   </div>
       </div>
    )
}

export default Data
