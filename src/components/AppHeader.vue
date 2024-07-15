<script>
import { store } from '../store';

export default {
    name:'AppHeader',
    data() {
        return {
            store
        }
    },
}
</script>


<template>

    <div class="intestazione">

        <!-- Titolo  -->
        <h1>Boolflix</h1>

        <!-- Barra e tasto di ricerca  -->
        <div class="barradiricerca">
            <input v-model="store.inputFilm" @keyup.enter="$emit('search')" type="text" placeholder="Search Film">
            <button @click="$emit('search')">Search</button>
        </div>
    </div>

</template>


<style lang="scss" scoped>
.intestazione{
    width: 1000px;
    height: 120px;
    background-color: black;
    display: flex;
    justify-content: space-between;
}
h1{
    color: red;
    padding-top: 25px;
}

.barradiricerca{
    display: flex;
    align-items: center;
}


</style>