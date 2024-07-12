<script>
export default {
    name:"AppFilm"
}
</script>


<template>
    <div class="card">
        <h2>Titolo</h2>
        <h2>Titolo Originale</h2>
        <h4>Voto</h4>
        <h5>Overview</h5>
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