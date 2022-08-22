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


const AddEvent = (props) => {
  // const [value, setValue] = useState(new Date('2022-08-18T21:11:54'));
  const [start, setStart] = useState(new Date(props.slot.slots[0]));
  const [end, setendValue] = useState(new Date(props.slot.slots[0]));
  const [linkvalue, setlinkValue] = useState("");
  const [title, setTitle] = useState("");
  const [patient, setPatient] = useState("");
  

  const handleChange = (newValue) => {
    setStart(newValue);
  };
  const handleChangeEnd = (newValue) => {
    setendValue(newValue);
  };
  const handleLink = () => {
    setlinkValue("https://us05web.zoom.us/j/246791z09#success");
  };

  const addEvent = async (e) => {
    e.preventDefault();
    props.events((prev) => [...prev, { start, end, title,patient,linkvalue }]);
    props.close();

    // const response = await axios.post(
    //   REGISTER_URL,
    //   JSON.stringify({
    //     username: user,
    //     password: pwd,
    //     fullName: fullName,
    //     mediId: mediId,
    //     phoneNo: telNo,
    //     email: email,
    //   }),
    //   {
    //     headers: { "Content-Type": "application/json" },
    //     withCredentials: true,
    //   }
    // );
  };

  return (
    <Dialog
      open={props.openStatus}
      onClose={props.close}
      maxWidth="sm"
      fullWidth={true}
    >
      <DialogTitle>Add Event</DialogTitle>
      <DialogContent>

        <form onSubmit={addEvent}>

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
                onChange={event => setTitle(event.target.value)}
                value={title}
              />
              <Autocomplete
                disablePortal
                id="combo-box-demo"
                options={top100Films}
                // sx={{ width: 300 }}
                onChange={event => setPatient(event.target.value)}
                value={patient}
                renderInput={(params) => <TextField {...params} label="Patient" />}
              />
              <DesktopDatePicker
                readOnly
                label="Date"
                inputFormat="DD/MM/yyyy"
                value={start}
                onChange={handleChange}
                renderInput={(params) => <TextField {...params} />}
              />

              <TimePicker
                label="Start"
                value={start}
                onChange={handleChange}
                renderInput={(params) => <TextField {...params} />}
              />
              <TimePicker
                label="End"
                value={end}
                onChange={handleChangeEnd}
                renderInput={(params) => <TextField {...params} />}
              />
              <TextField
                autoFocus
                margin="dense"
                id="name"
                label="Link"
                type="text"
                fullWidth
                variant="outlined"
                value={linkvalue}
              />
              <Button variant="outlined" size="small" onClick={handleLink}>
                Generate Link
              </Button>
            </Stack>
          </LocalizationProvider>
        </form>

      </DialogContent>
      <DialogActions>
        <Button onClick={props.close}>Cancel</Button>
        <Button onClick={addEvent}>Add Event</Button>
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

export default AddEvent