import React, { useState } from 'react';
import { Grid, Paper, Button, Box, Alert } from '@mui/material';
import FormHeading from './Formheading';
import TextInput from './Textinput';
import Gender from './Gender';
import Autocomplete1 from './Autocomplete.jsx';
import Miscellaneous from './Miscellaneous.jsx';
import Domain from './Domain';
import Animation from './Animation';
import Submit from './Submit.jsx';

function Form() {
  const paperStyle = {
    padding: '10px 10px',
    width: '100%',
    margin: '10px',
    borderRadius: '15px',
    backgroundColor: 'rgba(240, 240, 240, 0.75)',
  };

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    personalEmail: '',
    kiitMail: '',
    rollNumber: '',
    contactNumber: '',
    gender: '',
    year: '',
    branch: '',
    domainType: '',
    domain: '',
    linkedin: '',
    reason: ''
  });

  const [formErrors, setFormErrors] = useState({});

  const handleChange = (field, value) => {
    setFormData((prevData) => ({ ...prevData, [field]: value }));
  };

  const validateForm = () => {
    const errors = {};
    if (!formData.name) errors.name = 'Name is required';
    if (!formData.personalEmail) errors.personalEmail = 'Personal Email is required';
    if (!formData.kiitMail) errors.kiitMail = 'KIIT Mail is required';
    if (!formData.rollNumber) errors.rollNumber = 'Roll Number is required';
    if (!formData.contactNumber) errors.contactNumber = 'Contact Number is required';
    if (!formData.gender) errors.gender = 'Gender is required';
    if (!formData.year) errors.year = 'Year is required';
    if (!formData.branch) errors.branch = 'Branch is required';
    if (!formData.domainType) errors.domainType = 'Domain type is required';
    if (!formData.domain) errors.domain = 'Domain is required';
    if (!formData.linkedin) errors.linkedin = 'LinkedIn is required';
    if (!formData.reason) errors.reason = 'Reason is required';
    return errors;
  };

  const handleSubmit = (event) => {
    event.preventDefault(); // Prevent default form submission behavior
    const errors = validateForm();
    if (Object.keys(errors).length === 0) {
      // Perform form submission logic here
      setIsSubmitted(true);
    } else {
      setFormErrors(errors);
    }
  };

  return (
    <div className='mx-auto'>
      {!isSubmitted ? (
        // Form content
        <Grid container sx={{ justifyContent: { xs: 'center', lg: 'center' } }}>
          <Grid item xs={5} lg={5}>
            <Paper elevation={10} style={paperStyle}>
              <FormHeading />
              <TextInput onChange={handleChange} errors={formErrors} />
              <Gender onChange={handleChange} errors={formErrors} />
              <Autocomplete1 onChange={handleChange} errors={formErrors} />
              <Domain onChange={handleChange} errors={formErrors} />
              <Miscellaneous onChange={handleChange} errors={formErrors} />
              {/* Centered Submit Button */}
              <Box textAlign="center" marginTop={2}>
                <Button variant="contained" color="primary" onClick={handleSubmit}>
                  Submit
                </Button>
                {Object.keys(formErrors).length > 0 && (
                  <Alert severity="error" sx={{ mt: 2 }}>
                    Please fill out all required fields.
                  </Alert>
                )}
              </Box>
            </Paper>
          </Grid>
          <Grid item xs={5} lg={5} display={{ xs: 'none', lg: 'block' }}>
            <Animation />
          </Grid>
        </Grid>
      ) : (
        <Submit />
      )}
    </div>
  );
}

export default Form;
