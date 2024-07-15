<script>

export default {
    name:"AppFilm",
    props:{
        info: {
            type: Object,
        }
    },
    data() {
        return {
            languageFlag:[
                "https://upload.wikimedia.org/wikipedia/en/9/9a/Flag_of_Spain.svg",

                "https://cdn.britannica.com/44/344-050-94536674/Flag-England.jpg",

                "https://uxwing.com/wp-content/themes/uxwing/download/flags-landmarks/italy-flag-icon.png",

                "https://upload.wikimedia.org/wikipedia/en/thumb/c/c3/Flag_of_France.svg/255px-Flag_of_France.svg.png",

                "https://upload.wikimedia.org/wikipedia/en/thumb/b/ba/Flag_of_Germany.svg/1280px-Flag_of_Germany.svg.png",

                "https://upload.wikimedia.org/wikipedia/commons/9/9e/Flag_of_Japan.svg"
            ]
        }
    },
}
</script>


<template>
    <div class="card">
        <h2>{{info.details.title}}</h2>
        <h2>{{info.details.original_title}} </h2>
        <img v-if="info.details.original_language === 'es'" :src="languageFlag[0]"  alt="spain flag">
        <img v-else="info.details.original_language === 'en'" :src="languageFlag[1]" alt="englad flag">
        <img v-else="info.details.original_language === 'it'" :src="languageFlag[2]" alt="englad flag">
        <h4>{{info.details.vote_average}} </h4>
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

.card img {
    width: 10%;
}

</style>