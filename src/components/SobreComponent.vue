<script setup lang="ts">
</script>

<template>
    <div id="section_sobre">
        <img class="section_sobre__avatar" src="/assets/gio_avatar.png" alt="foto de gio caldeira, esteticista">
        <div class="section_sobre__content">
            <h1 class="section_sobre__content_title">Sobre mim</h1>
            <p class="section_sobre__content_description">Sempre fui fascinada pela beleza e pelo poder transformador
                que
                ela
                exerce sobre as pessoas. A estética,
                para mim, é mais do que uma profissão, é uma verdadeira paixão.</p>
            <p class="section_sobre__content_description">A decisão de seguir a carreira de esteticista foi natural,
                pois
                me
                permitiria aliar meu amor pela beleza
                à oportunidade de ajudar outras pessoas a se sentirem mais confiantes e felizes consigo mesmas.</p>
            <p class="section_sobre__content_description">A cada dia, me dedico a aprimorar meus conhecimentos e a
                oferecer o que
                há de mais moderno e eficaz em
                tratamentos estéticos. Acredito que a beleza exterior reflete a beleza interior e é com grande
                satisfação que contribuo para o bem-estar dos meus clientes.</p>
        </div>
    </div>
</template>

<style lang="less">
@import "/src/styles/variables.less";

#section_sobre {
    display: flex;
    flex-direction: column;
    gap: 22px;
    align-items: center;
    width: 100%;

    @media (min-width: 768px) {
        flex-direction: row;
        justify-content: center;
        height: 500px;
    }

    .section_sobre__avatar {
        width: 200px;
        height: 250px;
        border-radius: @border_radius;

        .shadow_gold();

        @media (min-width: 768px) {
            height: 500px;
            width: 400px;
        }
    }

    .section_sobre__content {
        padding: 0px 40px;
        text-align: start;

        .section_sobre__content_title {
            .format_title();
            color: @text_primary;
            margin-bottom: 16px;
        }

        .section_sobre__content_description {
            .format_description();
            color: @text_secondary;
            margin-bottom: 8px;
        }
    }

}
</style>