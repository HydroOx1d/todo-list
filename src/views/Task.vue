<template>
<div>
  <div v-if="task">
    <h1>{{task.title}}</h1>
    <form @submit.prevent="taskHandler">
      <div class="chips" ref="chips"></div>
      <div class="input-field">
        <textarea v-model="description" id="description" class="materialize-textarea"></textarea>
        <label for="description">Описание</label>
      </div>
      <span class="character-counter" style="float: right; font-size: 12px;">{{description.length}}/2048</span>
      <input ref="datepicker" type="text">
      <div v-if="task.status !== 'завершено'">
        <button class="waves-effect waves-light btn" type="submit">Обновить</button>
        <button class="waves-effect waves-light btn" style="float: right" type="button" @click="completeTask">Завершить</button>
      </div>
    </form>
  </div>
  <h2 v-else>Задача не найдена</h2>
</div>
</template>

<script>
export default {
  name: "Task",
  computed: {
    task() {
      return this.$store.getters.taskById(+this.$route.params.id)
    }
  },
  data() {
    return {
      description: '',
      chips: null,
      date: null
    }
  },
  mounted() {
    this.description = this.task.description
    this.chips = M.Chips.init(this.$refs.chips, {
      placeholder: 'Тэги',
      data: this.task.tags
    })
    this.date = M.Datepicker.init(this.$refs.datepicker, {
      format:'dd mm yyyy',
      defaultDate: new Date(this.task.date),
      setDefaultDate: true,
    });
    setTimeout(() => {M.updateTextFields()}, 0)
  },
  methods: {
    taskHandler() {
      this.$store.dispatch('updateTask', {
        id: this.task.id,
        description: this.description,
        date: this.date.date
      })
      this.$router.push('/list')
    },
    completeTask() {
      this.$store.dispatch("completeTask", this.task.id)
      this.$router.push('/list')
    }
  },
  destroyed() {
    if(this.date && this.date.destroy) {
      this.date.destroy()
    }
    if(this.chips && this.chips.destroy) {
      this.chips.destroy()
    }
  }
}
</script>

<style scoped>
</style>