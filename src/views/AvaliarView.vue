<script setup>
import { computed, inject, watch } from 'vue'
import { useRoute, useRouter } from 'vue-router'

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
    <section class="formulario">
      <h2 class="titulo-formulario"><span class="icone-lapis">✏️</span> Nova Avaliação</h2>

      <div class="campo-grupo campo-largo">
        <label for="cafe">Café</label>
        <div class="select-wrapper">
          <select id="cafe" v-model="avaliacao.cafe">
            <option v-for="cafe in cafes" :key="cafe.nome" :value="cafe.nome">{{ cafe.nome }}</option>
          </select>
        </div>
      </div>

      <div class="grid-atributos">
        <div class="campo-grupo">
          <label>Aroma</label>
          <input v-model.number="avaliacao.aroma" type="number" min="0" max="10" placeholder="8" />
        </div>

        <div class="campo-grupo">
          <label>Doçura</label>
          <input v-model.number="avaliacao.doçura" type="number" min="0" max="10" placeholder="9" />
        </div>

        <div class="campo-grupo">
          <label>Acidez</label>
          <input v-model.number="avaliacao.acidez" type="number" min="0" max="10" placeholder="7" />
        </div>

        <div class="campo-grupo">
          <label>Corpo</label>
          <input v-model.number="avaliacao.corpo" type="number" min="0" max="10" placeholder="8" />
        </div>

        <div class="campo-grupo">
          <label>Finalização</label>
          <input v-model.number="avaliacao.finalizacao" type="number" min="0" max="10" placeholder="9" />
        </div>

        <div class="campo-grupo box-media-container">
          <div class="box-media">
            <span class="media-label">Média Atual</span>
            <span class="media-valor">{{ media }}</span>
          </div>
        </div>
      </div>

      <button class="botao-salvar" @click="salvarAvaliacao">
        <span class="icone-salvar">💾</span> Salvar Avaliação
      </button>

      <p v-if="mensagem" class="mensagem-sucesso">{{ mensagem }}</p>
    </section>

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
  </main>
</template>
