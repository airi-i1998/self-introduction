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
  width: 1280px;

  img {
    width: 100%;
    height: 50%;
  }

  h1 {
    position: absolute;
    top: 70%;
    left: 10%;
    transform: translate(-50%, -50%);
    font-size: 3rem;
    font-weight: 700;
    color: #FFF;
  }
  p{
    position: absolute;
    top: 80%;
    left: 30%;
    transform: translate(-50%, -50%);
    font-size: 2rem;
    font-weight: 700;
    color: #FFF;
  }
}
</style>