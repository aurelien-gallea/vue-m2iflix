<template>
	
	<Form class="">
		<div class="border rounded col-10 col-sm-8 col-md-6 col-lg-5 mx-auto pt-5">
			<div class="d-flex justify-content-center gap-5">
				<div class="d-flex flex-column gap-3">
					<label for="nom">Nom : </label>
					<label for="mdp">Mot de passe : </label>
				</div>
				<div class="d-flex flex-column gap-3">
					<Field id="nom" name="nom" />
					<Field id="mdp" name="mdp" />
				</div>
			</div>
			<div class="d-flex justify-content-center gap-5 p-3">
				<router-link to="/inscription" class="btn btn-secondary">Inscription</router-link>
				<button class="btn text-bg-success">Connexion</button>
			</div>
		</div>
	</Form>
</template>

<script setup>
import { Form, Field } from "vee-validate";
</script>

<style scoped></style>
