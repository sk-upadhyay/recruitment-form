import React from 'react';
import { FormLabel, FormControl, FormControlLabel, RadioGroup, Radio, Box } from '@mui/material';

function Gender() {
  return (
    <div className="container ">
      <Box component="form" sx={{ '& > :not(style)': {  width: '100%' } }}>
        <FormControl>
          <FormLabel id="gender-label" required sx={{ fontSize: 20 }}>Gender</FormLabel>
          <RadioGroup row aria-labelledby="gender-label" name="row-radio-buttons-group">
            <FormControlLabel value="female" control={<Radio />} label="Female" sx={{ fontSize: 20 }} />
            <FormControlLabel value="male" control={<Radio />} label="Male" sx={{ fontSize: 20 }} />
            <FormControlLabel value="other" control={<Radio />} label="Other" sx={{ fontSize: 20 }} />
          </RadioGroup>
        </FormControl>
      </Box>
    </div>
  );
}

export default Gender;
