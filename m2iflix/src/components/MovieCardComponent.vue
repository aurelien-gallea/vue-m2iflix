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
                    <button class="btn btn-outline-dark">Ajouter</button>
                </div>
			</div>
</template>

<script setup>
import { useBackEnd } from "../stores/backEndstore.js";

const imgUrl = useBackEnd().imgUrl;

defineProps({movie : {
   

}})
</script>

<style scoped>

</style>