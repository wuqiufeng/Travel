import Vue from 'vue'
import Vuex from 'vuex'
import state from './state'
import mutations from './mutations'

Vue.use(Vuex)

export default new Vuex.Store({
	state,
	mutations,
	getters: {
		doubleCity (state) {
			return state.city + ' ' + state.city
		}
	}

	// state: {
		// city: localStorage.city || '武汉'
		// city: defaultCity
	// },
	// actions: {
	// 	changeCity (ctx, city) {
	// 		ctx.commit('changeCity', city)
	// 	}
	// },
})