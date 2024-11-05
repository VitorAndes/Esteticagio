<script setup lang="ts">
import { ref } from 'vue';

interface Service {
    service_img: string;
    service_title: string;
    service_description: string;
}

const services = ref<Service[]>([
    {
        service_img: '/assets/service_mass.svg',
        service_title: 'Massagem relaxante',
        service_description: 'Uma experiência de profundo relaxamento que alivia tensões musculares e promove o bem-estar geral.'
    },
    {
        service_img: '/assets/service_henn.svg',
        service_title: 'Henna',
        service_description: 'Oferecemos aplicação de henna, proporcionando um resultado natural e duradouro.'
    },
    {
        service_img: '/assets/service_desi.svg',
        service_title: 'Design simples',
        service_description: 'Criação de designs e legantes e discretos para realçar a beleza natural das sobrancelhas, cílios ou unhas.'
    },
    {
        service_img: '/assets/service_vent.svg',
        service_title: 'Ventosa terapia',
        service_description: 'Técnica milenar que utiliza ventosas para promover a circulação sanguínea, aliviar dores musculares e auxiliar em tratamentos estéticos.'
    }
]); 
</script>
<template>
    <div id="services_container">
        <div v-for="service in services" :key="service.service_title" class="service_card">
            <img :src="service.service_img" alt="icone dos serviços" class="service_img" loading="lazy">
            <h3 class="service_title">{{ service.service_title }}</h3>
            <p class="service_description">{{ service.service_description }}</p>
        </div>
    </div>
</template>

<style lang="less">
@import "/src/styles/variables.less";

#services_container {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    gap: 12px;
    margin: auto;

    .service_card {
        display: flex;
        flex-direction: column;
        align-items: center;
        text-align: center;
        justify-content: space-around;

        gap: 5px;
        height: 250px;
        width: 170px;
        padding: 4px;
        background: @bg_secondary;
        border-radius: @border_radius;
        .shadow_gold();

        @media (min-width: 768px) {
            height: 288px;
            width: 200px;
        }

        @media (min-width: 1200px) {
            height: 358px;
            width: 270px;
        }

        .service_img {
            width: 50px;
            height: 50px;
            color: @text_secondary;

            @media (min-width: 768px) {
                width: 100px;
                height: 100px;

            }
        }

        .service_title {
            .format_title_card();
            color: @text_primary;
        }

        .service_description {
            .format_description();
            text-align: center;
        }
    }
}
</style>