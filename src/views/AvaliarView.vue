<script setup>
import { computed, inject, watch } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import RatingForm from '../components/RatingForm.vue'

const route = useRoute()
const router = useRouter()
const cafeApp = inject('cafeApp')

const cafes = computed(() => cafeApp.cafes.value)
const avaliacao = cafeApp.avaliacao
const mensagem = cafeApp.mensagem
const media = cafeApp.media

watch(
  () => route.query.cafe,
  (cafeSelecionado) => {
    if (typeof cafeSelecionado === 'string' && cafeSelecionado) {
      cafeApp.avaliacao.value.cafe = cafeSelecionado
    }
  },
  { immediate: true },
)

function salvarAvaliacao() {
  cafeApp.salvarAvaliacao()
  if (cafeApp.mensagem.value.includes('Avaliação salva')) {
    router.push('/ranking')
  }
}
</script>

<template>
  <main class="pagina-avaliar">
    <RatingForm
      :avaliacao="avaliacao"
      :media="media"
      :cafes="cafes"
      :salvarAvaliacao="salvarAvaliacao"
    />

    <section class="metodologia">
      <h2>Metodologia</h2>
      <p>As avaliações seguem os critérios da metodologia SCA.</p>
      <ul>
        <li>Aroma</li>
        <li>Doçura</li>
        <li>Acidez</li>
        <li>Corpo</li>
        <li>Finalização</li>
      </ul>
      <p>Cada critério recebe uma nota de 0 a 10.</p>
      <p>A média final é calculada pela média das notas.</p>
    </section>

    <p v-if="mensagem" class="mensagem-sucesso">{{ mensagem }}</p>
  </main>
</template>
