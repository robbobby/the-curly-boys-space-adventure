<template>
    <div id="selected-planet" v-if="planet">
        <h2>Planet {{planet.englishName}} </h2>
        <p v-on:click="convertDistance = !convertDistance" v-show="convertDistance">Avrage Distance from Sun: {{planet.semimajorAxis}} km</p>
        <p v-on:click="convertDistance = !convertDistance" v-show="!convertDistance">Avrage Distance from Sun: {{milesConvertor(planet.semimajorAxis)}} miles </p>
        <p>Time to Orbit Sun (a year): {{planet.sideralOrbit}} days </p>
        <p>Time to Spin on Axis (a day): {{planet.sideralRotation}} hours </p>
        <p v-on:click="convertDistance = !convertDistance" v-show="convertDistance">Avrage Radius: {{planet.meanRadius}} km </p>
        <p v-on:click="convertDistance = !convertDistance" v-show="!convertDistance">Avrage Radius: {{milesConvertor(planet.meanRadius)}} miles </p>
        <p>Density: {{planet.density}} g/cm³ </p>
        <p>Gravity: {{planet.gravity}} m/s² </p>
        <p v-on:click="convertDistance = !convertDistance" v-show="convertDistance">Escape Velocity: {{(planet.escape)/1000}} km/s </p>
        <p v-on:click="convertDistance = !convertDistance" v-show="!convertDistance">Escape Velocity: {{milesConvertor(planet.escape)/1000}} mi/s </p>
        <moon-list v-if="getMoons" :getMoons="getMoons"></moon-list>
    </div>
</template>

<script>
import MoonList from './MoonList.vue'

export default {
    name: 'planet-detail',
    props: ['planet', 'getMoons'],
    data() {
        return {
            convertDistance: true
        }
    },
    components: {
        'moon-list': MoonList
    },
    methods: {
        milesConvertor: function(number){
            return Math.round(number/ 1.609)
        }
    }

}
</script>

<style>

</style>