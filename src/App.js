import React from 'react';
import Logo from './components/Home/Logo';
import Heading from './components/Home/Heading';
import About from './components/Home/About';
import GithubButton from './components/Home/GithubButton';


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
