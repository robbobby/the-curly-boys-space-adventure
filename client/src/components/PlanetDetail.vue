<template>
    <div id="selected-planet" v-if="planet">
        <h2> {{planet.englishName}} </h2>
        <p> {{planet.moons.moon}} </p>
    </div>
</template>

<script>
export default {

}
</script>

<style>

</style>