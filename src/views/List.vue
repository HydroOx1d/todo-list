<template>
  <div>
    <h1>Список задач</h1>
    <hr>
    <table v-if="tasks.length">
      <tr>
        <th>№</th>
        <th>Наименование</th>
        <th>Срок до</th>
        <th>Описание</th>
        <th>Состояние</th>
        <th>Подробнее</th>
      </tr>
      <tbody>
        <tr v-for="(task, idx) of tasks" :key="task.id">
          <td>{{idx + 1}}</td>
          <td>{{task.title}}</td>
          <td>{{new Date(task.date).toLocaleDateString()}}</td>
          <td class="description-wd"><div class="text">{{task.description}}</div></td>
          <td>{{task.status}}</td>
          <td><router-link tag="button" class="btn btn-small" :to="'/task/' + task.id">Открыть</router-link></td>
        </tr>
      </tbody>
    </table>
    <p v-else>Список задач пуст</p>
  </div>
</template>

<script>
export default {
  computed: {
    tasks() {
      return this.$store.getters.tasks
    }
  }
}
</script>

<style scoped>
.description-wd {
  max-width: 250px;
}
.text {
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
}
</style>