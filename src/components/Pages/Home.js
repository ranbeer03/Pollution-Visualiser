import React, { Suspense, useState } from 'react';
import '../../App.css';
import HeroSection from '../HeroSection';
import Footer from '../Footer';
import PollutantGenerator from '../PollutantGenerator';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import Particle from '../Particle';
import { Stars } from '@react-three/drei';
import Cards from '../Cards';

import TQ3381SW_Base from '../../components/TQ3381SW_Base';
import TQ3381SW_PM_NO2 from '../../components/TQ3381SW_PM_NO2';
import TQ3381SW_PM_NOx from '../../components/TQ3381SW_PM_NOx';
import TQ3381SW_PM_PM10d from '../../components/TQ3381SW_PM_PM10d';
import TQ3381SW_PM_PM25 from '../../components/TQ3381SW_PM_PM25';

import TQ3280SE_Base from '../../components/TQ3280SE_Base';
import TQ3280SE_PM_NO2 from '../../components/TQ3280SE_PM_NO2';
import TQ3280SE_PM_NOx from '../../components/TQ3280SE_PM_NOx';
import TQ3280SE_PM_PM25 from '../../components/TQ3280SE_PM_PM25';
import TQ3280SE_PM_PM10d from '../../components/TQ3280SE_PM_PM10d';

function Home() {
  const [selectedPlace, setSelectedPlace] = useState("TQ3280SE");
  const [selectedPollutant, setSelectedPollutant] = useState("no2");
  const [showPollutantModel, setShowPollutantModel] = useState(true);

  const handleToggleComponent = (placeValue, pollutantValue) => {
    setSelectedPlace(placeValue);
    setSelectedPollutant(pollutantValue);
  };

  const togglePollutantModel = () => {
    setShowPollutantModel(!showPollutantModel);
  };

  return (
    <>
      <Particle />
      <div className='App'>
            <div className='DescriptionContainer'>
              <h1 className='Heading'>Welcome</h1>
              <p1 className='Description'>Welcome to Pollution Visualizer, a website designed to provide you with an interactive and immersive 
              experience of air pollution data in London that will help you gain insights into air pollution levels around the city. The website offers a unique 3D 
              visualization feature, enabling you to explore and interact with the pollution data over a specific area. To get started, simply select a region in London 
              using its grid reference ID and choose a specific air pollution component. Click the 'Generate' button to display the desired model. Once the model is 
              generated, you can easily toggle the pollutant graph on and off as needed by clicking the 'Toggle Pollutant' button. By providing an intuitive and engaging 
              experience, Pollution Visualizer aims to increase awareness of air pollution and its impacts 
              on public health and the environment.</p1>  
              <PollutantGenerator onButtonClick={handleToggleComponent} onTogglePollutantModel={togglePollutantModel} />
              <p className='Description'>
                Use your mouse to click and drag on the model to rotate it and scroll
                to zoom in and out.
              </p> 
            </div>
            <div className='CanvasContainer'>
              <Canvas className="Canvas" data-paper-resize>
                <OrbitControls enableZoom = {true}/>
                <ambientLight intensity={0.2}/>
                <directionalLight position={[-2,5,2]} intensity={1}/>
                <directionalLight position={[2,5,-2]} intensity={1}/>
                <Suspense fallback={null}>
                  {selectedPlace === 'TQ3381SW' && <TQ3381SW_Base />}
                  {selectedPlace === 'TQ3381SW' && selectedPollutant === 'no2' && showPollutantModel && (
                    <TQ3381SW_PM_NO2 />
                  )}
                  {selectedPlace === 'TQ3381SW' && selectedPollutant === 'nox'&& showPollutantModel && (
                    <TQ3381SW_PM_NOx />
                  )}
                  {selectedPlace === 'TQ3381SW' && selectedPollutant === 'pm10' && showPollutantModel && (
                    <TQ3381SW_PM_PM10d />
                  )}
                  {selectedPlace === 'TQ3381SW' && selectedPollutant === 'pm25' && showPollutantModel && (
                    <TQ3381SW_PM_PM25 />
                  )}

                  {selectedPlace === 'TQ3280SE' && <TQ3280SE_Base />}
                  {selectedPlace === 'TQ3280SE' && selectedPollutant === 'pm25' && showPollutantModel && (
                    <TQ3280SE_PM_PM25 />
                  )}
                  {selectedPlace === 'TQ3280SE' && selectedPollutant === 'pm10' && showPollutantModel && (
                    <TQ3280SE_PM_PM10d />
                  )}
                  {selectedPlace === 'TQ3280SE' && selectedPollutant === 'nox' && showPollutantModel && (
                    <TQ3280SE_PM_NOx />
                  )}
                  {selectedPlace === 'TQ3280SE' && selectedPollutant === 'no2' && showPollutantModel && (
                    <TQ3280SE_PM_NO2 />
                  )}
                </Suspense>
                <Stars />
              </Canvas>  
            </div>
            <Cards />
            <HeroSection />
            <Footer />
      </div>
    </>
  );
}

export default Home;



