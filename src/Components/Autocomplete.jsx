import React from 'react';
import { Autocomplete, TextField, Box } from '@mui/material';

function Autocomplete1({ onChange, errors }) {
  const branches = [
    { label: 'CSE' },
    { label: 'IT' },
    { label: 'ECE' },
    { label: 'EEE' },
    { label: 'Mechanical' },
    { label: 'Civil' },
  ];

  const years = [
    { label: '1st Year' },
    { label: '2nd Year' },
    { label: '3rd Year' },
    { label: '4th Year' },
  ];

  const handleBranchChange = (event, value) => {
    onChange('branch', value ? value.label : '');
  };

  const handleYearChange = (event, value) => {
    onChange('year', value ? value.label : '');
  };

  return (
    <div className="container">
      <Box component="form" sx={{ '& > :not(style)': { width: '100%' } }}>
        <Autocomplete
          disablePortal
          id="branch"
          options={branches}
          onChange={handleBranchChange}
          renderInput={(params) => (
            <TextField
              {...params}
              label="Branch"
              required
              error={!!errors.branch}
              helperText={errors.branch}
              sx={{ fontSize: 20 }}
            />
          )}
        />
        <Autocomplete
          disablePortal
          id="year"
          options={years}
          onChange={handleYearChange}
          renderInput={(params) => (
            <TextField
              {...params}
              label="Year"
              required
              error={!!errors.year}
              helperText={errors.year}
              sx={{ fontSize: 20 }}
            />
          )}
        />
      </Box>
    </div>
  );
}

export default Autocomplete1;
