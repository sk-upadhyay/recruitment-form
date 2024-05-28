import React from 'react';
import {TextField,InputAdornment } from '@mui/material';
import AccountCircle from '@mui/icons-material/AccountCircle';
import EmailIcon from '@mui/icons-material/Email';
import AlternateEmailIcon from '@mui/icons-material/AlternateEmail';
import ContactsIcon from '@mui/icons-material/Contacts';

function TextInput() {
  return (
    <div className="container px-4 py-4">
      <div className="grid grid-cols-1 gap-y-5">
        <TextField
        sx={{mb:2}}
          className="text-field "
          fullWidth
          id="Name"
          label="Name"
          variant="filled"
          required
          placeholder="Enter Your Name"
          InputProps={{ style: { fontSize: 20 },startAdornment: (
            <InputAdornment position="start">
              <AccountCircle />
            </InputAdornment>
          ) }}
          InputLabelProps={{ style: { fontSize: 20 } }}
        />
        <TextField
        sx={{mb:2}}
          className="text-field"
          fullWidth
          id="EmailAddress"
          label="Personal Email"
          variant="outlined"
          required
          placeholder="Enter Your Personal Email Id"
          InputProps={{ style: { fontSize: 20 },startAdornment: (
            <InputAdornment position="start">
              <EmailIcon />
            </InputAdornment>
          ) }}
          InputLabelProps={{ style: { fontSize: 20 } }}
        />
        <TextField
        sx={{mb:2}}
          className="text-field"
          fullWidth
          id="Email(KIIT)"
          label="KIIT Mail"
          variant="outlined"
          required
          color="success"
          focused
          placeholder="Enter Your KIIT Mail Id"
          InputProps={{ style: { fontSize: 20 },startAdornment: (
            <InputAdornment position="start">
              <AlternateEmailIcon  />
            </InputAdornment>
          ) }}
          InputLabelProps={{ style: { fontSize: 20 } }}
          
        />
        <TextField
        sx={{mb:2}}
          className="text-field"
          fullWidth
          id="roll"
          label="Roll Number"
          type="number"
          variant="filled"
          color="success"
          focused
          required
          InputProps={{ style: { fontSize: 20 }, onWheel: (event) => event.target.blur() }}
          InputLabelProps={{ style: { fontSize: 20 } }}
        />
        <TextField
        sx={{mb:2}}
          className="text-field"
          fullWidth
          id="ContactNumber"
          label="Contact Number"
          type="number"
          variant="filled"
          focused
          required
          InputProps={{ style: { fontSize: 20 },startAdornment: (
            <InputAdornment position="start">
              <ContactsIcon />
            </InputAdornment>
          ), onWheel: (event) => event.target.blur() }}
          InputLabelProps={{ style: { fontSize: 20 } }}
        />
        
      </div>
    </div>
  );
}

export default TextInput;
