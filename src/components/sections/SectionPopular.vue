<template>
  <section class="section-popular">
    <div class="secondary_container">
      <div class="wrapper">
        <div class="wrapper-body">
          <div class="body-title">
            <span class="title-text" v-animate-onscroll="{down: 'animate__animated animate__fadeInLeft animate__faster'}">
              Популярные способы оплаты
            </span>
          </div>
          <div class="body-desc">
            <span class="desc-text" v-animate-onscroll="{down: 'animate__animated animate__fadeInLeft animate__faster'}">
              Ваши клиенты всегда найдут лучший способ оплатить покупку
            </span>
          </div>
          <div class="body-features">
            <ul class="features-list" v-animate-onscroll="{down: 'animate__animated animate__fadeInLeft animate__faster'}">
              <li class="list-item">
                Apple Pay и Google Pay
              </li>
              <li class="list-item">
                Банковские карты
              </li>
              <li class="list-item">
                Электронные кошельки
              </li>
            </ul>
          </div>
        </div>
        <div class="images__inner">
          <div class="inner__row">
            <div class="row__image mastercard" v-animate-onscroll="{down: 'animate__animated animate__fadeInLeft animate__faster'}"></div>
            <div class="row__image visa" v-animate-onscroll="{down: 'animate__animated animate__fadeInLeft animate__faster'}"></div>
          </div>
          <div class="inner__row">
            <div class="row__image google" v-animate-onscroll="{down: 'animate__animated animate__fadeInLeft animate__faster'}"></div>
            <div class="row__image apple" v-animate-onscroll="{down: 'animate__animated animate__fadeInLeft animate__faster'}"></div>
            <div class="row__image youmoney" v-animate-onscroll="{down: 'animate__animated animate__fadeInLeft animate__faster'}"></div>
          </div>
          <div class="inner__row">
            <div class="row__image qiwi" v-animate-onscroll="{down: 'animate__animated animate__fadeInLeft animate__faster'}"></div>
            <div class="row__image mir" v-animate-onscroll="{down: 'animate__animated animate__fadeInLeft animate__faster'}"></div>
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

.section-popular {
  margin-bottom: 160px;

  @include max-1440 {
    margin-bottom: 96px;
  }
}

.wrapper {
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 30px;

  @include max-768 {
    grid-template-columns: 1fr;
  }
}

.title-text {
  font-size: 48px;
  line-height: 105%;
  color: #0e1420;
  margin-bottom: 20px;
  display: inline-block;

  @include max-1440 {
    font-size: 40px;
  }

  @include max-768 {
    font-size: 34px;
  }
}

.desc-text {
  font-size: 20px;
  line-height: 140%;
  color: #626a7a;
  display: inline-block;
  margin-bottom: 48px;

  @include max-1440 {
    font-size: 18px;
  }
}

.list-item {
  font-size: 20px;
  line-height: 140%;
  color: #0e1420;
  margin-bottom: 20px;
  position: relative;
  padding-left: 40px;

  @include max-1440 {
    font-size: 18px;
  }

  &:before {
    position: absolute;
    content: "";
    background-image: url(@/assets/img/popular_item_icon.svg);
    left: 0;
    top: 0;
    width: 24px;
    height: 24px;
  }
}

.images__inner {
  @include max-768 {
    background: url(@/assets/img/popular_background_mobile.png) no-repeat 50%;
    background-size: contain;
  }
}

.inner__row {
  display: flex;
  justify-content: center;
}

.row__image {
  width: 132px;
  height: 132px;
  background: #fff;
  box-shadow: 0 37.7143px 75.4286px -23.5714px rgb(82 95 122 / 32%);
  border-radius: 1689.6px;
  margin: 0 10px;
  background-repeat: no-repeat;
  background-position: 50%;
  background-size: 60%;

  @include max-1440 {
    width: 103px;
    height: 103px;
    box-shadow: 0 29.5557px 59.1114px -18.4723px rgb(82 95 122 / 32%);
  }

  @include max-1024 {
    width: 92px;
    height: 92px;
    box-shadow: 0 26.477px 52.9539px -16.5481px rgb(82 95 122 / 32%);
  }

  @include max-768 {
    width: 75px;
    height: 75px;
    box-shadow: 0 21.4917px 42.9833px -13.4323px rgb(82 95 122 / 32%);
  }

  &.mastercard {
    background-image: url(@/assets/img/mastercard.svg);
  }

  &.visa {
    background-image: url(@/assets/img/visa.svg);
  }

  &.google {
    background-image: url(@/assets/img/google.svg);
  }

  &.apple {
    background-image: url(@/assets/img/apple.svg);
  }

  &.youmoney {
    background-image: url(@/assets/img/youmoney.svg);
  }

  &.qiwi {
    background-image: url(@/assets/img/qiwi.svg);
  }

  &.mir {
    background-image: url(@/assets/img/mir.svg);
  }
}

</style>