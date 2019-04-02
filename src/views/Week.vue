<template>
  <WeatherCarousel></WeatherCarousel>
</template>

<script>
import WeatherCarousel from "@/components/week/WeatherCarousel";

export default {
  components: { WeatherCarousel },
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
