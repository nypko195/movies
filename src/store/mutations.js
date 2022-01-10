export default {
    writeDownNameMovies(state, payload) {
        state.searchInputValue = payload.search;
    },

    updateCardMovies(state, payload) {
        state.cardMovies = payload.movie;
    }
}