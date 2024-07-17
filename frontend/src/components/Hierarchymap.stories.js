import React from 'react';
import HierarchyMap from './Hierarchymap';

export default {
  title: 'Components/HierarchyMap',
  component: HierarchyMap,
};

const exampleOccupation = {
  name: 'Software Developer',
  level: 2,
  mapHierarchy: {
    technicalLevelName: 'Intermediate',
    pathwayName: 'Development',
  },
  overview: 'Develops and maintains software applications.',
  summary: '<p>In-depth details about the role of a software developer...</p>',
};

const Template = (args) => <HierarchyMap {...args} />;

export const Default = Template.bind({});
Default.args = {
  occupation: exampleOccupation,
  routeName: 'Digital',
};
