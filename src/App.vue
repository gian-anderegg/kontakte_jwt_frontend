<script setup>
import {RouterLink, RouterView} from 'vue-router'
</script>

<template>
  <div class="container">
    <header class="d-flex justify-content-center py-3">
      <ul class="nav nav-pills">
        <li class="nav-item">
          <nav>
            <RouterLink to="/liste" class="nav-link" aria-current="page">Kontaktliste</RouterLink>
          </nav>
        </li>
        <li class="nav-item">
          <nav>
            <RouterLink to="/kontakte" class="nav-link">Kontakt hinzufügen</RouterLink>
          </nav>
        </li>
      </ul>
    </header>
  </div>

  <main>
    <RouterView/>
  </main>

  <footer>
    <div>
      <p>@Copyright - Anderegg Bank</p>
    </div>
  </footer>

</template>


<style scoped>
footer {
  text-align: center;

}

.router-link-active {
  font-weight: bold;
}
</style>
