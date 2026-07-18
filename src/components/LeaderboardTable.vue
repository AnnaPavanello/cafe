<script setup>
import { defineProps } from 'vue'

const props = defineProps({
  ranking: Array,
  showPositions: {
    type: Boolean,
    default: true,
  },
})
</script>

<template>
  <div class="tabela-ranking-container">
    <table class="tabela-ranking">
      <tbody>
        <tr v-for="(cafe, index) in props.ranking" :key="cafe.nome" class="linha-ranking">
          <template v-if="props.showPositions">
            <td class="coluna-medalha">
              <span v-if="index === 0" class="medalha ouro">🥇</span>
              <span v-else-if="index === 1" class="medalha prata">🥈</span>
              <span v-else-if="index === 2" class="medalha bronze">🥉</span>
            </td>
            <td class="coluna-posicao">{{ index + 1 }}º</td>
          </template>

          <td class="coluna-info-cafe">
            <span class="nome-cafe">{{ cafe.nome }}</span>
            <span class="origem-cafe">{{ cafe.origem }}</span>
          </td>
          <td class="coluna-nota">{{ cafe.nota !== null ? cafe.nota.toFixed(1) : '—' }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
