<script setup lang="ts">
import { MessageCircle } from 'lucide-vue-next';
import { Instagram } from 'lucide-vue-next';
</script>

<template>
    <div id="section_contato">
        <h1 class="section_title">Entre em contato</h1>
        <p class="section_description">Entre em contato com a Esteticagio, queremos tirar suas dúvidas, ouvir suas
            críticas e sugestões.</p>
        <div class="section_contatos">
            <button>
                <a href="https://wa.me/559285619810" target="_blank">
                    <img src="../assets/whatssap.svg" width="32" height="32" alt="logo do whatssap">
                    Entrar em contato
                </a>
            </button>
            <a href="https://www.instagram.com/esteticagio_/" target="_blank">
                <img src="../assets/instagram.svg" width="32" height="32" alt="logo do instagram">
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
    gap: 12px;

    .section_title {
        .format_title();
        color: @text_primary;
        margin-bottom: 10px;
    }

    .section_description {
        .format_description();
        width: 500px;
        margin-bottom: 25px;
    }

    .section_contatos {
        display: flex;
        align-items: center;
        gap: 22px;

        button {
            display: flex;
            align-items: center;
            gap: 10px;
            border: none;
            border-radius: @border_radius;
            padding: 15px 22px;
            background: @bg_primary ;
            cursor: pointer;
            transition: all 1s;



            a {
                .format_description();
                color: @text_secondary;

                &:hover {
                    color: white;
                }
            }
        }

        a {
            .format_description();
            display: flex;
            align-items: center;
            gap: 12px;
            color: @text_secondary;
            cursor: pointer;
            transition: all 1s;

            &:hover {
                color: @text_primary;
            }
        }

    }
}
</style>