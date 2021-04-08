<template>
  <router-view />
  <div :class="$style.filter">
    <label v-for="l in ladybugs" :key="l.id">
      <input type="checkbox" v-model="l.isVisible" />
      <span
        >Coccinelle <strong :style="{ color: l.color }">#{{ l.id }}</strong></span
      >
    </label>
  </div>
</template>

<script>
import ladybugs from "@/ladybugs";
import "./cam";

export default {
  data() {
    return {
      ladybugs,
    };
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: white;
  user-select: none;
  background-image: url("~@/assets/bg.jpg");
  background-size: cover;
  min-height: 100vh;
  min-width: 100vw;
}
</style>

<style lang="scss" module>
.filter {
  position: fixed;
  top: 1em;
  left: 1em;
  padding: 1em;
  max-height: 50vh;
  overflow: auto;
  box-sizing: border-box;
  backdrop-filter: blur(2px);
  background-color: rgba(black, $alpha: 0.5);
  border-radius: 1em;
  label {
    display: block;
    margin: 0.5em 0;
    strong {
      font-weight: bold;
    }
  }
}
</style>
