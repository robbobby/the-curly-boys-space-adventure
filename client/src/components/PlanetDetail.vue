<template>
    <div id="selected-planet" v-if="planet">
        <h2>Planet: {{planet.englishName}} </h2>
        <img v-bind:src="require(`../assets/images/${planet.englishName}.png`)" title="picture" alt="picture of chosen planet" height="300px" />
        <p v-on:click="convertDistance = !convertDistance" v-show="convertDistance">Average Distance from Sun: {{planet.semimajorAxis}} km</p>
        <p v-on:click="convertDistance = !convertDistance" v-show="!convertDistance">Average Distance from Sun: {{milesConvertor(planet.semimajorAxis)}} miles </p>
        <p>Time to Orbit Sun (a year): {{planet.sideralOrbit}} days </p>
        <p>Time to Spin on Axis (a day): {{planet.sideralRotation}} hours </p>
        <p v-on:click="convertDistance = !convertDistance" v-show="convertDistance">Average Radius: {{planet.meanRadius}} km </p>
        <p v-on:click="convertDistance = !convertDistance" v-show="!convertDistance">Average Radius: {{milesConvertor(planet.meanRadius)}} miles </p>
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
#selected-planet {
    display: flex;
    flex-direction: row;

    background-color: RGBA(255, 105, 180, 0.1);
    padding: 10px;
    box-shadow: 5px 10px white;
    border-radius: 6px;

}




p {
    font-family: 'VT323', monospace;
    font-size: -1;

    padding-left: 20px;
    padding-top: 20px;
    color: white;
}

h2 {
    color: white;
}

h3 {
    color: white;
}



</style>