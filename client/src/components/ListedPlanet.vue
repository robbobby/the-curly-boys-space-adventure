<template>
        <div class="listed-planet">
            <label :id="planet.englishName">
                <input :id="`${planet.englishName}`" type="checkbox"  
                :value="`${planet.englishName}`" v-model="planetChecked" v-on:click="handleClick()"/>
                <img
                    v-bind:class="[isActive ? 'distance' : 'size']"
                    v-bind:src="require(`../assets/images/${planet.englishName}.png`)" 
                    :title="`${planet.englishName}`" alt="picture of chosen planet" 
                    :width="setWidthOfPlanetImage()"/>
            </label>

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
            planetChecked: [],
            isActive: true
        }
    },
    mounted() {
        eventBus.$on('planet-by-size', activate => {
            this.isActive = activate;
        })
    },
    methods: {
        handleClick: function() {
            eventBus.$emit('planet-selected', this.planet);
        },
        setWidthOfPlanetImage() {
            let number = (this.planet.meanRadius / 500);
                return number + 'px'
        },
    },
}
</script>

<style>
/* HIDE RADIO */
[type=checkbox] { 
  position: absolute;
  opacity: 0;
  width: 0;
  height: 0;
}

/* IMAGE STYLES */
[type=checkbox] + img {
  cursor: pointer;
}

/* CHECKED STYLES */


#Saturn img {
    width: 200px;
    max-width: 200px;
    margin-bottom: -25px;
    margin-left: -60px;
}
.listed-planet > label {
    width: 110px;
    text-align: center;
}
.size{
    opacity: 90%;
    transition-duration: 0.75s;
}
.distance {
    width: 100px;
    max-width: 100px;
    opacity: 90%;
    transition-duration: 0.75s;
}
.listed-planet > label > img:hover{
    transition-timing-function: ease;
    /* width: 250px;
    height: 250px; */
    transform: scale(2, 2);
    opacity: 100%;
}


.listed-planet {
    color: white;
    margin: 10px;
    font-size: 20px;
    display: flex;
    flex-direction: row;
    
}

</style>