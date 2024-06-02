import React from 'react';
import { TextField, InputAdornment } from '@mui/material';
import AccountCircle from '@mui/icons-material/AccountCircle';
import EmailIcon from '@mui/icons-material/Email';
import AlternateEmailIcon from '@mui/icons-material/AlternateEmail';
import ContactsIcon from '@mui/icons-material/Contacts';

function TextInput({ onChange, errors }) {
  return (
    <div className="container px-4 py-4">
      <div className="grid grid-cols-1 gap-y-5">
        <TextField
          sx={{ mb: 2 }}
          fullWidth
          id="Name"
          label="Name"
          variant="filled"
          required
          placeholder="Enter Your Name"
          onChange={(e) => onChange('name', e.target.value)}
          error={!!errors.name}
          helperText={errors.name}
          InputProps={{
            style: { fontSize: 20 },
            startAdornment: (
              <InputAdornment position="start">
                <AccountCircle />
              </InputAdornment>
            )
          }}
          InputLabelProps={{ style: { fontSize: 20 } }}
        />
        <TextField
          sx={{ mb: 2 }}
          fullWidth
          id="EmailAddress"
          label="Personal Email"
          variant="outlined"
          required
          placeholder="Enter Your Personal Email Id"
          onChange={(e) => onChange('personalEmail', e.target.value)}
          error={!!errors.personalEmail}
          helperText={errors.personalEmail}
          InputProps={{
            style: { fontSize: 20 },
            startAdornment: (
              <InputAdornment position="start">
                <EmailIcon />
              </InputAdornment>
            )
          }}
          InputLabelProps={{ style: { fontSize: 20 } }}
        />
        <TextField
          sx={{ mb: 2 }}
          fullWidth
          id="Email(KIIT)"
          label="KIIT Mail"
          variant="outlined"
          required
          color="success"
          focused
          placeholder="Enter Your KIIT Mail Id"
          onChange={(e) => onChange('kiitMail', e.target.value)}
          error={!!errors.kiitMail}
          helperText={errors.kiitMail}
          InputProps={{
            style: { fontSize: 20 },
            startAdornment: (
              <InputAdornment position="start">
                <AlternateEmailIcon />
              </InputAdornment>
            )
          }}
          InputLabelProps={{ style: { fontSize: 20 } }}
        />
        <TextField
          sx={{ mb: 2 }}
          fullWidth
          id="roll"
          label="Roll Number"
          type="number"
          variant="filled"
          color="success"
          focused
          required
          onChange={(e) => onChange('rollNumber', e.target.value)}
          error={!!errors.rollNumber}
          helperText={errors.rollNumber}
          InputProps={{
            style: { fontSize: 20 },
            onWheel: (event) => event.target.blur()
          }}
          InputLabelProps={{ style: { fontSize: 20 } }}
        />
        <TextField
          sx={{ mb: 2 }}
          fullWidth
          id="ContactNumber"
          label="Contact Number"
          type="number"
          variant="filled"
          focused
          required
          onChange={(e) => onChange('contactNumber', e.target.value)}
          error={!!errors.contactNumber}
          helperText={errors.contactNumber}
          InputProps={{
            style: { fontSize: 20 },
            startAdornment: (
              <InputAdornment position="start">
                <ContactsIcon />
              </InputAdornment>
            ),
            onWheel: (event) => event.target.blur()
          }}
          InputLabelProps={{ style: { fontSize: 20 } }}
        />
      </div>
    </div>
  );
}

export default TextInput;
