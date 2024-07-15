<script>

import { store } from '../store';
import AppFilm from './AppFilm.vue';


export default {
    name:"AppMain",
    components:{
        AppFilm,
    },
    data() {
        return {
            store
        }
    },
    computed: {
        hasFilm(){
            return this.store.moviesFound.lenght > 0;
        }
    }
}

</script>


<template>
    <!-- container principale  -->
    <div class="container">
        <!-- container per accentrare i contenuti  -->
        <div v-for="movie in store.moviesFound" :key="movie.id" class="containeraccentratore">
            <AppFilm :info="{ type: 'movie' , details: movie}" />
        </div>
    </div>
</template>


<style lang="scss" scoped>
.container{
    width: 1000px;
    min-height: 400px;
    background-color: lightslategrey;
}

.containeraccentratore{
    width: 800px;
    margin: 0 auto;
    min-height: 750px;
    display: flex;
    flex-wrap: wrap;
    // debug
    background-color: brown;
}

</style>
