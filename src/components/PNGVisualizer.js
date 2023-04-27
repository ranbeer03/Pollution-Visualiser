import React, { useState, Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Stars } from '@react-three/drei';
import './CSVVisualizer.css';

import PollutantGenerator2 from './PollutantGenerator2';

import TQ3381SW_PM_NO2 from './TQ3381SW_PM_NO2';
import TQ3381SW_PM_NOx from './TQ3381SW_PM_NOx';

const PNGVisualizer = () => {
  const [selectedPollutant, setSelectedPollutant] = useState("no2");
  const [showPollutantModel, setShowPollutantModel] = useState(true);

  const handleToggleComponent = (placeValue, pollutantValue) => {
    setSelectedPollutant(pollutantValue);
  };

  const togglePollutantModel = () => {
    setShowPollutantModel(!showPollutantModel);
  };

  return (
    <div className='VisualizationContainer'>
        <h2 className='Heading'>Image Data Visualization </h2>
        <p>This section of the website is currently under development. While all functionalities are operating as intended, the remaining task of importing the appropriate models has yet to be completed. Due to the limitations of the available resources, this particular aspect could not be achieved at this stage.</p>
        <p className='Description'>Venture into the realm of air pollution in London with our Image Data visualization section. Though slightly less precise than CSV and Shapefile formats, this option still offers valuable insights into pollution spread across the city. To start, simply choose the pollutant you wish to visualize from the single dropdown menu provided. A 2D map of London serves as a consistent reference for all generated 3D models, ensuring you always have a clear understanding of the spatial context. Dive into the world of air pollution in London using our Image Data visualization tool and explore the city's pollution landscape with ease.</p>
        <PollutantGenerator2 onButtonClick={handleToggleComponent} onTogglePollutantModel={togglePollutantModel} />
        <p className='Description'> Use your mouse to click and drag on the model to rotate it and scroll to zoom in and out. </p> 
        <div className='CanvasContainer'>
            <Canvas
                className="Canvas"
                data-paper-resize
                camera={{ position: [40, 40, 40] }} // Set the initial camera position
            >
            <OrbitControls enableZoom={true} />
            <ambientLight intensity={0.2} />
            <directionalLight position={[-2, 5, 2]} intensity={1} />
            <directionalLight position={[2, 5, -2]} intensity={1} />
            <Suspense fallback={null}>
                        {selectedPollutant === 'no2' && showPollutantModel && (
                        <TQ3381SW_PM_NO2 />
                        )}
                        {selectedPollutant === 'nox'&& showPollutantModel && (
                        <TQ3381SW_PM_NOx />
                        )}
                    </Suspense>
            <Stars />
            </Canvas>
        </div>
    </div>
  );
};

export default PNGVisualizer;
