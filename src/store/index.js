import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    tasks: JSON.parse(localStorage.getItem('tasks') || '[]')
  },
  mutations: {
    setTasks(state, task) {
      state.tasks.push(task)
      localStorage.setItem('tasks', JSON.stringify(state.tasks))
    },
    updateTask(state, {id, description, date}) {
      const tasks = state.tasks.concat()
      const idx = tasks.findIndex(t => t.id === id)
      const task = tasks[idx]
      const status = new Date(date) > new Date() ? 'активное' : 'просрочено'
      tasks[idx] = {...task, date,description}

      state.tasks = tasks
      localStorage.setItem('tasks', JSON.stringify(state.tasks))
    },
    completeTask(state, id) {
      const idx = state.tasks.findIndex(t => t.id === id)
      state.tasks[idx].status = 'завершено'
      localStorage.setItem('tasks', JSON.stringify(state.tasks))
    }

  }

  ,
  actions: {
    setTasks({commit}, task) {
      commit('setTasks',task)
    },
    updateTask({commit}, task) {
      commit('updateTask', task)
    },
    completeTask({commit}, id) {
      commit("completeTask", id)
    }
  },
  getters: {
    tasks: state => state.tasks,
    taskById(state) {
      return (id) => {
        return state.tasks.find(t => t.id === id)
      }
    }
  },
  modules: {
  }
})
