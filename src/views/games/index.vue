<template>
  <div>
    <h1>Games</h1>
    <div v-if="!games">
      <AppLoading />
    </div>
    <div>
      {{ games }}
    </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'GamesView',
  data() {
    return {
      games: null,
      disclaimerError: false,
    };
  },
  mounted() {
    this.getGames();
  },
  methods: {
    getGames() {
      const url = 'http://localhost:3000/games';
      axios.get(url)
        .then((response) => {
          setTimeout(() => {
            this.games = response.data;
          }, 1500)
        })
        .catch((error) => {
          this.disclaimerError = true;
          console.error(error)
        })
    },
  }
}
</script>
