<script setup>
import { computed, inject } from 'vue'
import { useRouter } from 'vue-router'
import CoffeeCard from '../components/CoffeeCard.vue'

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
      <CoffeeCard 
        v-for="cafe in cafes" 
        :key="cafe.nome" 
        :cafe="cafe" 
        @avaliar="selecionarCafe" 
      />
    </section>
  </main>
</template>