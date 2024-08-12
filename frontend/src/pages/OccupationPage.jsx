import TLevelContainer from "../components/TLevelContaier"
import "../style/globals.css"
import "../style/OccupationPage.css"

export default function OccupationPage() {
  const occupationSummary = occupationData.summary.replace(
    /<\/?p>/g,
    ""
  )
  return (
    <main className="occupation-page__main">
      <div className="flex-col occupation-header">
        <h1>{occupationData.name}</h1>
        <h2>
          Level {occupationData.level} -{" "}
          <i>{occupationData.mapHierarchy.technicalLevelName}</i>
        </h2>
        <p className="route-name">
          {occupationData.mapHierarchy.routeName}
        </p>
      </div>
      <div className="flex-col occupation-page__banner">
        <h3>Overview:</h3>
        <p>{occupationData.overview}</p>
      </div>
      <section className="occupation-page__section">
        <h3>In Depth</h3>
        <div />
        <p className="occupation-page__summary">
          {occupationSummary}
        </p>
      </section>
      <TLevelContainer products={occupationData.products} />
      <div className="pathway-name">
        <p>
          <strong>Pathway name: </strong>
          <span>{occupationData.mapHierarchy.pathwayName}</span>
        </p>
      </div>
    </main>
  )
}

const occupationData = {
  object: "Occupation",
  stdCode: "OCC0182",
  name: "Mortgage advisor",
  status: 1,
  statusName: "Approved occupation",
  level: 3,
  versionNo: "1.0",
  summary:
    "<p>The role of a qualified mortgage adviser is to identify and satisfy customer mortgage requirements and associated protection needs, through fully compliant regulated meetings. These meetings can take place in a variety of environments, depending on the type of employer including face to face (either in business premises or in a customer’s home) or over the telephone. In addition to giving advice on appropriate mortgage products, the mortgage adviser also advises on related protection products including life assurance, critical illness, accident, sickness and unemployment, income protection and buildings and contents insurance. This apprenticeship offers an ideal entry point for a career in the mortgage advice sector or for potential progression into other Financial Services roles and can attract candidates from various backgrounds with differing skills and experience.</p>",
  overview:
    "Giving clients advice on appropriate mortgages and related protection products such as life insurance or sickness and unemployment insurance.",
  mapHierarchy: {
    routeId: 11,
    routeName: "Legal, finance and accounting",
    routeSequence: 11,
    pathwayId: 63,
    pathwayName: "Financial",
    clusterGroupId: 62,
    clusterId: 242,
    clusterName: "Financial services customer advisor",
    technicalLevel: 1,
    technicalLevelName: "Technical",
    pathwaySequence: 1,
    clusterGroupSequence: 2,
    clusterSeqeunce: 0,
  },
  products: [
    {
      object: "Product",
      name: "Mortgage adviser",
      level: 3,
      status: 1,
      statusName: "Approved for delivery",
      type: 1,
      typeName: "Apprenticeship",
      careerStarter: false,
      productCode: "ST0182",
      royal: false,
    },
    {
      object: "Product",
      name: "Finance - Retail and commercial banking analyst",
      level: 3,
      type: 3,
      typeName: "TLevel",
      careerStarter: false,
      productCode: "TL0010a",
    },
  ],
}
