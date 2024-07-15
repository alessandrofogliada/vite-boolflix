import { reactive } from "vue";

export const store = reactive({
    // array dove salviamo i film che ci darà come risposta l'API
    moviesFound : [],
    // enpoint da dove partira la richiesta da axios 
    apiUrl:  "https://api.themoviedb.org/3/search/movie?api_key=5b28c1b519239a915e8f8bd1c1614e06&query"
})
