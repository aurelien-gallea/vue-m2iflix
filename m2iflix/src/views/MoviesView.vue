<template>
	<h1 class="text-center my-5">Les Films</h1>
	<div class="container text-center">
		<div class="row gap-5 justify-content-center">
			<MovieCardComponent v-for="m in movies"  :movie="m"/>
		</div>
	</div>
</template>

<script setup>
import { useBackEnd } from "../stores/backEndstore.js";
import { reactive, ref, onMounted } from "vue";

import MovieCardComponent from "../components/MovieCardComponent.vue";
import axios from "axios";
const moviesUrl = useBackEnd().movies;
const imgUrl = useBackEnd().imgUrl;
let movies = reactive([]);

onMounted(() => {
	axios.get(moviesUrl).then((m) => {
		console.log(m);
		m.data.results.forEach((e) => movies.push(e));
		console.log(movies);
	});
});
</script>

<style scoped>
.width-card {
	min-width: 180px;
	max-width: 180px;
}
</style>
