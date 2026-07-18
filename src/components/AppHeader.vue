<script setup>
</script>

<template>
  <header class="cabecalho">
    <div class="cabecalho-container">
      
      <RouterLink to="/" class="logo-link">
        <span class="logo-emoji">☕</span>
        <span class="logo-texto">Coffee Quality Challenge</span>
      </RouterLink>

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

<style scoped>
.cabecalho {
  background-color: #ffffff; 
  padding: 1.2rem 2rem;
  border-bottom: 1px solid #e0e0e0; 
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
}

.cabecalho-container {
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.logo-link {
  display: flex;
  align-items: center;
  gap: 0.6rem;
  text-decoration: none;
}

.logo-emoji {
  font-size: 1.8rem;
}

.logo-texto {
  color: #2c3e50;
  font-size: 1.3rem;
  font-weight: 700;
}

.lista-menu {
  list-style: none;
  display: flex;
  gap: 2rem;
  margin: 0;
  padding: 0;
}

.lista-menu a {
  color: #666666; 
  text-decoration: none;
  font-size: 1rem;
  font-weight: 500;
  transition: color 0.2s ease;
}

.lista-menu a:hover,
.lista-menu a.ativo {
  color: #000000; 
  font-weight: 600;
}
</style>