const selectors = {
    getSearchTypeName: state => state.searchTypeState.checkedName,
    getSearchTypeSkills: state => state.searchTypeState.checkedSkills,
    getInput: state => state.inputState.inputValue,
    getPokemon: state => state.pokemonState.pokemon,
    getAbility: state => state.pokemonState.ability,
    getLoading: state => state.loadingState.loading,
    getMessage: state => state.messageState.message,
    getFetched: state => state.pokemonState.fetched,
    getFetchedSkills: state => state.pokemonState.fetchedSkills
}

export { selectors }