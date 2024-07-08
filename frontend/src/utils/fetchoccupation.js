/**
 * Fetch occupations based on a search parameter.
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
        // Mock data to simulate fetching occupations
        const mockData = [
            { id: 1, title: 'Software Engineer', description: 'Develops software solutions.' },
            { id: 2, title: 'Civil Engineer', description: 'Designs and oversees construction projects.' },
            { id: 3, title: 'Mechanical Engineer', description: 'Designs mechanical systems and devices.' }
        ];

        // Simulate a delay as if fetching from a server
        await new Promise(resolve => setTimeout(resolve, 1000));

        // Filter mock data based on the search term
        const filteredData = mockData.filter(occupation =>
            occupation.title.toLowerCase().includes(searchTerm.toLowerCase())
        );

        return filteredData;
    } catch (error) {
        console.error(`Error fetching occupations: ${error}`);
        throw error;
    }
}
