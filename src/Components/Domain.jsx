import React, { useState } from 'react';
import { TextField, Autocomplete, FormControl, RadioGroup, FormControlLabel, Radio, FormLabel } from '@mui/material';

function Domain() {
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
    setSelectedDomain(event.target.value);
  };

  return (
    <div>
      <FormControl>
        <FormLabel id="domain" required>Domain</FormLabel>
        <RadioGroup row aria-labelledby="gender" name="row-radio-buttons-group" value={selectedDomain} onChange={handleDomainChange}>
          <FormControlLabel value="Tech" control={<Radio />} label="Tech" />
          <FormControlLabel value="Non-Tech" control={<Radio />} label="Non-Tech" />
        </RadioGroup>
      </FormControl>
      {selectedDomain === 'Tech' && (
        <Autocomplete
          disablePortal
          id="Applyingfor"
          options={ForTechDomains}
          fullWidth
          renderInput={(params) => <TextField {...params} label="Tech Domains" required />}
        />
      )}
      {selectedDomain === 'Non-Tech' && (
        <Autocomplete
          disablePortal
          id="Applyingfor"
          options={ForNonTechDomains}
          fullWidth
          renderInput={(params) => <TextField {...params} label="Non-Tech Domains" required />}
        />
      )}
    </div>
  );
}

export default Domain;
