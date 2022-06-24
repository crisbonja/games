<template>
  <div class="d-flex">
  <LoginImage />
	<LoginForm @onLoadProfile="goToApp" />
  </div>
</template>

<script>
import LoginImage from './LoginImage.vue';
import LoginForm from './LoginForm.vue';

export default {
	name: 'LoginTemplate',
  components: {
    LoginImage,
    LoginForm,
  },
  methods: {
    goToApp() {
      console.log('elemento pai')
       this.$emit('onLoadProfile');
    },
  }
}
</script>

<style>

</style>