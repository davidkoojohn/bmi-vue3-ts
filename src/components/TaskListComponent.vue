<template>
  <h1>{{title}}</h1>
  <ol>
    <item v-for="item of list" :item-data="item"/>
  </ol>
</template>

<script lang="ts">
import { defineComponent, inject } from 'vue'
import TaskItemComponent from './TaskItemComponent.vue'

export default defineComponent({
  components: {Item: TaskItemComponent},
  props: {
    list: {
      type: Array,
      default: () => []
    },
  },
  setup(props, context) {
    const title = inject('title')

    return {
      title
    }
  }
})
</script>
