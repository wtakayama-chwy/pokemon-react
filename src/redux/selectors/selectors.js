const selectors = {
    getInput: state => state.inputState.inputValue,
    getPokemon: state => state.pokemonState.pokemon,
    getLoading: state => state.pokemonState.loading,
    getFetched: state => state.pokemonState.fetched
}

export { selectors }