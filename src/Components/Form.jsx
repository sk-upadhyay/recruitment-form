import React from 'react';
import { Grid, Paper } from '@mui/material';
import FormHeading from './Formheading';
import TextInput from './Textinput';
import Gender from './Gender';
import Autocomplete1 from './Autocomplete.jsx';
import Domain from './Domain';
import Animation from './Animation';

function Form() {
  const paperStyle = {
    padding: '10px 10px',
    width: '100%',
    margin: '10px',
    borderRadius: '15px',
    backgroundColor: 'rgba(240, 240, 240, 0.75)',
  };

  return (
    <div>
      <Grid container justifyContent={{ xs: 'flex-start', lg: 'center' }}
      syle={{transform={{xs:'scale(2)'}}>
        <Grid item xs={5} lg={5}>
          <Paper elevation={10} style={paperStyle}>
            <FormHeading />
            <TextInput />
            <Gender />
            <Autocomplete1 />
            <Domain />
          </Paper>
        </Grid>
        <Grid item xs={5} lg={5} display={{ lg: 'block' }}>
          <Animation />
        </Grid>
      </Grid>
    </div>
  );
}

export default Form;
