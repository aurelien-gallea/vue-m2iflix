import { defineStore } from "pinia";

export const useBackEnd = defineStore("backEnc", {
	state() {
		return {
			_URL: "http://localhost:5555",
			_API_URL:
				"https://api.themoviedb.org/3/movie/popular?api_key=d586aa0bc4f382a532db7a1e7707f77e&language=fr-FR&page=1",
			_API_IMG_URL: "https://image.tmdb.org/t/p/original",
            _isConnected : Boolean,
            _addedMoviesId : []
		};
	},
	getters: {
		URL(state) {
			return state._URL;
		},
		movies(state) {
			return state._API_URL;
		},
		imgUrl(state) {
			return state._API_IMG_URL;
		},
        isConnected(state) {
            return state._isConnected;
        },
        isAdded(state) {
            return state._addedMoviesId;
        }
	},
    actions: {
        getConnection() {
            if(localStorage.getItem("user")) {
                return this._isConnected = true;
            }
            return this._isConnected = false;
        },
        connectionToggle() {
            this._isConnected = !this._isConnected;
        },
        toggleMovie(movieId) {
            const index = this._addedMoviesId.findIndex(id => id === movieId )
            if (index != -1) {
                this._addedMoviesId.splice(index,1)
                return false
            } else {
                this._addedMoviesId.push(movieId)
                return true
            }
        }
    }
});

