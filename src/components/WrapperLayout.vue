<template>
  <div class="wrapper">
    <main>
      <slot></slot>
    </main>
  </div>
</template>

<script>

</script>

<style scoped lang="scss">
@import './src/assets/scss/main.scss';

.wrapper {
  display: flex;
  flex-direction: column;
  min-height: 50vh;
  margin: 0 auto;
  padding-bottom: 0;
  font-family: Golos;
}
</style>