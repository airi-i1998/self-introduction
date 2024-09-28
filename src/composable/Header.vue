<template>
  <div class="header">
    <img src="/public/sea.jpeg">
    <h1>Who AM I?</h1>
    <p>I hope this page helps you get to know me better!</p>
  </div>
</template>
<style scoped lang="scss">
.header {
  position: relative;
  height: 100%;
  width: 1280px;
  img {
    width: 100%;
    height: 50%;
  }

  h1 {
    position: absolute;
    top: 40%;
    left: 10%;
    transform: translate(-50%, -50%);
  }
  p{
    position: absolute;
    top: 45%;
    left: 15%;
    transform: translate(-50%, -50%);
  }
}
</style>