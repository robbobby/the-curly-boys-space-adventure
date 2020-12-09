<template>
        <div class="listed-planet">
            <label :id="planet.englishName">
                <input :id="`${planet.englishName}`" type="radio" name="planet" :value="`${planet.englishName}`" />
                <img v-on:click="handleClick" 
                    v-bind:src="require(`../assets/images/${planet.englishName}.png`)" 
                    :title="`${planet.englishName}`" alt="picture of chosen planet" 
                    :width="setWidthOfPlanetImage()"/>
            </label>

        </div>
        <!-- <div class="listed-planet">

            <a v-on:click="handleClick" :id="planet.englishName">
                <img v-bind:src="require(`../assets/images/${planet.englishName}.png`)" 
                :title="`${planet.englishName}`" alt="picture of chosen planet" 
                    :width="setWidthOfPlanetImage()"/>
                <p> {{planet.englishName}} </p>
                <p> {{ setWidthOfPlanetImage() }} </p>
            </a>
        </div> -->
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
    }
}
</script>

<style>
/* HIDE RADIO */
[type=radio] { 
  position: absolute;
  opacity: 0;
  width: 0;
  height: 0;
}

/* IMAGE STYLES */
[type=radio] + img {
  cursor: pointer;
}

/* CHECKED STYLES */
[type=radio]:checked + img {
  transform: scale(2, 2);
    opacity: 100%;
}

#Saturn img {
    width: 200px;
    max-width: 200px;
    margin-bottom: -25px;
    margin-left: -42px;
}
.listed-planet > label {
    width: 110px;
    text-align: center;
}
.listed-planet > label > img{
    width: 100px;
    max-width: 100px;
    opacity: 90%;
    transition-duration: 0.75s;
}
.listed-planet > label > img:hover{
    transition-timing-function: ease;
    transform: scale(2, 2);
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

</style>