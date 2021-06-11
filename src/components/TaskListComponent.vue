<template>
  <h1>{{title}}</h1>
  <ol>
    <item v-for="item of list" :item-data="item"/>
  </ol>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import TaskItemComponent from './TaskItemComponent.vue'

export default defineComponent({
  components: {Item: TaskItemComponent},
  props: {
    list: {
      type: Array,
      default: () => []
    },
    title: {
      type: String,
      required: true
    }
  },
  setup(props, context) {}
})
</script>
