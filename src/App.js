import React from 'react';
import Logo from './components/Logo';
import Heading from './components/Heading';
import About from './components/About';
import GithubButton from './components/GithubButton';


function App() {
  return (
    <div className='bg-base flex flex-col justify-center items-center'>
      <Logo/>
      <Heading/>
      <About/>
      <GithubButton/>
    </div>
  );
}

export default App;
