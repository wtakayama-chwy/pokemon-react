const urlBase = 'https://pokeapi.co/api/v2';

const consumeApi = (param = '', method = 'GET', body) => {
    return fetch(`${urlBase}/${param}`,{
        method,
        headers: {
            'content-type': 'application/json',
        },
        body
    })
    .then(res => ApiService.HandleError(res))
    .then(res => res.json());
}

const ApiService = {

    ListPokemons: (id) => consumeApi(`pokemon/${id}`),

    ListDetails: (ability) => consumeApi(`ability/${ability}`),

    HandleError: res => {
        if(!res.ok){
            throw new Error(res.responseText)
        }
        return res
    }
}

export default ApiService;