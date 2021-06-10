<template>
  <h1>{{ title }}</h1>
  <button @click="reverseTitle">reverse title</button>
  <ul>
    <li v-for="(item, index) of list">{{index + 1}}. {{item.title}}</li>
  </ul>
  <input type="text" v-model="text">
  <button @click="createItem">Add Item #{{ listCount }}</button>
</template>

<script lang="ts">
import { defineComponent, ref, reactive, computed } from 'vue'

export default defineComponent({
  name: 'Task',
  setup: () => {
    const title = ref('Task Title')
    const reverseTitle = () => {
      title.value = title.value.split('').reverse().join('')
    }

    const list = reactive([
      {id: 1, title: 'task 1'},
      {id: 2, title: 'task 2'},
    ])
    const listCount = computed(() => list.length + 1)

    const createItem = () => {
      list.push({
        id: Date.now(),
        title: text.value
      })

      text.value = ''
    }

    const text = ref('')

    return {
      title,
      reverseTitle,
      list,
      listCount,
      createItem,
      text,
    }
  }
})
</script>

<style scoped>
ul {
  list-style: none;
}
</style>


