<template>
  <li>
    <div>
      <span v-if="!isEditing">{{ item.name }}</span>
      <input
        v-else
        v-model="newName"
        @keyup.enter="saveEdit"
        @blur="saveEdit"
      />
      <button @click="toggleEdit">{{ isEditing ? 'Save' : 'Edit' }}</button>
      <button @click="deleteItem">Delete</button>
    </div>
    <ul v-if="item.children && item.children.length">
      <tree-item
        v-for="(child, index) in item.children"
        :key="index"
        :item="child"
        @edit-item="$emit('edit-item', $event)"
        @delete-item="$emit('delete-item', $event)"
      />
    </ul>
  </li>
</template>

<script>
export default {
  props: {
    item: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      isEditing: false,
      newName: this.item.name,
    };
  },
  methods: {
    toggleEdit() {
      this.isEditing = !this.isEditing;
    },
    saveEdit() {
      if (this.isEditing && this.newName !== this.item.name) {
        this.$emit('edit-item', { item: this.item, newName: this.newName });
      }
      this.isEditing = false;
    },
    deleteItem() {
      this.$emit('delete-item', this.item);
    },
  },
};
</script>

<style scoped>
div {
  display: flex;
  align-items: center; /* Выравнивание по центру */
}

i {
  margin-right: 8px; /* Отступ между иконкой и текстом */
}

button {
  margin-left: 10px;
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
  margin-left: 10px;
  padding: 5px;
  border-radius: 4px;
  border: 1px solid #ccc;
}
</style>
