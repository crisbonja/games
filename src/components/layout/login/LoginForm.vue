<template>
  <div class="login-form">
    <div class="center-content">
   
    <form action="">
      <div class="row">
          <div class="col">
              <div class="mb-3">
                <label for="exampleFormControlInput1" 
                  class="form-label">Username
                </label>
                <input 
                  type="text" 
                  class="form-control" 
                  id="exampleFormControlInput1" 
                  v-model="form.nome">
                </div>
                
                <div class="mb-3">
                <label for="formIdade" 
                  class="form-label">Senha
                </label>
                <input 
                  type="password" 
                  class="form-control" 
                  id="formIdade" 
                  placeholder=""
                  v-model="form.idade">
                </div>

            <button @click="goToProfile"
            type="button" 
            class="btn btn-primary mb-3">
            Entrar
          </button>
          </div>
      </div>
    </form>
    </div>
  </div>
</template>

<script>
export default {
 name: 'LoginForm',
  data() {
    return {
      form: {
        nome: '',
        idade: '',
      },
    };
  },
  methods: {
    goToProfile() {
      console.log('fiz algo')
      this.$emit('onLoadProfile');
    }
  }
}
</script>

<style>
.login-form {
  display: flex;
  width: 50vw;
  background-color: #f2f2f2;
}

.center-content {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px;
}

</style>