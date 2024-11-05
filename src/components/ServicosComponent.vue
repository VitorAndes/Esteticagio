<script setup lang="ts">
import CardServicos from "./CardServicos.vue"    
</script>

<template>
    <div id="section_servicos">
        <h1 class="servicos_title">Serviços</h1>
        <p class="servicos_description">Ofereço uma variedade de serviços estéticos que visam promover o bem-estar
            físico e emocional dos meus
            clientes. Entre os serviços disponíveis estão:</p>
        <CardServicos />
    </div>
</template>

<style lang="less">
@import "/src/styles/variables.less";

#section_servicos {
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 500px;

    .servicos_title {
        .format_title();
        color: @text_primary;
        margin-bottom: 12px
    }

    .servicos_description {
        .format_description();
        width: 500px;
        text-align: center;
        margin-bottom: 24px;
    }

}
</style>