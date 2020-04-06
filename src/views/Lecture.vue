<template>
  <div>
    <div>
      <home-school-header/>

      <div>
        <create-card />
        <cards />
      </div>
    </div>
  </div>
</template>

<script>
import CreateCard from '../components/CreateCard'
import HomeSchoolHeader from '../components/HomeSchoolHeader'
import Cards from '@/components/Cards'

export default {
  name: 'Lecture',
  components: {
    HomeSchoolHeader,
    CreateCard,
    Cards
  }
}
</script>
