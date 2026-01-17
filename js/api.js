export async function fetchPokemons(page, limit) {
  try{
    const offset = (page - 1) * limit;
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`);

    if(!response.ok){
        throw new Error('Erro ao buscar Pokémons');
    }

    const data = await response.json();

    return Promise.all(
        data.results.map(pokemon =>
            fetch(pokemon.url).then(res => res.json())
        )
    );
  } catch (error) {
    console.error('Error fetching pokemons:', error);
    return [];
  }
}
