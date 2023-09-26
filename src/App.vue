<script setup lang="ts">
import { RouterView } from 'vue-router';
    import { useDataStore } from "./stores/counter";
  import { storeToRefs } from "pinia";
  
  const store = useDataStore();
  // console.log(store)
const { totalNum } = storeToRefs(store);
</script>

<template>
  <div>
    <nav>
      <ul>
        <li><router-link to="/">Home</router-link></li>
        <li><router-link to="/list">Cart <span>{{store.totalNum}}</span></router-link></li>
      </ul>
    </nav>
    <RouterView />
  </div>
</template>
<style>
  nav {
    background-color: #333;
    color: white;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 99999; 
  }
  nav ul {
    list-style: none;
    padding: 0;
    display: flex;
  }
  nav li {
    margin: 10px 30px; 
    font-size:1.5rem;
  }
  span{
       background-color: red;
    border-radius: 50%;
    width: 30px;
    height: 30px; 
    color: white;
    text-align: center;
    line-height: 30px;
    font-size: 16px; 
    position: absolute;
    top: 3px; 
    left: 50px;

  }
</style>
