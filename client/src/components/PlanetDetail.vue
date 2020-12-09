<template>
    <div id="selected-planet" v-if="planet.isPlanet">
        <div class="planet-container">
            <div>
                <h2>Planet {{planet.englishName}} </h2>
                <spinning-globes :planet="planet"></spinning-globes>
                <!-- <img v-bind:src="require(`../assets/images/${planet.englishName}.png`)" title="picture" alt="picture of chosen planet" height="300px" /> -->
            </div>
            <div id="listed-planet-details">
                <h5>Description:</h5>
                <div v-for="(body, index) in descriptions" :key="index">
                    <p v-if="body.name === planet.englishName"> {{ body.definition }}</p>
                </div>
                <h5>Specification:</h5>
                <p v-on:click="convertDistance = !convertDistance" v-show="convertDistance">Average Distance from Sun: {{planet.semimajorAxis}} km</p>
                <p v-on:click="convertDistance = !convertDistance" v-show="!convertDistance">Average Distance from Sun: {{milesConvertor(planet.semimajorAxis)}} miles </p>
                <p>Time to Orbit Sun (a year): {{planet.sideralOrbit}} days </p>
                <p>Time to Spin on Axis (a day): {{Math.round(planet.sideralRotation)}} hours </p>
                <p v-on:click="convertDistance = !convertDistance" v-show="convertDistance">Average Radius: {{Math.round(planet.meanRadius)}} km </p>
                <p v-on:click="convertDistance = !convertDistance" v-show="!convertDistance">Average Radius: {{milesConvertor(planet.meanRadius)}} miles </p>
                <p>Gravity: {{planet.gravity}} m/s² </p>
                <p>Density: {{planet.density}} g/cm³ </p>
                <p v-on:click="convertDistance = !convertDistance" v-show="convertDistance">Escape Velocity: {{(planet.escape)/1000}} km/s </p>
                <p v-on:click="convertDistance = !convertDistance" v-show="!convertDistance">Escape Velocity: {{milesConvertor(planet.escape)/1000}} mi/s </p>
            </div>
        </div>
        
        <moon-list v-if="getMoons" :getMoons="getMoons"></moon-list>
    </div>
</template>

<script>
import MoonList from './MoonList.vue'
import PlanetDescriptionList from './PlanetDescriptionList.vue'
import SpinningGlobes from './SpinningGlobes.vue'



export default {
    name: 'planet-detail',
    props: ['planet', 'getMoons', 'moons', 'descriptions', 'planets'],
    data() {
        return {
            convertDistance: true
        }
    },
    components: {
        'moon-list': MoonList,
        'planet-description-list': PlanetDescriptionList,
        'spinning-globes': SpinningGlobes
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
    margin-top: 30px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    background-color: RGBA(255, 105, 180, 0.1);
    padding: 10px;
    box-shadow: 5px 10px rgba(255, 255, 255, 0.342);
    border-radius: 6px;
    margin-bottom: 10px;
    padding-bottom: 10px;

}

#listed-planet-details {
    margin-left: 30px;
    margin-top: 20px;
    width: 500px;
}
.planet-container {
    display: flex;

}
p {
    font-family: 'VT323', monospace;
    font-size: 2;
    border: 0;
    margin: 0;
    padding-top: 20px;
    color: white;
}

h2 {
    color: white;
    text-align: center;
}
h3 {
    color: white;
    margin-bottom: 0;
}
h5 {
    color: white;
    margin-bottom: 0;
}



</style>