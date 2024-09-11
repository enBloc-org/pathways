import { createContext, useContext, useReducer } from "react"

import searchReducer from "./searchStore"

const initialState = {
  searchStatus: "idle",
  searchQuery: "",
  searchResults: [],
}

const searchContext = createContext(initialState)

export default function SearchContextProvider({ children }) {

  const [searchState, dispatch] = useReducer(
    searchReducer,
    initialState
  )

  return (
    <searchContext.Provider value={{ searchState, dispatch }}>
      {children}
    </searchContext.Provider>
  )
}

export function useSearchContext() {
  const context = useContext(searchContext)
  if (!context) {
    throw new Error("Could not initialize context")
  }
  return context
}
