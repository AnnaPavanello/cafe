import { createApp, ref, computed } from 'vue'
import App from './App.vue'
import router from './router/index.js'
import './styles.css'

const cafes = ref([
  { nome: 'Bourbon Amarelo', origem: 'Minas Gerais', nota: null },
  { nome: 'Catuaí Vermelho', origem: 'Paraná', nota: null },
  { nome: 'Arara', origem: 'Espírito Santo', nota: null },
  { nome: 'Mundo Novo', origem: 'Bahia', nota: null },
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
  }
}

const app = createApp(App)
app.provide('cafeApp', {
  cafes,
  avaliacao,
  mensagem,
  media,
  salvarAvaliacao,
})
app.use(router)
app.mount('#app')
