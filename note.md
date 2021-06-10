## vue3

- `reactive()` 处理对象的双向绑定
  - 一旦被`解构`或者`...展开`，返回的值将失去响应式，因为是取值返回，不是引用
  - 可以使用 `toRefs()` 结构依旧有双向数据特性（将响应式对象的每个 property 都转成了相应的 `ref()`） 
- `ref()` 处理基础类型的双向绑定
  - 模板中使用 `{{ ref(xx) }}`，js中需要使用 `ref(xx).value`
- `readonly(state)`不管是普通object对象、reactive对象、ref对象，都可以通过readonly方法返回一个只读对象
- 计算属性 `computed()`
  ```vue
    const state = reactive({
      count: 0,
      double: computed(() => {
        return state.count * 2
      })
    })
    const num = ref(0)

    // only getter
    const totalCount = computed(() => state.count + num.value)
    // getter & setter
    const doubleCount = computed({
      get () {
        return state.count * 2
      },
      set (newVal) {
        state.count = newVal / 2
      }
    })
  ```



