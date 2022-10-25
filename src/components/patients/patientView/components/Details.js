import React, { useEffect, useState, useCallback } from 'react';
import useAxiosPrivate from "../../../../hooks/useAxiosPrivate";
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';


function Details(props) {
   const axiosPrivate = useAxiosPrivate();
   const [name,setName]=useState("");
   const [email,setEmail]=useState("");
   const [tel,setTel]=useState(0);

   const getPatientName = async (patientId) => {
      const controller = new AbortController();

      try {
         const response2 = await axiosPrivate.get(`/patient/${props.patientId}`, {
            signal: controller.signal
         });
         // console.log(typeof(JSON.stringify(response2.data.fullName)));
         return response2.data.fullName;

      } catch (err) {
         console.error(err);
      }
   }

   useEffect(() => {
      console.log("sdsd");
      let isMounted = true;
      const controller = new AbortController();
      const therapistId = localStorage.getItem('userName');

      const getEvents = async () => {
         try {
            const response = await axiosPrivate.get(`/patient/${props.patientId}`, {
               signal: controller.signal
            });

            console.log(response.data.email);
            setEmail(response.data.email);
            isMounted && setName(response.data.fullName) && setTel(response.data.phoneNo);
            console.log(email);
            // setUsers(response.data);
         } catch (err) {
            console.error(err);
            // navigate('/', { state: { from: location }, replace: true });
         }
      }

      getEvents();

      return () => {
         isMounted = false;
         controller.abort();
      }
   }, []);






   return (

      <Stack direction="row" spacing={2} padding={2} justifyContent="center" alignItems="center" >
         <br />
         <Avatar sx={{ height: '100px', width: '100px', bgcolor: '#4b86c9' }}><Typography variant="h5" gutterBottom >
            U
         </Typography></Avatar>
         <div><br />
            Name : {name}<br />
            Telephone Number : {tel} <br />
            Email : {email} <br />
         </div>

      </Stack>
   )
}

export default Details