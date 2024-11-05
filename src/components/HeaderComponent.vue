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
    padding: 0px 2rem;
    border-bottom: 1px solid black;
    display: flex;
    justify-content: space-between;
    align-items: baseline;
    height: 90px;
    position: sticky;
    top: 0;
    background: @bg_terciary;

    .header_title {
        font-family: @font_title;
        font-size: 40px;
        color: @text_primary;

        span {
            color: @text_terciary;
        }
    }

    .navbar {
        display: flex;
        align-items: center;
        gap: 1.5rem;
        height: 100%;

        .navbar_item {
            font-family: @font_primary;
            font-size: 24px;
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
                background-color: black;
                transition: width 1s;
            }

            &:hover:before {
                width: 100%;
                color: @text_secondary;
            }

            &:hover {
                color: @text_secondary;
                transition: color 1s;
            }
        }
    }
}
</style>