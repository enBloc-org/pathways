import React from 'react';
import OccupationDetails from './OccupationDetails';

const mockedOccupation = {
  object: "Occupation",
  stdCode: "OCC0118",
  name: "Data analyst",
  status: 1,
  statusName: "Approved occupation",
  level: 4,
  versionNo: "1.1",
  summary:
    "<p>This occupation is found in any employer in any sector that uses data to make business decisions. Data analysts may work in various departments within a single employer, (for example finance, sales, HR, manufacturing, or marketing), and in any employment sector, public or private, including retail, distribution, defence, banking, logistics, media, local government etc.</p>\n<p>The broad purpose of the occupation is to ascertain how data can be used in order to answer questions and solve problems. Data analysis is a process of requirement-gathering, inspecting, cleansing, transforming and modelling data with the goal of discovering useful information, informing conclusions and supporting decision-making. Data analysis has multiple facets and approaches, encompassing diverse techniques under a variety of names. In today's world, data analysis plays a crucial role in making decisions more evidence-based and helping organisations operate more effectively.</p>\n<p>For example: a data analyst may investigate social media trends and their impact on the organisation. In retail, a data analyst may break down sales figures to make recommendations on product placement and development. In HR a data analyst may investigate staff retention rates, in order to decide on recruitment strategy. In a hospital, a data analyst may investigate wait times for different departments, in order to provide a better service to its patients. </p>\n<p>In their daily work, an employee in this occupation interacts with internal or external clients. Internally, the data analyst may work with many people within their organisation, at different levels. Externally a data analyst may provide data analysis services to other organisations on behalf of their employer. Data analysts would normally be office based and work normal business hours.</p>\n<p>An employee in this occupation will be responsible for the creation and delivery of their own work, to meet business objectives. The data analyst will be responsible for working within the data architecture of the company and ensuring that the data is handled in a compliant, safe and appropriately secure manner, understanding and adhering to company data policy and legislation. Data analysis is a fast-moving and changing environment, and data analysts need to continue to stay abreast of, and engaged with, changes and trends in the wider industry; including data languages, tools and software, and lessons learnt elsewhere.</p>",
  overview:
    "Collect, organise and study data to provide business insight.",
  mapHierarchy: {
    routeId: 7,
    routeName: "Digital",
    routeSequence: 6,
    pathwayId: 58,
    pathwayName: "Digital Business Services",
    clusterGroupId: 36,
    clusterId: 189,
    clusterName: "Data analyst advanced technician",
    technicalLevel: 2,
    technicalLevelName: "Higher Technical",
    pathwaySequence: 2,
    clusterGroupSequence: 1,
    clusterSeqeunce: 1,
  },
  statusLastUpdated: "2016-03-23",
};

export default {
  title: 'OccupationDetails',
  component: OccupationDetails,
};

const Template = (args) => <OccupationDetails {...args} />;

export const Default = Template.bind({});
Default.args = {
  name: mockedOccupation.name,
  level: mockedOccupation.level,
  overview: mockedOccupation.overview,
  technicalLevelName: mockedOccupation.mapHierarchy.technicalLevelName,
  additionalDetails: mockedOccupation.summary,
  routeName: mockedOccupation.mapHierarchy.routeName,
  pathwayName: mockedOccupation.mapHierarchy.pathwayName
};
