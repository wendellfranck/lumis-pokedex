import { fetchPokemons } from './api.js';

let searchRequestId = 0;

const TYPE_COLORS = {
    grass: '#22c55e',
    fire: '#ef4444',
    water: '#3b82f6',
    electric: '#facc15',
    poison: '#a855f7',
    bug: '#84cc16',
    flying: '#60a5fa',
    normal: '#9ca3af',
    ground: '#d97706',
    fairy: '#f472b6',
    psychic: '#ec4899',
    fighting: '#b91c1c',
    rock: '#78716c',
    ghost: '#6366f1',
    ice: '#67e8f9',
    dragon: '#7c3aed',
    steel: '#94a3b8',
    dark: '#374151'
};

const state = {
    pokemons: [],
    page: 1,
    limit: 18,
    search: ''
}

function renderPokemons() {
    const container = document.getElementById('pokemon-list');
    container.innerHTML = '';

    const filteredPokemons = state.pokemons.filter(p =>
        p.name.includes(state.search)
    );

    filteredPokemons.forEach(pokemon => {
        const primaryType = pokemon.types[0].type.name;
        const card = document.createElement('div');

        card.className = 'pokemon-card';
        card.innerHTML = `
            <div class="card-header">
                <span  class="type" style="color: ${TYPE_COLORS[primaryType] || '#22c55e'}">
                ${primaryType}
                </span>
                <span class="number">#${pokemon.id.toString().padStart(3, '0')}</span>   
            </div> 
            <img src="${pokemon.sprites.front_default}" alt="${pokemon.name}" class="pokemon-img" />
            <h3 class="pokemon-name">${pokemon.name}</h3>
        `;

        container.appendChild(card);
    });
}

function nextPage() {
    state.page++;
    init();
}

function prevPage() {
    if (state.page > 1) {
        state.page--;
        init();
    }
}

function updatePagination() {
    const container = document.getElementById('page-numbers');
    const prevBtn = document.getElementById('prev');

    container.innerHTML = '';

    const startPage = Math.max(1, state.page - 1);
    const endPage = startPage + 2;

    for (let i = startPage; i <= endPage; i++) {
        const pageBtn = document.createElement('span');
        pageBtn.className = 'page-number';
        pageBtn.textContent = i;

        if (i === state.page) {
        pageBtn.classList.add('active');
        }

        pageBtn.addEventListener('click', () => {
        state.page = i;
        init();
        });

        container.appendChild(pageBtn);
    }

    prevBtn.disabled = state.page === 1;
}


function setupSearch() {
    const searchInput = document.getElementById('search');

    searchInput.addEventListener('input', async (e) => {
        const value = e.target.value.toLowerCase();
        state.search = value;

        const currentRequestId = ++searchRequestId;

        if (value === '') {
            init();
            return;
        }

        try {
            const response = await fetch(
                `https://pokeapi.co/api/v2/pokemon/${value}`
            );

            if (currentRequestId !== searchRequestId) return;

            if (!response.ok) {
                state.pokemons = [];
            } else {
                const pokemon = await response.json();
                state.pokemons = [pokemon];
            }

            renderPokemons();
        } catch (error) {
            if (currentRequestId !== searchRequestId) return;

            state.pokemons = [];
            renderPokemons();
        }
    });
}



async function init() {
    state.pokemons = await fetchPokemons(state.page, state.limit);
    renderPokemons();
    updatePagination();
}

document.getElementById('next').addEventListener('click', nextPage);
document.getElementById('prev').addEventListener('click', prevPage);

setupSearch();
init();
