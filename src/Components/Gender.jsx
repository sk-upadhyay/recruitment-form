import React from 'react';
import { FormLabel, FormControl, FormControlLabel, RadioGroup, Radio, Box, FormHelperText } from '@mui/material';

function Gender({ onChange, errors }) {
  return (
    <div className="container">
      <Box component="form" sx={{ '& > :not(style)': { width: '100%' } }}>
        <FormControl error={!!errors.gender} required>
          <FormLabel id="gender-label" sx={{ fontSize: 20 }}>Gender</FormLabel>
          <RadioGroup
            row
            aria-labelledby="gender-label"
            name="row-radio-buttons-group"
            onChange={(e) => onChange('gender', e.target.value)}
          >
            <FormControlLabel value="female" control={<Radio />} label="Female" sx={{ fontSize: 20 }} />
            <FormControlLabel value="male" control={<Radio />} label="Male" sx={{ fontSize: 20 }} />
            <FormControlLabel value="other" control={<Radio />} label="Other" sx={{ fontSize: 20 }} />
          </RadioGroup>
          {errors.gender && <FormHelperText>{errors.gender}</FormHelperText>}
        </FormControl>
      </Box>
    </div>
  );
}

export default Gender;
