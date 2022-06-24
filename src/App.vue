<template>
  <div id="app">
    <AppHeader v-if="isVisible" />
    <LoginTemplate 
      @onLoadProfile="showApp"  
      v-if="isVisibleLogin"
      />
    <router-view  v-if="isVisible" />
  </div>
</template>

<script>
import AppHeader from '@/components/AppHeader.vue';
import LoginTemplate from '@/components/layout/login/index.vue';

export default {
  name: 'App',
  components: {
    AppHeader,
    LoginTemplate,
  },
  data() {
    return {
      isVisible: false,
      isVisibleLogin: true,
    }
  },
  methods: {
    showApp() {
      console.log('chamei');
      this.isVisible = true;
      this.isVisibleLogin = false;
    }
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
</style>
