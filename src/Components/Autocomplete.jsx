import React from 'react';
import { TextField, Autocomplete } from '@mui/material';

function Autocomplete1() {
  const Years = [
    { label: '1st' },
    { label: '2nd' },
    { label: '3rd' }
  ];

  const Branch = [
    { label: 'ECE' },
    { label: 'EEE' },
    { label: 'ETC' },
    { label: 'ECSE' }
  ];

  return (
    <div className="container mx-auto px-4 py-4">
      <Autocomplete
        disablePortal
        id="YearOfStudy"
        options={Years}
        fullWidth
        renderInput={(params) => <TextField {...params} label="Year" required sx={{ fontSize: 20 }} />}
      />
      <Autocomplete
        disablePortal
        id="Branch"
        options={Branch}
        fullWidth
        sx={{ marginTop: 2 }}
        renderInput={(params) => <TextField {...params} label="Branch" required sx={{ fontSize: 20 }} />}
      />
    </div>
  );
}

export default Autocomplete1;
