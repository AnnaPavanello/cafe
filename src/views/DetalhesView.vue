<script setup>
import { computed, inject } from 'vue'
import { useRoute, useRouter } from 'vue-router'

const route = useRoute()
const router = useRouter()
const cafeApp = inject('cafeApp')

const cafe = computed(() => cafeApp.cafes.value.find((item) => item.nome === route.params.nome))

function voltar() {
  router.push('/cafes')
}
</script>

<template>
  <main class="pagina-cafes">
    <h2 class="titulo-pagina">Detalhes do Café</h2>
    <div v-if="cafe" class="detalhes-card">
      <h3>{{ cafe.nome }}</h3>
      <p><strong>Origem:</strong> {{ cafe.origem }}</p>
      <p><strong>Nota atual:</strong> {{ cafe.nota !== null ? cafe.nota.toFixed(1) : 'Ainda sem avaliação' }}</p>
      <button class="botao-avaliar" @click="voltar">Voltar</button>
    </div>
    <div v-else>
      <p>Café não encontrado.</p>
      <button class="botao-avaliar" @click="voltar">Voltar</button>
    </div>
  </main>
</template>
