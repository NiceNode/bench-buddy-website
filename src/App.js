import React from 'react';
import Logo from './components/Home/Logo';
import Heading from './components/Home/Heading';
import About from './components/Home/About';
import GithubButton from './components/Home/GithubButton';
import Command from './components/Home/Command';


function App() {
  return (
    <div className='bg-base flex flex-col justify-center items-center'>
      <Logo/>
      <Heading/>
      <About/>
      <GithubButton/>
      
      <Command/>
    </div>
  );
}

export default App;
