<template>
  <button @click="reverseTitle">reverse title</button>
  <ul>
    <li v-for="(item, index) of list">{{index + 1}}. {{item.title}}</li>
  </ul>
  <input type="text" v-model="text">
  <button @click="createItem">Add Item #{{ listCount }}</button>
  <hr>
  <list :list="taskList" :title="title"/>
</template>

<script lang="ts">
import { defineComponent, ref, reactive, computed, onMounted, watch } from 'vue'
import axios from 'axios'
import TaskListComponent from '../components/TaskListComponent.vue'

export default defineComponent({
  components: {List: TaskListComponent},
  setup: () => {
    const title = ref('Task For Vue3 Setup')
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

    const taskList = ref([])
    const getTaskList = async () => {
      const { data: res} = await axios.request({
        url:'https://api.yizhanketang.cn/api/v1/todos'
      })
      taskList.value = res.data
    }

    onMounted(getTaskList)

    return {
      taskList,
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
