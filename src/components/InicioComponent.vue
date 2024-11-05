<template>
    <div id="section_inicio">
        <div class="section_inicio__container">
            <h1 class="section_title">BELEZA AUTÊNTICA PARA VOCÊ</h1>
            <p class="section_paragraph">especializado em cuidados naturais</p>
            <button class="section_button">
                <a href="#">Agendar um horário</a>
            </button>
        </div>
    </div>
</template>

<style lang="less">
@import "/src/styles/variables.less";

#section_inicio {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: start;

    padding-left: 100px;
    background-image: url('/assets/bg_section_sobre.jpg');
    background-size: cover;
    width: 100%;
    height: 500px;
    border-radius: @border_radius;

    .section_inicio__container {
        width: 500px;

        .section_title {
            .format_title();
            color: @text_secondary;
            margin-bottom: 9px;
        }

        .section_paragraph {
            .format_description();
            color: @text_span;
            margin-bottom: 24px;
        }

        .section_button {
            background: linear-gradient(90deg, @bg_terciary 0%, @gradient_primary 100%);
            padding: 20px 40px;
            border: none;
            border-radius: 8px;
            -webkit-box-shadow: 0px 5px 14px 0px rgba(0, 0, 0, 1);
            -moz-box-shadow: 0px 5px 14px 0px rgba(0, 0, 0, 1);
            box-shadow: 0px 5px 14px 0px rgba(0, 0, 0, 1);
            transition: all 1s;

            &:hover {
                scale: 1.0;
                border: 1px solid @gradient_secondary;
            }

            a {
                font-family: @font_primary;
                font-size: 24px;
                color: @text_secondary;
            }
        }
    }



}
</style>