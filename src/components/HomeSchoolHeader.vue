<template>
  <div>
    <v-app-bar>

      <v-toolbar-title>
        <span class=" titre text-blue-800">HOME SCHOOL </span>
      </v-toolbar-title>

    </v-app-bar>
  </div>
</template>

<script>
export default {
  name: 'CetoHeader'
}
</script>

<style lang="postcss" scoped>

.titre {
  @apply font-bold rounded px-4 uppercase flex justify-start m-2 .text-5xl;
}

</style>
