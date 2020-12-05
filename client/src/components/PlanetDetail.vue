<template>
    <div id="selected-planet" v-if="planet">
        <h2> {{planet.englishName}} </h2>
        <moon-list v-if="getMoons.length" :getMoons="getMoons"></moon-list>
        <!-- <div v-if="planet.moons">
            <p v-for="(moon, index) in moons" :key="index"> {{moon.rel}} </p>
        </div> -->
    </div>
</template>

<script>
import MoonList from './MoonList.vue'

export default {
    name: 'planet-detail',
    props: ['planet', 'getMoons'],
    components: {
        'moon-list': MoonList
    }

}
</script>

<style>

</style>