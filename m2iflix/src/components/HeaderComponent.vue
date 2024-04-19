<template>
	<header>
		<nav>
			<ul class="d-flex align-items-center gap-5 py-3">
				<li><router-link to="/">Accueil</router-link></li>
				<li><router-link to="/films">Films</router-link></li>
				
				<li v-if="isConnected"><router-link to="/liste">Ma Liste</router-link></li>
				<li v-if="!isConnected"><router-link to="inscription">Inscription</router-link></li>
				<li v-else><button @click="disconnect" class="btn btn-dark">déconnexion</button></li>
                <li><span v-if="isConnected" class="fs-5 text-white">Salut {{ user.nom }}</span></li>
			</ul>
		</nav>
	</header>
</template>

<script setup>
import { reactive, onUpdated, ref } from 'vue';
import {useRouter} from "vue-router";
import { useBackEnd } from "../stores/backEndstore.js";
const backEnd = useBackEnd();
let isConnected = ref(backEnd.getConnection());

defineProps({userConnected: Boolean})

const user = JSON.parse(localStorage.getItem("user"));

const router = useRouter();

const disconnect = () =>{ 
    localStorage.removeItem("user");
    router.push("/");
	backEnd.connectionToggle();
	isConnected.value = false;
    };
</script>

<style scoped>
ul {
	list-style-type: none;
    background: orangered;
}
li {
    display: inline-block;
}
a{
    color: white;

}

</style>
