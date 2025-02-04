
import React, { useEffect, useState, useCallback } from 'react';
import useAxiosPrivate from "../../../../hooks/useAxiosPrivate";
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import List from '@mui/material/List';


function Stats() {
    return (
        <List dense={true} >
            <Typography variant="h6" gutterBottom component="div" align="center" pt={3}>
                Schedules Completed
            </Typography>
            <Typography variant="h3" gutterBottom component="div" align="center">
                0
            </Typography>
        </List>
    )
}

export default Stats