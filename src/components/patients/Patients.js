import React, { useEffect } from 'react';
import PatientTable from './PatientTable';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';

const Patients = (props) => {
  useEffect(() => {
    props.itemSelected('Patients');
  })

  return (
    < >
      <Typography variant="h5" gutterBottom component="div">
        Patients
      </Typography>

      <Grid container spacing={2} marginTop={2}>
        <Grid item xs={12} overflow='hidden' p={3}>
          <PatientTable />
        </Grid>
      </Grid>

    </>
  )
}

export default Patients