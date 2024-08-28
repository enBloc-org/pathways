import RecentSearches from "./RecentSearch"
export default {
  title: 'RecentSearches',
  component: RecentSearches,
  args :{ recentSearches : [{name: 'first search', url: '/search?query=developer', category : 'Today'}, {name: 'second search', url: '/search?query=finance',  category : 'Past' }, {name: 'third search', url: '/search?query=carer',  category : 'Past' }]}
}
export const DefaultRecentSearches = {}
