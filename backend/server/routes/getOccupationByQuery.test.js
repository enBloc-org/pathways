import assert from "assert"
import getOccupationByQuery from "./getOccupationByQuery.js"

async function getOccupationByQueryTest() {
  const mockResponse = {
    results: [
      {
        id: 1,
        products: [
          { id: "t1", typeName: "TLevel" },
          { id: "t2", typeName: "OtherType" },
        ],
        level: 3,
      },
      {
        id: 2,
        products: [{ id: "t3", typeName: "TLevel" }],
        level: 3,
      },
      {
        id: 1,
        products: [
          { id: "t1", typeName: "DifferentType" },
          { id: "t2", typeName: "OtherType" },
        ],
        level: 3,
      },
      {
        id: 2,
        products: [{ id: "t3", typeName: "TLevel" }],
        level: 4,
      },
      {
        id: 3,
        products: [],
        level: 3,
      },
    ],
  }

  global.fetch = async () => ({
    ok: true,
    json: async () => mockResponse,
  })

  console.groupCollapsed(
    "Result should filter out any objects with levels different from 3"
  )
  const result = await getOccupationByQuery("mock_query")
  result.forEach(object => {
    assert.strictEqual(
      object.level,
      3,
      `Expected level to be '3' but got ${object.level}`
    )
  })
  console.groupEnd()
  console.log("All tests passed")
}

getOccupationByQueryTest()
