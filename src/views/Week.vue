<template>
  <WeatherWeek></WeatherWeek>
</template>

<script>
import WeatherWeek from "@/components/week/WeatherWeek";

export default {
  components: { WeatherWeek },
  mounted() {
    this.$axios
      .get(this.$store.state.baseUrl + "week")
      .then(function(response) {
        this.$store.commit("set_weather_week", response.data);
      })
      .catch(function(error) {
        console.log(error);
      });
  }
};
</script>

<style scoped>
</style>
