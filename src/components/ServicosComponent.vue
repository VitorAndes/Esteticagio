<script setup lang="ts">
import CardServicos from "./CardServicos.vue";
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
    align-items: start;
    gap: 12px;
    padding: 0px 40px;

    @media (min-width: 768px) {
        height: 100%;
    }

    .servicos_title {
        .format_title();
        color: @text_primary;
        margin-bottom: 12px;
        text-align: start;

    }

    .servicos_description {
        .format_description();

        margin-bottom: 24px;
    }

}
</style>