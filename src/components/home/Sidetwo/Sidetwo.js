import React, { useEffect, useState } from 'react'

import useAxiosPrivate from "../../../hooks/useAxiosPrivate";

const Sidetwo = () => {

    const [users, setUsers] = useState([]);
    const axiosPrivate = useAxiosPrivate();


    useEffect(() => {
        console.log("sdsd");
        let isMounted = true;
        const controller = new AbortController();
        const username = localStorage.getItem('userName');
    
        const getUsers = async () => {
          try {
            const response = await axiosPrivate.get(`/patient/${username}/patients`, {
              signal: controller.signal
            });
            // console.log(typeof(JSON.stringify(response.data)));
            // console.log(JSON.parse(response.data));
            console.log(response);
             isMounted && setUsers(response.data);
            setUsers(response.data);
            console.log(users);
          } catch (err) {
            console.error(err);
            // navigate('/', { state: { from: location }, replace: true });
          }
        }
    
        getUsers();
    
        return () => {
          isMounted = false;
          controller.abort();
        }
      }, []);
    

  return (
    <div className="Table">
        <h5>Recent Patients</h5>
    
        <table class="table table-striped" style={{border:"0.5px solid #bacaf7",borderRadius:'6px 6px 6px 6px'}}>
            <thead style={{borderRadius:'10px'}}>
                <tr style={{borderTopLeftRadius: "5px"}}>
                <th scope="col">First Name</th>
                <th scope="col">Last Name</th>
                <th scope="col">Date</th>
                <th scope="col">Status</th>
                </tr>
            </thead>
            <tbody>
            {users.map((student, index) => (
              <tr data-index={index}>
                <td>{student.fullName}</td>
                <td>{student.email}</td>
                <td>{student.phoneNo}</td>
                <td>Active</td>

              </tr>
            ))}

                
            </tbody>
        </table>
    
        </div>
  )
}

export default Sidetwo