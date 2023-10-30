import React from 'react';
import Logo from './components/Home/Logo';
import Heading from './components/Home/Heading';
import GithubButton from './components/Home/GithubButton';
import Docker from './components/Command/Docker';
import Description from './components/Home/Description';
import About from './components/About/About';
import Attributions from './components/About/Attributions';
import CopyRight from './components/Footer/Copyright';
import PreRequisite from './components/Home/PreRequisite';


function App() {
  return (
    <div className='bg-base flex flex-col justify-center items-center'>
      <Logo/>
      <Heading/>
      <Description/>
      <GithubButton/>
      <PreRequisite/>
      <Docker/>

      <About/>
      <Attributions/>
      <CopyRight/>
    </div>
  );
}

export default App;
