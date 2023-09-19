<script setup>
    import { ref } from 'vue';

    const movie = ref('');
    const movieData = ref(null);
  const total=ref('')

  

  
   const search = () => {
  const movieName = movie.value;
  fetch(`https://www.omdbapi.com/?s=${movieName}&apikey=9eb8251e`)
    .then((response) => response.json())
    .then((data) => {
      movieData.value = data.Search;
     total.value= data.totalResults
      // console.log(movieData.value)
    })
     
};

</script>


<template>
<div>
    <h2>Movie List</h2>
    <input v-model="movie" placeholder="輸入電影名稱">
    <button @click="search">查詢</button>
  
  <p>總共{{total}}筆搜尋結果</p>
  </div>
<ul>
      <li v-for="item in movieData">
        <img :src="item.Poster" alt="">
        <div>
        <h2>{{ item.Title }}</h2>
        <p>年份: {{ item.Year }}</p>
        <p>類型: {{ item.Type }}</p>
        </div>
        <button>+</button>
      </li>
    </ul>


</template>


<style >
li{
  background-color: rgb(138, 177, 211);
  list-style-type:none;
  display:flex;
  margin-bottom:30px;
  padding:30px;
  
}
  li>div{
    margin-left:30px
  }
  li>button{
    position:absolute;
    right:10px;
    top:20px;
  }
  img{
    width:100px
  }
ul{
}
</style>
