import React from 'react';
import './App.css';
import Heading from './Headin';
import Button from './Button';
import InputField from './input';
function App() {
  return (
    <div className="App">
      <Heading headings ={"Register here ..."}/>
      <InputField/>
      <br></br>
      <br></br>
      <Button text={"Submit"}/>
    </div>
  );
}

export default App;
