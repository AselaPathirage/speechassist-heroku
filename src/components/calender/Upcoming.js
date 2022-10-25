import React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import ListItemText from '@mui/material/ListItemText';
import Avatar from '@mui/material/Avatar';
import EventAvailableIcon from '@mui/icons-material/EventAvailable';
import Typography from '@mui/material/Typography';

function Upcoming(props) {
    const events = props.events;
    return (
        <List dense={true} sx={{ backgroundColor: '#fff', borderRadius: '6px', border: '1px solid #bacaf7' }}>
            <Typography variant="h6" gutterBottom component="div" align="center">
                Appointments
            </Typography>
            {events && events.length > 0 ? (
                <>
                    {events.map((s, index) => (
                            <ListItem>
                                <ListItemAvatar>
                                    <Avatar sx={{ bgcolor: '#4b86c9' }}>
                                        <EventAvailableIcon />
                                    </Avatar>
                                </ListItemAvatar>
                                <ListItemText
                                    primary={s.title}
                                    secondary={s.patientName}
                                />
                            </ListItem>
                        ))
                    }
                </>
            ) : (
                <Typography variant="h6" gutterBottom textAlign={"center"}>
                    No Upcoming Appoinments
                </Typography>
            )}
        </List>
    )
}

export default Upcoming