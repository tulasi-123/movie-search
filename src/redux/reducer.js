import MoviesData from '../components/moviesList.json';

const initialState = {
    totalMovies: MoviesData,
    filteredMovies: MoviesData.page.contentitems.content
}

export default function MovieListReducer(state = initialState, action) {
    switch (action.type) {
        case 'FILTERED_MOVIES':
            console.log('reducer', state, action);
            return {
                ...state,
                filteredMovies: action.data
            }
        default:
            return state;
    }
}