<template>
  <div class="columns-container">

    <div class="column">
      <h3>Pendiente</h3>
      <div class="item-container" v-for="(item, index) in pendingItems" :key="`pending-${index}`">
        {{ item }}
      </div>
    </div>


    <div class="column">
      <h3>En Proceso</h3>
      <div class="item-container" v-for="(item, index) in inProcessItems" :key="`in-process-${index}`">
        {{ item }}
      </div>
    </div>


    <div class="column">
      <h3>Completada</h3>
      <div class="item-container" v-for="(item, index) in completedItems" :key="`completed-${index}`">
        {{ item }}
      </div>
    </div>
  </div>
</template>

<script>
import '../TasksBody/tasksbody.css'
export default {
  props: {
    pendingItems: {
      type: Array,
      default: () => [],
    },
    inProcessItems: {
      type: Array,
      default: () => [],
    },
    completedItems: {
      type: Array,
      default: () => [],
    },
  },
  methods: {
    addTask(newTask) {
      this.pendingItems.push(newTask);
    },
  }
};
</script>

<style scoped>
.columns-container {
  display: flex;
  gap: 2rem;
  justify-content: center;
  align-items: flex-start;
  width: 100%;
  max-width: 1100px;
  margin: 0 auto;
}
</style>
