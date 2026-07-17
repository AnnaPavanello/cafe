<script setup>
import { useRouter } from 'vue-router'
import { defineProps, defineEmits } from 'vue'
import { graoCafe } from '../assets/images'

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
const router = useRouter()

function abrirDetalhes() {
  router.push({ name: 'Detalhes', params: { nome: props.cafe.nome } })
}

function avaliar() {
  emit('avaliar', props.cafe.nome)
}
</script>

<template>
  <div class="cafe">
    <div class="cafe-esquerda">
      <div class="grao-container">
        <img class="icone-grao" :src="graoCafe" alt="Grão de café" />
      </div>
      <div class="cafe-textos">
        <h3>{{ props.cafe.nome }}</h3>
        <p>Origem: {{ props.cafe.origem }}</p>
      </div>
    </div>

    <div class="cafe-acoes" v-if="props.showButton">
      <button class="botao-avaliar" @click="avaliar">Avaliar</button>
      <button class="botao-detalhes" @click="abrirDetalhes">Detalhes</button>
    </div>
  </div>
</template>
