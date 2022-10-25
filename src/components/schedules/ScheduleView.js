import React, { useEffect, useState } from 'react';
import Typography from '@mui/material/Typography';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import Divider from '@mui/material/Divider';
import Chip from '@mui/material/Chip';
import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker';
import { AdapterMoment } from '@mui/x-date-pickers/AdapterMoment';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';


import AddWeek from './AddWeek';

function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`vertical-tabpanel-${index}`}
            aria-labelledby={`vertical-tab-${index}`}
            {...other}
            style={{ overflow: "auto", width: "100%" }}
        >
            {value === index && (
                <Box sx={{ p: 1, overflow: "auto" }}>
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

const ScheduleView = (props) => {
    const [value, setValue] = useState(0);
    const [openweek, setopenweek] = useState(false);
    const [weeks, setweeks] = useState(props.weeks);
    const [completed, setcompleted] = useState(props.completed);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    const handleClose = () => {
        setopenweek(false);
    };

    const handleOpen = (e) => {
        e.preventDefault();
        console.log("asdsad");
        setopenweek(true);
    };

    const addsetweeks = (object) => {
        console.log(weeks);
        console.log(object);
        setweeks((prev) => [...prev, object]);
        console.log(weeks);
    };
    const setcompleteshedule = (e) => {
        e.preventDefault();
        console.log("sss");
        setcompleted(false);
    };

    return (
        <div>
            <Stack spacing={2} direction="row" mb={1}>
                {completed && completed ? (
                    <Button size="small" variant="outlined" color="success" readOnly>Schedule completed</Button>
                ) : (
                    <>
                        <Button size="small" variant="contained" onClick={handleOpen}>+ Add Week</Button>
                        <Button size="small" variant="contained" color="success" onClick={setcompleteshedule}>Complete schedule</Button>
                    </>
                )}
            </Stack>
            {openweek && <AddWeek openStatus={openweek} close={handleClose} weeks={props.weeks} setweeks={addsetweeks} scheduleId={props.scheduleId}/>}

            <Box
                sx={{
                    flexGrow: 2, bgcolor: 'background.paper', display: 'flex', height: 465,
                }}>

                {weeks && weeks.length > 0 ? (
                    <>
                        <Tabs
                            orientation="vertical"
                            variant="scrollable"
                            value={value}
                            onChange={handleChange}
                            aria-label="Vertical tabs example"
                            sx={{ border: 1, borderColor: 'divider', color: '#0c71f2', overflow: 'auto', minWidth: '10%' }}
                        >
                            {weeks.map((s, index) => (
                                <Tab label={"Week " + (index + 1)} key={index} {...a11yProps(index)} />
                            ))}
                        </Tabs>


                        {weeks.map((s, index) => (
                            <TabPanel value={value} index={index} key={index}>
                                <LocalizationProvider dateAdapter={AdapterMoment}>
                                    <Stack spacing={2}>
                                        <TextField
                                            margin="dense"
                                            id="name"
                                            label="Title"
                                            type="text"
                                            fullWidth
                                            variant="outlined"
                                            value={s.title}
                                            readOnly
                                        />

                                        {/* <Stack spacing={2} direction="row" m={0} justifyContent="space-between"> */}
                                        <DesktopDatePicker
                                            label="Start Date"
                                            inputFormat="DD/MM/yyyy"
                                            value={s.startDate}
                                            renderInput={(params) => <TextField {...params} />}
                                            readOnly
                                        />

                                        {/* </Stack> */}
                                        <Divider sx={{ color: "black" }}>
                                            <Chip label="Tasks" sx={{ bgcolor: '#d5e5f7' }} />
                                        </Divider>

                                        {s.scheduleWeekTask.map((form, index) => {
                                            return (
                                                <div key={index}>
                                                    <TextField
                                                        margin="dense"
                                                        id="name"
                                                        label="Title"
                                                        type="text"
                                                        fullWidth
                                                        variant="outlined"
                                                        value={form.title}
                                                        sx={{ mb: 1 }}
                                                        readOnly
                                                    />
                                                    <Stack spacing={2} direction="row" m={0} justifyContent="space-between">
                                                        <TextField
                                                            margin="dense"
                                                            id="name"
                                                            label="Treatment Method"
                                                            type="text"
                                                            fullWidth
                                                            variant="outlined"
                                                            value={form.treatmentMethod}
                                                            sx={{ m: 0 }}
                                                            readOnly
                                                        />
                                                        <TextField
                                                            margin="dense"
                                                            id="name"
                                                            label="Value"
                                                            type="number"
                                                            fullWidth
                                                            variant="outlined"
                                                            value={form.treatmentvalue}
                                                            readOnly
                                                        />
                                                    </Stack>
                                                    {form.isAudioUploaded && form.isAudioUploaded ? (
                                                        <AudioPlayer
                                                            src={form.audioURL}
                                                            volume={0.5}
                                                            onPlay={e => console.log("onPlay")}
                                                            layout={'horizontal'}
                                                        />
                                                    ) : (
                                                        <Typography variant="h6" gutterBottom textAlign={"center"}>
                                                            No record added to this task
                                                        </Typography>
                                                    )}
                                                    <Divider variant="middle" mt={2} />
                                                </div>
                                            )
                                        })}
                                    </Stack>
                                </LocalizationProvider>
                            </TabPanel>
                        ))}
                    </>
                ) : (
                    <Typography variant="h6" gutterBottom textAlign={"center"}>
                        No Weeks Added
                    </Typography>
                )}
            </Box>
        </div>
    )
}

export default ScheduleView;
