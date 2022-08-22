import React from 'react'
import Cards from './Cards/Cards'
import CalendarActivity from './CalendarActivity/CalendarActivity'
import Grid from '@mui/material/Grid';
// import Calender from '../../calender/Calender'



function Sideone() {
  return (
    <div className='MainDash'>

      <Grid container spacing={2} >
        <Grid item xs={12} md={9}>
          <h3>Welcome Back!</h3>
          <br />
          <br />
          <Cards />
        </Grid>
        <Grid item xs={12} md={3} overflow='auto'>
          <CalendarActivity />
        </Grid>
      </Grid>
    </div>
  )
}

export default Sideone