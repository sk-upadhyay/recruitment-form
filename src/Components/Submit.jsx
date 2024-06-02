import React from 'react';
import { Box, Typography, Paper, Button } from '@mui/material';
import Lottie from 'lottie-react';
import TickAnimation from '../Animation - 1716889532858.json';

function Submit() {
  return (
    <Box display="flex" alignItems="center" justifyContent="center" minHeight="100vh">
      <Paper elevation={3} style={{ padding: '20px', backgroundColor: '#ffffff8a', margin: 'auto', textAlign: 'center', borderRadius: '15px' }}>
        <Lottie animationData={TickAnimation} loop={true} style={{ width: '150px', height: 'auto', margin: '0 auto' }} />
        <Box style={{ border: '3px solid #000', padding: '20px', borderRadius: '15px', marginTop: '20px' }}>
          <Typography variant="h5">Form has been submitted successfully!</Typography>
        <Button variant="contained" color="primary" style={{ marginTop: '20px' }}>
          Done
        </Button>
        </Box>
      </Paper>
    </Box>
  );
}

export default Submit;
