import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function Cards() {
  return (
    <div className='cards'>
    
      <h1 className='Heading'>Explore Pollution Visualization Techniques using CSV, Shapefile, and Image Data</h1>
      <p className='Description'>
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
          <ul className='cards__items'>
            <CardItem
              src='./CSVData.jpg'
              text='CSV Data Visualization: Unlocking Insights from Raw Data'
              label='.csv'
              path='/services'
              expandedText="Discover a powerful combination of geospatial data analysis and 3D visualization to 
              visualize CSV data by using Python in Blender. This approach involves reading the CSV data and creating 
              a bar for each data point on the 3D model that corresponds to its grid reference ID and coordinates.
              To achieve this, Blender GIS plugin is needed along with a base map. Next, Python is used to read the CSV
              data and generate bars representing each data point. Further customization, such as adding colors, textures 
              helped enhance the visualization. Visual appeal of the 3D representation is boosted by applying color 
              gradients and adjusting transparency, resulting in an accurate and engaging visualization of the CSV data. 
              This method provides an immersive experience and a realistic portrayal of air pollution in London, facilitating 
              in-depth analysis and comparison."
            />
            <CardItem
              src='./ShapefileData.jpg'
              text='Shapefile Data: Mapping Pollution Patterns Geospatially'
              label='.shp'
              path='/products'
              expandedText="Geospatial data analysis offers various formats and techniques, with shapefile data 
              being a popular choice for storing geographic features. 3D visualization tool Blender GIS, 
              enabled effective interaction with shapefile data, providing immersive experiences and realistic 
              visualizations. Importing and customizing shapefile data in Blender involved installing the Blender 
              GIS plugin, importing a base map, adjusting navigation settings, and importing the data. 
              Accurate and engaging visualizations were achieved through further  customization, such as applying color 
              gradients and adjusting transparency. This created a concise and visually appealing 3D representation of shapefile 
              data, suitable for analysis and comparison."
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

