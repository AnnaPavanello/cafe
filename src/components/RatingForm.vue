<script setup>
import { computed } from 'vue'
import { defineProps } from 'vue'

const props = defineProps({
  avaliacao: Object,
  media: String,
  cafes: Array,
  salvarAvaliacao: Function,
})

const opcoes = computed(() => props.cafes.map((cafe) => cafe.nome))
</script>

<template>
  <section class="pagina-avaliar">
    <h2 class="titulo-formulario">Nova Avaliação</h2>

    <div class="campo-grupo campo-largo">
      <label for="cafe">Café</label>
      <select id="cafe" v-model="props.avaliacao.cafe">
        <option v-for="nome in opcoes" :key="nome" :value="nome">{{ nome }}</option>
      </select>
    </div>

    <div class="grid-atributos">
      <div class="campo-grupo">
        <label>Aroma</label>
        <input v-model.number="props.avaliacao.aroma" type="number" min="0" max="10" />
      </div>
      <div class="campo-grupo">
        <label>Doçura</label>
        <input v-model.number="props.avaliacao.doçura" type="number" min="0" max="10" />
      </div>
      <div class="campo-grupo">
        <label>Acidez</label>
        <input v-model.number="props.avaliacao.acidez" type="number" min="0" max="10" />
      </div>
      <div class="campo-grupo">
        <label>Corpo</label>
        <input v-model.number="props.avaliacao.corpo" type="number" min="0" max="10" />
      </div>
      <div class="campo-grupo">
        <label>Finalização</label>
        <input v-model.number="props.avaliacao.finalizacao" type="number" min="0" max="10" />
      </div>
    </div>

    <div class="box-media">
      <span>Média Atual</span>
      <strong>{{ props.media }}</strong>
    </div>

    <button class="botao-salvar" @click="props.salvarAvaliacao">Salvar Avaliação</button>
  </section>
</template>
