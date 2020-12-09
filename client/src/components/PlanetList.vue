<template>
    <!-- this should consider the format of each item to be displayed -->
   
    
    <div class="view-cosmodex">
        
            <div class="filter-buttons">
                <button v-on:click="compareSize" class="main-button"> Filter Planets by Size <span> </span></button>
                <button v-on:click="compareDistance" class="main-button"> Filter By Distance from the Sun <span> </span></button>
                <!-- <button v-on:click="compareDensity" class="main-button"> Filter By Planets by Density <span> </span></button> -->
            </div>
        
        
        
        <div class="planet-list" v-if="planets.length">
        <listed-planet v-for="(planet, index) in filterPlanets" :planet="planet" :key="index"/>
        </div>
    
    </div>
    
</template>

<script>
import ListedPlanet from '@/components/ListedPlanet.vue';

export default {
    name: 'planet-list',
    props: ['planets'],
    components: {
        'listed-planet': ListedPlanet
    },
    data() {
        return {
            filterPlanets: null
        }
    },
    computed: {
        sortByDistance: function(){
            return this.planets.sort((a, b) => a.semimajorAxis - b.semimajorAxis);
        },
        sortBySize: function(){
            return this.planets.sort((a, b) => a.meanRadius - b.meanRadius);
        },
        // sortByDensity: function(){
        //     return this.planet.sort((a, b) => a.density - b.density);
        // },
        // sortByGravity: function(){
        //     return this.planet.sort((a, b) => a.gravity - b.gravity);
        // }
    },
    methods: {
        compareSize: function(){
            this.filterPlanets = this.sortBySize;
        },
        compareDistance: function(){
            this.filterPlanets = this.sortByDistance;
        },
        // compareDensity: function(){
        //     this.filterPlanets = this.sortByDensity;
        // }
    }
};
</script>

<style>

.view-cosmodex {
    display: flex;
    flex-direction: column;
    width: 100%;
}

.filter-buttons {
    position:relative;
    right: 70px;
    display: flex;
    align-items: right;
    margin: 0 20px 20px 0;
}
</style>