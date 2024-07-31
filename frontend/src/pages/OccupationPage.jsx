import { useParams } from "react-router-dom"

export default function OccupationPage() {
  const { occupation } = useParams()

  return (
    <>
      <h1>Occupation Page</h1>
      <p>{occupation}</p>
    </>
  )
}
