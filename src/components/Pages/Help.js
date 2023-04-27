import React,  {Suspense} from 'react';
import { OrbitControls } from "@react-three/drei"
import '../../App.css';
import Box from "../../components/Box";
import { Canvas } from '@react-three/fiber';
import Footer from '../Footer';
import Particle from '../Particle';
import PollutantGenerator from '../PollutantGenerator';

const Help = () => {
  return (
  <>
    <Particle />
    <div className="help-page">
      <h1>How to use the 3D model of a city with pollutants data</h1>
      <div className="demo-container">
        <h2>Demo</h2>
        <div className="CanvasBox">
          <Canvas className='Canvas'>
            <OrbitControls enableZoom = {true}/>
              <ambientLight intensity={0.5}/>
              <directionalLight position={[-2,5,2]} intensity={1}/>
              <Suspense fallback={null}>
                <Box />
              </Suspense>
          </Canvas> 
        </div>
        <p>
          Use your mouse to click and drag on the cube to rotate it and scroll
          to zoom in and out.
        </p>
      </div>
      <div className="instructions-container">
      
        <h2>Instructions</h2>
        <ol>
          <li>Select a site and a pollutant from the dropdown menus</li>
          <li>Click on the Generate button</li>
          <li>The 3D model of the city with the pollutants data will be shown</li>
          <li>
            Use your mouse to click and drag on the model to rotate it and
            scroll to zoom in and out
          </li>
          <li>
            You can easily toggle the pollutant graph on and off as needed by 
            clicking the 'Toggle Pollutant' button.
          </li>
        </ol>
      </div>
      <div className="model-container" id="model-container" >
        <PollutantGenerator />
      </div>
    </div>
    <Footer />
  </>
    
  );
};

export default Help;
