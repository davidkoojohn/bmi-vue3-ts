<template>
  <div class="app">
    <p>
      <router-link to="/">Home</router-link>
      |
      <router-link :to="{name: 'TS'}">TypeScript</router-link>
      |
      <router-link to="/about">About</router-link>
    </p>
    <router-view></router-view>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'App',
})
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
</style>
