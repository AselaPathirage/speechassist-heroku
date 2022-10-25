import React, {useState} from 'react';
import Button from '@mui/material/Button';
import { AdapterMoment } from '@mui/x-date-pickers/AdapterMoment';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import { TimePicker } from '@mui/x-date-pickers/TimePicker';
import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker';
import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import LaunchIcon from '@mui/icons-material/Launch';


const ViewEvent = (props) => {
  // const [value, setValue] = useState(new Date('2022-08-18T21:11:54'));
  const [start, setStart] = useState(new Date(props.slot.start));
  const [end, setendValue] = useState(new Date(props.slot.end));
  const [linkvalue, setlinkValue] = useState(props.slot.meetingLink);
  const [title, setTitle] = useState(props.slot.title);
  const [patient, setPatient] = useState(props.slot.patientName);


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
    // props.events((prev) => [...prev, { start, end, title,patient,linkvalue }]);
    // props.close();

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
      <DialogTitle>Event</DialogTitle>
      <DialogContent>

        <form onSubmit={addEvent}>

          <LocalizationProvider dateAdapter={AdapterMoment}>
            <Stack spacing={2}>
              <TextField
                readOnly
                margin="dense"
                id="name"
                label="Title"
                type="text"
                fullWidth
                variant="outlined"
                value={title}
              />
              <TextField
                readOnly
                margin="dense"
                id="name"
                label="Patient"
                type="text"
                fullWidth
                variant="outlined"
                value={patient}
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
                readOnly
                label="Start"
                value={start}
                onChange={handleChange}
                renderInput={(params) => <TextField {...params} />}
              />
              <TimePicker
                readOnly
                label="End"
                value={end}
                onChange={handleChangeEnd}
                renderInput={(params) => <TextField {...params} />}
              />
              {/* <TextField
                readOnly
                margin="dense"
                id="name"
                label="Link"
                type="text"
                fullWidth
                variant="outlined"
                value={linkvalue}
              /> */}

              <Paper
                component="form"
                sx={{ p: '2px 4px', display: 'flex', alignItems: 'center'}}
              >
                <InputBase
                  sx={{ ml: 1, flex: 1 }}
                  placeholder={linkvalue}
                  inputProps={{ 'aria-label': '' }}
                  value={linkvalue}
                />
                <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" />
                <IconButton color="primary" sx={{ p: '10px' }} aria-label="directions" href={linkvalue} target="_blank">
                  <LaunchIcon />
                </IconButton>
              </Paper>

            </Stack>
          </LocalizationProvider>
        </form>

      </DialogContent>
      <DialogActions>
        <Button onClick={props.close}>Cancel</Button>
      </DialogActions>
    </Dialog>
  )
}


export default ViewEvent