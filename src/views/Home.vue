<template>
  <div :class="$style.home">
    <h1 :class="$style.title">Coccinelles</h1>
    <Game />
    <router-link :class="$style.openStats" :to="{ name: 'stats' }"
      >Voir les statistiques
    </router-link>
  </div>
</template>

<script>
import Game from "@/components/game/Game.vue";

export default {
  name: "Home",
  components: {
    Game,
  },
};
</script>

<style lang="scss" module>
.home {
  height: 100vh;
  width: 100vw;
  position: relative;
}
.title {
  color: tomato;
  text-shadow: 0 0 0.2em tomato;
  position: absolute;
  pointer-events: none;
  top: 20%;
  width: 100%;
  text-align: center;
  font-size: 10vmin;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  font-weight: bold;
}
.openStats {
  position: absolute;
  top: 0;
  right: 0;
  margin: 1em;
  backdrop-filter: blur(2px);
  background-color: rgba(black, $alpha: 0.5);
  padding: 1em;
  border-radius: 1em;
  color: white;

  &:hover,
  &:focus {
    background-color: rgba(black, $alpha: 0.2);
  }
}
</style>
