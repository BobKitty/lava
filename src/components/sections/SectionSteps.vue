<template>
  <section class="section-steps">
    <div class="container">
      <div class="wrapper">
        <div class="wrapper__body">
          <div class="body__description">
            <span class="description__text" v-animate-onscroll="{down: 'animate__animated animate__fadeInLeft animate__faster'}">
              Как это работает
            </span>
          </div>
          <div class="body__title">
            <h3 class="title__text" v-animate-onscroll="{down: 'animate__animated animate__fadeInLeft animate__faster'}">
              Принимать
              <br>
              платежи просто
            </h3>
          </div>
          <div class="body__steps" v-animate-onscroll="{down: 'animate__animated animate__fadeInLeft animate__faster'}">
            <div class="steps__item">
              <div class="item__text active">
                Создайте аккаунт LAVA
              </div>
            </div>
            <div class="steps__item">
              <div class="item__text">
                Подключите сайт, приложение или принимайте платежи по ссылке
              </div>
            </div>
            <div class="steps__item">
              <div class="item__text">
                Принимайте оплату и распоряжайтесь своими деньгами
              </div>
            </div>
          </div>
          <div class="body__button" v-animate-onscroll="{down: 'animate__animated animate__fadeInLeft animate__faster'}">
            <RouterLink to="/signup" class="btn btn-colored">
              Создать аккаунт
            </RouterLink>
          </div>
        </div>
        <div class="wrapper__image">
          <div class="image__inner kk" v-animate-onscroll="{down: 'animate__animated animate__fadeInLeft animate__faster'}"></div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>

</script>

<style scoped lang="scss">
@import "./src/assets/scss/main";

.section-steps {
  margin-bottom: 160px;

  @include max-1440 {
    margin-bottom: 96px;
  }

  @include max-1024 {
    border-radius: 36px;
    background: url(@/assets/img/howit_image_new_3x.png) no-repeat 100% 100%,linear-gradient(180deg,#edf6f9,#f6f2f1);
    background-size: 57%;
  }

  @include max-768 {
    background: url(@/assets/img/howit_image_new_3x.png) no-repeat 100% 100%,linear-gradient(180deg,#edf6f9,#f6f2f1);
    background-size: 70%;
  }

  @media (max-width: 640px) {
    background-size: 85%;
  }

  @media (max-width: 520px) {
    background-size: contain;
  }

  @media (max-width: 440px) {
    background-size: 100%;
  }
}

.wrapper {
  display: grid;
  grid-template-columns: minmax(150px,440px) 1fr;
  background: linear-gradient(180deg,#edf6f9,#f6f2f1);
  border-radius: 36px;
  overflow: hidden;

  @include max-1440 {
    grid-template-columns: minmax(150px,360px) 1fr;
  }

  @include max-768 {
    grid-template-columns: 1fr;
  }

  @include max-1024 {
    background: none;
  }
}

.wrapper__body {
  padding: 64px 0 64px 64px;

  @include max-1440 {
    padding: 48px 0 48px 48px;
  }

  @include max-1024 {
    padding-left: 0;
  }
}

.description__text {
  display: inline-block;
  font-weight: 500;
  font-size: 14px;
  line-height: 18px;
  letter-spacing: .03em;
  text-transform: uppercase;
  color: #626a7a;
  margin-bottom: 16px;
}

.title__text {
  font-size: 48px;
  line-height: 105%;
  color: #0e1420;
  display: inline-block;
  margin-bottom: 40px;

  @include max-1440 {
    font-size: 40px;
  }

  @include max-1024 {
    font-size: 34px;
  }
}

.body__steps {
  margin-bottom: 40px;
}

.steps__item {
  position: relative;
}

.item__text {
  font-size: 20px;
  line-height: 140%;
  color: #0e1420;
  display: inline-block;
  margin-bottom: 24px;
  position: relative;
  padding-left: 26px;

  @include max-1440 {
    font-size: 18px;
  }

  &.active {
    color: #0e1420;

    &:before {
      background: #ff4e0e;
    }
  }

  &:before {
    position: absolute;
    content: "";
    width: 6px;
    height: 6px;
    border-radius: 50%;
    left: 0;
    top: calc(50% - 3px);
    background: #9fa7b8;
  }
}

.wrapper__image {
  position: relative;
  margin-top: 64px;

  @include max-768 {
    height: 360px;
  }
}

.image__inner {
  content: " ";
  position: absolute;
  height: 100%;
  width: 100%;
  z-index: 2;
  background: url(@/assets/img/howit_image_new_3x.png) no-repeat;
  background-size: contain;
  background-position: 100% 100%;

  @include max-1024 {
    background: none;
  }
}

</style>