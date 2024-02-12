import React from 'react'
import { Grid, Paper } from '@mui/material';
import Formheading from './Formheading';
import Textinput from './Textinput';
import Gender from './Gender';
import Autocomplete from './Autocomplete';
import Domain from './Domain';


function Form() {
  const paperStyle={
      padding:'30px 30px',
      Width:400,
      margin:'10px 20px',
      borderRadius:'15px',
      backgroundColor: 'rgba(240, 240, 240, 0.75)'
  }

 
return (
  <div>
    <Grid margin={10} >
      <Paper elevation={10} style={paperStyle}>
        <Formheading/>            
        <Textinput/>
        <Gender/>
        <Autocomplete/>
        <Domain/>
      </Paper>
    </Grid>
     
  </div>
)
}

export default Form;
