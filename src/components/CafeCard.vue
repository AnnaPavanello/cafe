<script setup>
import graoCafe from '../../index/src/grao-cafe.png'

defineProps({
  cafe: {
    type: Object,
    required: true,
  },
  showButton: {
    type: Boolean,
    default: false,
  },
})

const emit = defineEmits(['avaliar'])
</script>

<template>
  <div class="cafe">
    <div class="cafe-esquerda">
      <div class="grao-container">
        <img class="grao-img" :src="graoCafe" alt="Grão de café" />
      </div>
      <div class="cafe-textos">
        <h3>{{ cafe.nome }}</h3>
        <p>Origem: {{ cafe.origem }}</p>
      </div>
    </div>

    <button v-if="showButton" class="botao-avaliar" @click="emit('avaliar', cafe.nome)">
      Avaliar
    </button>
  </div>
</template>
