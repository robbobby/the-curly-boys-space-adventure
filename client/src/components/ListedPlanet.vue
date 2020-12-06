<template>
    <div class="list-wrapper">
        
        <div class="listed-planet">

            <p v-on:click="handleClick" :id="planet.englishName">
                <img v-bind:src="require(`../assets/images/${planet.englishName}.png`)" 
                :title="`${planet.englishName}`" alt="picture of chosen planet" :height="`${widthOfImage}`"/>
                <p> {{planet.englishName}} </p>
            </p>
            <!-- 50 + (5 * planet.averageRadius) -> assign that to the width/height of the image -->

        </div>
    </div>
</template>

<script>
import {eventBus} from '@/main.js';

export default {
    name: 'listed-planet',
    props: ['planet'],
    widthOfImage: 70,
    methods: {
        handleClick: function(){
            eventBus.$emit('planet-selected', this.planet);
        },
        data() {
            return {
            }
        }
    },
    mounted: {
        setWidthOfPlanetImage() {
            this.widthOfImage = (50 + (5 * planet.meanRadius)) + 'px'
            console.log(this.widthOfImage);
        }
    }
}
</script>

<style>



.listed-planet > p > img{
    max-width: 120%;
    opacity: 80%;
    transition-duration: 0.75s;
}
.listed-planet > p > img:hover{
    transition-timing-function: ease;
    transform: scale(1.5, 1.5);
    opacity: 100%;
}

/* .listed-planet > p > img:active{
    animation
} */
/* 
@keyframes size {
    from {image-: red;}
    to {background-color: yellow;} */

    /* .listed-planet > p > img {
    
    animation-name: size forwards;
    animation-duration: 4s;
} */

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

#Earth:onClick {
    visibility: hidden;
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