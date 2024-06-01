import React from "react";
import TextField from '@mui/material/TextField';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import { InputAdornment } from "@mui/material";

function Miscellaneous() {
  return (
    <div className="container mx-auto px-4 py-4">
      <TextField
        id="linkedin-url"
        label="LinkedIn URL"
        placeholder="Enter your LinkedIn profile URL"
        fullWidth
        margin="normal"
        required
        InputProps={{
            style: { fontSize: 20 },
            startAdornment: (
              <InputAdornment position="start">
                <LinkedInIcon />
              </InputAdornment>
            ),
          }}
      />
      <TextField
        id="github-url"
        label="GitHub URL"
        placeholder="Enter your GitHub profile URL"
        fullWidth
        margin="normal"
        InputProps={{
            style: { fontSize: 20 },
            startAdornment: (
              <InputAdornment position="start">
                <GitHubIcon />
              </InputAdornment>
            ),
          }}
      />
      <TextField
        id="society-name"
        label="Name of Society Enrolled"
        placeholder="Enter the name of the society you are enrolled in"
        fullWidth
        margin="normal"
      />
      <TextField
        id="join-reason"
        label="Why do you want to join?"
        placeholder="Explain why you want to join"
        fullWidth
        multiline
        rows={4}
        margin="normal"
        required
      />
    </div>
  );
}

export default Miscellaneous;
