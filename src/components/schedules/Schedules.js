import React, { useEffect, useState } from 'react';
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
  const [value, setValue] = useState(0);
  const [openschedule, setopenschedule] = useState(false);
  const [myschedules, setmyschedules] = useState(schedules);

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
      {openschedule && <AddSchedule openStatus={openschedule} close={handleClose} />}
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
                <Tab label={s.title + "-" + s.patient} key={index} {...a11yProps(index)} />
              ))}
            </Tabs>

            {myschedules.map((s, index) => (
              <TabPanel value={value} index={index} key={index}>
                <ScheduleView weeks={s.weeks} completed={s.completed}/>
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
