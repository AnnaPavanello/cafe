<script setup>
import { computed, inject } from 'vue'
import LeaderboardTable from '../components/LeaderboardTable.vue'

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
        <LeaderboardTable :ranking="ranking" />
      </template>

      <div v-else class="pagina-ranking-vazia">
        <div class="ranking-vazio-card">
          <h2 class="titulo-pagina"><span class="icone-trofeu">🏆</span> Ranking Geral</h2>
          <section class="tabela-ranking-container tabela-ranking-vazia">
            <LeaderboardTable :ranking="cafes" />
          </section>
        </div>
      </div>
    </section>
  </main>
</template>
