import React, { useState } from 'react';
import '../../App.css';
import Filler from '../Filler';
import Footer from '../Footer';
import Particle from '../Particle';
import Cards from '../Cards';
import CSVVisualizer from '../CSVVisualizer';
import ShapefileVisualizer from '../PNGVisualizer';
import PNGVisualizer from '../ShapefileVisualizer';
import NavbarButton from '../NavbarButton';

function Home() {

  const [selectedComponent, setSelectedComponent] = useState(1);

  const handleSelectionChange = (selection) => {
    setSelectedComponent(selection);
  };

  return (
    <>
      <Particle />
      <div className='App'>
            <div className='DescriptionContainer'>
              <h1 className='Heading'>Welcome</h1>
              <p1 className='Description'> Welcome to Pollution Visualizer, your interactive platform for exploring air pollution in London through advanced 3D visualization. Choose from CSV, Shapefile (SHP), or PNG datasets to create accurate and immersive models, and gain valuable insights into pollution levels across the city. Start your journey towards understanding air pollution's impact on public health and the environment with Pollution Visualizer today.</p1>  
            </div>
            <NavbarButton onSelectionChange={handleSelectionChange} />
            <div className='MegaContainer'>
              {selectedComponent === 1 && <CSVVisualizer />}
              {selectedComponent === 3 && <ShapefileVisualizer />}
              {selectedComponent === 2 && <PNGVisualizer />}
            </div>
            <Cards />
            <Filler />
            <Footer />
      </div>
    </>
  );
}

export default Home;



