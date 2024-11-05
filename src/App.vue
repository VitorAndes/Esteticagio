<script setup lang="ts">
import HeaderComponent from './components/HeaderComponent.vue';
import InicioComponent from './components/InicioComponent.vue';
import SobreComponent from './components/SobreComponent.vue';
import ServicosComponent from './components/ServicosComponent.vue';
import ContatoComponent from './components/ContatoComponent.vue';
import divider from './components/divider.vue';

</script>

<template>
  <div id="body">
    <HeaderComponent />
    <div id="container">
      <InicioComponent />
      <divider />
      <SobreComponent />
      <divider />
      <ServicosComponent />
      <divider />
      <ContatoComponent />
    </div>
  </div>
</template>

<style lang="less">
#body {
  min-height: 100vh;
  position: relative;

  #container {
    display: flex;
    flex-direction: column;
    margin: auto;
    width: max(1300px);
    padding: 2rem;
  }
}
</style>
