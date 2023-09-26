<script setup lang="ts">
  import {ref, onMounted } from "vue";
  import { useDataStore } from "../stores/counter";
  import { storeToRefs } from "pinia";
  
  const store = useDataStore();
  // console.log(store)
const { dataLst,dataL,totalNum } = storeToRefs(store);
// console.log(dataLst.value);
  
const value = ref(0);
  const deleteItem = (item) => {
    const index = dataL.value.indexOf(item);
    if (index !== -1) {
      dataL.value.splice(index, 1);
      store.totalNum = dataL.value.length;
    }
  };

</script>

<template>
  <div class="cart">
    <ul>
      <li
        class="cart-item"
        v-for="item in store.dataL"
        :key="item.id"
      >
        <img :src="item.imgUrl" alt="" class="item-image" />
        <div class="item-details">
          <h1>{{ item.title }}</h1>
          <p>NTD {{ item.price }} x{{ item.num }}</p>
          <button @click="deleteItem(item)" class="delete-button">删除</button>
        </div>
      </li>
    </ul>
  </div>
</template>

<style>
  .cart {
    margin-top: 20px;
  }

  .cart ul {
    list-style: none;
    padding: 0;
  }

  .cart-item {
    display: flex;
    align-items: center;
    border: 1px solid #ccc;
    margin: 10px 0;
    padding: 10px;
    border-radius: 5px;
  }

  .item-image {
    width: 100px;
    height: 100px;
    margin-right: 10px;
  }

  .item-details {
    flex-grow: 1;
  }

  .item-details h1 {
    font-size: 18px;
    margin: 0;
  }

  .item-details p {
    font-size: 14px;
    margin: 5px 0;
  }

  .delete-button {
    background-color: #ff5722;
    color: #fff;
    border: none;
    padding: 5px 10px;
    border-radius: 5px;
    cursor: pointer;
  }
</style>
