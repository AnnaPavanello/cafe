<script setup>
import { computed, inject } from 'vue'
import { useRouter } from 'vue-router'
import CafeCard from '../components/CafeCard.vue'

const router = useRouter()
const cafeApp = inject('cafeApp')

const cafes = computed(() => cafeApp.cafes.value)

function selecionarCafe(nome) {
  cafeApp.avaliacao.value.cafe = nome
  router.push('/avaliar')
}
</script>

<template>
  <main class="pagina-cafes">
    <h2 class="titulo-pagina"><span class="icone-titulo">☕</span> Cafés Participantes</h2>

    <section class="lista-cafes">
      <CafeCard v-for="cafe in cafes" :key="cafe.nome" :cafe="cafe" show-button @avaliar="selecionarCafe" />
    </section>
  </main>
</template>
