<template>
  <PageContainer>
    <TasksBody
      :pendingItems="pendingTasks"
      :inProcessItems="inProcessTasks"
      :completedItems="completedTasks"
    />
  </PageContainer>
</template>

<script>
import PageContainer from "../components/MainPage/PageContainer.vue";
import TasksBody from "../components/TasksBody/TasksBody.vue";
import { fetchTasks } from "../services/tasksService";

export default {
  components: { PageContainer, TasksBody },
  data() {
    return {
      tasks: [],
    };
  },
  computed: {
    pendingTasks() {
      return this.tasks.filter((task) => task.status === "Pendiente").map((task) => task.title);
    },
    inProcessTasks() {
      return this.tasks.filter((task) => task.status === "En Proceso").map((task) => task.title);
    },
    completedTasks() {
      return this.tasks.filter((task) => task.status === "Completada").map((task) => task.title);
    },
  },
  async mounted() {
    try {
      this.tasks = await fetchTasks();
    } catch (error) {
      console.error("Error fetching tasks:", error);
    }
  },
};
</script>
