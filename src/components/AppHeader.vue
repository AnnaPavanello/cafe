<script setup>
import { logo } from '../assets/images'
</script>

<template>
  <header class="cabecalho">
    <div class="cabecalho-container">
      <div class="logo-wrapper">
        <img class="logo" :src="logo" alt="Logo" />
      </div>

      <nav class="menu">
        <ul class="lista-menu">
          <li><RouterLink to="/" active-class="ativo" exact-active-class="ativo">Home</RouterLink></li>
          <li><RouterLink to="/cafes" active-class="ativo">Cafés</RouterLink></li>
          <li><RouterLink to="/avaliar" active-class="ativo">Avaliar</RouterLink></li>
          <li><RouterLink to="/ranking" active-class="ativo">Ranking</RouterLink></li>
        </ul>
      </nav>
    </div>
  </header>
</template>
