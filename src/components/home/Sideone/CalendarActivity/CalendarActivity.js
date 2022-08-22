import React, { useEffect, useState, useCallback } from 'react';
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
  const [myEvents, setEvents] = useState(events);

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