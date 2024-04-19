import { defineStore } from "pinia";

export const useBackEnd = defineStore("backEnc", {
	state() {
		return {
			_URL: "http://localhost:5555",
			_API_URL:
				"https://api.themoviedb.org/3/movie/popular?api_key=d586aa0bc4f382a532db7a1e7707f77e&language=fr-FR&page=1",
			_API_IMG_URL: "https://image.tmdb.org/t/p/original",
		};
	},
	getters: {
		URL(state) {
			return this._URL;
		},
		movies(state) {
			return this._API_URL;
		},
		imgUrl(state) {
			return this._API_IMG_URL;
		},
	},
});
