// fichier de mapping(route, composant)
import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue"
import ListeView from "../views/ListeView.vue";
import InscriptionView from "../views/InscriptionView.vue";
import NotFoundView from "../views/NotFoundView.vue";
import MoviesView from "../views/MoviesView.vue";
const routes = [
	{
		path: "/",
		component: HomeView,
		name: "home",
		alias: ["/accueil", "/home"],
		meta: { title: "Accueil" },
	},
	{
        path: "/films",
        component: MoviesView,
        name: "films",
        meta: { title: "Films"}
    },
    {
        path: "/liste",
        component: ListeView,
        name: "liste",
        meta: {title: "Ma Liste"}
    },
    {
        path: "/inscription",
        component: InscriptionView,
        name: "inscription",
        meta: {title: "Inscription"}
    },
    {
        path: "/:pathMatch(.*)",
        component: NotFoundView,
        name: "not-found",
        meta : {title: "404 Erreur"}
    }
];

const router = createRouter({
	history: createWebHistory(),
	routes,
	linkActiveClass: "lien-actif",
});

router.beforeEach((to, from, next) => {
	document.title = to.meta.title ?? "";
	next();
});
export default router;
