const selectors = {
    getSearchTypeName: state => state.searchTypeState.checkedName,
    getSearchTypeSkills: state => state.searchTypeState.checkedSkills,
    getInput: state => state.inputState.inputValue,
    getPokemon: state => state.pokemonState.pokemon,
    getLoading: state => state.pokemonState.loading,
    getFetched: state => state.pokemonState.fetched
}

export { selectors }