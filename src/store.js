import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    baseUrl: 'http://localhost:8080/',
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
      weather_week: {
        "weatherMap":[
          {"wepNow":"2.5416667","cloCovLow":"791679.7","vis":"14766.667","pre":"0.0","temMin":"19.3","prsSea":"1016.0","vap":"21.941666","cloCovLm":"0.0","windpower":"1.5","tigan":"21.707918","prs":"1009.87085","cloCov":"791679.7","temMax":"24.2","tem":"21.241667","rhu":"87.541664"},
          {"wepNow":"4.1666665","cloCovLow":"791671.3","vis":"15116.667","pre":"0.0","temMin":"19.5","prsSea":"1014.43756","vap":"24.695833","cloCovLm":"0.0","windpower":"2.0833333","tigan":"23.994165","prs":"1008.33325","cloCov":"791671.3","temMax":"26.9","tem":"23.25","rhu":"87.375"},
          {"wepNow":"6.7083335","cloCovLow":"791684.3","vis":"12637.5","pre":"0.0","temMin":"22.1","prsSea":"1012.3499","vap":"26.795835","cloCovLm":"0.0","windpower":"1.625","tigan":"24.1475","prs":"1006.2502","cloCov":"791685.2","temMax":"25.8","tem":"23.308336","rhu":"93.916664"},
          {"wepNow":"0.0","cloCovLow":"791685.2","vis":"27920.834","pre":"0.0","temMin":"22.6","prsSea":"1010.9417","vap":"26.983332","cloCovLm":"0.0","windpower":"2.0","tigan":"26.56958","prs":"1004.92914","cloCov":"791686.0","temMax":"28.9","tem":"25.358335","rhu":"84.0"},
          {"wepNow":"10.916667","cloCovLow":"791686.8","vis":"17412.5","pre":"0.1","temMin":"20.7","prsSea":"1012.98755","vap":"28.191666","cloCovLm":"0.0","windpower":"1.7916666","tigan":"25.022913","prs":"1006.92505","cloCov":"791686.8","temMax":"25.9","tem":"24.07917","rhu":"94.0"},
          {"wepNow":"29.625","cloCovLow":"791686.8","vis":"12937.5","pre":"2.4","temMin":"14.5","prsSea":"1018.46674","vap":"18.508333","cloCovLm":"0.0","windpower":"1.8333334","tigan":"17.201668","prs":"1012.2793","cloCov":"791686.8","temMax":"21.0","tem":"16.9625","rhu":"95.291664"},
          {"wepNow":"15.416667","cloCovLow":"791686.8","vis":"6166.6665","pre":"0.8","temMin":"14.6","prsSea":"1017.58344","vap":"17.745832","cloCovLm":"0.0","windpower":"1.5833334","tigan":"16.492086","prs":"1011.30817","cloCov":"791686.8","temMax":"17.5","tem":"16.3","rhu":"96.0"}],
          "temMax":24.3,
          "temMin":16.3,
          "pre":0.8000001
        },
      weather_month: {},
  },
  mutations: {
    set_weather_now(state, weather) {
      this.state.weather_now = weather
    },
    set_weather_week(state, weather) {
      this.state.weather_week = weather
    },
    set_weather_month(state, weather){
      this.state.weather_month = weather
    }
  },
  actions: {

  }
})
