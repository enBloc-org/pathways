import RecentSearches from "./RecentSearch";

export default {
  title: 'RecentSearches',
  component: RecentSearches,
  args :{ recentSearches : [{name: 'first search', category : 'Today'}, {name: 'second search' ,  category : 'Past' }, {name: 'third search' ,  category : 'Past' }]},
};
export const DefaultRecentSearches = {}
