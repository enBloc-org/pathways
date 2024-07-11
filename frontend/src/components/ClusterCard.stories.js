import ClusterCard from './ClusterCard';


const mockedCluster =   {
    object: "Cluster",
    id: 96,
    name: "Human resources administrator",
    description: "Provision of largely transactional human resource services e.g. recruitment, HR administration, rewards and recognition, training and development, etc",
    technicalLevel: 1,
    technicalLevelName: "Technical",
    occupations: [
      {
        object: "Occupation",
        stdCode: "OCC0239",
        name: "HR support",
        status: 1,
        statusName: "Approved occupation",
        level: 3,
        versionNo: "1.1",
        statusLastUpdated: "2017-08-25"
      },
      {
        object: "Occupation",
        stdCode: "OCC0562",
        name: "Learning and development practitioner",
        status: 1,
        statusName: "Approved occupation",
        level: 3,
        versionNo: "1.0",
        statusLastUpdated: "2018-08-08"
      },
      {
        object: "Occupation",
        stdCode: "OCC0320",
        name: "Recruitment consultant",
        status: 1,
        statusName: "Approved occupation",
        level: 3,
        versionNo: "1.0",
        statusLastUpdated: "2017-12-20"
      },
      {
        object: "Occupation",
        stdCode: "OCC0321",
        name: "Recruitment resourcer",
        status: 1,
        statusName: "Approved occupation",
        level: 2,
        versionNo: "1.0",
        statusLastUpdated: "2017-12-20"
      }
    ],
    "sequence": 0
}

export default {
    title: "ClusterCard",
    component: ClusterCard,
    args:  {
        name: mockedCluster.name,
        description: mockedCluster.description,
        technicalLevelName: mockedCluster.technicalLevelName
    }
}
export const ClusterCardDefault = {
    args: { name: mockedCluster.name,
        description: mockedCluster.description,
        technicalLevelName: mockedCluster.technicalLevelName
    },
}

