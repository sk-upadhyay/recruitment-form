import React from 'react';
import './App.css';
import Form from './Components/Form';
import { Grid } from '@mui/material';

function App() {
  return (
    <Grid container justifyContent="center" alignItems="center" style={{margin:'0' }}>
      <Grid item xs={12} md={12} lg={12} >
        <Form />
      </Grid>
    </Grid>
  );
}

export default App;
