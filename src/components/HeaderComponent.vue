<template>
    <div id="header">
        <h1 class="header_title">Estetica<span>gio.</span></h1>
        <div class="navbar">
            <a href="#section_inicio" class="navbar_item">Inicio</a>
            <a href="#section_sobre" class="navbar_item">Sobre</a>
            <a href="#section_servicos" class="navbar_item">Serviços</a>
            <a href="#section_contato" class="navbar_item">Contato</a>
        </div>
    </div>
</template>

<style lang="less">
@import "/src/styles/variables.less";

#header {
    display: flex;

    align-items: center;
    height: 60px;
    padding: 0px 12px;
    position: sticky;
    top: 0;
    background: @bg_terciary;

    .background_glass();

    @media (min-width: 768px) {
        padding: 0px 2rem;
        justify-content: space-between;
        align-items: center;
        height: 90px;
    }

    .header_title {
        .format_title();
        color: @text_primary;
        // margin: auto 0;

        span {
            color: @text_terciary;
        }
    }

    .navbar {
        display: none;
        align-items: center;
        gap: 1.5rem;
        height: 100%;

        @media (min-width: 768px) {
            display: flex;
        }

        .navbar_item {
            .format_description();
            color: @text_primary;
            position: relative;

            &:before {
                content: "";
                position: absolute;
                bottom: 0;
                left: 0;
                width: 0;
                height: 2px;
                border-radius: @border_radius;
                background-color: @gradient_primary;
                transition: width .2s;
            }

            &:hover:before {
                width: 100%;
            }

            &:hover {
                color: @text_secondary;
                transition: color .2s;
            }
        }
    }
}
</style>