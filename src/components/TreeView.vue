<template>
  <ul>
    <tree-item
      v-for="item in tree"
      :key="item.name"
      :item="item"
      @edit-item="handleEditItem"
      @delete-item="handleDeleteItem"
    />
  </ul>
</template>

<script>
import { mapGetters } from 'vuex';
import TreeItem from './TreeItem.vue';

export default {
  name: 'TreeView',
  components: {
    TreeItem,
  },
  computed: {
    ...mapGetters(['tree']), // Предполагается, что 'tree' — это геттер из Vuex
  },
  methods: {
    handleEditItem({ item, newName }) {
      // Логика для редактирования имени элемента
      this.$store.commit('editItem', { item, newName });
    },
    handleDeleteItem(item) {
      // Логика для удаления элемента
      this.$store.commit('deleteItem', item);
    },
  },
};
</script>

<style scoped>
ul {
  padding-left: 0;
}

li {
  padding: 10px;
  border-radius: 5px;
  transition: background-color 0.3s ease;
}

li:hover {
  background-color: #ecf0f1; /* Измените фон при наведении */
}
</style>
