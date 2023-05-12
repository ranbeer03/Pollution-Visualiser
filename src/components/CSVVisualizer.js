import React, { useState, Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Stars } from '@react-three/drei';
import './CSVVisualizer.css';
import PollutantGenerator from './/PollutantGenerator';


import TQ3381SW_Base from './/TQ3381SW_Base';
import TQ3381SW_PM_NO2 from './/TQ3381SW_PM_NO2';
import TQ3381SW_PM_NOx from './/TQ3381SW_PM_NOx';
import TQ3381SW_PM_PM10d from './/TQ3381SW_PM_PM10d';
import TQ3381SW_PM_PM25 from './/TQ3381SW_PM_PM25';

import TQ3280SE_Base from './/TQ3280SE_Base';
import TQ3280SE_PM_NO2 from './/TQ3280SE_PM_NO2';
import TQ3280SE_PM_NOx from './/TQ3280SE_PM_NOx';
import TQ3280SE_PM_PM25 from './/TQ3280SE_PM_PM25';
import TQ3280SE_PM_PM10d from './/TQ3280SE_PM_PM10d';

import TQ3281SW_Base from './/TQ3281SW_Base';
import TQ3281SW_PM_NO2 from './/TQ3281SW_PM_NO2';
import TQ3281SW_PM_NOx from './/TQ3281SW_PM_NOx';
import TQ3281SW_PM_PM25 from './/TQ3281SW_PM_PM25';
import TQ3281SW_PM_PM10d from './/TQ3281SW_PM_PM10d';


import TQ3180NE_Base from './/TQ3180NE_Base';
import TQ3180NE_PM_NO2 from './/TQ3180NE_PM_NO2';
import TQ3180NE_PM_NOx from './/TQ3180NE_PM_NOx';
import TQ3180NE_PM_PM25 from './/TQ3180NE_PM_PM25';
import TQ3180NE_PM_PM10d from './/TQ3180NE_PM_PM10d';

const CSVVisualizer = () => {
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
    <div>
      <div className='DescriptionContainer'>
          <h1 className='Heading'>CSV Data Visualization </h1>
          <p className='Description'> Explore the intricacies of air pollution in London with our CSV data visualization section. This dataset features 2019 ground level concentrations of annual mean NOx, NO2, PM10, and PM2.5 in µg/m3 (microgramme per cubic metre) at a 20m grid resolution. Additionally. To get started, simply use the dropdown menu to select a grid reference representing a location around London. Next, choose a pollutant from the list provided in the second dropdown. Click "Generate" to view the desired data visualized. You can also use the toggle button to turn off the pollutant display, leaving only the base 3D model for further examination. Discover the impact of air pollution on London with our user-friendly CSV visualization tool.</p>
          <PollutantGenerator onButtonClick={handleToggleComponent} onTogglePollutantModel={togglePollutantModel} />
        </div>
      <div className='VisualizationContainer'>
        
          <p className='Description'> Use your mouse to click and drag on the model to rotate it and scroll to zoom in and out. </p> 
          <div className='CanvasContainerContainer'>
            <div className='CanvasContainer'>
                <Canvas
                className="Canvas"
                data-paper-resize
                camera={{ position: [60, 80, 60] }} // Set the initial camera position
                >
                <OrbitControls enableZoom={false} enableDamping={true} dampingFactor={0.05}/> 
                <ambientLight intensity={0.2} />
                <directionalLight position={[-2, 5, 2]} intensity={1} />
                <directionalLight position={[2, 5, -2]} intensity={1} />
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

                            {selectedPlace === 'TQ3281SW' && <TQ3281SW_Base />}
                            {selectedPlace === 'TQ3281SW' && selectedPollutant === 'pm25' && showPollutantModel && (
                            <TQ3281SW_PM_PM25 />
                            )}
                            {selectedPlace === 'TQ3281SW' && selectedPollutant === 'pm10' && showPollutantModel && (
                            <TQ3281SW_PM_PM10d />
                            )}
                            {selectedPlace === 'TQ3281SW' && selectedPollutant === 'nox' && showPollutantModel && (
                            <TQ3281SW_PM_NOx />
                            )}
                            {selectedPlace === 'TQ3281SW' && selectedPollutant === 'no2' && showPollutantModel && (
                            <TQ3281SW_PM_NO2 />
                            )}
                            {selectedPlace === 'TQ3180NE' && <TQ3180NE_Base />}
                            {selectedPlace === 'TQ3180NE' && selectedPollutant === 'pm25' && showPollutantModel && (
                            <TQ3180NE_PM_PM25 />
                            )}
                            {selectedPlace === 'TQ3180NE' && selectedPollutant === 'pm10' && showPollutantModel && (
                            <TQ3180NE_PM_PM10d />
                            )}
                            {selectedPlace === 'TQ3180NE' && selectedPollutant === 'nox' && showPollutantModel && (
                            <TQ3180NE_PM_NOx />
                            )}
                            {selectedPlace === 'TQ3180NE' && selectedPollutant === 'no2' && showPollutantModel && (
                            <TQ3180NE_PM_NO2 />
                            )}
                        </Suspense>
                <Stars />
                </Canvas>
            </div>
          </div>
      </div>
    </div>
  );
};

export default CSVVisualizer;
