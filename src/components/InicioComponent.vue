<script setup>

</script>

<template>
    <div id="section_inicio">
        <div class="section_inicio__container" v-motion-slide-visible-bottom :duration="1000">
            <h1 class="section_title">BELEZA AUTÊNTICA PARA VOCÊ</h1>
            <p class="section_paragraph">especializada em cuidados naturais</p>
            <a href="https://wa.me/559285619810">
                <button class="section_button">
                    Agendar um horario
                </button>
            </a>
        </div>
    </div>
</template>

<style lang="less">
@import "/src/styles/variables.less";

#section_inicio {
    display: flex;
    align-items: center;
    padding-left: 20px;
    background-image: url('/assets/bg_section_sobre_small.webp?webp');
    background-size: cover;
    background-position: center center;
    background-repeat: no-repeat;
    width: 100%;
    border-radius: @border_radius;
    height: 260px;


    @media (min-width: 768px) {
        height: 500px;
        padding-left: 100px;
        background-image: url('/assets/bg_section_sobre.webp?webp');
    }

    .section_inicio__container {
        display: flex;
        flex-direction: column;
        align-items: start;
        gap: 5px;
        width: 200px;


        @media (min-width: 768px) {
            width: 500px;

        }

        .section_title {
            .format_title();
            color: @text_secondary;
            margin-bottom: 6px;
        }

        .section_paragraph {
            .format_description();
            color: @text_span;
            margin-bottom: 12px;
        }

        .section_button {
            background: linear-gradient(90deg, @bg_terciary 0%, @gradient_primary 100%);

            padding: 7px 14px;
            border: none;
            border-radius: 8px;
            -webkit-box-shadow: 0px 5px 14px 0px rgba(0, 0, 0, 1);
            -moz-box-shadow: 0px 5px 14px 0px rgba(0, 0, 0, 1);
            box-shadow: 0px 5px 14px 0px rgba(0, 0, 0, 1);
            transition: all .2s;


            @media (min-width: 768px) {
                padding: 14px 20px;
            }

            &:hover {
                scale: 1;
                box-shadow: 0px 5px 14px 0px @gradient_secondary;
            }

            a {
                .format_description();
                color: @text_secondary;
            }
        }
    }



}
</style>