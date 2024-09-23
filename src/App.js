import './App.css';
import InputNo from './components/InputNo';
import React, { useState } from 'react';
function App() {
  

  return (
    <>
      <div className="container w-25 border my-5 bg-warning border-dark  shadow-lg rounded border-rounded" style={{ height: '70vh' }}>

        <InputNo />

      </div>
    </>
  );
}

export default App;
