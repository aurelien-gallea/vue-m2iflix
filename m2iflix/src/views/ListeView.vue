<template>
    <h1 class="text-center my-5">Ma liste de Films</h1>
    <div>
        <ul v-if="user">
            <li v-for="m in movieList">
                <span>{{ m.title }}</span> <button class="btn btn-dark" @click=""> retirer</button>
            </li>
        </ul>
    </div>
</template>

<script setup>

const user = JSON.parse(localStorage.getItem("user"));
const movieList = user.movies;

const remove = () => {
   
}
</script>

<style scoped>

</style>