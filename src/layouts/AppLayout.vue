<template>
  <a-layout>
    <a-layout-header>
      <app-header-component/>
    </a-layout-header>
    <a-layout-content style="background-color: #fff">
      <slot></slot>
    </a-layout-content>
    <a-layout-footer style="border-top: 1px solid #efefef">
      Footer
    </a-layout-footer>
  </a-layout>
</template>

<script setup lang="ts">
import AppHeaderComponent from '../components/AppHeaderComponent.vue'
</script>
