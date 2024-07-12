<script>

import AppFilm from './AppFilm.vue';


export default {
    name:"AppMain",
    components:{
        AppFilm,
    }
}

</script>


<template>
    <!-- container principale  -->
    <div class="container">
        <!-- container per accentrare i contenuti  -->
        <div v-for="film in store.moviesFound" class="containeraccentratore">
            <AppFilm />
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
