<template>
  <div class="col-9"> 
     <Breadcrumb name="Perfil" />
     <div class="row">
       <div class="col-6">
         <h3>Joe Doe</h3>
         <p>joe.doe@gmail.com</p>
       </div>
       <div class="col-6">
         <strong>Endereço</strong>
         <p>Avenida Maestro João Seppe, 700 <br>
            Vila Germânica, <br>
            Curitiba - PR  <br>
            83339-902
         </p>
       </div>
     </div>
     <div class="row">
       <div class="col-6">
          <button 
          type="button" 
          class="btn btn-secondary">Editar
          </button>
       </div>
    </div>
  </div>
</template>

<script>
import Breadcrumb from '@/components/Breadcrumb.vue';

export default {
  name: 'WrapperAccount', 
  components: {
    Breadcrumb
  },
};
</script>

<style>

</style>