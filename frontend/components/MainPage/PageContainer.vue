<template>
  <div class="app-container">
    <div class="background">
      <div class="headercontainer">
      <h1 class="title">To-do Notes</h1>
      <button class="addbutton" @click="openModal" >+Add a note </button>
    </div>

    <AddNote :isOpen="isModalOpen" @update:isOpen="isModalOpen = $event"   @save-note="saveNote" />

    <slot />
    </div>
  </div>
</template>

<script>
import "../MainPage/pagecontainer.css"
import AddNote from '../AddNote/AddNote.vue';
import TasksBody from '../TasksBody/TasksBody.vue';
import { postTask } from "../../services/tasksService";

export default {
  name: "Background",
  components: {
    AddNote,
  },
  data() {
    return {
      isModalOpen: false,
      pendingItems: [],
    };
  },
  methods: {
    openModal() {
      this.isModalOpen = true;
    },
    async saveNote(newTask) {
      try {
        const savedTask = await postTask(newTask);
        console.log("New task was saved:", savedTask);
      } catch (error) {
        console.error("Error saving task:", error);
      }
    },
  }
};
</script>

<style scoped>
.app-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100%;
  padding: 5px;
}

.background {
  background-color: rgba(255, 255, 255, 0.167);
  border-radius: 5px;
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.152);
  padding: 2rem;
  max-width: 1100px;
  width: 100%;
  height: 70vh;
}
.addbutton {
  padding: 0.8rem 1.5rem;
  background-color: #6a3bff;
  color: white;
  border: none;
  border-radius: 8px;
  font-size: 1rem;
  cursor: pointer;
}

.addbutton:hover {
  background-color: #5a2ab8;
}
</style>
