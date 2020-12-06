<template>
    <div>
        <h3 v-on:click="showMoons = !showMoons">Moons:</h3>
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
    }
}
</script>

<style>

</style>