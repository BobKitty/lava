<template>
  <section class="section-main">
    <div class="container">
      <div class="main-wrapper animate__animated animate__fadeInLeft animate__faster firstAnimate">
        <div class="section-main__info">
          <div class="info-wrapper">
            <h3 class="info-title">
              Приём платежей для всех
            </h3>
            <span class="info-description">
              Принимайте оплату на сайте, в приложении, социальных сетях, мессенджерах или с помощью ссылки
            </span>
            <RouterLink to="/signup" class="btn btn-colored">
              Подключить
            </RouterLink>
          </div>
        </div>
        <div class="section-main__slider">
          <div class="slider-wrapper">
            <swiper
                :modules="modules"
                :slides-per-view="2"
                :space-between="16"
                navigation
                :breakpoints="{
                  '768': {
                    slidesPerView: 4,
                    spaceBetween: 24,
                  },
                  '1024': {
                    slidesPerView: 2,
                    spaceBetween: 24,
                  },
                }"
                @swiper="onSwiper"
                @slideChange="onSlideChange"
            >
              <swiper-slide>
                <div class="slider__item">
                  <img class="item__image" src="@/assets/img/slider-outcome.svg" alt="icon outcome">
                  <span class="item__title">
                    Быстрый вывод без заморозки
                  </span>
                  <span class="item__description">
                    Вывод денежных средств в&nbsp;любой момент
                  </span>
                </div>
              </swiper-slide>
              <swiper-slide>
                <div class="slider__item">
                  <img class="item__image" src="@/assets/img/slider-security.svg" alt="icon security">
                  <span class="item__title">
                    Безопасные <br> транзакции
                  </span>
                  <span class="item__description">
                    Проактивная защита от мошенничества
                  </span>
                </div>
              </swiper-slide>
              <swiper-slide>
                <div class="slider__item">
                  <img class="item__image" src="@/assets/img/slider-applePay.svg" alt="icon applePay">
                  <span class="item__title">
                    Принимайте оплату <br> в один клик
                  </span>
                  <span class="item__description">
                    Можно оплатить через Apple Pay и Google Pay
                  </span>
                </div>
              </swiper-slide>
              <swiper-slide>
                <div class="slider__item">
                  <img class="item__image" src="@/assets/img/slider-api.svg" alt="icon api">
                  <span class="item__title">
                    Простой API и интеграция
                  </span>
                  <span class="item__description">
                    Удобное подключение своего проекта
                  </span>
                </div>
              </swiper-slide>

            </swiper>
          </div>
        </div>
        <img src="@/assets/img/main_background2x.png" class="section-main__picture" alt="Lava background" />
      </div>
    </div>
  </section>
</template>

<script>
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Navigation } from "swiper";

import 'swiper/css';
import "swiper/css/navigation";

export default {
  components: {
    Swiper,
    SwiperSlide,
  },
  data() {
    return {
      modules: [Navigation]
    }
  },
  methods: {
    onSwiper(swiper) {
      console.log(swiper);
    },

    onSlideChange() {
      console.log('slide change');
    },
  },
};
</script>

<style scoped lang="scss">
@import './src/assets/scss/main.scss';

.section-main {
  padding-top: 144px;
  margin-bottom: 64px;
}

.main-wrapper {
  width: 100%;
  display: grid;
  grid-template-areas:
      "info picture"
      "slider picture";
  justify-content: space-between;
  grid-template-columns:
      minmax(150px,500px)
      minmax(150px,704px);

  @include max-1440 {
    grid-template-columns:
        minmax(150px,384px)
        minmax(400px,1fr);
  }

  @include max-1024 {
    grid-template-areas:
        "info picture"
        "slider slider";
    grid-template-columns:
        minmax(150px,344px)
        minmax(150px,1fr);
    grid-row-gap: 90px;
    row-gap: 90px;
  }

  @include max-768 {
    grid-template-areas:
        "info info"
        "picture picture"
        "slider slider";
  }
}

.section-main__info {
  grid-area: info;
}

.info-wrapper {
  @include max-1024 {
    margin-bottom: 64px;
  }

  @include max-768 {
    text-align: center;
    margin-bottom: 0;
  }
}

.info-title {
  margin-top: 32px;
  margin-bottom: 32px;
  font-weight: 600;
  font-size: 64px;
  line-height: 90%;
  color: #0e1420;
  max-width: 384px;

  @include max-1440 {
    margin-top: 24px;
    margin-bottom: 24px;
    font-size: 56px;
    max-width: 354px;
  }

  @include max-1024 {
    font-size: 64px;
  }

  @include max-768 {
    font-size: 40px;
    max-width: 100%;
  }
}

.info-description {
  display: inline-block;
  font-size: 20px;
  line-height: 140%;
  color: #626a7a;
  margin-bottom: 32px;
  max-width: 400px;

  @include max-1440 {
    font-size: 18px;
    margin-bottom: 24px;
  }

  @include max-768 {
    max-width: 100%;
  }
}

.section-main__slider {
  grid-area: slider;
}

.slider-wrapper {
  margin-top: 76px;
  margin-bottom: 100px;

  @include max-1440 {
    margin-top: 48px;
  }
}

.slider__item {
  display: flex;
  flex-direction: column;
  padding-bottom: 30px;
}

.item__image {
  margin-bottom: 16px;
  max-width: 48px;
}

.item__title {
  font-size: 20px;
  line-height: 140%;
  color: #0e1420;
  margin-bottom: 12px;
}

.item__description {
  font-size: 18px;
  line-height: 135%;
  color: #626a7a;
  margin-bottom: 20px;
}

.section-main__picture {
  grid-area: picture;
  position: relative;

  @include max-768 {
    max-height: 416px;
    margin: 0 auto;
  }
}


</style>