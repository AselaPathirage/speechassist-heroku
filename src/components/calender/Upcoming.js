import React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import ListItemText from '@mui/material/ListItemText';
import Avatar from '@mui/material/Avatar';
import EventAvailableIcon from '@mui/icons-material/EventAvailable';
import Typography from '@mui/material/Typography';

function Upcoming() {
    return (
        <List dense={true} sx={{backgroundColor:'#fff', borderRadius:'6px',border:'1px solid #bacaf7'}}>
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
                    primary="Appointment"
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
                    primary="Checkup"
                    secondary='Nimesh Nishamal'
                />
            </ListItem>
            <ListItem>
                <ListItemAvatar>
                    <Avatar sx={{ bgcolor: '#4b86c9' }}>
                        <EventAvailableIcon />
                    </Avatar>
                </ListItemAvatar>
                <ListItemText
                    primary="Appoint schedule"
                    secondary='Yasith Samaradivkara'
                />
            </ListItem>
            <ListItem>
                <ListItemAvatar>
                    <Avatar sx={{ bgcolor: '#4b86c9' }}>
                        <EventAvailableIcon />
                    </Avatar>
                </ListItemAvatar>
                <ListItemText
                    primary="Appoint schedule"
                    secondary='Yasith Samaradivkara'
                />
            </ListItem>
            <ListItem>
                <ListItemAvatar>
                    <Avatar sx={{ bgcolor: '#4b86c9' }}>
                        <EventAvailableIcon />
                    </Avatar>
                </ListItemAvatar>
                <ListItemText
                    primary="Appointment 01"
                    secondary='Harith Iduwara'
                />
            </ListItem>
            <ListItem>
                <ListItemAvatar>
                    <Avatar sx={{ bgcolor: '#4b86c9' }}>
                        <EventAvailableIcon />
                    </Avatar>
                </ListItemAvatar>
                <ListItemText
                    primary="Appointment 02"
                    secondary='Nisan Perera'
                />
            </ListItem>
            <ListItem>
                <ListItemAvatar>
                    <Avatar sx={{ bgcolor: '#4b86c9' }}>
                        <EventAvailableIcon />
                    </Avatar>
                </ListItemAvatar>
                <ListItemText
                    primary="Appointment 03"
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
                    primary="Appointment 03"
                    secondary='Yethum Sasvidu'
                />
            </ListItem>
            <ListItem>
                <ListItemAvatar>
                    <Avatar sx={{ bgcolor: '#4b86c9' }}>
                        <EventAvailableIcon />
                    </Avatar>
                </ListItemAvatar>
                <ListItemText
                    primary="Appointment 03"
                    secondary='Secondary text'
                />
            </ListItem>
        </List>
    )
}

export default Upcoming