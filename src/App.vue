<template>
  <div id="app">
    <h1>Folder Tree</h1>
    <img src="./ebalo.jpg" alt="ebalo" class="ebalo" />
    <tree-view />
  </div>
</template>

<script>
import TreeView from './components/TreeView.vue';

export default {
  name: 'App',
  components: {
    TreeView,
  },
};
</script>

<style>
/* Глобальные стили */
.ebalo {
  width: 100px; /* Установите нужный размер */
  height: auto; /* Сохранить пропорции */
  margin: 20px auto; /* Центрировать изображение */
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  text-align: center;
  background-color: #f5f7fa;
  color: #2c3e50;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
}

h1 {
  font-size: 2em;
  color: #34495e;
  margin-bottom: 20px;
}

ul {
  padding-left: 0;
  list-style-type: none; /* Уберите стандартные маркеры */
}

li {
  margin: 10px 0;
  padding: 10px; /* Добавьте отступы */
  border-radius: 5px;
  transition: background-color 0.3s ease, transform 0.3s ease; /* Добавьте эффект при наведении */
}

li:hover {
  background-color: #ecf0f1; /* Измените фон при наведении */
  transform: scale(1.02); /* Увеличьте элемент при наведении */
}

button {
  margin-left: 10px; /* Добавьте отступы для кнопок */
  padding: 5px 10px;
  border: none;
  border-radius: 4px;
  background-color: #3498db;
  color: white;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

button:hover {
  background-color: #2980b9; /* Более темный цвет при наведении */
}

input {
  width: 150px;
  padding: 5px;
  border-radius: 4px;
  border: 1px solid #ccc;
  margin-left: 10px;
}

input:focus {
  border-color: #3498db; /* Цвет рамки при фокусе */
}
</style>