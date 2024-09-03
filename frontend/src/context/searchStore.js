export default function searchReducer(state, action) {
  switch (action.type) {
    case "SET_SEARCH_STATUS":
      return { ...state, searchStatus: action.payload }
    case "SET_SEARCH_QUERY":
      return { ...state, searchQuery: action.payload }
    default:
      return state
  }
}
