import React, { useState, Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Stars } from '@react-three/drei';
import './CSVVisualizer.css';

import PollutantGenerator2 from './PollutantGenerator2';

import TQ3381SW_PM_NO2 from './TQ3381SW_PM_NO2';
import TQ3381SW_PM_NOx from './TQ3381SW_PM_NOx';

const ShapefileVisualizer = () => {
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
        <h2 className='Heading'>Shapefile Data Visualization </h2>
        <p>This section of the website is currently under development. While all functionalities are operating as intended, the remaining task of importing the appropriate models has yet to be completed. Due to the limitations of the available resources, this particular aspect could not be achieved at this stage.</p>
        <p className='Description'>Uncover the air pollution patterns in London using our Shapefile data visualization section. In this section, you can explore the entire city's pollution levels by selecting the pollutant of interest from the single dropdown menu provided. While visualizing the whole 3D model would be computationally extensive, we offer a 2D map of London as a constant reference for all generated 3D models, allowing you to maintain spatial context. Begin your investigation into the city's pollution levels with our Shapefile data visualization and gain a comprehensive understanding of air quality across London.</p>
        <PollutantGenerator2 onButtonClick={handleToggleComponent} onTogglePollutantModel={togglePollutantModel} />
        <p className='Description'> Use your mouse to click and drag on the model to rotate it and scroll to zoom in and out.</p> 
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

export default ShapefileVisualizer;
