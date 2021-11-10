<template>
  <div class="row">
    <div class="col s6 offset-s3">
      <h2>Новая задача</h2>
      <form @submit.prevent="taskHandler">
        <div class="input-field">
          <input v-model="title" id="title" type="text" class="validate" required>
          <label for="title">Наименование</label>
          <span class="helper-text" data-error="Обязательное поле*"></span>
        </div>
        <div class="chips" ref="chips"></div>
        <div class="input-field">
          <textarea v-model="description" id="description" class="materialize-textarea"></textarea>
          <label for="description">Описание</label>
        </div>
        <span class="character-counter" style="float: right; font-size: 12px;">{{description.length}}/2048</span>
        <input ref="datepicker" type="text">
        <button class="waves-effect waves-light btn" type="submit">Новая задача</button>
      </form>
    </div>
  </div>
</template>

<script>

export default {
  name: 'Home',
  data() {
    return {
      title: '',
      description: '',
      chips: null,
      date: null
    }
  },
  mounted() {
    this.chips = M.Chips.init(this.$refs.chips, {
      placeholder: 'Тэги'
    })
    this.date = M.Datepicker.init(this.$refs.datepicker, {
      format:'dd mm yyyy',
      defaultDate: new Date(),
      setDefaultDate: true,
    });
  },
  methods: {
    taskHandler() {
      const task = {
        id: Date.now(),
        status: 'активное',
        title: this.title,
        description: this.description,
        tags: this.chips.chipsData,
        date: this.date.date
      }
      this.$store.dispatch('setTasks', task)
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


<style scoped lang="scss">
</style>