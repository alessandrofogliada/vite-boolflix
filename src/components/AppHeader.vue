<script>

export default {
    name:'AppHeader',
}
</script>


<template>

    <div class="intestazione">

        <!-- Titolo  -->
        <h1>Boolflix</h1>

        <!-- Barra e tasto di ricerca  -->
        <div class="barradiricerca">
            <input v-model="inputFilm" type="text" placeholder="Search Film">
            <button @click="richiestaUtente">Search</button>
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
}

.barradiricerca{
    display: flex;
    align-items: center;
}


</style>