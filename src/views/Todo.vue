<template>
  <div>
    <div>
      <todo-header/>

      <div>
        <create-card />
        <cards />
      </div>
    </div>
  </div>
</template>

<script>
import CreateCard from '../components/CreateCard'
import TodoHeader from '../components/TodoHeader'
import Cards from '@/components/Cards'

export default {
  name: 'Todo',
  components: {
    TodoHeader,
    CreateCard,
    Cards
  }
}
</script>
