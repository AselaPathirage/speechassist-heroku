import React from 'react'

const Sidetwo = () => {

  return (
    <div className="Table">
        <h5>Recent Patients</h5>
    
        <table class="table table-striped" style={{border:"0.5px solid #bacaf7",borderRadius:'6px 6px 6px 6px'}}>
            <thead style={{borderRadius:'10px'}}>
                <tr style={{borderTopLeftRadius: "5px"}}>
                <th scope="col">#</th>
                <th scope="col">First Name</th>
                <th scope="col">Last Name</th>
                <th scope="col">Date</th>
                <th scope="col">Status</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                <th scope="row">1</th>
                <td>Mark</td>
                <td>Silva</td>
                <td>16-08-2022</td>
                <td>Active</td>
                </tr>
                <tr>
                <th scope="row">2</th>
                <td>Harith</td>
                <td>Iduwara</td>
                <td>18-08-2022</td>
                <td>Active</td>
                </tr>
                <tr>
                <th scope="row">3</th>
                <td>Nisan </td>
                <td>Abeyvikrama</td>
                <td>18-08-2022</td>
                <td>Active</td>
                </tr>
                <tr>
                <th scope="row">4</th>
                <td>Nimesh</td>
                <td>Nishamal</td>
                <td>19-08-2022</td>
                <td>Active</td>
                </tr>
                <tr>
                <th scope="row">5</th>
                <td>Yasith</td>
                <td>Perera</td>
                <td>20-08-2022</td>
                <td>Active</td>
                </tr>
                
            </tbody>
        </table>
    
        </div>
  )
}

export default Sidetwo