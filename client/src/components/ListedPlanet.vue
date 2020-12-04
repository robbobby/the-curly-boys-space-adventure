<template>
  <div class="listed-planet">
      <p v-on:click="handleClick" v-if="planet.isPlanet"> {{planet.englishName}} </p>
  </div>
</template>

<script>
import {eventBus} from '@/main.js';

export default {
    name: 'listed-planet',
    props: ['planet'],
    methods: {
        handleClick: function(){
            eventBus.$emit('planet-selected', this.planet);
        }
    }
}
</script>

<style>
/* {
"id": "lune",
"englishName": "Moon",
"isPlanet": false,
"moons": null,

"vol": {
"volValue": 2.1968,
"volExponent": 10
},
"density": 3.344,
"gravity": 1.62,

"meanRadius": 33,
"equaRadius": 1738.1,
"polarRadius": 1736,

"aroundPlanet": {
"planet": "terre",
"rel": "https://api.le-systeme-solaire.net/rest/bodies/terre"
},

"discoveredBy": "Rob",
"discoveryDate": "Today",
"alternativeName": "Robs Blob",
"rel": "https://api.le-systeme-solaire.net/rest/bodies/lune"
}, */
</style>

