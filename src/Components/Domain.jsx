import React, { useState } from 'react';
import { TextField, Autocomplete, FormControl, RadioGroup, FormControlLabel, Radio, FormLabel, FormHelperText } from '@mui/material';

function Domain({ onChange, errors }) {
  const ForNonTechDomains = [
    { label: 'Video Editors' },
    { label: 'Social Media Engagement' },
    { label: 'Design: UI/UX and Graphics' },
    { label: 'Photography / Videography' },
    { label: 'Content Curation / Creation' },
    { label: 'Marketing / Public Relations' }
  ];

  const ForTechDomains = [
    { label: 'AI/ML' },
    { label: 'Cloud Computing' },
    { label: 'Web Development' },
    { label: 'Embedded Systems' },
    { label: 'Android Development' },
    { label: 'Internet Of Things(IOT)' },
    { label: 'AR/VR/Game Development' },
    { label: 'Java (Backend / Frameworks)' }
  ];

  const [selectedDomain, setSelectedDomain] = useState('');

  const handleDomainChange = (event) => {
    const value = event.target.value;
    setSelectedDomain(value);
    onChange('domainType', value);
  };

  const handleAutoCompleteChange = (event, value) => {
    onChange('domain', value ? value.label : '');
  };

  return (
    <div className="container mx-auto px-4 py-4">
      <FormControl error={!!errors.domainType}>
        <FormLabel id="domain-label" required sx={{ fontSize: 20 }}>Domain</FormLabel>
        <RadioGroup
          row
          aria-labelledby="domain-label"
          name="row-radio-buttons-group"
          value={selectedDomain}
          onChange={handleDomainChange}
        >
          <FormControlLabel value="Tech" control={<Radio />} label="Tech" sx={{ fontSize: 20 }} />
          <FormControlLabel value="Non-Tech" control={<Radio />} label="Non-Tech" sx={{ fontSize: 20 }} />
        </RadioGroup>
        {errors.domainType && <FormHelperText>{errors.domainType}</FormHelperText>}
      </FormControl>
      {selectedDomain === 'Tech' && (
        <Autocomplete
          disablePortal
          id="TechDomains"
          options={ForTechDomains}
          fullWidth
          onChange={handleAutoCompleteChange}
          renderInput={(params) => (
            <TextField
              {...params}
              label="Tech Domains"
              required
              error={!!errors.domain}
              helperText={errors.domain}
              sx={{ fontSize: 20 }}
            />
          )}
        />
      )}
      {selectedDomain === 'Non-Tech' && (
        <Autocomplete
          disablePortal
          id="NonTechDomains"
          options={ForNonTechDomains}
          fullWidth
          onChange={handleAutoCompleteChange}
          renderInput={(params) => (
            <TextField
              {...params}
              label="Non-Tech Domains"
              required
              error={!!errors.domain}
              helperText={errors.domain}
              sx={{ fontSize: 20 }}
            />
          )}
        />
      )}
    </div>
  );
}

export default Domain;
