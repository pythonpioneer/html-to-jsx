import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';
import { useState } from 'react';
import {Grid} from '@mui/material';

function App() {

  const [alertMsg, setAlertMsg] = useState(null);  // state variable for alert message
  const [colorMode, setColorMode] = useState('light');  // state variable for dark mode

  // this method is used to change the day and night mode
  const changeColorMode = () => {
    if(colorMode === 'light'){
      setColorMode('dark');
      document.body.style.backgroundColor = '#2F4F4F';
    }
    else {
      setColorMode('light');
      document.body.style.backgroundColor = 'white';
    }
  }

  // this method is used to dispay the message
  const showAlertMsg = (message, type) => {
    setAlertMsg({
      message: message,
      type: type,
    });
    setTimeout(() => {
      setAlertMsg(null);
    }, 5000);
  }
  
  return (
    <>
      <Grid >
      <Navbar colorMode={colorMode} changeColorMode={changeColorMode}/>
      <Alert alertMsg={alertMsg} />
      </Grid>
      <TextForm showAlertMsg={showAlertMsg} colorMode={colorMode}/>
    </>
  );
}

export default App;
