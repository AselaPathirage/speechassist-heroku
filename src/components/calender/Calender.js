import React, { useEffect, useState, useCallback } from 'react';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';


import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
import '../../assets/css/react-big-calendar.css';
import events from './events';
import AddEvent from './AddEvent';
import ViewEvent from './ViewEvent';
import Upcoming from './Upcoming';

const localizer = momentLocalizer(moment)

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
}));

const Calender = (props) => {
  const [myEvents, setEvents] = useState(events);
  const [openevent, setopenevent] = useState(false);
  const [viewevent, setviewevent] = useState(false);
  const [slot, setSlot] = useState({});

  useEffect(() => {
    props.itemSelected('Calender');
  })

  const handleClickOpen = () => {
    setopenevent(true);
  };

  const handleClose = () => {
    setopenevent(false);
  };

  const handleClickViewOpen = () => {
    setviewevent(true);
  };

  const handleViewClose = () => {
    setviewevent(false);
  };

  const handleSelectSlot = (event) => {
    console.log(event);
    setSlot(event);
    handleClickOpen();
  };

  const handleSelectEvent = (event) => {
    console.log(event);
    setSlot(event);
    handleClickViewOpen();
    // window.alert(event.desc);
  };

  return (
    <Grid container spacing={2} >
      {viewevent && <ViewEvent openStatus={viewevent} close={handleViewClose} slot={slot} events={setEvents}/>}
      {openevent && <AddEvent openStatus={openevent} close={handleClose} slot={slot} events={setEvents}/>}
      <Grid item xs={12} md={9}>
        <Item>
          <Calendar
            localizer={localizer}
            startAccessor="start"
            endAccessor="end"
            style={{ height: 550 }}
            events={myEvents}
            onSelectEvent={handleSelectEvent}
            onSelectSlot={handleSelectSlot}
            selectable
            popup={true}
          />
        </Item>
      </Grid>
      <Grid item xs={12} md={3} height={580} overflow='auto'>
        <Upcoming/>
      </Grid>
    </Grid>
  )
}

export default Calender