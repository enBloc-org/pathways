/**
 *
 * @param {string} input accepts any string value
 * @returns {string} will output the string passed in after clearing away any HTML element tags from it. This function targets and removes any tags, including attribute declarations, from the text provided.
 * @abstract the api we're working with includes in some fields HTML formatting backed directly into the strings returned to the frontend. This HTML includes style attributes that target classes inexistent in our code base. The sanitize function is designed to remove these details and provide only the clean text we need.
 */
export default function sanitize(input) {
  return input.replaceAll(/<(^\/?)(.*?)>/g, "")
}
