<script setup>
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
        <div class="grao-img">☕</div>
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
