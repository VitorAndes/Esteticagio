<template>
    <div id="section_contato" v-motion-slide-visible-bottom :duration="1000">
        <h1 class="section_title">Entre em contato</h1>
        <p class="section_description">Entre em contato com a Esteticagio, queremos tirar suas dúvidas, ouvir suas
            críticas e sugestões.</p>
        <div class="section_contatos">
            <a href="https://wa.me/559285619810" target="_blank">
                <button>
                    <img src="/assets/whatssap.svg" width="22" height="22" alt="logo do whatssap">
                    Entrar em contato
                </button>
            </a>
            <a href="https://www.instagram.com/esteticagio_/" target="_blank">
                <img src="/assets/instagram.svg" width="22" height="22" alt="logo do instagram">
                esteticagio_
            </a>
        </div>
    </div>
</template>

<style lang="less">
@import "/src/styles/variables.less";

#section_contato {
    display: flex;
    flex-direction: column;
    padding: 12px;

    .section_title {
        .format_title();
        color: @text_primary;
        margin-bottom: 8px;
    }

    .section_description {
        .format_description();
        margin-bottom: 16px;
    }

    .section_contatos {
        display: flex;
        align-items: center;
        gap: 22px;

        a {
            .format_description();
            color: @text_secondary;

            .format_description();
            display: flex;
            align-items: center;
            gap: 12px;
            color: @text_secondary;
            cursor: pointer;
            transition: all .2s;

            &:hover {
                color: @text_primary;
            }

            button {
                display: flex;
                align-items: center;
                gap: 10px;
                border: none;
                padding: 7px 12px;
                border-radius: @border_radius;
                background: @bg_primary ;
                cursor: pointer;
                transition: all .2s;

                @media (min-width: 768px) {
                    padding: 14px 20px;
                }

                &:hover {
                    color: white;
                    box-shadow: 0px 5px 14px 0px @gradient_secondary;
                }

            }
        }


    }
}
</style>
