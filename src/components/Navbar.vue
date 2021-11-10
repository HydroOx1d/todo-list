<template>
  <nav class="teal darken-2">
    <div class="nav-wrapper container ">
      <router-link to="/" class="brand-logo">Менеджер задач</router-link>
      <ul class="right hide-on-med-and-down">
        <router-link tag="li" to="/" exact active-class="active"><a href="#">Главная</a></router-link>
        <router-link tag="li" to="/list" active-class="active"><a href="#">Список</a></router-link>
      </ul>
    </div>
  </nav>
</template>

<script>
export default {
  name: "Navbar"
}
</script>

<style scoped>

</style>