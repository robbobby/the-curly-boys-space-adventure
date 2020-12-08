<template>
    <div>
        <select v-model="selectedDescription">
        <option v-for="description in descriptions" :key="description._id">
        {{description.name}} </option>
        </select>
        <glossary-definition v-if="selectedDescription" :selectedDescription="selectedDescription"></glossary-definition>
        
    </div>
</template>
<script>

import GlossaryDefinition from './GlossaryDefinition.vue';

export default {
    name: 'glossary',
        data(){
        return {
            selectedDescription: null
        }
    },
    props: ['descriptions'],
    components: {
        'glossary-definition' : GlossaryDefinition
    }


}
</script>

<style>

</style>