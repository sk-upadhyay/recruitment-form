import React from 'react';
import { Grid, Paper, Button, Box } from '@mui/material';
import FormHeading from './Formheading';
import TextInput from './Textinput';
import Gender from './Gender';
import Autocomplete1 from './Autocomplete.jsx';
import Miscellaneous from './Miscellaneous.jsx';
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

  // Function to handle form submission
  const handleSubmit = (event) => {
    event.preventDefault();
    // Add your form submission logic here
    console.log('Form submitted');
  };

  return (
    <div className='mx-auto'>
      <Grid container sx={{ justifyContent: { xs: 'center', lg: 'center' }}}>
        <Grid item xs={5} lg={5}>
          <Paper elevation={10} style={paperStyle}>
            <FormHeading />
            <TextInput />
            <Gender />
            <Autocomplete1 />
            <Domain />
            <Miscellaneous />
            {/* Centered Submit Button */}
            <Box textAlign="center" marginTop={2}>
              <Button variant="contained" color="primary" onClick={handleSubmit}>
                Submit
              </Button>
            </Box>
          </Paper>
        </Grid>
        <Grid item xs={5} lg={5} display={{xs:'none', lg: 'block' }}>
          <Animation />
        </Grid>
      </Grid>
    </div>
  );
}

export default Form;
