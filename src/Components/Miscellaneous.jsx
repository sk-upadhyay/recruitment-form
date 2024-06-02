import React from 'react';
import { TextField, Box } from '@mui/material';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import { InputAdornment } from "@mui/material";

function Miscellaneous({ onChange, errors }) {
  const handleChange = (field, event) => {
    onChange(field, event.target.value);
  };

  return (
    <div className="container">
      <Box component="form" sx={{ '& > :not(style)': { width: '100%' } }}>
        <TextField
          id="linkedin"
          label="LinkedIn"
          fullWidth
          margin="normal"
          onChange={(e) => handleChange('linkedin', e)}
          error={!!errors.linkedin}
          helperText={errors.linkedin}
          required
          InputProps={{
            style: { fontSize: 20 },
            startAdornment: (
              <InputAdornment position="start">
                <LinkedInIcon />
              </InputAdornment>
            ),
          }}
          sx={{ fontSize: 20 }}
        />
        <TextField
          id="github"
          label="GitHub"
          margin="normal"
          fullWidth
          InputProps={{
            style: { fontSize: 20 },
            startAdornment: (
              <InputAdornment position="start">
                <GitHubIcon />
              </InputAdornment>
            ),
          }}
          sx={{ fontSize: 20 }}
        />
        <TextField
          id="society"
          label="Society"
          margin="normal"
          fullWidth
          sx={{ fontSize: 20 }}
        />
        <TextField
          id="reason"
          label="Reason"
          fullWidth
          margin="normal"
          multiline
          rows={4}
          onChange={(e) => handleChange('reason', e)}
          error={!!errors.reason}
          helperText={errors.reason}
          required
          sx={{ fontSize: 20 }}
        />
      </Box>
    </div>
  );
}

export default Miscellaneous;
