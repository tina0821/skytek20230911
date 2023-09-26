<script setup lang="ts">
  import {ref, onMounted } from "vue";
  import { useDataStore } from "../stores/counter";
  import { storeToRefs } from "pinia";
  
  const store = useDataStore();
  const { dataLst,dataL,totalNum } = storeToRefs(store);
  const value = ref(0);
  const addToCart = (item) => {
  const index = dataL.value.findIndex((product) => product.id === item.id);
  if (index !== -1) {
    // 如果商品已经存在于购物车中，增加其数量
    dataL.value[index].num += 1;
  } else {
    // 如果商品不在购物车中，添加到购物车并将数量设置为1
    const newItem = { ...item, num: 1 };
    dataL.value.push(newItem);
  }
  store.totalNum = dataL.value.reduce((total, product) => total + product.num, 0);
    console.log()
};
</script>

<template>
  <div  class="out">
    <div
      class="t1"
      v-for="item in store.dataLst"
      :key="item.id"
    >
      
      <h3>{{ item.title }}</h3>
      <img :src="item.imgUrl"/>
      <p>NTD {{ item.price }}</p>
     <button @click="addToCart(item)">加入購物車</button>
    
    </div>
    </div>
</template>
<style>
  img{
    width:250px
  }
  .out {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
  }
  .t1 {
    border: 3px solid black;
    border-radius: 20px;
    margin: 20px;
    width: 350px;
    display: flex;
    align-items: center;
    flex-direction: column;
    background-color: #fff;
    padding: 20px; 
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.2); 
  }
  .t1:hover {
    border: 3px solid red; 
  }
  button {
    background-color: #ff5722;
    color: #fff; 
    border: none;
    padding: 10px 20px;
    border-radius: 5px;
    cursor: pointer;
  }
</style>


