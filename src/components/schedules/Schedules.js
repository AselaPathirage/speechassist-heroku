import React, { useEffect, useState } from 'react';
import useAxiosPrivate from "../../hooks/useAxiosPrivate";
import Typography from '@mui/material/Typography';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import ScheduleView from './ScheduleView';
import AddSchedule from './AddSchedule';
import schedules from './schedulesdata';

function TabPanel(props) {
  const { children, value, index, ...other } = props;
  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
      style={{ width: "100%" }}
    >
      {value === index && (
        <Box sx={{ p: 1 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `vertical-tab-${index}`,
    'aria-controls': `vertical-tabpanel-${index}`,
  };
}

const Schedules = (props) => {
  const axiosPrivate = useAxiosPrivate();
  const [value, setValue] = useState(0);
  const [openschedule, setopenschedule] = useState(false);
  const [myschedules, setmyschedules] = useState([]);

  useEffect(() => {
    console.log("sdsd");
    let isMounted = true;
    const controller = new AbortController();
    const therapistId = localStorage.getItem('userName');

    const getSchedules = async () => {
      try {
        const response = await axiosPrivate.get(`/schedule/therapist/${therapistId}`, {
          signal: controller.signal
        });
        // console.log(typeof (response.data));
        // response.data.forEach(async car => {
        //   const str = car['date'];
        //   const timeComponents = car['startTime'];
        //   const timeComponents2 = car['endTime'];
        //   const [year, month, day] = str.split('-');
        //   const [hours, minutes, seconds] = timeComponents.split(':');
        //   const [hours2, minutes2, seconds2] = timeComponents2.split(':');
        //   const start = new Date(+year, month - 1, +day, +hours, +minutes, +seconds);
        //   const end = new Date(+year, month - 1, +day, +hours2, +minutes2, +seconds2);
        //   console.log(start);
        //   car['start'] = start;
        //   car['end'] = end;
        // });
        console.log(response.data);
        isMounted && setmyschedules(response.data);
        // setUsers(response.data);
      } catch (err) {
        console.error(err);
        // navigate('/', { state: { from: location }, replace: true });
      }
    }

    getSchedules();

    return () => {
      isMounted = false;
      controller.abort();
    }
  }, []);




  const handleClose = () => {
    setopenschedule(false);
  };

  const handleOpen = (e) => {
    e.preventDefault();
    console.log("asdsad");
    setopenschedule(true);
  };
  useEffect(() => {
    props.itemSelected('Schedules');
  })

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div>
      <Stack spacing={2} direction="row" mb={1} justifyContent="space-between">
        <Typography variant="h5" gutterBottom >
          Schedules
        </Typography>
        <Button size="small" variant="contained" onClick={handleOpen}>+ Create Schedule</Button>
      </Stack>
      {openschedule && <AddSchedule openStatus={openschedule} close={handleClose} events={setmyschedules}/>}
      <Box
        sx={{ flexGrow: 1, bgcolor: 'background.paper', display: 'flex', height: 530, border: 0.25, borderColor: '#e0e3e6', borderRadius: 3 }}
      >
        {myschedules && myschedules.length > 0 ? (
          <>
            <Tabs
              orientation="vertical"
              variant="scrollable"
              value={value}
              onChange={handleChange}
              aria-label="Vertical tabs example"
              sx={{ border: 1, borderColor: 'divider', width: '15%', overflow: 'auto', minWidth: '15%' }}
            >
              {myschedules.map((s, index) => (
                <Tab label={s.title + "-" + s.patientName} key={index} {...a11yProps(index)} />
              ))}
            </Tabs>

            {myschedules.map((s, index) => (
              <TabPanel value={value} index={index} key={index}>
                <ScheduleView weeks={s.scheduleWeek} completed={s.completed} scheduleId={s.s}/>
              </TabPanel>
            ))}
          </>
        ) : (
          <Typography variant="h6" gutterBottom textAlign={"center"}>
            No Schedules Added
          </Typography>
        )}
      </Box>
    </div>
  )
}

export default Schedules;
