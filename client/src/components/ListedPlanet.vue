<template>
    <div class="list-wrapper">
        
        <div class="listed-planet">

            <a v-on:click="handleClick" :id="planet.englishName">
                <img v-bind:src="require(`../assets/images/${planet.englishName}.png`)" 
                :title="`${planet.englishName}`" alt="picture of chosen planet" 
                    :width="setWidthOfPlanetImage()"/>
                <p> {{planet.englishName}} </p>
                <!-- <p> {{setWidthOfPlanetImage()}} </p> -->
            </a>
        </div>
    </div>
</template>

<script>
import {eventBus} from '@/main.js';

export default {
    name: 'listed-planet',
    props: ['planet'],
    data() {
        return {
            widthOfImage: 70,
        }
    },
    methods: {
        
        handleClick: function() {
            eventBus.$emit('planet-selected', this.planet);
        },
        setWidthOfPlanetImage() {
            let number = (this.planet.meanRadius / 500);
                return number + 'px'
        },
        saturnSizeException() {

        }
    }
}
</script>

<style>

#Saturn img {
    width: 200px;
    max-width: 200px;
    margin-bottom: -25px;
    margin-left: -42px;
}
.listed-planet > a {
    width: 110px;
    text-align: center;
}
.listed-planet > a > img{
    width: 100px;
    max-width: 100px;
    opacity: 90%;
    transition-duration: 0.75s;
}
.listed-planet > a > img:hover{
    transition-timing-function: ease;
    transform: scale(2.5, 2.5);
    opacity: 100%;
}

/* 
@keyframes size {
    from {image-: red;}
    to {background-color: yellow;} */

    /* .listed-planet > a > img {
    
    animation-name: size forwards;
    animation-duration: 4s;
} */

.planet-list{

    display: flex;
    flex-direction: row;
    justify-content:space-between;
    align-items: baseline;

}

.listed-planet {
    color: white;
    margin: 20px;
    font-size: 20px;
    display: flex;
    flex-direction: row;
    justify-content:space-between;
}

#Earth:onClick {
    visibility: hidden;
}

/* #Saturn > img {
    position: relative;
    width: 250%;
    left: -50px;
}  */


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