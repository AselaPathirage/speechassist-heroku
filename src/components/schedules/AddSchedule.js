import React, { useEffect, useState, useCallback } from 'react';
import Button from '@mui/material/Button';
import { AdapterMoment } from '@mui/x-date-pickers/AdapterMoment';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Autocomplete from '@mui/material/Autocomplete';
import { TimePicker } from '@mui/x-date-pickers/TimePicker';
import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker';


const AddSchedule = (props) => {
  // const [value, setValue] = useState(new Date('2022-08-18T21:11:54'));
  const [value, setValue] = useState('');
  const [value2, setValue2] = useState('');

  const handleChange = (newValue) => {
    setValue(newValue);
  };

  return (
    <Dialog
      open={props.openStatus}
      onClose={props.close}
      maxWidth="sm"
      fullWidth={true}
    >
      <DialogTitle>Add Schedule</DialogTitle>
      <DialogContent>

        <form action="">

          <LocalizationProvider dateAdapter={AdapterMoment}>
            <Stack spacing={2}>
              <TextField
                autoFocus
                margin="dense"
                id="name"
                label="Title"
                type="text"
                fullWidth
                variant="outlined"
              />
              <Autocomplete
                disablePortal
                id="combo-box-demo"
                options={top100Films}
                // sx={{ width: 300 }}
                renderInput={(params) => <TextField {...params} label="Patient" />}
              />
              
            </Stack>
          </LocalizationProvider>
        </form>

      </DialogContent>
      <DialogActions>
        <Button onClick={props.close}>Cancel</Button>
        <Button onClick={props.close}>Add Schedule</Button>
      </DialogActions>
    </Dialog>
  )
}

const top100Films = [
  { label: 'Asela Pathirage', year: 1994 },
  { label: 'Nimesh Nishamal', year: 1972 },
  { label: 'Yasith Samaradivakara', year: 1974 },
  { label: 'Nisan Abeywickrama', year: 2008 },
  { label: 'Harith Harith', year: 1957 },
  { label: "Nimesh Perera", year: 1993 },
  { label: 'Yupun Abeykoon', year: 1994 },
  {
    label: 'Janith Janith',
    year: 2003,
  },


];

export default AddSchedule