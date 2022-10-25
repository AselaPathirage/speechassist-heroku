import React, { useEffect, useState, useCallback } from 'react';
import useAxiosPrivate from "../../hooks/useAxiosPrivate";
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
  const [patient2, setPatient2] = useState(0);

  const [users, setUsers] = useState([]);
  const axiosPrivate = useAxiosPrivate();
  let userss = [];

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

        response.data.forEach(car => {

          car['label'] = `${car['fullName']}-${car['patientId']}`;
          // car['id'] = car['patientId'];

        });
        console.log(response.data);
        // userss = response.data;
        isMounted && setUsers(response.data);
        // setUsers(response.data);
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
    const [str,str2]=patient.split('-');
    const [startstr,aa]=start.toTimeString().split(' ');
    const [endstr,bb]=start.toTimeString().split(' ');
    const [hoursFF, minutesFF, secondsFF] = startstr.split(':');
    const [hours2FF, minutes2FF, seconds2FF] = endstr.split(':');
    const [mm,dd,yy]=start.toLocaleDateString().split('/');
    const startFF = new Date(+yy, mm - 1, +dd, +hoursFF, +minutesFF, +secondsFF);
    const endFF = new Date(+yy, mm - 1, +dd, +hours2FF, +minutes2FF, +seconds2FF);
    // const username = localStorage.getItem('userName');
    // console.log(datestr);
    // props.events((prev) => [...prev, { start, end, title, patientId:str2,patientName:str, meetingLink:linkvalue }]);
    props.events((prev) => [...prev, { start:startFF, end:endFF,date:`${yy}-${mm}-${dd}`, title, patientId:patient2,patientName:str, meetingLink:linkvalue,therapistId:username }]);
    
    const username = localStorage.getItem('userName');
    console.log(JSON.stringify({
      startTime:startstr, endTime:endstr,date:`${yy}-${mm}-${dd}`, title, patientId:patient2, meetingLink:linkvalue ,therapistId:username
    }));
    try {
      const response = await axiosPrivate.post(
        `/calender`,
        JSON.stringify({
          startTime:startstr, endTime:endstr,date:`${yy}-${mm}-${dd}`, title, patientId:patient2, meetingLink:linkvalue ,therapistId:username
        })
      );
      console.log("ss");
      console.log(response?.data);
      console.log(JSON.stringify(response));

    } catch (err) {
      console.log(err);
    }
    props.close();
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
                options={users}
                // sx={{ width: 300 }}
                value={patient}
                onChange={(event,newValue) => {setPatient2(newValue.patientId);setPatient(newValue.label);}}

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