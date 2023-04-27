import React, { useState } from "react";
import "./PollutantGenerator.css";

const places = [
  { name: "TQ3280SE", value: "TQ3280SE" },
  { name: "TQ3180NE", value: "TQ3180NE" },
  { name: "TQ3281SW", value: "TQ3281SW" },
  { name: "TQ3381SW", value: "TQ3381SW" },
];

const pollutants = [
  { name: "NO2", value: "no2" },
  { name: "NOx", value: "nox" }, 
  { name: "PM10", value: "pm10" },
  { name: "PM2.5", value: "pm25" },
];

const generateData = (place, pollutant) => {
  console.log(`Generating data for ${pollutant} in ${place}`);
};

const DropdownMenu = ({ label, options, onSelect }) => {
  const [selectedOption, setSelectedOption] = useState(options[0]);

  const handleChange = (e) => {
    const selectedValue = e.target.value;
    const selectedOption = options.find(
      (option) => option.value === selectedValue
    );
    setSelectedOption(selectedOption);
    onSelect(selectedOption);
  };

  return (
    <div>
      <label className="dropdown-label">{label}</label>
      <select
        className="dropdown"
        value={selectedOption.value}
        onChange={handleChange}
      >
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.name}
          </option>
        ))}
      </select>
    </div>
  );
};

const PollutantGenerator = ({ onButtonClick, onTogglePollutantModel }) => {
  const [selectedPlace, setSelectedPlace] = useState(places[0]);
  const [selectedPollutant, setSelectedPollutant] = useState(pollutants[0]);

  const handleGenerateData = () => {
    generateData(selectedPlace.name, selectedPollutant.name);
    onButtonClick(selectedPlace.value, selectedPollutant.value); // Pass the selected place and pollutant values to the parent component
  };

  return (
    <div className="main-container">
      <div className="container">
        <DropdownMenu
          className="dropdown-button"
          label="Place:"
          options={places}
          onSelect={setSelectedPlace}
        />
        <DropdownMenu
          label="Pollutant:"
          options={pollutants}
          onSelect={setSelectedPollutant}
        />
        <button
          className="toggle-pollutant-model-button"
          buttonStyle="btn--outline"
          buttonSize="btn--large"
          onClick={onTogglePollutantModel}
        >
          Toggle Pollutant
        </button>
      </div>
      <div className="container">
        <button
          className="generate-button"
          buttonStyle="btn--outline"
          buttonSize="btn--large"
          onClick={handleGenerateData}
        >
          Generate
        </button>
        
      </div>
    </div>
  );
};

export default PollutantGenerator;
