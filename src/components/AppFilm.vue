<script>

export default {
    name:"AppFilm",
    props:{
        info: {
            type: Object,
        }
    },
}
</script>


<template>
    <div class="card">
        <h2>{{info.details.title}}</h2>
        <h2>{{info.details.original_title}} </h2>
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