/**
 * Fetch occupations from the server based on a search parameter.
 * @async This function must be awaited.
 * @param {string} searchTerm The term to search for occupations.
 * @returns {Promise<Array>} Returns an array of occupation objects.
 * @throws {Error} Throws an error object if the fetch is unsuccessful.
 * @example
 * try {
 *   const occupations = await fetchOccupation('engineer');
 *   console.log('Fetched occupations:', occupations);
 * } catch (error){
 *   console.error('Failed to fetch occupations:', error);
 * }
 */
export default async function fetchOccupation(searchTerm) {
    try {
        const response = await fetch(`http://localhost:6006/searchOccupations?search=${encodeURIComponent(searchTerm)}`);
        if (!response.ok) {
            throw new Error(`Failed to fetch occupations: ${response.statusText}`);
        }
        const data = await response.json();
        return data;
    } catch (error) {
        console.error(`Error fetching occupations: ${error}`);
        throw error;
    }
}