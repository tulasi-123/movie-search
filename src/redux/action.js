export const filteredMovies = (data) => {
    console.log('action', data);
    return { type: 'FILTERED_MOVIES', data }
}