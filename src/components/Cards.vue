<template>
  <div class="flex justify-center flex-col flex-wrap shadow-md rounded pt-4 pb-6 mt-10 m-4 y-4">
    <div class="m-6 y-6 mb-10 flex justify-center">
      <draggable
        class=" flex justify-center flex-row flex-wrap"
        v-model="allTodos"
        group="todos"
      >
        <card-word v-for="todo in allTodos" :key="todo.id" :item="todo" />
      </draggable>
    </div>

    <div class="flex justify-center flex-row">

      <div class="w-1/4 bg-gray-200 rounded p-2 m-2">
      TODO
        <draggable class="Todos" v-model="allTodo" group="todos">
          <card-word v-for="todo in allTodo" :key="todo.id" :item="todo" />
        </draggable>
      </div>

      <div class="w-1/4 bg-gray-200 rounded p-2 m-2">
      DOING
        <draggable class="Todos" v-model="allDoing" group="todos">
          <card-word v-for="doing in allDoing" :key="doing.id" :item="doing" />
        </draggable>
      </div>

      <div class="w-1/4 bg-gray-200 rounded p-2 m-2">
      DONE
        <draggable class="Todos" v-model="allDone" group="todos">
          <card-word v-for="done in allDone" :key="done.id" :item="done"/>
        </draggable>
      </div>
    </div>
  </div>
</template>

<script>
import draggable from 'vuedraggable'
import CardWord from '@/components/CardWord'
export default {
  components: {
    draggable,
    CardWord
  },
  computed: {
    allTodos: {
      get () {
        return this.$store.getters.allTodos
      },
      set (value) {
        this.$store.dispatch('saveTodosOrdering', value)
      }
    },
    allTodo: {
      get () {
        return this.$store.getters.allTodo
      },
      set (value) {
        this.$store.dispatch('saveAllTodoOrdering', value)
      }
    },
    allDoing: {
      get () {
        return this.$store.getters.allDoing
      },
      set (value) {
        this.$store.dispatch('saveAllDoingOrdering', value)
      }
    },
    allDone: {
      get () {
        return this.$store.getters.allDone
      },
      set (value) {
        this.$store.dispatch('saveAllDoneOrdering', value)
      }
    }
  }
}

</script>

<style scoped>

</style>
