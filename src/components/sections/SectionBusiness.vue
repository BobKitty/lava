<template>
  <section class="section-business">
    <div class="container">
      <div v-animate-onscroll="{down: 'animate__animated animate__fadeInLeft animate__faster'}">
        <h3 class="items__title">
          Бизнесу получать
          <br>
          оплату от клиентов
        </h3>
        <div class="item__list">
          <div class="businessItem">
            <img src="@/assets/img/payments.svg" alt="payments" class="businessItemImage">
            <div class="businessItemInfo">
              <span class="businessItemLabel">
                Приём платежей
              </span>
              <span class="businessItemDesc">
                На сайте и в мобильном приложении
              </span>
            </div>
          </div>
          <div class="businessItem">
            <img src="@/assets/img/paymentLink.svg" alt="payment link" class="businessItemImage">
            <div class="businessItemInfo">
              <span class="businessItemLabel">
                Платёжные ссылки
              </span>
              <span class="businessItemDesc">
                Отправить в соц. сетях или в мессенджерах
              </span>
            </div>
          </div>
          <div class="businessItem">
            <img src="@/assets/img/invoices.svg" alt="invoices" class="businessItemImage">
            <div class="businessItemInfo">
              <span class="businessItemLabel">
                Счета
              </span>
              <span class="businessItemDesc">
                Выставляйте счета своим клиентам
              </span>
            </div>
          </div>
          <div class="businessItem">
            <img src="@/assets/img/payout.svg" alt="payout" class="businessItemImage">
            <div class="businessItemInfo">
              <span class="businessItemLabel">
                Массовые выплаты
              </span>
              <span class="businessItemDesc">
                Совершайте любое количество выплат
              </span>
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

.section-business {
  margin-bottom: 80px;

  @include max-1440 {
    margin-bottom: 48px;
  }
}

.items__title {
  padding-top: 80px;
  margin-top: -80px;
  font-size: 48px;
  line-height: 105%;
  color: #0e1420;
  margin-bottom: 32px;

  @include max-1440 {
    font-size: 40px;
  }

  @include max-768 {
    font-size: 34px;
  }
}

.item__list {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-gap: 20px;
  width: 100%;

  @include max-1024 {
    grid-template-columns: 1fr 1fr;
  }

  @include max-768 {
    grid-template-columns: 1fr;
  }
}

.businessItem {
  padding: 33px 24px 24px;
  background: #fff;
  box-shadow: 0 4px 16px rgb(101 105 112 / 8%), 0 16px 24px -12px rgb(101 105 112 / 4%);
  border-radius: 24px;
  transition: all .5s;
  filter: grayscale(1);

  @include max-1024 {
    display: flex;
    align-items: center;
  }

  &:hover {
    filter: grayscale(0);
    box-shadow: 0 5px 24px rgb(101 105 112 / 12%), 0 32px 48px -12px rgb(101 105 112 / 6%);
  }
}

.businessItemImage {
  margin-bottom: 10px;
  transition: all .5s;

  @include max-1024 {
    margin-bottom: 0;
    margin-right: 20px;
  }
}

.businessItemInfo {
  display: flex;
  flex-direction: column;
}

.businessItemLabel {
  font-size: 20px;
  line-height: 140%;
  color: #0e1420;
  display: inline-block;
  margin-bottom: 8px;

  @include max-1440 {
    font-size: 18px;
  }
}

.businessItemDesc {
  display: inline-block;
  font-size: 18px;
  line-height: 135%;
  color: #626a7a;

  @include max-1440 {
    font-size: 16px;
  }
}


</style>