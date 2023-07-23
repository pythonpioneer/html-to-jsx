import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';
import { useState } from 'react';

function App() {

  const [alertMsg, setAlertMsg] = useState(null);  // state variable for alert message

  const showAlertMsg = (message, type) => {
    setAlertMsg({
      message: message,
      type: type,
    });
    setTimeout(() => {
      setAlertMsg(null);
    }, 2000);
  }
  
  return (
    <>
      <Navbar />
      <Alert alertMsg={alertMsg}/>
      <TextForm showAlertMsg={showAlertMsg}/>
    </>
  );
}

export default App;
