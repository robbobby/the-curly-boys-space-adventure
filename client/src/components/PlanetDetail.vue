<template>
    <div id="selected-planet" v-if="planet">
        <h2>Planet {{planet.englishName}} </h2>
        <p>Avrage Distance from Sun: {{planet.semimajorAxis}} km </p>
        <p>Time to Orbit Sun (a year): {{planet.sideralOrbit}} days </p>
        <p>Time to Spin on Axis (a day): {{planet.sideralRotation}} hours </p>
        <p>Avrage Radius: {{planet.meanRadius}} km </p>
        <p>Density: {{planet.density}} g/cm³ </p>
        <p>Gravity: {{planet.gravity}} m/s² </p>
        <p>Escape Velocity: {{(planet.escape)/1000}} km/s </p>
        <moon-list v-if="getMoons" :getMoons="getMoons"></moon-list>
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