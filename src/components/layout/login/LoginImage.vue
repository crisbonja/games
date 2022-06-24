<template>
  <div class="bg--image"> 
      <h1 class="text-light">Welcome</h1>
  </div>
</template>

<script>
export default {
 name: 'LoginImage',
}
</script>

<style>
.bg--image {
    background-image: url("~@/assets/images/wall-games.jpg");
    background-position: center center;
    background-size: cover;
    height: 100vh;
    width: 60vw;
    display: flex;
    align-items: center;
}

.text-light {
 color: #f2f2f2;
 font-size: 6rem;
 font-weight: bold;
}
</style>