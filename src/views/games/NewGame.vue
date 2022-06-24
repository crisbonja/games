<template>
    <div class="container">
      <form action="">
      <div class="row">
          <div class="col">
              <div class="mb-3">
                <label for="exampleFormControlInput1" 
                  class="form-label">Nome
                </label>
                <input 
                  type="text" 
                  class="form-control" 
                  id="exampleFormControlInput1" 
                  placeholder="name@example.com"
                  v-model="form.nome">
                </div>
                
                <div class="mb-3">
                <label for="formIdade" 
                  class="form-label">Idade
                </label>
                <input 
                  type="text" 
                  class="form-control" 
                  id="formIdade" 
                  placeholder=""
                  v-model="form.idade">
                </div>

                <div class="mb-3">
                <label 
                  for="exampleFormControlTextarea1"
                  class="form-label">MiniBio
                </label>
                <textarea 
                  class="form-control" 
                  id="exampleFormControlTextarea1" 
                  rows="3"
                  v-model="form.minibio">
                </textarea>
              </div>
          </div>
      </div>
      <div class="row">
        <div class="col">
          <button type="button" class="btn btn-secondary">Cancelar</button>
        </div>
        <div class="col d-flex justify-content-end">
          <button 
            type="button" 
            class="btn btn-primary"
            @click="createNewPerson">
            Salvar
          </button>
        </div>
      </div>
      </form>
    </div>
</template>

<script>
import PERSONS_API from '@/services/index';

export default {
  name: 'NewGameView',
  data() {
    return {
      form: {
        nome: '',
        idade: '',
        minibio: '',
      },
    };
  },
  methods: {
    async getPerson() {
      const { data, error } = await PERSONS_API
      .from('person')
      .select()
      this.onLoadSuccess(data);
      this.onFetchError(error);
    },
    createNewPerson() {
      const pessoa = {
        name: this.form.nome,
        age: this.form.idade,
        minibio: this.form.minibio
      };

      this.setGame(pessoa);
    },
    async setGame(pessoa) {
      const { data, error } = await PERSONS_API
      .from('person')
      .insert([pessoa]);
      this.onFetchSuccess(data);
      this.onFetchError(error);
    },
    onFetchSuccess(data) {
      const [personSave] = data;
      this.getPerson();
      console.log('usuario salvo com sucesso', personSave);
    },
    onLoadSuccess(data) {
      console.log(data);
    },
    onFetchError(error) {
      console.error(error);
    },
  },
}
</script>

<style>

</style>