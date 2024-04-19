<template>
	<div class="card col-md-4 p-0">
		<div>
			<img
				class="card-img-top img-fluid"
				:src="imgUrl + movie.backdrop_path"
				:alt="movie.title"
			/>
		</div>
		<div class="card-body text-bg-dark">
			<span class="">
				{{ movie.title }}
			</span>
		</div>
		<div class="d-flex justify-content-center my-2">
			<button v-if="!isAdded(movie)" @click="handleClick(movie)" class="btn btn-outline-dark">Ajouter</button>
			<button v-else @click="handleClick(movie)" class="btn btn-warning">Retirer</button>
		</div>
	</div>
</template>

<script setup>
import { useBackEnd } from "../stores/backEndstore.js";
import axios from "axios";

defineProps({ movie: {} });
const backEnd = useBackEnd();
// const isAdded = useBackEnd().toggleMovie(this.movie.id);
let user = JSON.parse(localStorage.getItem("user"));

const imgUrl = backEnd.imgUrl;
let isAdded = (movie) => undefined
if (user) {

    isAdded = (movie) => user.movies.find(m => m.id === movie.id);
}


const handleClick = (movie) => {
    user = JSON.parse(localStorage.getItem("user"));
	const index = user.movies.findIndex((m) => m.id === movie.id);
    
	if (index != -1) {
		user.movies.splice(index, 1);
	} else {
		user.movies.push(movie);
	}
    
    axios.put(`${backEnd.URL}/personnes/${user.id}`, user)
    .then(() => {
        const json = JSON.stringify(user);
        localStorage.setItem("user",json);
    }).catch((err) => {
			console.log(err);
		});
};
</script>

<style scoped></style>
