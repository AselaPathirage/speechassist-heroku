import React, { useEffect } from 'react';
import { useParams, Link } from "react-router-dom";
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import SwipeableDrawer from '@mui/material/SwipeableDrawer';

import Stats from './components/Stats';
import Appointments from './components/Appointments';
import Chat from './components/Chat';
import Details from './components/Details';
import Reports from './components/Reports';
import Schedules from './components/Schedules';

import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ChatIcon from '@mui/icons-material/Chat';

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
}));

const PatientView = (props) => {

    useEffect(() => {
        props.itemSelected('Patients');

    })

    const { patientId } = useParams();
    // console.log(patientId);
    localStorage.setItem('patientId', patientId);

    const [state, setState] = React.useState(false);

    const toggleDrawer = (open) => () => {
        setState(open);
    };

    return (
        < >
            <Stack direction="row" spacing={2}>
                <Chip variant="outlined" color="info" icon={<ArrowBackIosNewIcon />} label="Go Back" to={`/therapist/patients`} component={Link} clickable />
                <Typography variant="h6" gutterBottom component="div">
                    Patient Details
                </Typography>
                <Chip color="primary" icon={<ChatIcon />} label="Message" clickable padding={2} onClick={toggleDrawer(true)} />
            </Stack>

            <Grid container spacing={2} marginTop={2}>
                <Grid item xs={12} md={5} >
                    <Item sx={{ height: 200 }}><Details patientId={patientId} /></Item>
                </Grid>
                <Grid item xs={12} md={3} alignItems="center" justifyContent="center">
                    <Item sx={{ height: 200, alignItems: 'center', overflow: "auto" }} ><Stats patientId={patientId} /></Item>
                </Grid>
                <Grid item xs={12} md={4}>
                    <Item sx={{ height: 200 }}><Appointments patientId={patientId} /></Item>
                </Grid>
                <Grid item xs={12} md={12}>
                    <Item><Schedules patientId={patientId} /></Item>
                </Grid>

            </Grid>

            <SwipeableDrawer
                anchor={'right'}
                open={state}
                onClose={toggleDrawer(false)}
                onOpen={toggleDrawer(true)}
            >
                <Chat />
            </SwipeableDrawer>


        </>
    )
}

export default PatientView