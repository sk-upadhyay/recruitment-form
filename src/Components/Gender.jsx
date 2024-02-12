import React from 'react'
import {FormLabel,FormControl,FormControlLabel,RadioGroup,Radio,Box} from '@mui/material'
function Gender() {
  return (
    <div>
        <Box component="form"sx={{'& > :not(style)': { m:1, width: '100%' }}}>
         <FormControl>
            
      <FormLabel id="Gender" required>Gender</FormLabel>
      <RadioGroup row aria-labelledby="gender" name="row-radio-buttons-group">
        <FormControlLabel value="female" control={<Radio />} label="Female" />
        <FormControlLabel value="male" control={<Radio />} label="Male" />
        <FormControlLabel value="other" control={<Radio />} label="Other" />
      </RadioGroup>
    </FormControl>
    </Box>
      
    </div>
  )
}

export default Gender
