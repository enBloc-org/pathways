import TextSearch from "./TextSearch"
import {fn} from '@storybook/test'

export default {
    title: "Text Search",
    component: TextSearch,
}

export const DefaultTextSearch = {
  args:{
    searchHandler: fn()
  }
}
