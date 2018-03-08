import React from 'react';

const SkillCategory = ({ name, list }) => (
  <div style={{ marginBottom: '1rem' }}>
    <span style={{ fontWeight: '600' }}>{name}</span>
    <span style={{ fontWeight: '200' }}>
      {list.map((skill, i) => ` ${skill}${i < list.length - 1 ? ',' : ''}`)}
    </span>
  </div>
);
const Skills = ({ skills }) => {
  const categorized = skills.reduce((map, { id, type, name }) => {
    if (!map[type]) map[type] = { id, skills: [] };
    map[type].skills = [...map[type].skills, name];
    return map;
  }, {});
  return (
    <div
      style={{
        padding: '0 0 0 1.25em',
        borderLeft: '3px solid #5661B3',
        lineHeight: '1.5',
        width: '650px'
      }}
    >
      {Object.entries(categorized).map(([type, { id, skills }]) => (
        <SkillCategory key={id} name={type} list={skills} />
      ))}
    </div>
  );
};

export default Skills;
