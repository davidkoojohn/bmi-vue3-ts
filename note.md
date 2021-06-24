## TS

```typescript
let isAdmin: boolean = false
let count: number = 1
let str1: string = 'hello' + "world"
// null undefined

// array
let arr1: number[] = [1, 2, 3]
let arr2: Array<number> = [1, 2, 3] // 泛型声明

// 元祖类型
let arr3: [number, string, boolean] = [1, 'hello', true]

// 枚举
enum Color {
  red = 0,    // 0
  green,  // 1
  blue    // 2
}
let color: Color = Color.green // 1
console.log(Color[1])          // green

// any 任意， void 没有
// object

// 一、联合类型 number | string
// 二、类型断言：相信我, 我知道自己在干什么
//    语法1：<类型>变量 (<string>str).length
//    语法2：值 as 类型
// 三、类型推断：无明确类型指定时推测一个类型
//    声明变量不复制 any 类型

interface IPreson {
  readonly id: number,
  name: string,
  age: number,
  sex?: number
}

// 函数类型：定义一个接口，用来为某个函数的类型使用
interface IArgs {
  (source: string, subStr: string): boolean
}

const searchString: IArgs = function (source: string, subStr: string): boolean {
  return source.search(subStr) > -1
}

// class类型
interface IFly {
  fly()
}
interface ISwim {
  swim()
}
// 接口继承
interface IFAndS extends IFly, ISwim{}
// class person implements IFly, ISwim {
class person implements IFAndS {
  fly() {}
  swim() {}
}

// abstract 抽象类 | 抽象方法，一般在基类中并且无具体实现（在子类中实现）
// abstract class x {}

const add: (x: number, y: number) => number = (x: number, y: number): number => {
  return x + y
}

// 函数重载
function sum(x: string, y: string): string
function sum(x: number, y: number): number
function sum(x: number | string, y: number | string): number | string {
  
}

// 泛型
// 多个泛型用逗号隔开
function getArr<T>(value: T, count: number): T[] {
  // const arr: T[] = []
  const arr: Array<T> = []
  for (let i: number = 0; i < count; i++) {
    arr.push(value)
  }
  return arr
}
getArr(1, 3)[0] // number
getArr('1', 3)[0] // string

// 泛型接口
interface IBaseCURD<T> {
  // data: Array<T>
  data: T[],
  add: (t: T) => T,
  getUserId: (id: number) => T
}
class User {
  id?: number
  name: string
  age: number
}

class UserCURD implements IBaseCURD<User> {
  data: User[]
  add(user: User): User {
    user.id = Date.now()
    this.data.push(user)
    return user
  }
  getUserId(id: number): User {
    return this.data.find((item: User) => item.id === id)
  }
}

interface ILen {
  length: number
}

function getLen<T extends ILen>(t: T): number {
  return t.length
}

getLen<string>('hahh')

// 声明文件
// XX.d.ts

// 内置对象
// new Boolean()
// new Number()
// new String()
// new Date()
// new RegExp()
// new Error()
const div: HTMLElement = document.getElementById('box')
const divs: NodeList = document.getElementsByClassName('box')
document.addEventListener('click', function (event: MouseEvent) {
  console.log(event.target)
})
```
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

- `watch()` & `watchEffetc`
  ```javascript
  watch('user', (val) => {
    // your code
  }, {
    immediate: true,  // 默认会执行一次 
    deep: true,       // 深度监视
  })
  
  // 更聪明的监视，不需要配置 immediate
  watchEffetc(() => {
    // your code
  })
  
  // 监视多个或者非响应式ref的数据
  const data3 = ref(123)
  watchEffetc([() => data1, () => data2, data3], () => {
    // your code
  })
  ```

- `hook` === vu2的 `mixin`
  ```vue
  // useXXX
  export default {
  }
  
  // component -> setup()
  import useXXX form './hook/useXXX'
  setup() {
    const {x, y} = useXXX()
    return {
      x, y
    }
  }
  ```
- `shallowReactive` & `shallowRef`
  - `shallowReactive`: 最外层响应式（浅响应式）
  - `shallowRef`: 处理value响应式
  
- `readonly` & `shallowReadonly`
  - `readonly`: 只读属性、深度只读
  - `shallowReadonly`: 浅度只读

- `toRaw` & `markRaw`
  - `toRaw`: 将代理对象变成普通对象 `const user = toRow(reactive({}))`，放弃响应式
  - `markRaw`: 标记的对象从此后都不能成为代理对象

- `toRef()`：相当于拷贝了一份，响应式互通的 `toRef(state, 'age')`

- `isRef`(ref对象)、`isReactive`(reactive创建)、`isReadonly`(readonly只读)、`isProxy`(reactive或readonly)

- 异步引入组件 
  ```
  const xxx = defineAsyncComponent(() => import('../xxx.vue')
  ```
- `Fragment`是在template中不用根标签
- `Teleport`将组件移入其他dom位置，可用于model在body中显示
- `Suspense` 组件
  ```
  <Suspense>
    <template #default>
      异步组件或者内容
    </template>
    <template v-slot:fallback>
      Loading
    </template>
  </Suspense>
  ```

