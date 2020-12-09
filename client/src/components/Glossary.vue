<template>
    <div class="glossary_item">
        <label>Pick a topic to find out more:</label>
     <select v-model="selectedDescription">
        <option v-for="description in descriptions" :key="description._id" :value="description">
        {{description.name}} </option>
        </select>
        <glossary-item v-if="selectedDescription" :selectedDescription="selectedDescription"></glossary-item>
        
    </div>
</template>
<script>

import GlossaryItem from './GlossaryItem.vue'

export default {
    name: 'glossary',
        data(){
        return {
            selectedDescription: null
        }
    },
    props: ['descriptions'],
    components: {
        'glossary-item' : GlossaryItem
    }


}
</script>

<style lang="css" scoped>
.glossary_item {
    position: relative;
    top:50px;
    color:white;
    padding-right: 5px;
    padding-left: 10px;
    padding-bottom:20px;
  
}

</style>