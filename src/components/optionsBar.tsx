import React, { useState } from 'react';
import Cardiovascular from '../views/Cardiovascular';
import Temperature from '../views/Temperature';
import Respiratory from '../views/Respiratory';
import Activity from '../views/Activity';
import DefaultView from '../views/DefaultView';

const OptionsBar: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const options = ['Default', 'Cardiovascular', 'Temperature', 'Respiratory', 'Activity'];

  const renderView = () => {
    switch (activeIndex) {
      case 0:
        return <DefaultView />;
      case 1:
        return <Cardiovascular />;
      case 2:
        return <Temperature />;
      case 3:
        return <Respiratory />;
      case 4:
        return <Activity />;
      default:
        return <DefaultView />;
    }
  };

  return (
    <div className="navigation-container">
      <div className="navigation-bar">
        {options.map((option, index) => (
          <div
            key={index}
            className={`nav-item ${activeIndex === index ? 'active' : ''}`}
            onClick={() => setActiveIndex(index)}
          >
            {option}
          </div>
        ))}
      </div>
      <div className="view-container">
        {renderView()}
      </div>
    </div>
  );
};

export default OptionsBar;
