<template>
  <div class="shadow-md rounded bg-blue-700 text-white m-4 px-10 pt-2 pb-2">
    <p class="text-center text-lg">{{ item.title }}</p>
  </div>
</template>

<script>
export default {
  props: {
    item: {
      type: Object,
      required: true
    }
  }
}
</script>
