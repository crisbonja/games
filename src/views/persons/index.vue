<template>
  <div class="container">
    <h1>Pessoas</h1>
    {{persons}}
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'PersonsView',
  data() {
    return {
      persons: null,
    };
  },
  mounted() {
    this.getPerson();
  },
  methods: {
    getPerson() {
      const url = 'http://localhost:3000/persons';
      axios.get(url)
      .then((response) => {
        console.log(response.data);
        this.persons = response.data;
      }).catch((err) => {
        console.error(err);
      });
    },
  },
};
</script>
