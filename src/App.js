// import logo from './logo.svg';
import { useState } from 'react';
import './App.css';
// import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';

function App() {
  const [mode, setMode] = useState('light')// wherther dark mode is enabled or not
  let toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = '#1b1b1c';
    } else {
      setMode('light');
      document.body.style.backgroundColor = 'white';

    }
  }
  return (
    <>
      <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} aboutText="About us" />
      <div className="container my-3" >

        {/* <About /> */}
        <TextForm title="Enter the text to analyze" mode={mode} />
      </div>
    </>

  );
}

export default App;
