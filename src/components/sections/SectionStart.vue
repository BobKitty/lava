<template>
  <section class="section-start">
    <div class="container">
      <div class="section-start__wrapper">
        <div class="wrapper__body">
          <div class="body__title" v-animate-onscroll="{down: 'animate__animated animate__fadeInLeft animate__faster'}">
            <h3 class="title__text">
              Принимайте платежи и управляйте денежными средствами с LAVA
            </h3>
          </div>
          <div class="body__description" v-animate-onscroll="{down: 'animate__animated animate__fadeInLeft animate__faster'}">
            <span class="description__text">
              Присоединяйтесь к тысячам пользователей LAVA, которые каждый день безопасно получают, отправляют и тратят денежные средства
            </span>
          </div>
          <div class="body__button" v-animate-onscroll="{down: 'animate__animated animate__fadeInLeft animate__faster'}">
            <RouterLink to="/signup" class="btn btn-colored">
              Создать аккаунт
            </RouterLink>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>

</script>

<style scoped lang="scss">
@import "./src/assets/scss/main";

.section-start {
  margin-bottom: 96px;

  @include max-1024 {
    background: linear-gradient(180deg,#edf6f9,#f6f2f1),#fff8f4;
    border-radius: 36px;
  }
}

.section-start__wrapper {
  background: linear-gradient(180deg,#edf6f9,#f6f2f1),#fff8f4;
  border-radius: 36px;
  display: flex;
  justify-content: center;

  @include max-1024 {
    background: transparent;
  }
}

.wrapper__body {
  max-width: 900px;
  text-align: center;
  padding: 112px 0;

  @include max-1440 {
    padding: 64px 0;
  }
}

.title__text {
  font-size: 48px;
  line-height: 105%;
  text-align: center;
  color: #0e1420;
  margin-bottom: 16px;

  @include max-1440 {
    font-size: 40px;
  }

  @include max-1024 {
    font-size: 34px;
  }
}

.description__text {
  font-size: 20px;
  line-height: 140%;
  text-align: center;
  color: #626a7a;
  display: inline-block;
  margin-bottom: 32px;

  @include max-1440 {
    font-size: 18px;
  }
}
</style>