<template>
	<Form @submit="addPeople">
		<div class="border rounded col-10 col-sm-8 col-md-6 col-lg-5 mx-auto pt-5">
			<div class="d-flex justify-content-center gap-5">
				<div class="d-flex flex-column gap-4">
					<label for="nom">Nom : </label>
					<label for="prenom">Prénom : </label>
					<label for="age">Âge : </label>
					<label for="mdp">Mot de passe : </label>
				</div>
				<div class="d-flex flex-column gap-3">
					<Field id="nom" name="nom" />
					<Field id="prenom" name="prenom"></Field>
					<Field id="age" name="age"></Field>
					<Field id="mdp" name="mdp" />
				</div>
			</div>
			<div class="d-flex justify-content-center gap-5 p-3">
				<button class="btn text-bg-success">Inscription</button>
			</div>
		</div>
	</Form>
</template>

<script setup>
import { useRouter } from "vue-router";
import { Form, Field } from "vee-validate";
import { useBackEnd } from "../stores/backEndstore.js";
import * as yup from "yup";
import axios from "axios";
const backEnd = useBackEnd();
const router = useRouter();

const addPeople = (values, actions) => {
	axios
		.post(`${backEnd.URL}/personnes`, values)
		.then(() => router.push("/"))
		.catch((err) => console.log(err));
};
</script>

<style scoped></style>
