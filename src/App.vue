<script>
// import di axios 
import axios from 'axios';
// import dello state management 
import { store } from './store';
// import dei componenti 
import AppHeader from './components/AppHeader.vue';
import AppMain from './components/AppMain.vue';


export default{
    name:"App",
    components: {
        AppHeader,
        AppMain
    },
    data() {
        return{
            store,
        }
    },

    methods: {

        // metodo che fa la chiamata ad axios 
        getFilm(){

            let endPoint = store.apiUrl;

            if(store.inputFilm !== ''){
                endPoint += `&query=${store.inputFilm}`

            axios.
            get(endPoint)
                .then(res => {
                    console.log(res.data);
                    // con il seguente codice diciamo di salvare la risposta di axios in store.movieFound 
                    store.moviesFound = res.data.result;
                })
            // Usiamo catch per farci segnalare l'errore dell'API 
                .catch(err =>{
                    console.log(err);
                })
            }
        },
    },
created() {
        this.getFilm();
    }
}

</script>

<template>

<AppHeader @search="getFilm"/>
<AppMain />

</template>

<style lang="scss">
@use './styles/general.scss' as * ;

</style>
