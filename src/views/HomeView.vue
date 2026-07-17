<script setup>
import { computed, inject } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()
const cafeApp = inject('cafeApp')

const cafes = computed(() => cafeApp.cafes.value)
const avaliacoesRegistradas = computed(() => cafeApp.cafes.value.filter((cafe) => cafe.nota !== null).length)
</script>

<template>
  <main class="conteudo">
    <section class="banner">
      <div class="banner-img" aria-label="Xícara de café">☕</div>
      <h1 class="titulo">COFFEE QUALITY CHALLENGE</h1>
      <p class="subtitulo">Campeonato de Avaliação Sensorial de Cafés Especiais</p>
      <p class="descricao">Avalie, compare e descubra os melhores cafés através dos seus sentidos.</p>
    </section>

    <section class="cards-status">
      <a href="#" class="card card-participantes" @click.prevent="router.push('/cafes')">
        <div class="card-icone-wrapper">
          <div class="card-icone" aria-hidden="true">👤</div>
        </div>
        <div class="card-info">
          <p class="card-label">Cafés Participantes</p>
          <h2 class="card-numero">{{ cafes.length }}</h2>
        </div>
      </a>

      <a href="#" class="card card-avaliacoes" @click.prevent="router.push('/ranking')">
        <div class="card-icone-wrapper">
          <div class="card-icone" aria-hidden="true">📄</div>
        </div>
        <div class="card-info">
          <p class="card-label">Avaliações Registradas</p>
          <h2 class="card-numero">{{ avaliacoesRegistradas }}</h2>
        </div>
      </a>
    </section>

    <div class="acao-principal">
      <a href="#" class="botao-ver-cafes" @click.prevent="router.push('/cafes')">
        <span class="icone-botao" aria-hidden="true">☕</span>
        Ver Cafés
      </a>
    </div>

    <section class="sobre">
      <div class="sobre-container">
        <div class="sobre-img" aria-label="Ramo de café">🌿</div>
        <div class="sobre-conteudo">
          <h3 class="sobre-titulo">Sobre o Campeonato</h3>
          <p class="sobre-texto">
            Este campeonato tem como objetivo promover a qualidade dos nossos cafés através de avaliações sensoriais baseadas nos critérios da metodologia SCA.
          </p>
        </div>
      </div>
    </section>
  </main>
</template>
