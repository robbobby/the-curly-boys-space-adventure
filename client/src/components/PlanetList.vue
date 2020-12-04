<template>
    <!-- this should consider the format of each item to be displayed -->
    <div class="planet-list" v-if="planets.length">
        <listed-planet v-for="(planet, index) in planets" :planet="planet" :key="index"></listed-planet>
    </div>
</template>

<script>
import ListedPlanet from '@/components/ListedPlanet.vue';

export default {
    name: 'planet-list',
    props: ['planets'],
    components: {
        'listed-planet': ListedPlanet
    }
};
</script>

<style>

</style>