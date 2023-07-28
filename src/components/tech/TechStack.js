import React from 'react';

const TechStack = ({ programmingLanguages, tools, frameworks, platforms }) => {
  return (
    <div>
      <h2>Programming Languages</h2>
      <div style={{ display: 'flex', justifyContent: 'left' }}>
        {programmingLanguages.map((language, index) => (
          <div key={index} style={{ textAlign: 'center', margin: '0 10px' }}>
            <img src={language.icon} alt={language.name} style={{ width: '100px', height: '100px', objectFit: 'cover' }} />
            <p>{language.name}</p>
          </div>
        ))}
      </div>

      <h2>Tools</h2>
      <div style={{ display: 'flex', justifyContent: 'left' }}>
        {tools.map((tool, index) => (
          <div key={index} style={{ textAlign: 'center', margin: '0 10px' }}>
            <img src={tool.icon} alt={tool.name} style={{ width: '100px', height: '100px', objectFit: 'cover' }} />
            <p>{tool.name}</p>
          </div>
        ))}
      </div>

      <h2>Frameworks</h2>
      <div style={{ display: 'flex', justifyContent: 'left' }}>
        {frameworks.map((framework, index) => (
          <div key={index} style={{ textAlign: 'center', margin: '0 10px' }}>
            <img src={framework.icon} alt={framework.name} style={{ width: '100px', height: '100px', objectFit: 'cover' }} />
            <p>{framework.name}</p>
          </div>
        ))}
      </div>

      <h2>Platforms</h2>
      <div style={{ display: 'flex', justifyContent: 'left' }}>
        {platforms.map((platform, index) => (
          <div key={index} style={{ textAlign: 'center', margin: '0 10px' }}>
            <img src={platform.icon} alt={platform.name} style={{ width: '100px', height: '100px', objectFit: 'cover' }} />
            <p>{platform.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TechStack;
