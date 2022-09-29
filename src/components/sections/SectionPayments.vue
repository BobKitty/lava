<template>
  <section class="section-payments">
    <div class="secondary_container">
      <div class="section-payments__wrapper">
        <div class="wrapper__items">
          <div class="items__inner">
            <div class="inner__column">
              <div class="column__item" v-animate-onscroll="{down: 'animate__animated animate__fadeInLeft animate__faster'}">
                <div class="item__icon mobile">
                  <div class="icon__image"></div>
                </div>
                <span class="item__text">
                  Мобильная связь
                </span>
              </div>
            </div>
            <div class="inner__column">
              <div class="column__item" v-animate-onscroll="{down: 'animate__animated animate__fadeInLeft animate__faster'}">
                <div class="item__icon games">
                  <div class="icon__image"></div>
                </div>
                <span class="item__text">
                  Игровые сервисы
                </span>
              </div>
              <div class="column__item" v-animate-onscroll="{down: 'animate__animated animate__fadeInLeft animate__faster'}">
                <div class="item__icon gibdd">
                  <div class="icon__image"></div>
                </div>
                <span class="item__text">
                  Штрафы ГИБДД
                </span>
              </div>
            </div>
            <div class="inner__column">
              <div class="column__item" v-animate-onscroll="{down: 'animate__animated animate__fadeInLeft animate__faster'}">
                <div class="item__icon social">
                  <div class="icon__image"></div>
                </div>
                <span class="item__text">
                  Социальные сети
                </span>
              </div>
            </div>
          </div>
        </div>
        <div class="wrapper__body">
          <div class="body__title">
            <h3 class="title__text" v-animate-onscroll="{down: 'animate__animated animate__fadeInLeft animate__faster'}">
              Онлайн-платежи и переводы
            </h3>
          </div>
          <div class="body__description">
            <span class="description__text" v-animate-onscroll="{down: 'animate__animated animate__fadeInLeft animate__faster'}">
              Управляйте денежными средствами как захотите
            </span>
          </div>
          <div class="body__features">
            <ul class="features__list">
              <li class="list__item" v-animate-onscroll="{down: 'animate__animated animate__fadeInLeft animate__faster'}">
                Переводы на карты и кошельки
              </li>
              <li class="list__item" v-animate-onscroll="{down: 'animate__animated animate__fadeInLeft animate__faster'}">
                Погашение штрафов ГИБДД
              </li>
              <li class="list__item" v-animate-onscroll="{down: 'animate__animated animate__fadeInLeft animate__faster'}">
                Оплата услуг ЖКХ, связи, игр и других
              </li>
            </ul>
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

.section-payments {
  margin-bottom: 176px;

  @include max-1440 {
    margin-bottom: 96px;
  }
}

.section-payments__wrapper {
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 24px;

  @include max-768 {
    grid-template-columns: 1fr;
  }
}

.wrapper__items {
  display: flex;
  justify-content: center;

  @include max-768 {
    order: 1;
    background: url(@/assets/img/payment_background_mobile.png) no-repeat 50%;
    background-size: contain;
  }
}

.items__inner {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-columns: minmax(70px,116px) minmax(70px,116px) minmax(70px,116px);
  grid-gap: 15px;
  align-items: center;

  @include max-1440 {
    grid-template-columns: minmax(70px,93px) minmax(70px,93px) minmax(70px,93px);
  }

  @include max-1024 {
    grid-template-columns: minmax(70px,84px) minmax(70px,84px) minmax(70px,84px);
  }
}

.inner__column {
  display: grid;
  grid-template-rows: 1fr;
  grid-row-gap: 15px;
  row-gap: 15px;
}

.column__item {
  padding: 8px;
  display: flex;
  flex-direction: column;
  text-align: center;
  background-color: #fff;
  box-shadow: 0 31.1361px 62.2723px -19.4601px rgb(82 95 122 / 32%);
  border-radius: 116.761px 116.761px 23.3521px 23.3521px;

  @include max-1440 {
    padding: 9.33px;
  }

  @include max-1024 {
    padding: 6.33px;
  }
}

.item__icon {
  width: 93px;
  height: 93px;
  background: #fff;
  border-radius: 1689.6px;
  background-repeat: no-repeat;
  background-position: 50%;
  margin-bottom: 15px;
  display: flex;
  align-items: center;
  justify-content: center;
  align-self: center;

  @include max-1440 {
    height: 74px;
    width: 74px;
  }

  @include max-1024 {
    height: 66px;
    width: 66px;
  }

  @include max-768 {
    height: 77px;
    width: 77px;
  }

  &.mobile {
    background: rgba(66,133,244,.12);

    & > .icon__image {
      background-image: url(@/assets/img/mobile.svg);
    }
  }

  &.games {
    background: rgba(159,83,255,.12);

    & > .icon__image {
      background-image: url(@/assets/img/games.svg);
    }
  }

  &.gibdd {
    background: rgba(10,185,136,.12);

    & > .icon__image {
      background-image: url(@/assets/img/gibdd.svg);
    }
  }

  &.social {
    background: rgba(255,53,113,.12);

    & > .icon__image {
      background-image: url(@/assets/img/social.svg);
    }
  }
}

.icon__image {
  width: 46px;
  height: 46px;
  background-repeat: no-repeat;
  background-position: 50%;
  background-size: contain;
}

.item__text {
  display: inline-block;
  font-size: 16px;
  line-height: 18px;
  text-align: center;
  color: #000;

  @include max-1440 {
    font-size: 12.7865px;
    line-height: 18px;
  }
}

.wrapper__body {
  @include max-768 {
    order: 0;
    margin-bottom: 48px;
  }
}

.title__text {
  font-size: 48px;
  line-height: 105%;
  color: #0e1420;
  margin-bottom: 20px;

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
  display: inline-block;
  margin-bottom: 48px;
  color: #626a7a;

  @include max-1440 {
    font-size: 18px;
  }
}

.list__item {
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

</style>