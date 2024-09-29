<<script setup lang="ts">
import { personalList } from '@/composable/form/personalList.ts'
</script>

<template>
  <div>
    <form v-for="personal in personalList" :key="personal">
      <div class="form">
        <img :src="personal.img">
        <label>{{ personal.label }}</label>
        <template v-if="personal.type === 'email'">
          <a :href="'mailto:' + personal.text">{{ personal.text }}</a>
        </template>
        <template v-else>
          <p>{{ personal.text }}</p>
        </template>
      </div>
    </form>
  </div>
</template>
<style scoped lang="scss">
.form {
  display: flex;
  margin: 20px auto;
  justify-content: center;
  width: auto;
  }
</style>