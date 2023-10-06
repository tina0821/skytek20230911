<template>
  <div class="color-tool">
    <h1 :style="getTextStyle(selectedColor)">換色工具</h1>
    <input type="color" v-model="selectedColor" />
    <div class="color-box" :style="{ backgroundColor: selectedColor }">
      <p :style="getTextStyle(selectedColor)" class="color-info"  >現在的背景顏色是: {{ selectedColor }}</p>
    </div>
  </div>
</template>

<script setup>
import { ref, watch } from 'vue';

const selectedColor = ref('#ffffff');

watch(selectedColor, (newVal) => {
  changeBackgroundColor(newVal);
});

const changeBackgroundColor = (newColor) => {
  document.body.style.backgroundColor = newColor;
};

const getTextStyle = (bgColor) => {
  const isDark = isBackgroundColorDark(bgColor);
  return {
    color: isDark ? 'white' : 'black'
  };
};

const isBackgroundColorDark = (color) => {
  const hexColor = color.replace('#', '');
  const r = parseInt(hexColor.slice(0, 2), 16);
  const g = parseInt(hexColor.slice(2, 4), 16);
  const b = parseInt(hexColor.slice(4, 6), 16);
  const brightness = (r * 299 + g * 587 + b * 114) / 1000;
  return brightness < 128;
};
</script>

<style scoped>
.color-tool {
  text-align: center;
  padding: 20px;
}

.color-box {
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 20px;
  border-radius: 50%;
}

.color-info {
  margin: 10px 0;
  font-weight: bold;
}

input[type="color"] {
  margin-top: 10px;
  padding: 5px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

input[type="color"]::-webkit-color-swatch {
  border: none;
  border-radius: 5px;
}

input[type="color"]::-webkit-color-swatch-wrapper {
  padding: 0;
}

</style>
