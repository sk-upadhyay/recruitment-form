import React from 'react'
import { TextField,Box } from '@mui/material'

function Textinput() {
  return (
    <div>
        <Box component="form"sx={{'& > :not(style)': { m:1, width: '100%' }, marginTop:3 }}>
       <TextField fullwidth id="Name" label="Name" variant="filled" required placeholder='Enter Your Name'/>
            <TextField fullwidth id="EmailAddress" label="Personal Email" variant="outlined" required placeholder='Enter Your Personal Email Id' />
            <TextField fullwidth id="Email(KiiTidonly)" label="KIIT Mail" variant="outlined"required  helperText="Incorrect entry"  color="success" focused placeholder='Enter Your KIIT Mail Id'/>
          <TextField id="roll" label="Roll Number"type="number" variant="filled" color="success" focused required/>
          <TextField id="ContactNumber" label="Contact Number"type="number" variant="filled" focused required/>
          </Box>
    </div>
  )
}

export default Textinput
