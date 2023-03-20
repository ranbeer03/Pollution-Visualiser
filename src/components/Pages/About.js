import React, {Suspense} from 'react';
import '../../App.css';
import { OrbitControls } from "@react-three/drei"
import {Canvas} from "@react-three/fiber"
import Box from "../../components/Box";
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
          Air pollution is a major environmental and public health issue, and the city of London is no exception. 
          Every year, air pollution in London is responsible for thousands of premature deaths, and it affects the health and quality of life 
          of millions of people. At Pollution Visualiser, we believe that increasing awareness of air pollution is key to tackling this problem.
        </p>  
        <p className='Description'>
        Our tool enables you to select a specific area of London, such as your neighbourhood, workplace, or school, and see how air pollution 
        levels have changed over time. You can choose from a range of air pollution components, such as nitrogen dioxide, particulate matter, 
        and ozone, and see how they contribute to overall pollution levels.
        </p>
        <p className='Description'>
        But that's not all. Our unique 3D visualisation feature allows you to explore and interact with pollution data like never before. 
        You can zoom in and out, rotate the view, and get a real sense of how pollution levels vary across different areas of the city. With 
        Pollution Visualiser, you can truly experience air pollution data in a way that makes it more meaningful and understandable. Here iss a 
        small example of a cube to help you understand the 3D nature of the objects that will be presented to you.
        </p>
        <p className='Description'>
        Our website is designed to be user-friendly and accessible, with clear instructions and explanations throughout. We want to make it 
        easy for anyone to explore air pollution data, whether you're a concerned citizen, a student, a researcher, or a policymaker.
        </p>
      </div>
      <Footer />
    </div>
  </>
  );
}