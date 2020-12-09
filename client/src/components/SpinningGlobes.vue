<template>
  <div class="spinning-globes" :planet="planet">
      <div class="globe" :style="{'background-image': 'url(' + require('../assets/images/'+planet.englishName+'-globe.jpg')+ ')'}"></div>
      <!-- <img v-bind:src="require(`../assets/images/${planet.englishName}-globe.jpg`)" class="earth-globe"> -->
  </div>
</template>

<script>
export default {
    name: 'spinning-globes',
    props: ['planet']

}
</script>

<style>
    .globe {
        position:relative;
        top:0;
        bottom:0;
        left:0;
        right:0;
        margin: auto;
        width: 300px;
        height: 300px;
        border-radius: 50%;
        background-size: cover;
        box-shadow: -20px -20px 50px 2px #000 inset, 0 0 20px 2px #000 inset;
        animation: spin 30s linear infinite;
        transform: rotate(-20deg);
    }

    @keyframes spin {
        100%{background-position:100%;}
    }
</style>