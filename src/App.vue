<script setup>
import { ref, computed} from 'vue'

let id = 0

const newTodo = ref('')
  
const newTime = ref('')

const all = ref([
  { id: id++, item: '第1件事情',time:'2023-09-07T13:31', done: false },
  { id: id++, item: '第2件事情',time:'2023-09-07T13:31',done: false },
  { id: id++, item: '第3件事情', time:'2023-09-07T13:31',done: true },
  { id: id++, item: '第4件事情', time:'2023-09-07T13:31',done: true }
])
const change =ref(false)
const filtered = computed(() => {
  return change.value
    ? all.value.filter((t) => !t.done)
    : all.value
})
  
function add() {
  all.value.push({ id: id++, item: newTodo.value,time:newTime.value, done: false })
  newTodo.value = ''
  newTime.value= ''
}

function removeTodo(todo) {
  all.value = all.value.filter((t) => t !== todo)
}
</script>

<template>
  <header>
    <h2>TODO LIST</h2>
  </header>

  <form @submit.prevent="add">
    <input v-model="newTodo" placeholder="輸入待辦">
    <input v-model="newTime" type="datetime-local">
    <button>新增</button>
  </form>
    <button @click="change = !change" >
    {{ change ? '全部清單' : '未完成' }}
    </button>
  <hr>
  <table>
    <tr>
      <th></th>
      <th>TODO</th>
      <th>時間</th>
    </tr>
    <tr v-for="todo in filtered" :key="todo.id">
      <input type="checkbox" v-model="todo.done">
      <td :class="{ done: todo.done }">{{ todo.item }}</td>
      <td :class="{ done: todo.done }">{{ todo.time }}</td>
      <td><button @click="removeTodo(todo)">刪除</button></td>
    </tr>
  </table>
</template>

<style scoped>

.done {
  text-decoration: line-through; 
  color: red;
}
 form> input{
  height:40px;
  width:120px;
  margin-right:20px;
  }
  table{
    width:350px
  }
   td>button{
    background-color:red;
    color:#fff;
    border:none;
  }


  
</style>
