<script>
// import dello state management 
import { store } from '../store'

export default {
    name:"AppFilm",
    data(){
        store
    }
}
</script>


<template>
    <div class="card">
        <h2>{{movie.title}}</h2>
        <h2>movie.original_title </h2>
        <h5>movie.original_language </h5>
        <h4>movie.vote_average </h4>
    </div>
</template>

<style lang="scss" scoped>
.card{
    width: calc(100% / 3);
    min-height: 100px;
    color: black;
    text-align: start;
    // debug
    background-color: white;
    border: 2px black solid;
}

</style>