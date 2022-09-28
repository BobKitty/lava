<template>
  <div class="header" :class="{scrolled: isScroll}">
    <div class="container">
      <div class="content" :class="{small: isBurger}">
        <div class="logo">
          <RouterLink to="/" custom v-slot="{ navigate }">
            <img alt="LAVA" src="@/assets/img/logo.svg" @click="navigate"/>
          </RouterLink>
        </div>
        <transition name="rightSlide">
          <div class="mobileMenu" v-if="isBurger">
            <div class="mobileNav">
              <div class="mobileInner">
                <div class="mobileWrapper">
                  <div class="container">
                    <h3 class="mobileTitle">
                      Интеграция
                    </h3>
                    <div class="mobileServices">
                      <div class="mobileServicesColumn">
                        <ul>
                          <RouterLink to="/doc" custom v-slot="{ navigate }">
                            <li class="menuItem" @click="navigate">
                              <div class="mobileMenuItem">
                                <img class="menuItemImage" src="@/assets/img/doc.svg" srcset="@/assets/img/doc1x.svg 1x, @/assets/img/doc2x.svg 2x" width="36" alt="" />
                                <div class="menuItemInfo">
                                  <span class="menuItemLabel">
                                    Документация
                                  </span>
                                </div>
                              </div>
                            </li>
                          </RouterLink>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="container">
                  <RouterLink to="/individual" custom v-slot="{ navigate }">
                    <h3 class="mobileTitle headerHelp" @click="navigate">
                      Самозанятым
                    </h3>
                  </RouterLink>
                </div>
                <div class="mobileNavButtons">
                  <div class="mobileNavButtonsWrapper">
                    <RouterLink to="/dashboard" class="mobileNavButtonsRegister">
                      Личный кабинет
                    </RouterLink>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </transition>
        <div class="nav">
          <nav>
            <ul class="navList">
              <li class="navListItem" @mouseover="showNavListItem = true" @mouseleave="showNavListItem = false">
                <span class="headerNavLink">
                  Интеграция
                </span>
                <transition name="fade">
                  <nav class="subMenu" v-if="showNavListItem">
                    <div class="subMenuColumn">
                      <div class="subMenuTitle" style="display: none">
                        <span class="subMenuTitleText">
                          Бизнесу
                        </span>
                        <span class="subMenuTitleDesc">
                          Принемайте платежи
                        </span>
                      </div>
                      <ul>
                        <RouterLink to="/doc" custom v-slot="{ navigate }">
                          <li class="menuItem" @click="navigate">
                            <img class="menuItemImage" src="@/assets/img/doc.svg" srcset="@/assets/img/doc1x.svg 1x, @/assets/img/doc2x.svg 2x" alt="" />
                            <div class="menuItemInfo">
                              <span class="menuItemLabel">
                                Документация
                              </span>
                              <span class="menuItemDesc">
                                для разработчиков
                              </span>
                            </div>
                          </li>
                        </RouterLink>
                      </ul>
                    </div>
                  </nav>
                </transition>
              </li>
              <li class="navListItem">
                <RouterLink to="/individual" class="headerNavLink">
                  Самозанятым
                </RouterLink>
              </li>
            </ul>
          </nav>
        </div>
        <div class="buttons">
          <div class="buttonLogin">
            <RouterLink to="/login" class="btn btn-common">
              Войти
            </RouterLink>
          </div>
          <div class="buttonRegister">
            <RouterLink to="/signup" class="btn btn-outline">
              Создать аккаунт
            </RouterLink>
          </div>
          <div class="burger" :class="{active: isBurger}" @click="useMobileMenu">
            <span class="burgerInner"></span>
            <span class="burgerInner"></span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { RouterLink } from 'vue-router';

export default {
  data() {
    return {
      showNavListItem: false,
      isBurger: false,
      isScroll: false,
    }
  },
  methods: {
    useMobileMenu() {
      const vm = this;
      vm.isBurger = !vm.isBurger;
      document.querySelector('body').style.overflow = vm.isBurger ? 'hidden' : '';
    },

    vueOnScroll() {
      const vm = this;
      let prev = window.pageYOffset;
      window.addEventListener("scroll", () => {
        let curr = window.pageYOffset;
        if (prev < curr) {
          vm.isScroll = true;
        }
        if (curr === 0) {
          vm.isScroll = false;
        }
        prev = curr;
      });
    },
  },
  mounted() {
    this.vueOnScroll();
  }
}
</script>

<style scoped lang="scss">
@import './src/assets/scss/main.scss';

.header {
  position: fixed;
  top: 0;
  z-index: 100;
  width: 100%;
  background-color: #fff;

  &.scrolled {
    & .content {
      height: 80px;
    }
  }
}

.content {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  align-items: center;
  justify-content: space-between;
  height: 144px;
  transition: all .5s;

  @include max-1440 {
    display: flex;
  }

  &.small {
    height: 80px;
  }
}

.logo {
  display: flex;
  align-items: center;

  & > img {
    cursor: pointer;
  }
}

.mobileMenu {
  position: absolute;
  left: 0;
  transform: none;
  top: 72px;
}

.mobileNav {
  position: absolute;
  left: 0;
  top: 0;
  z-index: 10;
  width: 100vw;
  height: 100vh;
  background: #fff;
  display: flex;
  flex-direction: column;
  overflow: hidden;
}

.mobileInner {
  padding-bottom: 180px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100vh;
}

.mobileWrapper {
  border-bottom: 1px solid #e8eaed;
}

.mobileTitle {
  font-size: 26px;
  line-height: 105%;
  color: #0e1420;
  padding: 32px 0 24px;

  &.headerHelp {
    position: relative;
    display: inline-block;
    padding-right: 40px;

    &:after {
      position: absolute;
      content: "";
      background-image: url(@/assets/img/arrow-right_grey.svg);
      background-size: contain;
      width: 12px;
      height: 10px;
      right: 0;
      top: 50%;
    }
  }
}

.mobileServices {
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr;

  @include max-768 {
    grid-template-columns: 1fr;
  }
}

.mobileServicesColumn {
  padding-bottom: 30px;
}

.mobileMenuItem {
  display: flex;
  align-items: center;
  width: 100%;
}

.mobileNavButtons {
  margin-top: 24px;
  padding: 0 10px;
}

.mobileNavButtonsWrapper {
  background: #fff;
  box-shadow: 0 5px 24px rgb(101 105 112 / 12%), 0 32px 48px -12px rgb(101 105 112 / 6%);
  border-radius: 512px;
  padding: 12px;
  display: flex;
  margin-bottom: 50px;
  justify-content: space-between;
}

.mobileNavButtonsRegister {
  padding: 15px 0;
  width: 100%;
  display: flex;
  justify-content: center;
  background-color: #ff5314;
  border: 1px solid transparent;
  border-radius: 512px;
  color: #fff;

  &:hover {
    background: #ff6933;
  }

  &:active {
    background: #fa4300;
  }
}

.nav {
  @include max-1024 {
    display: none;
  }
}

.navList {
  display: flex;
  align-items: center;
  justify-content: center;
}

.navListItem {
  position: relative;
  padding: 15px 0;
  border-radius: 512px;

  &:hover {
    & .headerNavLink {
      background: #f6f7f8;
      color: #0e1420;
    }
  }
}

.headerNavLink {
  padding: 10px 20px;
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 135%;
  color: #505d78;
  border-radius: 512px;
  background: transparent;
  text-decoration: none;
  margin: 2px;
  transition: all .3s;
  cursor: pointer;
}

.subMenu {
  position: absolute;
  bottom: 0;
  left: -15px;
  padding: 12px;
  background-color: #fff;
  filter: drop-shadow(0 10px 60px rgba(82,95,122,.1));
  display: flex;
  border-radius: 24px;
  transform: translateY(100%);
  opacity: 1;
}

.subMenuColumn {
  display: flex;
  flex-direction: column;
  min-width: 344px;
}

.subMenuTitle {
  display: flex;
  flex-direction: column;
  padding: 12px 0 24px 12px;
}

.subMenuTitleText {
  font-size: 24px;
  line-height: 135%;
  color: #0e1420;
}

.subMenuTitleDesc {
  font-size: 18px;
  line-height: 135%;
  color: #626a7a;
}

.menuItem {
  position: relative;
  display: flex;
  align-items: center;
  width: 100%;
  padding: 12px 36px 12px 12px;
  background-color: transparent;
  transition: all .5s;
  border-radius: 12px;
  cursor: pointer;
  filter: grayscale(1);

  &:hover {
    background-color: #f6f7f8;
    filter: grayscale(0);
  }

  &:active {
    background: #e8eaed;
  }
}

.menuItemImage {
  margin-right: 16px;
  display: inline-block;
}

.menuItemInfo {
  display: flex;
  flex-direction: column;
}

.menuItemLabel {
  font-size: 18px;
  line-height: 135%;
  color: #0e1420;
}

.menuItemDesc {
  display: inline-block;
}

.buttons {
  display: flex;
  align-items: center;
  justify-content: flex-end;
}

.buttonLogin {
  margin-right: 12px;

  @include max-1024 {
    display: none;
  }
}

.buttonRegister {
  @include max-768 {
    display: none;
  }
}

.burger {
  display: none;

  @include max-1024 {
    z-index: 50;
    display: flex;
    flex-direction: column;
    margin-left: 20px;
    width: 20px;
    height: 10px;
    justify-content: space-between;
    align-items: center;
    position: relative;
  }

  &.active {
    & .burgerInner {
      &:first-of-type {
        transform: rotate(-45deg);
        top: 4px;
      }

      &:last-of-type {
        transform: rotate(45deg);
        bottom: 4px;
      }
    }
  }
}

.burgerInner {
  height: 2px;
  width: 20px;
  background: #000;
  position: absolute;
  transition: all .5s;

  &:first-of-type {
    top: 0;
  }

  &:last-of-type {
    bottom: 0;
  }
}

// animations
.fade-enter-active, .fade-leave-active {
  transition: opacity .3s ease-in-out;
}

.fade-enter-from, .fade-leave-to {
  opacity: 0;
}

.rightSlide-enter-active, .rightSlide-leave-active {
  transition: transform .3s ease-in-out;
}

.rightSlide-enter-from, .rightSlide-leave-to {
  transform: translateX(100vw);
}
</style>