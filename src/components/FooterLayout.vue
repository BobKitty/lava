<template>
  <section class="section-footer">
    <div class="container">
      <div class="section-footer__wrapper">
        <div class="wrapper__footer-menu">
          <div class="footer-menu__inner">
            <div class="inner__logo">
              <RouterLink to="/">
                <img alt="LAVA" src="@/assets/img/walogo.svg" class="logo__image"/>
              </RouterLink>
            </div>
            <div class="inner__company">
              <ul class="menu__list">
                <li class="list__item title">
                  Компания
                </li>
                <li class="list__item">
                  <RouterLink to="/about">
                    О компании
                  </RouterLink>
                </li>
                <li class="list__item">
                  <a target="_blank" href="/">
                    Публичная оферта
                  </a>
                </li>
                <li class="list__item">
                  <a target="_blank" href="/">
                    Политика конфиденциальности
                  </a>
                </li>
                <li class="list__item">
                  <a target="_blank" href="/">
                    Правила платежной организации
                  </a>
                </li>
                <li class="list__item">
                  <RouterLink to="/vacancy">
                    Вакансии
                  </RouterLink>
                </li>
              </ul>
            </div>
            <div class="inner__support">
              <ul class="menu__list">
                <li class="list__item title">
                  Поддержка
                </li>
                <li class="list__item">
                  <a href="mailto:">
                    Эл. почта
                  </a>
                </li>
                <li class="list__item">
                  <RouterLink to="/vulnerability">
                    Сообщить об ошибке
                  </RouterLink>
                </li>
              </ul>
            </div>
            <div class="inner__integration">
              <ul class="menu__list">
                <li class="list__item title">
                  Интеграция
                </li>
                <li class="list__item">
                  <RouterLink to="/api">
                    Документация API
                  </RouterLink>
                </li>
                <li class="list__item">
                  <a href="https://lava.kz/site_requirements.pdf">
                    Требования к сайтам
                  </a>
                </li>
                <li class="list__item">
                  <RouterLink to="/resource">
                    Логотип и брендинг
                  </RouterLink>
                </li>
              </ul>
            </div>
          </div>
          <div class="social-wrapper">
            <a href="https://apps.apple.com/app/lava-%D0%BB%D0%B8%D1%87%D0%BD%D1%8B%D0%B9-%D0%BA%D0%B0%D0%B1%D0%B8%D0%BD%D0%B5%D1%82/id1636484894" target="_blank" class="social__message">
              <img src="@/assets/img/icon-appstore.svg" alt="IconAppStore" />
            </a>
          </div>
        </div>
        <div class="wrapper__footer-info">
          <div class="footer-info__wrapper">
            <div class="wrapper__menu">
              <ul class="menu__list">
                <li class="pci__text">
                  ООО "ЛАВ-А", ИНН 9702037833
                </li>
              </ul>
            </div>
            <div class="wrapper__pci">
              <div class="pci__image">
                <a href="https://compliance-control.ru/cert/lava/pcidss_compliance.html">
                  <img src="@/assets/img/pci-dss.svg" alt="pci-dss">
                </a>
              </div>
            </div>
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

.section-footer {
  border-top: 1px solid #f2f3f5;
  margin-bottom: 50px;

  @media only screen and (max-width: 824px) {
    margin-bottom: 24px;
  }

  @media only screen and (max-width: 768px) {
    margin-bottom: 24px;
  }
}

.section-footer__wrapper {
  padding-top: 94px;
  padding-bottom: 24px;

  @include max-1024 {
    padding-top: 64px;
  }
}

.footer-menu__inner {
  display: grid;
  grid-template-areas:
        "logo support integration company"
        ". for-you . .";
  grid-template-columns: minmax(100px,288px) minmax(100px,288px) minmax(100px,288px) minmax(100px,288px);
  grid-column-gap: 24px;
  -moz-column-gap: 24px;
  column-gap: 24px;
  grid-row-gap: 28px;
  row-gap: 28px;
  border-bottom: 1px solid #f2f3f5;
  margin-bottom: 21px;

  @include max-1024 {
    grid-template-areas: "logo support integration" "company .";
    grid-template-columns: minmax(100px,288px) minmax(100px,288px) minmax(100px,288px);
  }

  @include max-768 {
    grid-template-areas:
        "logo logo"
        "support integration"
        "company .";
    grid-template-columns: minmax(100px,288px) minmax(100px,288px);
  }
}

.inner__logo {
  grid-area: logo;
  display: flex;
  flex-direction: column;
}

.logo__image {
  display: flex;
  align-items: center;
  margin-bottom: 16px;
}

.inner__company {
  grid-area: company;
}

.menu__list {
  font-size: 18px;
  line-height: 135%;
  color: #626a7a;

  @include max-1440 {
    font-size: 16px;
  }
}

.list__item {
  margin-bottom: 12px;

  &.title {
    color: #0e1420;
  }

  & a:hover {
    color: #000;
  }
}

.inner__support {
  grid-area: support;
}

.inner__integration {
  grid-area: integration;
}

.social-wrapper {
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid #f2f3f5;
  padding-bottom: 18px;
  margin-bottom: 22px;
}

.social__message {
  display: flex;
}

.footer-info__wrapper {
  display: flex;
  justify-content: space-between;
  align-items: center;

  @include max-768 {
    flex-direction: column-reverse;
    align-items: start;
  }
}

.pci__text {
  font-size: 12px;
  color: #666;
  text-overflow: ellipsis;
  overflow: hidden;
}

.wrapper__pci {
  @media only screen and (max-width: 768px) {
    margin-bottom: 16px;
  }
}



</style>