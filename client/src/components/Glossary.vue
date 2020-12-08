<template>
    <div>
        <select>
        <option v-for="(description, index) in descriptions" :key="index">
        {{description.name}} </option>
        <!-- <p>{{description.definition}}</p>} -->
        </select>
        </div>

    </div>
</template>

<script>
export default {
    name: 'glossary',
    props: ['descriptions']

}
</script>

<style>

</style>