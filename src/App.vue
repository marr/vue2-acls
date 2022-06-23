<template>
  <div id="app">
    <Permissions />
  </div>
</template>

<script>
import Permissions from "./components/Permissions.vue";
export default {
  components: {
    Permissions,
  }
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin: 60px auto 0;
  max-width: 900px;
}
</style>