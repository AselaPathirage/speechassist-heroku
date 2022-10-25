import React, { useEffect, useState, useCallback } from 'react';
import useAxiosPrivate from "../../../../hooks/useAxiosPrivate";
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';


import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
import '../../../../assets/css/react-big-calendar.css';
import events from '../../../calender/events';


const localizer = momentLocalizer(moment)

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
}));

const CalenderActivity = (props) => {
  const [myEvents, setEvents] = useState([]);
  const axiosPrivate = useAxiosPrivate();

  const getPatientName= async (patientId)=>{
    const controller = new AbortController();
    try {
      const response2 =await axiosPrivate.get(`/patient/${patientId}`, {
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
        const response = await axiosPrivate.get(`/calender/therapist/${therapistId}`, {
          signal: controller.signal
        });
        console.log(typeof (response.data));
        response.data.forEach(async car => {
          const str = car['date'];
          const timeComponents = car['startTime'];
          const timeComponents2 = car['endTime'];
          const [year, month, day] = str.split('-');
          const [hours, minutes, seconds] = timeComponents.split(':');
          const [hours2, minutes2, seconds2] = timeComponents2.split(':');
          const start = new Date(+year, month - 1, +day, +hours, +minutes, +seconds);
          const end = new Date(+year, month - 1, +day, +hours2, +minutes2, +seconds2);
          console.log(start);
          car['start'] = start;
          car['end'] = end;
          car['patientName'] = await getPatientName(car['patientId']);
        });
        console.log(response.data);
        isMounted && setEvents(response.data);
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
    
        <Item>
          <Calendar
            localizer={localizer}
            startAccessor="start"
            endAccessor="end"
            style={{ height: 200 }}
            events={myEvents}
            selectable
            popup={true}
            views={{month:true}}
          />
        </Item>
  )
}

export default CalenderActivity