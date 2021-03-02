<template>
  <div :class="$style.container">
    <h1 :class="$style.title">
      Données d'activité
    </h1>
    <table :class="$style.table">
      <thead>
        <tr>
          <th>Couleur</th>
          <th>Numéro</th>
          <th>Type</th>
          <th>Score</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="l in activeLadybugs" :key="l.id">
          <th :style="{ color: l.color }">●</th>
          <th>{{ l.id }}</th>
          <td>{{ l.type }}</td>
          <td>{{ l.score }}</td>
        </tr>
      </tbody>
    </table>
    <router-link :to="{ name: 'home' }">Retour au jeu </router-link>
  </div>
</template>

<script>
import ladybugs from "@/ladybugs";

export default {
  data() {
    return {
      ladybugs,
    };
  },
  computed: {
    activeLadybugs() {
      return this.ladybugs.filter((l) => l.isVisible);
    },
  },
};
</script>

<style lang="scss" module>
.container {
  min-height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: black;
  background-color: rgba(white, 0.8);
}

.title {
  font-size: 2em;
  font-weight: bold;
  margin: 1em 0;
}

.table {
  margin: 1em;
  thead {
    font-size: 1.3em;
    th {
      padding: 1em;
      font-weight: bold;
    }
  }
  tbody {
    th {
      font-weight: bold;
    }
    td {
      padding: 0.2em;
      text-align: center;
    }
  }
}
</style>
