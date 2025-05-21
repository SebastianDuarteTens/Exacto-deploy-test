<template>
    <q-layout view="hHh lpR fFf">

        <!-- HEADER: contiene la franja "bash" arriba -->
        <q-header elevated class="main-header" style="background-color: #1E1E1E;">
            <div v-if="showBash" class="bash-content" style="max-width: 1500px; margin: auto; width: 100%;">
                <span class="text-green">$ generate --pi --number-of-digits 6.02E23</span>
                <q-btn dense flat icon="close" class="close-btn" @click="showBash = false" />
            </div>

            <q-toolbar>
                <q-toolbar-title
                    style="display: flex; justify-content: center; align-items: center; padding: auto; height: 90px;">
                    <img src="../assets/ExactoWhite.svg" alt="ExactoBv" class="logo-img" />
                </q-toolbar-title>
            </q-toolbar>
        </q-header>

        <!-- Contenido de la página -->
        <q-page-container>
            <router-view />
        </q-page-container>

        <q-footer class="text-white" style="background-color: #1E1E1E; height: 8vh;">
            <div class="row items-center justify-between q-pa-md" style="max-width: 1500px; margin: auto; width: 100%;">

                <!-- Lado izquierdo -->
                <div class="icon-wrapper column">
                    <span class="rights">Exacto B.V. © 2025. All rights reserved.</span>
                </div>

                <!-- Lado derecho -->
                <div class="row items-center q-gutter-x-sm">
                    <a href="mailto:contact@goexacto.com?subject=Information&body=I%20would%20like%20to%20receive%20more%20information%20about%20your%20company."
                        class="icon-link" title="Enviar correo" style="text-decoration: none; color: inherit;">
                        <span class="tooltip">contact@goexacto.com</span>
                        <font-awesome-icon icon="fa-solid fa-envelope" class="social-icon" />
                    </a>
                </div>

            </div>
        </q-footer>
    </q-layout>
</template>

<script setup>
import { ref } from 'vue'

const showBash = ref(true)
</script>

<style scoped>
.main-header {
    display: flex;
    flex-direction: column;
    padding: 0;
}

.bash-content {
    width: 100%;
    background-color: #1E1E1E;
    color: #00ff00;
    font-family: 'Courier New', monospace;
    padding: 10px 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.close-btn {
    color: #00ff00;
}

.logo-img {
    height: 75px;
    object-fit: contain;
    padding: 0 16px;
}

q-footer {
    height: 50px;
}

.rights {
    font-family: 'Montserrat', sans-serif;
    font-weight: 500;
    font-size: 1rem;
}

.social-icon {
    font-size: 2rem;
    opacity: 50%;
}

.social-icon:hover {
    opacity: 100%;
}

.icon-wrapper {
    position: relative;
    display: inline-block;
}

.icon-link {
    position: relative;
    text-decoration: none;
    color: inherit;
}

.tooltip {
    position: absolute;
    right: 100%;
    /* se ubica completamente a la izquierda del icono */
    margin-right: 8px;
    top: 50%;
    transform: translateY(-50%);
    font-family: 'Montserrat', sans-serif;
    font-weight: 500;
    font-size: 1rem;
    color: #fff;
    padding: 4px 8px;
    border-radius: 4px;
    white-space: nowrap;
    opacity: 0;
    transition: opacity 0.3s ease;
    pointer-events: none;
}

.icon-link:hover .tooltip {
    opacity: 1;
}
</style>
