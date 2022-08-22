import React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import ListItemText from '@mui/material/ListItemText';
import Avatar from '@mui/material/Avatar';
import EventAvailableIcon from '@mui/icons-material/EventAvailable';
import Typography from '@mui/material/Typography';

function Appointments() {
    return (
        <List dense={true}>
            <Typography variant="h6" gutterBottom component="div" align="center">
                Appointments
            </Typography>
            <ListItem>
                <ListItemAvatar>
                    <Avatar sx={{ bgcolor: '#4b86c9' }}>
                        <EventAvailableIcon />
                    </Avatar>
                </ListItemAvatar>
                <ListItemText
                    primary="Appointment - 20-08-2022"
                    secondary='Asela Pathirage'
                />
            </ListItem>
            <ListItem>
                <ListItemAvatar>
                    <Avatar sx={{ bgcolor: '#4b86c9' }}>
                        <EventAvailableIcon />
                    </Avatar>
                </ListItemAvatar>
                <ListItemText
                    primary="Appointment - 27-08-2022"
                    secondary='Asela Pathirage'
                />
            </ListItem>
            
        </List>
    )
}

export default Appointments