<template>
	<header>
		<nav>
			<ul class="d-flex align-items-center gap-5 py-3">
				<li><router-link to="/">Accueil</router-link></li>
				<li><router-link to="/films">Films</router-link></li>
				<li><router-link to="/liste">Liste</router-link></li>
				<li><router-link to="inscription">Inscription</router-link></li>
			</ul>
		</nav>
	</header>
</template>

<script setup></script>

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
