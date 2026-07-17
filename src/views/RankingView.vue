<script setup>
import { computed, inject } from 'vue'

const cafeApp = inject('cafeApp')
const cafes = computed(() => cafeApp.cafes.value)

const ranking = computed(() => {
  return [...cafes.value]
    .filter((cafe) => cafe.nota !== null)
    .sort((a, b) => b.nota - a.nota)
})
</script>

<template>
  <main class="pagina-ranking">
    <section class="tabela-ranking-container">
      <template v-if="ranking.length">
        <table class="tabela-ranking">
          <tbody>
            <tr v-for="(cafe, index) in ranking" :key="cafe.nome" class="linha-ranking">
              <td class="coluna-medalha">
                <span v-if="index === 0" class="medalha ouro">🥇</span>
                <span v-else-if="index === 1" class="medalha prata">🥈</span>
                <span v-else-if="index === 2" class="medalha bronze">🥉</span>
              </td>
              <td class="coluna-posicao">{{ index + 1 }}º</td>
              <td class="coluna-info-cafe">
                <span class="nome-cafe">{{ cafe.nome }}</span>
                <span class="origem-cafe">{{ cafe.origem }}</span>
              </td>
              <td class="coluna-nota">{{ cafe.nota.toFixed(1) }}</td>
            </tr>
          </tbody>
        </table>
      </template>

      <div v-else class="pagina-ranking-vazia">
        <div class="ranking-vazio-card">
          <h2 class="titulo-pagina"><span class="icone-trofeu">🏆</span> Ranking Geral</h2>
          <section class="tabela-ranking-container tabela-ranking-vazia">
            <table class="tabela-ranking">
              <tbody>
                <tr v-for="cafe in cafes" :key="cafe.nome" class="linha-ranking linha-ranking-vazia">
                  <td class="coluna-vazia"></td>
                  <td class="coluna-posicao">—</td>
                  <td class="coluna-info-cafe">
                    <span class="nome-cafe">{{ cafe.nome }}</span>
                    <span class="origem-cafe">{{ cafe.origem }}</span>
                  </td>
                  <td class="coluna-nota coluna-nota-vazia">—</td>
                </tr>
              </tbody>
            </table>
          </section>
        </div>
      </div>
    </section>
  </main>
</template>
