import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    baseUrl: 'http://120.78.68.49:80/',
    weather_now: {
      "tem": 22.7,
      "temMax": 23.2,
      "temMin": 21.7,
      "tigan": 22.57,
      "prs": 1013.1,
      "prsSea": 1019.3,
      "vap": 16.2,
      "rhu": 59,
      "windpower": 2,
      "pre1h": 0,
      "vis": 24700,
      "cloCov": 0,
      "cloCovLow": 0,
      "cloCovLm": 0,
      "wepNow": 0
      },
      weather_week: {},
      weather_month: {},
  },
  mutations: {
    set_weather_now(state, weather) {
      state.weather_now = weather
    },
    set_weather_week(state, weather) {
      state.weather_week = weather
    },
    set_weather_month(state, weather){
      state.weather_month = weather
    }
  },
  actions: {

  }
})
