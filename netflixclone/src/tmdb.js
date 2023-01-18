const API_KEY = 'f2385edd985292182379054a89df5e7a';
const API_BASE ='https://api.themoviedb.org/3';

/*
originais netflix, recomendados, em alta, acao, 
comedia, terror, romance, documentario
*/

const basicFetch = async (endpoint) => {
    const req = await fetch(`${API_BASE}${endpoint}`);
    const json = await req.json();
    return json; 
}


// eslint-disable-next-line import/no-anonymous-default-export
export default {
    getHomeList: async () => {
        return [
            {
                slug: 'originals',
                title: 'Originais da Netflix',
                items: await basicFetch(`/discover/tv?with_network=213language=pt-BR&api_key=${API_KEY}`)


            },
            {
                slug: 'trending',
                title: 'Recomendados para Você',
                items:  await basicFetch(`/trending/all/week?language=pt-BR&api_key=${API_KEY}`)

            },
            {
                slug: 'toprated',
                title: 'em Alta',
                items:  await basicFetch(`/movie/top_rated?language=pt-BR&api_key=${API_KEY}`)

            },
            {
                slug: 'action',
                title: 'Ação',
                items:  await basicFetch(`/discover/movie?with_genres=28&language=pt-BR&api_key=${API_KEY}`)

            },
            {
                slug: 'comedy',
                title: 'Comendia',
                items: await basicFetch(`/discover/movie?with_genres=35&language=pt-BR&api_key=${API_KEY}`)
            },
            {
                slug: 'horror',
                title: 'terror',
                items: await basicFetch(`/discover/movie?with_genres=27&language=pt-BR&api_key=${API_KEY}`)
            },
            {
                slug: 'romance',
                title: 'romance',
                items: await basicFetch(`/discover/movie?with_genres=10749&language=pt-BR&api_key=${API_KEY}`)
            },
            {
                slug: 'documentary',
                title: 'documentario',
                items: await basicFetch(`/discover/movie?with_genres=99&language=pt-BR&api_key=${API_KEY}`)
            },
        ];
    }
}