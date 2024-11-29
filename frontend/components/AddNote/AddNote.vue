<template>
  <div v-if="isOpen" class="modal-overlay" @click.self="closeModal">
    <div class="modal-content">
      <button @click="closeModal" class="close-modal-btn">Cerrar</button>
      <h2>Create a New Note</h2>

      <div class="modal-form">
        <label for="title">Title</label>
        <input type="text" v-model="noteTitle" id="title" placeholder="Enter title" />

        <label for="description">Description</label>
        <textarea v-model="noteDescription" id="description" placeholder="Enter description"></textarea>

        <button @click="saveNote" class="save-btn">Save</button>
      </div>
    </div>
  </div>
</template>

<script>
import "../AddNote/addnote.css";

export default {
  name: 'AddNote',
  props: {
    isOpen: Boolean,
  },
  data() {
    return {
      noteTitle: '',
      noteDescription: '',
    };
  },
  methods: {
    closeModal() {
      this.$emit('update:isOpen', false);
    },
    saveNote() {
      const newTask = {
        title: this.noteTitle,
        description: this.noteDescription,
        status: "Pendiente",
      };

      this.$emit('save-note', newTask);
      this.closeModal();
    }
  }
};
</script>
