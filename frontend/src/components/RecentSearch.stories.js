import SavedSearches from "./SavedSearch"
export default {
  title: 'SavedSearches',
  component: SavedSearches,
  args :{ recentSearches : [{name: 'first search', url: '/search?query=developer', category : 'Today'}, {name: 'second search', url: '/search?query=finance',  category : 'Past' }, {name: 'third search', url: '/search?query=carer',  category : 'Past' }]}
}
export const DefaultRecentSearches = {}
