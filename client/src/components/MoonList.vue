<template>
    <div>
        <h3>Moons:</h3>
        <ul>
            <li v-for="moon in getMoons">
                <p> {{moon.englishName}} </p>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    name: 'moon-list',
    props: ['getMoons']
}
</script>

<style>

</style>