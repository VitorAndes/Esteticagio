<script setup lang="ts">
import ContatoComponent from './components/ContatoComponent.vue';
import divider from './components/divider.vue';
import HeaderComponent from './components/HeaderComponent.vue';
import InicioComponent from './components/InicioComponent.vue';
import ServicosComponent from './components/ServicosComponent.vue';
import SobreComponent from './components/SobreComponent.vue';

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
    // width: 100%;

    @media (min-width: 768px) {
      width: 100%;
      padding: 2rem;
    }

    @media (min-width: 1380px) {
      width: max(1300px);
      padding: 2rem;
    }
  }
}
</style>
