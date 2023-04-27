import React from 'react';
import '../../App.css';
import Particle from '../Particle';
import Footer from '../Footer';

export default function Products() {
  
  return (
    <div>
    <>
      <Particle />
      <div className='App'>
        <div className='DescriptionContainer2'>
          <h1 className='Heading'>Project Description</h1>
          <p1 className='Description'>
          Poor air quality is identified as a threat to Health. Policies to reduce emissions have been enforced in recent years by GLA, with 
          the objective to improve pollution caused primarily by road transport. In this project we will be looking at mapping London Air 
          quality data over a 3D digital model of the city of London provided by AccuCities. Data of interest: NO2 EU Limit Values, CO2, 
          PPM2.5 and other pollutant. We would like to compare variations of data over time against events which may have enforced reductions 
          in transport emissions such as: ULEZ, Pride Parade, London Marathon and other key events.
          </p1>  
        </div>
        <Footer />
      </div>
    </>
    </div>  
  );
}