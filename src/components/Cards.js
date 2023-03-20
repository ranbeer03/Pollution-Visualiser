import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function Cards() {
  return (
    <div className='cards'>
      <h1>Explore Pollution Visualization Techniques using CSV, Shapefile, and Image Data</h1>
      <p className='description'>
      The subsequent section presents a comprehensive overview of three distinct methodologies employed for 
      visualizing pollution data. Each approach offers unique advantages and challenges, yet only one has been 
      deemed most suitable for this particular project.The first method, CSV Data Visualization, was ultimately 
      selected due to its balance of efficiency and effectiveness in conveying the pertinent information. 
      Conversely, the Shapefile Data Visualization approach, while providing an intricate portrayal of pollution 
      patterns, necessitated a significantly more extensive city model of London, resulting in a more 
      computationally demanding process. Although the potential benefits of this technique are notable, it was 
      deemed less practical for the current endeavor. Lastly, Image Data Analysis was evaluated as another viable 
      option for pollution visualization. However, this method's labor-intensive nature and the potential 
      limitations in extracting meaningful insights rendered it less appealing for the project at hand. In light 
      of these considerations, CSV Data Visualization emerged as the most fitting choice for this project. 
      The following discussion will delve into the intricacies of each method, elucidating their respective 
      strengths and weaknesses, and providing a deeper understanding of the rationale behind the chosen approach.
      </p>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          {/* <ul className='cards__items'>
            <CardItem
              src='images/img-9.jpg'
              text='Shapefile Data: Mapping Pollution Patterns Geospatially'
              label='Adventure'
              path='/services'
            />
            <CardItem
              src='images/img-2.jpg'
              text='Shapefile Data: Mapping Pollution Patterns Geospatially'
              label='Luxury'
              path='/services'
            />
          </ul> */}
          <ul className='cards__items'>
            <CardItem
              src='./CSVData.jpg'
              text='CSV Data Visualization: Unlocking Insights from Raw Data'
              label='.csv'
              path='/services'
              expandedText="Information yet to be added."
            />
            <CardItem
              src='./ShapefileData.jpg'
              text='Shapefile Data: Mapping Pollution Patterns Geospatially'
              label='.shp'
              path='/products'
              expandedText="Geospatial data analysis offers various formats and techniques, with shapefile data 
              being a popular choice for storing geographic features. 3D visualization tools, like Blender GIS, 
              enable effective interaction with shapefile data, providing immersive experiences and realistic 
              visualizations. Importing and customizing shapefile data in Blender involves installing the Blender 
              GIS plugin, importing a base map, adjusting navigation settings, and importing the data. 
              Customization options include adding colors, textures, or selecting primitive shapes like polygons, 
              Venn diagrams, and circles. Accurate and engaging visualizations can be achieved through further 
              customization, such as applying color gradients and adjusting transparency. This creates a concise 
              and visually appealing 3D representation of shapefile data, suitable for analysis and comparison."
            />
            <CardItem
              src='./ImageData.jpg'
              text='Image Data Analysis: Decoding Pollution through Visuals'
              label='.png'
              path='/sign-up'
              expandedText="By combining Blender's Geometry Nodes with image manipulation in Photoshop, we've 
              created an immersive and informative way to display air pollution levels in urban areas. Blender's 
              Geometry Nodes allow us to create intricate 3D geometries and effects using image data as a height 
              map. We use pollution data sets, such as annual mean concentrations of NOx, NO2, PM10, and PM2.5, 
              to create images representing pollution levels. These images are then refined in Photoshop to 
              ensure compatibility with Blender, transforming them into greyscale images where bright shades 
              represent high pollution levels and darker shades represent low levels. Once the image is imported 
              into Blender, we use a series of Geometry Nodes to create a 3D model representing the pollution 
              data. The process involves manipulating the image's points to create a visually appealing and 
              informative effect. To enhance the visualization further, we apply shading techniques that adjust 
              colors to match pollution intensity. Finally, we optimize the 3D model for smooth performance and 
              high-quality rendering, ensuring the final result is visually arresting and informative. Experience 
              the power of 3D visualization to gain a deeper understanding of air pollution and its impact on our 
              urban environments."
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;

