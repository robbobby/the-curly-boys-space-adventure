<template>
    <!-- this should consider the format of each item to be displayed -->
    <div class="view-cosmodex">
        <div class="filter-buttons">
            <button class="main-button" v-on:click="compareSize"> Filter Planets by Size <span> </span></button>
            <button class="main-button" v-on:click="compareDistance"> Filter By Distance from the Sun <span> </span></button>
        </div>
        <div class="planet-list" v-if="planets.length">
        <listed-planet v-for="(planet, index) in filterPlanets" :planet="planet" :key="index"/>
        <!-- <listed-planet v-for="(planet, index) in sortBySize" :planet="planet" :key="index"/> -->
        <!-- <listed-planet v-for="(planet, index) in sortByDensity" :planet="planet" :key="index"/> -->
        <!-- <listed-planet v-for="(planet, index) in sortByGravity" :planet="planet" :key="index"/> -->
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
        sortByDensity: function(){
            return this.planet.sort((a, b) => a.density - b.density);
        },
        sortByGravity: function(){
            return this.planet.sort((a, b) => a.gravity - b.gravity);
        }
    },
    methods: {
        compareSize: function(){
            this.filterPlanets = this.sortBySize;
        },
        compareDistance: function(){
            this.filterPlanets = this.sortByDistance;
        }
    }
};
</script>

<style>
.filter-buttons {
    display: flex;
    justify-content: flex-end;
    margin: 0 20px 20px 0;
}
</style>