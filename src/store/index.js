import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    todos: {},
    allTodo: [],
    allDoing: [],
    allDone: []
  },
  mutations: {
    CREATE_TODO (state, payload) {
      const id = Date.now()
      state.todos[id] = payload
      state.todos = { ...state.todos }
    },
    SAVE_TODOS_ORDERING (state, payload) {
      state.todos = { ...payload }
    },
    SAVE_ALLTODO_ORDERING (state, payload) {
      state.allTodo = [...payload]
    },
    SAVE_ALLDOING_ORDERING (state, payload) {
      state.allDoing = [...payload]
    },
    SAVE_ALLDONE_ORDERING (state, payload) {
      state.allDone = [...payload]
    }
  },
  actions: {
    createTodo ({ commit }, payload) {
      commit('CREATE_TODO', payload)
    },
    saveTodosOrdering ({ commit }, payload) {
      const todos = {}
      payload.map(todo => {
        todos[todo.id] = todo
      })
      commit('SAVE_TODOS_ORDERING', payload)
    },
    saveAllTodoOrdering ({ commit }, payload) {
      commit('SAVE_ALLTODO_ORDERING', payload)
    },
    saveAllDoingOrdering ({ commit }, payload) {
      commit('SAVE_ALLDOING_ORDERING', payload)
    },
    saveAllDoneOrdering ({ commit }, payload) {
      commit('SAVE_ALLDONE_ORDERING', payload)
    }
  },
  getters: {
    allTodos (state) {
      const allTodos = Object.keys(state.todos).map(key => state.todos[key])
      return allTodos
    },
    allTodo (state) {
      return state.allTodo
    },
    allDoing (state) {
      return state.allDoing
    },
    allDone (state) {
      return state.allDone
    }
  }
})
