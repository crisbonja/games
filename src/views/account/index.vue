<template>
<div class="container">
  <div class="row mt-4">
      <NavAccount />
      <WrapperAccount />
  </div>
</div>
</template>

<script>
import NavAccount from './NavAccount.vue';
import WrapperAccount from './WrapperAccount.vue';

export default {
  name: 'AccountView',
    components: {
        NavAccount,
        WrapperAccount,
    },
}
</script>

<style>

</style>