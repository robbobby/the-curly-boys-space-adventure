<template>
    <div>
        <div v-for="(description, index) in descriptions" :key="index">
        <h2> {{description.name}} </h2>
        <p>{{description.definition}</p>}

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