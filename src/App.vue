<script setup>
import { computed, ref } from 'vue'
import logo from '../index/src/logo.png'
import xicara from '../index/src/xicara.png'
import logoPessoa from '../index/src/logo_pessoa.png'
import pasta from '../index/src/pasta.png'
import flor from '../index/src/flor.png'
import graoCafe from '../index/src/grao-cafe.png'

const currentPage = ref('home')

const cafes = ref([
  { nome: 'Bourbon Amarelo', origem: 'Minas Gerais', nota: 8.7 },
  { nome: 'Catuaí Vermelho', origem: 'Paraná', nota: 7.9 },
  { nome: 'Arara', origem: 'Espírito Santo', nota: 8.3 },
  { nome: 'Mundo Novo', origem: 'Bahia', nota: 7.2 },
])

const avaliacao = ref({
  cafe: 'Bourbon Amarelo',
  aroma: '',
  doçura: '',
  acidez: '',
  corpo: '',
  finalizacao: '',
})

const mensagem = ref('')

const media = computed(() => {
  const notas = [avaliacao.value.aroma, avaliacao.value.doçura, avaliacao.value.acidez, avaliacao.value.corpo, avaliacao.value.finalizacao]
    .map((valor) => Number(valor))
    .filter((valor) => !Number.isNaN(valor))

  if (notas.length === 0) return '0.0'
  const soma = notas.reduce((total, valor) => total + valor, 0)
  return (soma / notas.length).toFixed(1)
})

function navegar(pagina) {
  currentPage.value = pagina
  mensagem.value = ''
}

function salvarAvaliacao() {
  const notas = [avaliacao.value.aroma, avaliacao.value.doçura, avaliacao.value.acidez, avaliacao.value.corpo, avaliacao.value.finalizacao]
  const invalidas = notas.some((valor) => valor === '' || Number.isNaN(Number(valor)))

  if (invalidas) {
    mensagem.value = 'Preencha todas as notas para salvar a avaliação.'
    return
  }

  const cafeSelecionado = cafes.value.find((item) => item.nome === avaliacao.value.cafe)
  if (cafeSelecionado) {
    cafeSelecionado.nota = Number(media.value)
    mensagem.value = `Avaliação salva para ${avaliacao.value.cafe}.`
    currentPage.value = 'ranking'
  }
}

function selecionarCafe(nome) {
  avaliacao.value.cafe = nome
  currentPage.value = 'avaliar'
}
</script>

<template>
  <div>
    <header class="cabecalho">
      <div class="cabecalho-container">
        <div class="logo-wrapper">
          <img class="logo" :src="logo" alt="Logo" />
        </div>

        <nav class="menu">
          <ul class="lista-menu">
            <li><a href="#" :class="{ ativo: currentPage === 'home' }" @click.prevent="navegar('home')">Home</a></li>
            <li><a href="#" :class="{ ativo: currentPage === 'cafes' }" @click.prevent="navegar('cafes')">Cafés</a></li>
            <li><a href="#" :class="{ ativo: currentPage === 'avaliar' }" @click.prevent="navegar('avaliar')">Avaliar</a></li>
            <li><a href="#" :class="{ ativo: currentPage === 'ranking' }" @click.prevent="navegar('ranking')">Ranking</a></li>
          </ul>
        </nav>
      </div>
    </header>

    <main v-if="currentPage === 'home'" class="conteudo">
      <section class="banner">
        <img class="banner-img" :src="xicara" alt="Xícara de café" />
        <h1 class="titulo">COFFEE QUALITY CHALLENGE</h1>
        <p class="subtitulo">Campeonato de Avaliação Sensorial de Cafés Especiais</p>
        <p class="descricao">Avalie, compare e descubra os melhores cafés através dos seus sentidos.</p>
      </section>

      <section class="cards-status">
        <div class="card card-participantes">
          <div class="card-icone-wrapper">
            <img :src="logoPessoa" alt="" class="card-icone" />
          </div>
          <div class="card-info">
            <p class="card-label">Cafés Participantes</p>
            <h2 class="card-numero">{{ cafes.length }}</h2>
          </div>
        </div>

        <div class="card card-avaliacoes">
          <div class="card-icone-wrapper">
            <img :src="pasta" alt="" class="card-icone" />
          </div>
          <div class="card-info">
            <p class="card-label">Avaliações Registradas</p>
            <h2 class="card-numero">{{ cafes.filter((cafe) => cafe.nota).length }}</h2>
          </div>
        </div>
      </section>

      <div class="acao-principal">
        <a href="#" class="botao-ver-cafes" @click.prevent="navegar('cafes')">
          <img :src="xicara" alt="" class="icone-botao" />
          Ver Cafés
        </a>
      </div>

      <section class="sobre">
        <div class="sobre-container">
          <img :src="flor" alt="Ramo de café" class="sobre-img" />
          <div class="sobre-conteudo">
            <h3 class="sobre-titulo">Sobre o Campeonato</h3>
            <p class="sobre-texto">
              Este campeonato tem como objetivo promover a qualidade dos nossos cafés através de avaliações sensoriais baseadas nos critérios da metodologia SCA.
            </p>
          </div>
        </div>
      </section>
    </main>

    <main v-else-if="currentPage === 'cafes'" class="pagina-cafes">
      <h2 class="titulo-pagina"><span class="icone-titulo">☕</span> Cafés Participantes</h2>

      <section class="lista-cafes">
        <div v-for="cafe in cafes" :key="cafe.nome" class="cafe">
          <div class="cafe-esquerda">
            <div class="grao-container">
              <img class="grao-img" :src="graoCafe" alt="Grão de café" />
            </div>
            <div class="cafe-textos">
              <h3>{{ cafe.nome }}</h3>
              <p>Origem: {{ cafe.origem }}</p>
            </div>
          </div>
          <button class="botao-avaliar" @click="selecionarCafe(cafe.nome)">Avaliar</button>
        </div>
      </section>
    </main>

    <main v-else-if="currentPage === 'avaliar'" class="pagina-avaliar">
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

    <main v-else class="pagina-ranking">
      <section class="tabela-ranking-container">
        <table class="tabela-ranking">
          <tbody>
            <tr v-for="(cafe, index) in [...cafes].sort((a, b) => b.nota - a.nota)" :key="cafe.nome" class="linha-ranking">
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
      </section>
    </main>
  </div>
</template>
