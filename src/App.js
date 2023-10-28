import React from 'react';
import Logo from './components/Logo';
import Heading from './components/Heading';
import About from './components/About';


function App() {
  return (
    <div className='bg-base'>
      <Logo/>
      <Heading/>
      <About/>
    </div>
  );
}

export default App;
