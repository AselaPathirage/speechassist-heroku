import React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import ListItemText from '@mui/material/ListItemText';
import Avatar from '@mui/material/Avatar';
import SummarizeIcon from '@mui/icons-material/Summarize';
import Typography from '@mui/material/Typography';

function Reports() {
    return (
        <List dense={true}>
            <Typography variant="h6" gutterBottom component="div" align="center">
                Reports
            </Typography>
            <ListItem>
                <ListItemAvatar>
                    <Avatar sx={{ bgcolor: '#4b86c9' }}>
                        <SummarizeIcon />
                    </Avatar>
                </ListItemAvatar>
                <ListItemText
                    primary="Report 1"
                    secondary='Asela Pathirage'
                />
            </ListItem>
            <ListItem>
                <ListItemAvatar>
                    <Avatar sx={{ bgcolor: '#4b86c9' }}>
                        <SummarizeIcon />
                    </Avatar>
                </ListItemAvatar>
                <ListItemText
                    primary="Report 2"
                    secondary='Asela Pathirage'
                />
            </ListItem>
            <ListItem>
                <ListItemAvatar>
                    <Avatar sx={{ bgcolor: '#4b86c9' }}>
                        <SummarizeIcon />
                    </Avatar>
                </ListItemAvatar>
                <ListItemText
                    primary="Report 3"
                    secondary='Asela Pathirage'
                />
            </ListItem>
            <ListItem>
                <ListItemAvatar>
                    <Avatar sx={{ bgcolor: '#4b86c9' }}>
                        <SummarizeIcon />
                    </Avatar>
                </ListItemAvatar>
                <ListItemText
                    primary="Report 4"
                    secondary='Asela Pathirage'
                />
            </ListItem>
            <ListItem>
                <ListItemAvatar>
                    <Avatar sx={{ bgcolor: '#4b86c9' }}>
                        <SummarizeIcon />
                    </Avatar>
                </ListItemAvatar>
                <ListItemText
                    primary="Report 5"
                    secondary='Asela Pathirage'
                />
            </ListItem>
            <ListItem>
                <ListItemAvatar>
                    <Avatar sx={{ bgcolor: '#4b86c9' }}>
                        <SummarizeIcon />
                    </Avatar>
                </ListItemAvatar>
                <ListItemText
                    primary="Report 5"
                    secondary='Asela Pathirage'
                />
            </ListItem>
            <ListItem>
                <ListItemAvatar>
                    <Avatar sx={{ bgcolor: '#4b86c9' }}>
                        <SummarizeIcon />
                    </Avatar>
                </ListItemAvatar>
                <ListItemText
                    primary="Report 5"
                    secondary='Asela Pathirage'
                />
            </ListItem>
            <ListItem>
                <ListItemAvatar>
                    <Avatar sx={{ bgcolor: '#4b86c9' }}>
                        <SummarizeIcon />
                    </Avatar>
                </ListItemAvatar>
                <ListItemText
                    primary="Report 5"
                    secondary='Asela Pathirage'
                />
            </ListItem>
            <ListItem>
                <ListItemAvatar>
                    <Avatar sx={{ bgcolor: '#4b86c9' }}>
                        <SummarizeIcon />
                    </Avatar>
                </ListItemAvatar>
                <ListItemText
                    primary="Report 5"
                    secondary='Asela Pathirage'
                />
            </ListItem>

        </List>
    )
}

export default Reports