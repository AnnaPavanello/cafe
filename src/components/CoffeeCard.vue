<script setup>
import { defineProps, defineEmits } from 'vue'

const props = defineProps({
  cafe: {
    type: Object,
    required: true,
  },
  showButton: {
    type: Boolean,
    default: true,
  },
})

const emit = defineEmits(['avaliar'])

function avaliar() {
  emit('avaliar', props.cafe.nome)
}
</script>

<template>
  <div class="cafe">
    <div class="cafe-esquerda">
      <span class="icone-grao">☕</span>
      
      <div class="cafe-textos">
        <h3>{{ props.cafe.nome }}</h3>
        <p>Origem: {{ props.cafe.origem }}</p>
      </div>
    </div>

    <div class="cafe-acoes" v-if="props.showButton">
      <button class="botao-avaliar" @click="avaliar">Avaliar</button>
    </div>
  </div>
</template>

<style scoped>
.cafe {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #ffffff;
  border-bottom: 1px solid #efeae6;
  padding: 1.2rem 0.5rem;
  margin-bottom: 0.5rem;
  font-family: sans-serif;
}

.cafe-esquerda {
  display: flex;
  align-items: center;
  gap: 1rem;
}

.icone-grao {
  font-size: 2.2rem; 
  display: inline-block;
  line-height: 1;
}

.cafe-textos h3 {
  margin: 0 0 0.2rem 0;
  color: #2b1810;
  font-size: 1.2rem;
  font-weight: 700;
}

.cafe-textos p {
  margin: 0;
  color: #6e6560;
  font-size: 0.95rem;
}

.botao-avaliar {
  background-color: transparent;
  color: #7c5339;
  border: 1.5px solid #a38471;
  border-radius: 8px;
  padding: 0.6rem 1.5rem;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
}
</style>