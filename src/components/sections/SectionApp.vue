<template>
  <section class="section-app">
    <div class="container">
      <div class="section-app__wrapper">
        <div class="wrapper__body">
          <div class="body__title">
            <h3 class="title__text" v-animate-onscroll="{down: 'animate__animated animate__fadeInLeft animate__faster'}">
              Установите приложение LAVA
            </h3>
          </div>
          <div class="body__subtitle">
            <span class="subtitle__text" v-animate-onscroll="{down: 'animate__animated animate__fadeInLeft animate__faster'}">
              В приложении LAVA можно просматривать переводы, вовремя получать уведомления и переводить деньги. Как веб-версия, только всегда под рукой.
            </span>
          </div>
          <a href="https://apps.apple.com/app/lava-%D0%BB%D0%B8%D1%87%D0%BD%D1%8B%D0%B9-%D0%BA%D0%B0%D0%B1%D0%B8%D0%BD%D0%B5%D1%82/id1636484894" class="body__item" target="_blank">
            <span class="item__image" v-animate-onscroll="{down: 'animate__animated animate__fadeInLeft animate__faster'}"></span>
          </a>
        </div>
        <div class="wrapper__items">
          <div class="items__background" v-animate-onscroll="{down: 'animate__animated animate__fadeInLeft animate__faster'}"></div>
          <div class="items__qr">
            <div class="qr" v-animate-onscroll="{down: 'animate__animated animate__fadeInLeft animate__faster'}"></div>
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

.section-app__wrapper {
  display: grid;
  grid-template-columns: minmax(150px,540px) 1fr;
  overflow: hidden;

  @include max-1440 {
    grid-template-columns: minmax(150px,476px) 1fr;
  }

  @media only screen and (max-width: 1024px) {
    grid-template-columns: minmax(150px,326px) 1fr;
  }

  @media only screen and (max-width: 768px) {
    grid-template-columns: 1fr;
  }
}

.wrapper__body {
  padding: 0 0 128px;

  @media only screen and (max-width: 768px) {
    padding: 0 0 48px;
  }
}

.body__title {
  margin-bottom: 20px;
  padding-top: 44px;

  @media only screen and (max-width: 768px) {
    padding-top: 0;
  }
}

.title__text {
  font-family: Golos;
  font-style: normal;
  font-weight: 400;
  font-size: 48px;
  line-height: 1.05;
  color: var(--PA_Text_Primary);

  @include max-1440 {
    font-size: 40px;
  }

  @media only screen and (max-width: 768px) {
    font-size: 34px;
  }

  @media only screen and (max-width: 425px) {
    font-size: 34px;
    text-align: center;
  }
}

.body__subtitle {
  margin-bottom: 48px;

  @media only screen and (max-width: 768px) {
    margin-bottom: 24px;
  }

  @media only screen and (max-width: 425px) {
    text-align: center;
  }
}

.subtitle__text {
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 1.4;
  font-family: Golos;
  color: var(--PA_Text_Secondary);

  @include max-1440 {
    font-size: 18px;
  }
}

.body__item {
  width: 100%;
  height: 100%;
  cursor: pointer;

  @media only screen and (max-width: 768px) {
    display: flex;
    justify-content: center;
  }
}

.item__image {
  display: block;
  width: 180px;
  height: 60px;
  background-image: url(@/assets/img/icon-ios-download.svg);
}

.wrapper__items {
  position: relative;

  @media only screen and (max-width: 768px) {
    height: 484px;
  }

  @media only screen and (max-width: 540px) {
    height: 382px;
  }

  @media only screen and (max-width: 425px) {
    height: 288px;
    background: url(@/assets/img/icon-background-gradient-app.png) no-repeat;
    background-size: auto 92%;
    background-position: bottom;
    background-position-x: left;
  }

  @media only screen and (max-width: 375px) {
    height: 274px;
  }

  @media (max-width: 320px) {
    height: 230px;
  }
}

.items__background {
  content: " ";
  position: absolute;
  width: 100%;
  height: 100%;
  z-index: 2;
  background: url(@/assets/img/icon-app-image.png) no-repeat;
  background-size: contain;
  background-position: 100% 100%;

  @media only screen and (max-width: 824px) {
    background-position: 100% 100%;
  }

  @media only screen and (max-width: 425px) {
    background: url(@/assets/img/icon-phone.png) no-repeat;
    background-size: auto 150%;
    background-position: top;
  }
}

.items__qr {
  content: " ";
  position: absolute;
  z-index: 3;
  background: #fff;
  border-radius: 32px;
  width: 100%;
  height: 100%;
  max-width: 240px;
  max-height: 240px;
  background-color: transparent;
  box-shadow: 0 40px 120px rgb(54 74 113 / 16%);
  top: 158px;
  left: 3px;
  transform: rotate(-10deg);

  @include max-1440 {
    top: 144px;
    left: 14px;
    max-width: 200px;
    max-height: 200px;
  }

  @media only screen and (max-width: 1024px) {
    top: 268px;
    max-width: 150px;
    max-height: 150px;
  }

  @media only screen and (max-width: 824px) {
    top: 240px;
  }

  @media only screen and (max-width: 768px) {
    top: 174px;
    left: 78px;
    max-width: 200px;
    max-height: 200px;
  }

  @media only screen and (max-width: 540px) {
    top: 188px;
    max-width: 125px;
    max-height: 125px;
  }

  @media only screen and (max-width: 425px) {
    display: none;
  }
}

.qr {
  z-index: 3;
  width: 100%;
  height: 100%;
  max-width: 240px;
  max-height: 240px;
  background-image: url(@/assets/img/lava-qr.svg);
  background-repeat: no-repeat;
  background-size: contain;
  background-position: 0;

  @include max-1440 {
    max-width: 200px;
  }
}
</style>