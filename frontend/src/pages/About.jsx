import youngProfessionals from "../images/young-professionals.jpg"
import "../style/About.css"

export default function About() {
  return (
    <main className="about-page-container">
      <img
        className="about-page__image about-page-container__element"
        src={youngProfessionals}
        alt="Young professionals"
      />
      <div className="about-page-container__element">
        <p>
          Apprenticeships, T Levels and other technical qualifications
          draw their content from occupational standards set out by
          employers. Training is structured around occupations so that
          individuals can develop the knowledge, skills and behaviour
          they need to do well in those roles.
        </p>
        <p>
          In many cases these occupations are found across multiple
          sectors in the labour market. For example, software
          engineers work for banks as part of the finance sector, and
          there are finance roles such as payroll and accounts
          assistants working in the health or retail sectors.
        </p>
        <p>
          Thus individual T Levels feed into multiple sectors – there
          are a range of possibilities for students to progress into,
          and pathways for students to progress into, and pathways for
          employers to recruit from.
        </p>
        <p>
          This tool enables users - including employers and local
          stakeholders, such as local authorities - to visualise the
          occupations that make up the sectors they operate in,
          identify the technical education pathways and specific T
          Levels that feed into these sectors.
        </p>
        <p>
          Employers can input the occupations they have in their
          business and see the T Level pathways that link to these
          roles. This will help employers determine where they can
          start building their workforce pipelines, for example by
          beginning to host T Level industry placements in these
          pathways.
        </p>
      </div>
    </main>
  )
}
