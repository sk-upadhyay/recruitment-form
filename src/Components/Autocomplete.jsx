import React from 'react'
import {TextField,Autocomplete} from '@mui/material'; 


function Autocomplete1() {
    const Years = [
        { label : '1st' },
        { label : '2nd' },
        { label : '3rd' },
      ];
      const Branch =[
        {label :'ECE'},
        {label : 'EEE'},
        {label : 'ETC'},
        {label : 'ECSE'}
      ]
  return (
    <div>
    <Autocomplete
      disablePortal
      id="YearOfStudy"
      options={Years}
      fullWidth
      renderInput={(params) => <TextField {...params} label="Year" required />}
    />
    <Autocomplete
      disablePortal
      id="Branch"
      options={Branch}
      fullWidth
      sx={{ marginTop:2}} renderInput={(params) => <TextField {...params} label="Branch" required />}
    />
    </div>
  )
}

export default Autocomplete1
