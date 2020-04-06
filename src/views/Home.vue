<template>
  <div class="home flex justify-center">
    <router-link :to="{ name: 'create-home' }">
      <button class="btn btn--info t-link-users-home ">
        Users
      </button>
    </router-link>
  </div>
</template>

<script>
export default {
  name: 'Home'
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
