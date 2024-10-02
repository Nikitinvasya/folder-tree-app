// src/store.js
import { createStore } from 'vuex';

const store = createStore({
  state: {
    tree: [
      {
        name: 'Dir 1',
        type: 'dir',
        children: [
          {
            name: 'Dir 1-1',
            type: 'dir',
            children: [
              { name: 'File 1-1-1', type: 'file' }
            ]
          },
          { name: 'File 1-2', type: 'file' }
        ]
      },
      {
        name: 'Dir 2',
        type: 'dir',
        children: [
          { name: 'Dir 2-1', type: 'dir' },
          { name: 'File 2-2', type: 'file' }
        ]
      },
      { name: 'File 2', type: 'file' }
    ]
  },
  mutations: {
    editItem(state, { item, newName }) {
      const targetItem = findItem(state.tree, item.id); // Найдите элемент по ID
      if (targetItem) {
        targetItem.name = newName; // Обновите имя
      }
    },
    deleteItem(state, itemToDelete) {
      const removeItem = (items) => {
        const index = items.findIndex(i => i.id === itemToDelete.id); // Находим индекс по ID
        if (index !== -1) {
          items.splice(index, 1);
          return true;
        }
        for (const item of items) {
          if (item.children && removeItem(item.children)) {
            return true;
          }
        }
        return false;
      };
      removeItem(state.tree);
    }
  },
  actions: {
    editItem({ commit }, payload) {
      commit('editItem', payload);
    },
    deleteItem({ commit }, item) {
      commit('deleteItem', item);
    }
  },
  getters: {
    tree: (state) => state.tree
  }
});

// Функция для поиска элемента по ID
function findItem(tree, id) {
  for (const node of tree) {
    if (node.id === id) return node; // Найдите элемент по ID
    if (node.children) {
      const found = findItem(node.children, id);
      if (found) return found;
    }
  }
  return null; // Если элемент не найден
}

export default store;
