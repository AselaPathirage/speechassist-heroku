import React from 'react';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';


function Details() {
   return (

      <Stack direction="row" spacing={2} padding={2} justifyContent="center" alignItems="center" >
         <br />
         <Avatar sx={{ height: '100px', width: '100px', bgcolor: '#4b86c9' }}><Typography variant="h5" gutterBottom >
          AP
        </Typography></Avatar>
         <div><br />
            Name : Asela Pathirage <br />
            Address : Horana <br />
            Telephone Number : 076777888 <br />
         </div>

      </Stack>
   )
}

export default Details