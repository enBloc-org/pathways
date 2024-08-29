export default function retrieveLocalStorage(searchParams) {
  const currentUrl = window.location.href
  const currentQuery = searchParams.get("query")

  if (
    currentQuery === null ||
    !/(query=)||(filters=)/i.test(currentUrl)
  )
    return null

  return {
    name: currentQuery,
    url: currentUrl,
  }
}
