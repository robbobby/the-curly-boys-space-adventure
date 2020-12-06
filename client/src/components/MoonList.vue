<template>
    <div>
        <h3 v-on:click="showMoons = !showMoons">Moons ({{numberOfMoons()}}):</h3>
        <ul v-show="showMoons">
            <li v-for="(moon, index) in getMoons" :key="index">
                <p> {{moon.englishName}} </p>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    name: 'moon-list',
    props: ['getMoons'],
    data(){
        return {
            showMoons: false
        }
    },
    methods: {
        numberOfMoons: function(){
            return Object.keys(this.getMoons).length
        }
    }
}
</script>

<style>

</style>