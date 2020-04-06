<template>
  <div class=" m-6 y-6 flex justify-center">
    <form
      class="bg-gray-100 shadow-md rounded px-8 pt-6 pb-8 mb-4"
      @submit.prevent="create"
    >
      <label
        class="block text-gray-700 text-sm font-bold mb-2"
        for="todo-title"
      ></label>
      <input
        class=" bg-white shadow appearance-none border rounded py-4 px-5 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        type="text"
        id="todo-title"
        placeholder="Mot/Lettre/Syllabe"
        v-model="title"
      />
      <button class=" btn btn--info" type="submit">Ajouter</button>
    </form>
  </div>
</template>

<script>
export default {
  data () {
    return {
      title: '',
      dialog: false
    }
  },
  methods: {
    create () {
      const todo = {
        createdAt: new Date(),
        title: this.title
      }
      this.$store.dispatch('createTodo', todo)
      this.title = ''
    }
  }
}
</script>

<style lang="postcss" scoped>
.btn {
  @apply bg-gray-500 text-white font-bold py-2 px-4 rounded px-4 py-2 m-2;

  &[disabled] {
    opacity: 0.5;
  }

  &:hover {
    @apply bg-gray-700;
  }

  &--info {
    @apply bg-blue-700;

    &:hover {
      @apply bg-blue-500;
    }
  }

  &--warning {
    @apply bg-red-500;

    &:hover {
      @apply bg-blue-700;
    }
  }
}
</style>
