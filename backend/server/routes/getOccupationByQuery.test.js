import assert from "assert"
import getOccupationByQuery from "./getOccupationByQuery.js"

async function getOccupationByQueryTest(value) {
  process.env.BASE_URL =
    "https://occupational-maps-api.instituteforapprenticeships.org/api/v1"
  process.env.API_KEY = "ADC7D7B1D29F4DF3974FCA5656071938"

  const result = await getOccupationByQuery(value)
  result.forEach(object => {
    assert.strictEqual(
      object.level,
      3,
      `Expected level to be '3' but got ${object.level}`
    )
  })

  result.forEach(object => {
    assert.notEqual(object.products.length, 0)
  })
}

const jobTitles = [
  "Junior Marketing Coordinator",
  "Customer Service Representative",
  "Administrative Assistant",
  "Sales Associate",
  "Content Writer",
  "Data Entry Clerk",
  "Social Media Assistant",
  "Junior Software Developer",
  "Graphic Design Intern",
  "Research Assistant",
  "Project Coordinator",
  "Human Resources Assistant",
  "Accountant Trainee",
  "Business Analyst Intern",
  "Technical Support Specialist",
  "Operations Assistant",
  "Public Relations Assistant",
  "Marketing Analyst",
  "Junior Financial Analyst",
  "Product Management Intern",
  "IT Support Specialist",
  "Recruitment Coordinator",
  "Event Coordinator",
  "Customer Success Associate",
  "Quality Assurance Assistant",
  "Junior Data Analyst",
  "Help Desk Technician",
  "Office Administrator",
  "Legal Assistant",
  "Logistics Coordinator",
  "Digital Marketing Assistant",
  "HR Coordinator",
  "Executive Assistant",
  "Warehouse Associate",
  "SEO Specialist",
  "Sales Development Representative",
  "Web Developer Intern",
  "Supply Chain Analyst",
  "Customer Experience Specialist",
  "Accounts Payable Clerk",
  "Medical Billing Specialist",
  "Marketing Coordinator",
  "Training Coordinator",
  "Copywriter",
  "Inside Sales Representative",
  "Accounting Assistant",
  "Junior Systems Administrator",
  "Junior Consultant",
  "Healthcare Assistant",
  "Payroll Clerk",
  "Client Services Coordinator",
  "Technical Writer",
  "Field Service Technician",
  "Brand Ambassador",
  "Library Assistant",
  "Product Support Specialist",
  "Procurement Assistant",
  "Communications Assistant",
  "Billing Coordinator",
  "Market Research Analyst",
  "Customer Onboarding Specialist",
  "Junior Project Manager",
  "Administrative Coordinator",
  "Network Support Technician",
  "Technical Recruiter",
  "Retail Associate",
  "Quality Control Inspector",
  "Claims Processor",
  "Customer Account Manager",
  "Mortgage Loan Processor",
  "Insurance Claims Assistant",
  "Supply Chain Coordinator",
  "E-commerce Specialist",
  "Inventory Coordinator",
  "Junior Graphic Designer",
  "Content Marketing Specialist",
  "Social Media Coordinator",
  "Business Development Representative",
  "Sales Support Specialist",
  "Environmental Technician",
  "Clinical Research Coordinator",
  "Medical Records Technician",
  "Junior Civil Engineer",
  "Event Marketing Coordinator",
  "Operations Coordinator",
  "IT Help Desk Analyst",
  "Construction Estimator",
  "Telecommunications Technician",
  "Compliance Coordinator",
  "Warehouse Supervisor",
  "Marketing Assistant",
  "Real Estate Assistant",
  "Security Analyst",
  "Pharmacy Technician",
  "Junior Network Engineer",
  "Legal Secretary",
  "Healthcare Administrator",
  "Credit Analyst",
  "Junior Software Engineer",
  "Accounting Clerk",
  "Event Planner",
  "Administrative Specialist",
  "Receptionist",
]

function testAll() {
  jobTitles.forEach(async value => {
    await getOccupationByQueryTest(value)
      .then(() =>
        console.log("\u001b[32m", `${value} passed all tests`)
      )
      .catch(error =>
        console.error(
          "\u001b[31m",
          `${value} threw this error: ${error.message}`
        )
      )
  })
}
testAll()
