import React, { useEffect, useState, useCallback } from 'react';
import useAxiosPrivate from "../../../../hooks/useAxiosPrivate";
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import ListItemText from '@mui/material/ListItemText';
import Avatar from '@mui/material/Avatar';
import EventAvailableIcon from '@mui/icons-material/EventAvailable';
import Typography from '@mui/material/Typography';

function Appointments(props) {
    const axiosPrivate = useAxiosPrivate();
    const [myEvents, setEvents] = useState([]);

    useEffect(() => {
        console.log("sdsd");
        let isMounted = true;
        const controller = new AbortController();
        const therapistId = localStorage.getItem('userName');

        const getEvents = async () => {
            try {
                const response = await axiosPrivate.get(`/calender/patient/${props.patientId}`, {
                    signal: controller.signal
                });
                console.log(typeof (response.data));

                console.log(response.data);
                isMounted && setEvents(response.data);
                // setUsers(response.data);
            } catch (err) {
                console.error(err);
                // navigate('/', { state: { from: location }, replace: true });
            }
        }

        getEvents();

        return () => {
            isMounted = false;
            controller.abort();
        }
    }, []);



    return (



        <List dense={true} >
            <Typography variant="h6" gutterBottom component="div" align="center">
                Appointments
            </Typography>

            {myEvents && myEvents.length > 0 ? (
                <>{myEvents.length > 2 ? (
                    <>
                        {myEvents.slice(0, 2).map((s, index) => (
                            <ListItem>
                                <ListItemAvatar>
                                    <Avatar sx={{ bgcolor: '#4b86c9' }}>
                                        <EventAvailableIcon />
                                    </Avatar>
                                </ListItemAvatar>
                                <ListItemText
                                    primary={s.title}
                                    secondary={s.date + "-" + s.startTime}
                                />
                            </ListItem>
                        ))
                        }
                    </>
                ) : (
                    <>
                        {myEvents.map((s, index) => (
                            <ListItem>
                                <ListItemAvatar>
                                    <Avatar sx={{ bgcolor: '#4b86c9' }}>
                                        <EventAvailableIcon />
                                    </Avatar>
                                </ListItemAvatar>
                                <ListItemText
                                    primary={s.title}
                                    secondary={s.date + "-" + s.startTime}
                                />
                            </ListItem>
                        ))
                        }
                    </>
                )}



                </>
            ) : (
                <Typography variant="p" gutterBottom component="div" align="center">
                    No Appointments
                </Typography>
            )}


        </List>
    )
}

export default Appointments