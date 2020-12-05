<template>
    <div class="list-wrapper">
        
        <div class="listed-planet">
            <!-- <p v-on:click="handleClick" v-if="planet.isPlanet & planet.gravity >=1" :class="planet.englishName" > {{planet.englishName}}</p> -->
                
            <p v-on:click="handleClick" v-if="planet.isPlanet & planet.gravity >=1" :id="planet.englishName">
                <img :src="'/client/src/assets/joopiteer.png'" title="picture" alt="picture of chosen planet">
                <!-- <img v-bind:src="require(`../assets/${planet.englishName}.png`)" title="picture" alt="picture of chosen planet"> -->
            </p>


      <!-- <img :src="require(`../assets/images/planets/${planet.englishName.toLowerCase()}.png`)" :alt="Planet pic"> -->

        <!-- :src="@/client/src/assets/images/planets/mars.png" -->
      <!-- <img src="{{ url_for('static', filename='images/{}.jpeg'.format(album.title)) }}" alt="Picture of album cover"> -->
        </div>
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

.planet-list{

    display: flex;
    flex-direction: row;
    justify-content:space-between;

}

p {
    color: white;
    margin: 20px;
    font-size: 20px;
    display: flex;
    flex-direction: row;
    justify-content:space-between;
}

/* #Venus {
    background-image: url('../src/assets/images/planets/venus.png');

}  */
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

