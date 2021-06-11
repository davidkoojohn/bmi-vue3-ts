<template>
  <li>
    <input type="checkbox" v-model="completed">
    <span>{{content}}</span>
  </li>
</template>

<script lang="ts">
import { defineComponent, toRefs } from 'vue'

export default defineComponent({
  props: {
    itemData: {
      type: Object,
      required: true
    }
  },
  setup(props) {
    const { completed, content } = toRefs(props.itemData)

    return {
      completed,
      content
    }
  }
})
</script>
