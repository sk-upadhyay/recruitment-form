import './App.css';
import Form from './Components/Form';
import Animation from './Components/Animation';
import { Grid } from '@mui/material';

function App() {
  const animationstyle={
    width:50,
    height:40,
    right:50,
    margin:20,
  }
  const formStyle={
    height:100
  }
  return (
    <Grid container justifyContent="center" spacing={2}>
      <Grid item xs={6}>
        <Form style={formStyle}/>
      </Grid>
      <Grid item xs={6}>
        <Animation align="right" style={animationstyle} className="animation" />
      </Grid> 
    </Grid>
  );
}

export default App;
