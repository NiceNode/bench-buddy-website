import React, { useState } from 'react';
import Logo from './components/Home/Logo';
import Heading from './components/Home/Heading';
import GithubButton from './components/Home/GithubButton';
import Command from './components/Command/Command';
import Description from './components/Home/Description';
import About from './components/About/About';
import Attributions from './components/About/Attributions';
import CopyRight from './components/Footer/Copyright';
import PreRequisite from './components/Home/PreRequisite';

function App() {
  const [selectedComponent, setSelectedComponent] = useState("Docker");

  const handleComponentChange = (component) => {
    setSelectedComponent(component);
  };

  return (
    <div className='bg-base flex flex-col justify-center items-center'>
      <Logo />
      <Heading />
      <Description />
      <GithubButton />
      <PreRequisite onComponentChange={handleComponentChange} />
      <Command selectedComponent={selectedComponent}/>

      <About />
      <Attributions />
      <CopyRight />
    </div>
  );
}

export default App;
