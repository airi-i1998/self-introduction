<script setup lang="ts">
import router from '@/router'
import { profileList } from '@/composable/data/profileList'

const goToProfile = (profile) => {
  if (profile.title === 'personal') {
    router.push('/personal')
  }
}
</script>

<template>
  <div>
    <h1>Welcome to my page.</h1>
  </div>
  <!--keyを設定することでアイテムを追跡することができるようになる-->
  <div class="card-container">
    <div v-for="profile in profileList" :key="profile.title" class="card">
      <div class="card-img">
        <img :src="profile.img">
      </div>
      <p class="card-title">{{ profile.title }}</p>
      <v-btn style="color: #FFF; background-color: #FF4411;" class="card-btn" @click="goToProfile(profile)">Read
        More</v-btn>
    </div>
  </div>
</template>
<style scoped lang="scss">
h1 {
  font-size: 3rem;
  text-align: center;
}

.card-container {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  justify-content: center;
  width: 100%;
}


.card {
  max-width: 300px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  border: solid 1px;
  border-radius: 8px;
  padding: 10px;
  text-align: center;
  margin: 20px 0;
  height: 300px;

  &-title {
    font-size: 2rem;
    font-weight: 700;
    margin: 12px 0;
  }

  &-btn {
    border-radius: 8px;
    padding: 8px;
  }

  &-img {
    width: 100%;
    height: auto;
  }
}

img {
  width: 100%;
  height: auto;
  border-radius: 8px;
  transition: 2.0s;
  transform: rotateY(0deg);
}

.card-img:hover img {
  transform: rotateY(180deg);
}
</style>