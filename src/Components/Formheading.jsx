import React from 'react'
import {Grid,Avatar,Typography} from '@mui/material'
import logo from '../Logo.png'

function Formheading() {
    const headerStyle={
        margin:10,
        borderBottom:1
    }
  return (
    <div>
        <Grid align='center'>
            <Avatar
                sx={{ width: 150, height:150 , bgcolor: '#f2f2f282' }}
            ><img src={logo} alt="Elabs"width={'90px'} />
            </Avatar>
            <h2 style={headerStyle}>Recruitment Form</h2>
            <Typography variant='caption' padding={'10px'}>Fill the form to get a chance to work With E Labs! </Typography>
            </Grid>
      
    </div>
  )
}

export default Formheading
