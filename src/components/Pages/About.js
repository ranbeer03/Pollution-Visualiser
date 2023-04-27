import '../../App.css';
import Footer from '../Footer';
import Particle from '../Particle';

export default function Services() {
  return (
  <>
    <Particle />
    <div className='App'>
      <div className='AboutContainer'>
        <h1 className='Heading'>About</h1>
        <p className='Description'>
        Pollution Visualizer is a comprehensive and interactive platform designed to raise awareness about air pollution in London and its impact on public health and the environment. Utilizing advanced 3D visualization techniques, Pollution Visualizer allows users to explore and analyze air pollution data in an immersive and engaging way.
        </p>  
        <p className='Description'>
        The platform presents three discrete visualization techniques utilizing multiple datasets in various formats. Each format delivers distinctive insights and enables users to investigate diverse facets of pollution levels throughout London. The three dataset types employed include CSV, Shapefile (SHP), and Image data. Our user-friendly interface, complete with dropdown menus and customizable options, enables users to select specific areas or pollutants for detailed analysis of components, such as nitrogen dioxide, particulate matter, 
        and others, and see how they contribute to overall pollution levels. Utilized dataset features 2019 ground level concentrations of annual mean NOx, NO2, PM10, and PM2.5. 
        </p>
        <p className='Description'>
        Additionally, Pollution Visualizer showcases innovative pollution visualization techniques using Python in Blender, Blender GIS, and image manipulation in Photoshop, providing a deeper understanding of the rationale behind the chosen approaches.
        </p>
        <p className='Description'>
        Our mission is to make air pollution data easily accessible and understandable for everyone, from concerned citizens and students to researchers and policymakers. Pollution Visualizer aims to empower users with the knowledge and tools necessary to make informed decisions and contribute to the improvement of air quality in London.
        </p>
      </div>
      <Footer />
    </div>
  </>
  );
}