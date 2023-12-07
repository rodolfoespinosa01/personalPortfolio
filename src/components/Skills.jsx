import React from 'react';

import { skillsData } from '../assets/js/data';

const Skills = () => {
  const itemsPerRow = 3;

  return (
    <div className="text-gray-300 flex flex-col p-5">
      {Array.from({ length: Math.ceil(skillsData.length / itemsPerRow) }).map((_, rowIndex) => (
        <div key={rowIndex} className="flex flex-row justify-between p-10">
          {skillsData.slice(rowIndex * itemsPerRow, (rowIndex + 1) * itemsPerRow).map((skill, index) => (
            <div key={index}>
              <img className="w-24" src={skill.imgSrc} alt={skill.alt} />
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default Skills;
