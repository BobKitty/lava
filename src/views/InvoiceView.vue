<template>
  <div class="wrapper">
    <div class="invoice_container">
      <div class="invoiceBlock">
        <div class="payment">
          <div class="paymentWrapper">
            <button class="backBtn" v-if="isSelectPay" @click="isSelectPay = false">
              <svg viewBox="64 64 896 896" focusable="false" data-icon="left" width="1em" height="1em" fill="currentColor" aria-hidden="true"><path d="M724 218.3V141c0-6.7-7.7-10.4-12.9-6.3L260.3 486.8a31.86 31.86 0 000 50.3l450.8 352.1c5.3 4.1 12.9.4 12.9-6.3v-77.3c0-4.9-2.3-9.6-6.1-12.6l-360-281 360-281.1c3.8-3 6.1-7.7 6.1-12.6z"></path></svg>
            </button>
            <div class="paymentHeader">
              <RouterLink to="/" custom v-slot="{ navigate }">
                <img alt="LAVA" src="@/assets/img/walogo.svg" @click="navigate" class="paymentLogo"/>
              </RouterLink>
            </div>
            <div class="paymentTitle">
              Пополнить LAVA-кошелёк
            </div>
            <template v-if="orderInfo">
              <div class="paymentContent" v-if="isSelectPay">
                <div class="paymentError"></div>
                <div class="paymentContentTitle">
                  Введите номер QIWI-кошелька
                </div>
                <div class="walletForm">
                  <vue-tel-input v-model="phone"
                                 mode="international"
                                 :inputOptions="{placeholder: 'Введите номер'}"
                                 styleClasses="container__input"
                  ></vue-tel-input>
                </div>
              </div>
              <div class="services" :class="{'block': isBlock}" v-else-if="orderInfo.status === 'waiting'">
                <div class="servicesBody" v-for="item in pays" :key="item.id" @click="sendRequest(item.id)">
                  <div class="servicesLogo">
                    <img :src="item.img" alt="">
                  </div>
                  <div>
                  <span class="serviceTitle">
                    {{item.name}}
                  </span>
                    <br>
                    <span>
                    Комиссия {{item.fee}}%
                  </span>
                  </div>
                </div>
              </div>
              <div v-else-if="orderInfo.status === 'rejected'">
                rejected
              </div>
              <div v-else-if="orderInfo.status === 'expired'">
                expired
              </div>
              <div v-else>
                error
              </div>
            </template>

          </div>
        </div>
        <div class="invoiceInfo">
          <div style="height: 100%">
            <div class="invoiceInfoBody">
              <div class="info">
                <div class="infoTop">
                  <div>
                    К оплате:
                    <br>
                    <span class="infoSum">11897,43 ₽</span>
                  </div>
                  <div class="infoToggleBtn">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path fill-rule="evenodd" clip-rule="evenodd" d="M5.2318 9.35984C5.58537 8.93556 6.21593 8.87824 6.64021 9.2318L12 13.6983L17.3598 9.2318C17.7841 8.87824 18.4147 8.93556 18.7682 9.35984C19.1218 9.78412 19.0645 10.4147 18.6402 10.7682L12.6402 15.7682C12.2694 16.0773 11.7307 16.0773 11.3598 15.7682L5.35984 10.7682C4.93556 10.4147 4.87824 9.78412 5.2318 9.35984Z" fill="#252129"></path>
                    </svg>
                  </div>
                </div>
                <div>
                  <span class="infoTitle">
                    Назначение перевода
                  </span>
                  <br>
                  <span class="infoComment">
                    Оплата счета 162413685
                  </span>
                </div>
                <div class="infoTitle">
                  Счёт действителен до  30.09.2022
                </div>
              </div>
              <div class="invoiceBottom">
                <div class="help">
                  Нужна помощь?
                  <div class="links">
                    <img src="@/assets/img/invoice/icon-telegram.svg" width="32" alt="telegram-icon">
                    <img src="@/assets/img/invoice/icon-email.svg" width="32" alt="mail-icon">
                  </div>
                </div>
                <div class="offer">
                  Совершая перевод, вы соглашаетесь
                  <a target="_blank" href="https://lava.kz/uploads/public_offer.pdf" rel="noreferrer">
                    с офертой
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="invoice_footer">
      <div>
        <div class="certificates">
          <a href="http://compliance-control.ru/cert/lava/pcidss_compliance.html" target="_blank" rel="noreferrer">
            <div class="svgWrapperIcon">
              <svg height="30" viewBox="0 0 79 30" width="51" xmlns="http://www.w3.org/2000/svg"><g fill="#225e63"><path d="m2.01492 1.67911.78359.22387c0 .22389-.11194.44777-.22388.55971s-.22388.22388-.44776.33582c-.11194.11194-.33583.11194-.67165.11194s-.559699 0-.78358-.11194-.335821-.22388-.559701-.44776c0-.22389-.111939-.55971-.111939-.89553 0-.44776.111939-.895518.33582-1.119399.223881-.223881.559702-.33582015 1.1194-.33582015.33582 0 .67164.11193915.89552.22387915.22389.11194.33583.335822.44777.671642l-.78359.223878c0-.11194-.11193-.11194-.11193-.223878 0-.11194-.11195-.11194-.22389-.11194s-.11194 0-.22388 0c-.22388 0-.33582.111941-.44776.223878-.111936.11194-.111938.33582-.111938.5597 0 .33583.000002.55971.111938.67165.11194.11194.22388.22388.44776.22388s.33582 0 .33582-.11194c.11194-.33583.22388-.44776.22388-.67164z" transform="translate(51.49 15.336)"></path><path d="m-.00000085 1.56716c0-.44776.11194185-.783578.44776285-1.119399.223881-.22388.671638-.44776057 1.119408-.44776057.44776 0 .89552.11193957 1.1194.33581957.22388.223881.33582.67164.33582 1.1194 0 .33582-.11194.55971-.22388.78359s-.22388.33582-.44776.44776-.44776.22388-.78358.22388c-.33583 0-.55971 0-.783588-.11194-.22388-.11194-.335821-.22388-.559701-.44776-.223881-.22388-.22388185-.44776-.22388185-.78359zm.89552185 0c0 .33583.000002.44777.111939.67165.11194.11194.22388.22388.44776.22388s.33582-.11194.44777-.22388c.11194-.11194.11193-.33582.11193-.67165 0-.22388.00001-.44776-.11193-.5597-.11195-.111938-.22389-.223879-.44777-.223879s-.33582.111941-.44776.223879c-.111937 0-.111939.22388-.111939.5597z" transform="translate(54.63 15.224)"></path><path d="m.00000171.00000085h1.11939829l.44776 1.79103915.44777-1.79103915h1.1194v2.91044915h-.67165v-2.238809l-.5597 2.238809h-.67164l-.559698-2.238809v2.238809h-.67164029z" transform="translate(58.1 15.336)"></path><path d="m.00000085.00000085h1.45521915c.33582 0 .5597.11193915.67164.22387915s.22389.335822.22389.671642c0 .335818-.11195.559698-.22389.671638-.22388.11194-.44775.22388-.78357.22388h-.447768v1.11941h-.89552115zm.89552115 1.23133915h.223878c.22388 0 .33582 0 .33582-.11194.11194-.11194.11194-.11194.11194-.223878 0-.11194 0-.111941-.11194-.223881s-.22388-.111939-.33582-.111939h-.223878z" transform="translate(61.79 15.336)"></path><path d="m-.00000085.00000085h.89552185v2.12686915h1.343289v.67164h-2.23881085z" transform="translate(64.7 15.336)"></path><path d="m.111939.00000085h.783583v2.91044915h-.89552115v-2.91044915z" transform="translate(67.39 15.336)"></path><path d="m2.01493 2.46269h-1.00747l-.111937.44776h-.89552129l1.11939829-2.91044957h1.00746l1.11941 2.91044957h-.89552zm-.22389-.55971-.33582-1.007458-.33582 1.007458z" transform="translate(68.73 15.224)"></path><path d="m.00000171.00000085h.78357829l1.1194 1.56715915v-1.56715915h.78359v2.91044915h-.78359l-1.1194-1.56717v1.56717h-.78357829z" transform="translate(72.09 15.336)"></path><path d="m-.00000342.00000085h2.68657342v.67164015h-.89552v2.126869h-.895528v-2.126869h-.89552542z" transform="translate(75.22 15.336)"></path><path d="m42.7612 19.7015 2.5746-.7836-.7836-1.903c-.6716.7836-1.2313 1.7911-1.791 2.6866zm-.7836-8.5075-5.0373-11.194-36.9403 2.12687 10.1866 27.87313 19.7015-6.1567c-1.2314-1.7911-1.6791-3.9179-.2239-5.0373 1.5671-1.1194 4.0298.2239 5.597 2.1268 1.4552-2.5746 5.7089-8.3955 6.7164-9.7388z"></path></g><path d="m2.79851 5.37314c1.56716 0 2.79851-1.23135 2.79851-2.68657 0-1.45523-1.23135-2.68657171-2.79851-2.68657171-1.56717 0-2.79850829 1.23134171-2.79850829 2.68657171 0 1.45522 1.34328829 2.68657 2.79850829 2.68657zm-2.238807 1.1194h4.589547v11.97756h-4.589547z" fill="#fefefe" transform="translate(32.91 2.742)"></path><path d="m11.5299 3.63184.1119-3.022388s0-.111939-.1119-.111939c0 0-.5598-.335822-2.46274-.4477626-.11194 0-1.6791-.1119403-2.12686 0-6.604476.5597016-6.94030171 5.3731396-6.94030171 5.5970196v1.1194c0 .11194.00000545 5.03733 6.94030171 5.48503h2.12686c1.56714 0 2.68654-.4477 2.68654-.4477l.112-.112v-2.79846s0 0-.112 0c0 0-.4477.44776-2.68654.5597-.67164.11194-.89552 0-1.1194 0-3.13433-.5597-3.24626-2.79851-3.24626-2.79851v-.11194-.89552-.11194s.22387-2.46269 3.24626-2.68657h1.1194c1.34324.11194 2.46274.78358 2.46274.78358z" fill="#fefefe" transform="translate(19.7 9.073)"></path><path d="m.00000342 11.9776 4.47761658.112s.11193 0 .11193-.112v-3.47014s0-.11194.11194-.11194c0 0 7.16421.5597 7.16421-4.25373 0-3.805969-4.47764-4.14178829-5.93287-4.14178829h-5.820888s-.11193858-.00000171-.11193858.11193829zm4.47761658-6.26864v-3.13433h1.1194s1.56716.11194 1.6791 1.1194v.67164c-.22388 1.23134-1.56716 1.34329-1.56716 1.34329z" fill="#fefefe" transform="translate(7.05 9.235)"></path><path d="m5.93283 19.0307c.33582 0 .67165 0 1.11941-.2239 1.6791-.8955 7.05226-14.21638 12.87316-18.358171l.1119-.11194v-.11194s0-.2238812-.8955-.2238812c-5.1493-.1119408-10.5224 10.6343322-13.3209 14.8880322h-.22389s-1.90298-2.2388-3.47014-3.0224c0 0-.22389-.1119-.44777-.1119-.11194 0-.895517.1119-1.231338.5597-.44776117.4478-.44776285.6716-.44776285 1.2313 0 0 .00000042.2239.11194085.3359.447761.6716 2.23881 3.2462 3.69403 4.5895.33582.112.67164.5597 2.12686.5597z" fill="#2bbc5d" transform="translate(30 7.947)"></path><path d="m.00000171-.00000043h4.25372829c.89552 0 1.56717.11194043 2.01493.33582143.5597.22388.89552.559702 1.23134 1.007459.33582.44777.5597.89553.78358 1.45523.11194.5597.22388 1.1194.22388 1.79104 0 1.00746-.11194 1.79105-.33582 2.35075s-.5597 1.00746-.89552 1.34328c-.44776.33582-.78358.67164-1.34328.78358-.67165.22389-1.23135.22389-1.67911.22389h-4.25372829zm2.91044829 2.12687043v5.03731h.67164c.5597 0 1.00746-.11194 1.23134-.22388s.44776-.33582.55971-.67164c.11194-.33582.22388-.89553.22388-1.56717 0-1.00746-.11195-1.6791-.44777-2.01492s-.89552-.5597-1.56716-.5597z" fill="#225e63" transform="translate(51.38 4.366)"></path><path d="m-.00000085 6.49254 2.68657085-.22388c.11194.44776.22388.78358.33582 1.00746.33582.33582.67164.5597 1.23134.5597.44776 0 .67164-.11194.89553-.33582.22388-.22388.33581-.44776.33581-.67164s-.11193-.44776-.33581-.67164c-.22389-.22388-.67165-.33582-1.45523-.5597-1.23135-.33582-2.12686-.67165-2.68657-1.11941-.559698-.44776-.783579-1.1194-.783579-1.79104 0-.44776.111942-.89553.447762-1.34329.223881-.447758.671637-.783578 1.231347-1.007459.5597-.223881 1.34328-.33582121 2.2388-.33582121 1.23134 0 2.12687.22388121 2.68657.67164221.67164.447758 1.00746 1.119398 1.1194 2.126868l-2.68657.11194c-.11194-.44776-.22388-.67164-.44776-.89552-.22388-.22389-.5597-.33583-1.00746-.33583-.33582 0-.5597.11194-.78358.22388v.67165c0 .11194.11194.33582.22388.44776s.44776.22388 1.00746.33582c1.23134.22388 2.12687.5597 2.68657.78358s.89552.67164 1.23134 1.00746c.22388.44776.33582.89553.33582 1.34329 0 .5597-.11194 1.1194-.44776 1.6791s-.78358.89552-1.34328 1.11941c-.5597.22388-1.34329.33582-2.23881.33582-1.56716 0-2.68656-.33582-3.24626-.89553-.895527-.5597-1.23135085-1.34328-1.23135085-2.2388z" fill="#225e63" transform="translate(60.78 4.142)"></path><path d="m0 6.49254 2.68657-.22388c.11194.44776.22387.78358.33581 1.00746.33583.33582.67165.5597 1.23136.5597.44776 0 .67163-.11194.89551-.33582s.33583-.44776.33583-.67164-.11195-.44776-.33583-.67164-.67163-.33582-1.45522-.5597c-1.23134-.33582-2.12686-.67165-2.68657-1.11941-.559697-.44776-.783579-1.1194-.783579-1.79104 0-.44776.111938-.89553.447759-1.34329.223881-.447758.67164-.783578 1.23134-1.007459.5597-.223881 1.34329-.33582121 2.23881-.33582121 1.23134 0 2.12687.22388121 2.68657.67164221.67164.447758 1.00746 1.119398 1.1194 2.126868l-2.68657.11194c-.11194-.44776-.22387-.67164-.44775-.89552-.22388-.22389-.55971-.33583-1.00747-.33583-.33582 0-.5597.11194-.78359.22388-.22388.11195-.22387.33583-.22387.55971 0 .11194.11193.33582.22387.44776.11195.11194.44777.22388 1.00747.33582 1.23134.22388 2.12687.5597 2.68657.78358s.89552.67164 1.23134 1.00746c.22388.44777.33582.89553.33582 1.34329 0 .5597-.11194 1.1194-.44776 1.6791s-.78358.89552-1.34328 1.1194c-.5597.22389-1.34328.33583-2.2388.33583-1.56717 0-2.68657-.33583-3.24628-.89553-.671637-.44776-1.00746-1.23134-1.00746-2.12686z" fill="#225e63" transform="translate(69.96 4.142)"></path></svg>
            </div>
          </a>
          <div class="svgWrapperIcon">
            <svg id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 84.2 31.3" xml:space="preserve"><path class="st0" d="M59.8,0.7l-0.5,3c-1-0.5-1.7-0.7-2.5-0.7c-2.1,0-3.5,2.1-3.5,5.1c0,2.1,1,3.3,2.6,3.3c0.7,0,1.4-0.2,2.4-0.7 l-0.5,3.1c-1,0.3-1.7,0.4-2.5,0.4c-3,0-4.9-2.3-4.9-5.9c0-4.9,2.6-8.3,6.3-8.3c0.5,0,0.9,0,1.3,0.1l1.1,0.3 C59.5,0.6,59.6,0.6,59.8,0.7z"></path><path class="st0" d="M50.6,2.7c-0.1,0-0.2,0-0.3,0c-0.9,0-1.4,0.5-2.3,1.8l0.2-1.7h-2.5L44,13.9h2.8c1-6.8,1.3-7.9,2.6-7.9 c0.1,0,0.1,0,0.2,0C49.9,4.6,50.2,3.6,50.6,2.7L50.6,2.7z"></path><path class="st0" d="M33.9,13.7c-0.8,0.2-1.4,0.4-2,0.4c-1.4,0-2.2-0.9-2.2-2.4c0-0.3,0-0.6,0.1-1L30,9.6l0.1-0.9l1.2-7.5h2.8 l-0.3,1.6h1.4l-0.4,2.7h-1.4l-0.7,4.6c0,0.2,0,0.4,0,0.5c0,0.6,0.3,0.8,0.9,0.8c0.3,0,0.6,0,0.8-0.1L33.9,13.7z"></path><path class="st0" d="M22.9,6.3c0,1.4,0.6,2.4,2.1,3.1c1.1,0.6,1.3,0.7,1.3,1.2c0,0.7-0.5,1-1.6,1c-0.8,0-1.6-0.1-2.5-0.4l-0.4,2.5 l0.6,0.1c0.2,0,0.4,0.1,0.7,0.1c0.7,0.1,1.2,0.1,1.5,0.1c2.9,0,4.3-1.2,4.3-3.7c0-1.5-0.6-2.4-2-3.1c-1.2-0.6-1.3-0.7-1.3-1.2 c0-0.6,0.5-0.9,1.4-0.9c0.6,0,1.3,0.1,2,0.2l0.4-2.6c-0.7-0.1-1.8-0.2-2.5-0.2C24,2.6,22.9,4.3,22.9,6.3z"></path><path class="st0" d="M82,13.9h-2.6l0.1-1.1C78.8,13.6,78,14,77,14c-2,0-3.4-1.8-3.4-4.6c0-3.7,2.1-6.8,4.5-6.8 c1.1,0,1.9,0.5,2.7,1.5l0.6-3.9h2.7L82,13.9z M77.9,11.3c1.3,0,2.2-1.5,2.2-3.7c0-1.4-0.5-2.2-1.5-2.2c-1.3,0-2.2,1.5-2.2,3.7 C76.5,10.5,77,11.3,77.9,11.3z"></path><path class="st0" d="M42.7,13.6c-1,0.3-1.9,0.5-2.9,0.4c-3.1,0-4.7-1.7-4.7-4.9c0-3.8,2.1-6.6,4.9-6.6c2.3,0,3.8,1.6,3.8,4 c0,0.8-0.1,1.6-0.3,2.7h-5.5c0,0.2,0,0.2,0,0.3c0,1.3,0.8,1.9,2.4,1.9c1,0,1.9-0.2,2.9-0.7L42.7,13.6z M41.2,7.1c0-0.2,0-0.4,0-0.6 c0-0.9-0.5-1.4-1.3-1.4c-0.9,0-1.5,0.7-1.8,2L41.2,7.1z"></path><path class="st0" d="M11.7,13.9H8.9l1.6-10.4L7,13.9H5.1L4.8,3.5L3.2,13.9H0.5L2.7,0.3h4l0.1,8.4l2.7-8.4h4.3L11.7,13.9z"></path><path class="st0" d="M18.9,9c-0.3,0-0.4,0-0.6,0c-1.6,0-2.4,0.6-2.4,1.7c0,0.7,0.4,1.1,1,1.1C18,11.7,18.8,10.6,18.9,9z M20.9,13.9 h-2.3l0.1-1.1c-0.7,0.9-1.6,1.3-2.9,1.3c-1.5,0-2.5-1.2-2.5-3c0-2.7,1.8-4.3,4.9-4.3c0.3,0,0.7,0,1.1,0.1c0.1-0.4,0.1-0.5,0.1-0.7 c0-0.7-0.5-1-1.8-1c-0.8,0-1.7,0.1-2.3,0.3l-0.4,0.1l-0.3,0.1L15,3.2c1.4-0.4,2.3-0.6,3.3-0.6c2.4,0,3.7,1.1,3.7,3.2 c0,0.5,0,1-0.2,2.2l-0.6,3.9l-0.1,0.7L21,13.2l0,0.4L20.9,13.9z"></path><path class="st0" d="M64.6,9c-0.3,0-0.4,0-0.6,0c-1.6,0-2.4,0.6-2.4,1.7c0,0.7,0.4,1.1,1,1.1C63.8,11.7,64.6,10.6,64.6,9z  M66.7,13.9h-2.3l0.1-1.1c-0.7,0.9-1.6,1.3-2.9,1.3c-1.5,0-2.6-1.2-2.6-3c0-2.7,1.8-4.3,4.9-4.3c0.3,0,0.7,0,1.1,0.1 c0.1-0.4,0.1-0.5,0.1-0.7c0-0.7-0.5-1-1.8-1c-0.8,0-1.7,0.1-2.3,0.3l-0.4,0.1l-0.3,0.1l0.4-2.5c1.4-0.4,2.3-0.6,3.3-0.6 c2.4,0,3.7,1.1,3.7,3.2c0,0.5,0,1-0.2,2.2l-0.6,3.9l-0.1,0.7l-0.1,0.6l0,0.4L66.7,13.9z"></path><path class="st0" d="M74.5,2.7c-0.1,0-0.2,0-0.3,0c-0.9,0-1.4,0.5-2.3,1.8l0.3-1.7h-2.5l-1.7,11.1h2.8c1-6.8,1.3-7.9,2.6-7.9 c0.1,0,0.1,0,0.2,0C73.7,4.6,74.1,3.6,74.5,2.7L74.5,2.7z"></path><path class="st1" d="M62.8,24.6c0,2.5-0.8,4-2,4c-0.9,0-1.4-1-1.4-2.5c0-1.8,0.8-3.8,2.1-3.8C62.4,22.4,62.8,23.5,62.8,24.6z  M65.5,24.6c0-2.8-1.4-4.9-4-4.9c-3,0-4.9,2.6-4.9,6.5c0,2.8,1.1,5.1,4,5.1C63.4,31.3,65.5,29.3,65.5,24.6z"></path><path class="st1" d="M57.5,17.7l-0.4,3c-0.9-0.5-1.6-0.7-2.3-0.7c-1.9,0-3.3,2.1-3.3,5.1c0,2.1,0.9,3.3,2.4,3.3 c0.7,0,1.4-0.2,2.2-0.7l-0.4,3.1c-1,0.3-1.6,0.4-2.3,0.4c-2.8,0-4.5-2.3-4.5-5.9c0-4.9,2.4-8.3,5.9-8.3c0.4,0,0.8,0.1,1.2,0.1 l1.1,0.3C57.2,17.6,57.2,17.6,57.5,17.7z"></path><path class="st1" d="M40.2,19.8c-0.1,0-0.2,0-0.3,0c-0.8,0-1.3,0.5-2.1,1.8l0.2-1.7h-2.4l-1.6,11.1h2.6c0.9-6.8,1.2-7.9,2.4-7.9 c0.1,0,0.1,0,0.2,0C39.6,21.7,39.9,20.7,40.2,19.8L40.2,19.8z"></path><path class="st1" d="M74.2,30.8h-2.5l0.1-1.1c-0.7,0.9-1.4,1.2-2.4,1.2c-1.9,0-3.1-1.8-3.1-4.6c0-3.7,1.9-6.8,4.2-6.8 c1,0,1.8,0.5,2.5,1.5l0.6-3.9h2.6L74.2,30.8z M70.4,28.2c1.2,0,2.1-1.5,2.1-3.7c0-1.4-0.5-2.2-1.4-2.2c-1.2,0-2,1.5-2,3.7 C69,27.5,69.5,28.2,70.4,28.2z"></path><path class="st1" d="M15.8,30.8c-0.9,0.3-1.7,0.4-2.7,0.4c-2.9,0-4.4-1.7-4.4-4.9c0-3.8,1.9-6.6,4.5-6.6c2.1,0,3.5,1.6,3.5,4 c0,0.8-0.1,1.6-0.3,2.7h-5.2c0,0.2,0,0.2,0,0.3c0,1.3,0.8,1.9,2.3,1.9c0.9,0,1.8-0.2,2.7-0.7L15.8,30.8z M14.4,24.2 c0-0.2,0-0.4,0-0.6c0-0.9-0.5-1.4-1.2-1.4c-0.8,0-1.4,0.7-1.7,2L14.4,24.2z"></path><path class="st1" d="M46.8,30.8c-0.9,0.3-1.8,0.4-2.7,0.4c-2.9,0-4.4-1.7-4.4-4.9c0-3.8,1.9-6.6,4.5-6.6c2.1,0,3.5,1.6,3.5,4 c0,0.8-0.1,1.6-0.3,2.7h-5.2c0,0.2,0,0.2,0,0.3c0,1.3,0.8,1.9,2.3,1.9c0.9,0,1.8-0.2,2.7-0.7L46.8,30.8z M45.3,24.2 c0-0.2,0-0.4,0-0.6c0-0.9-0.5-1.4-1.2-1.4c-0.8,0-1.4,0.7-1.7,2L45.3,24.2z"></path><path class="st1" d="M83.1,30.8c-0.9,0.3-1.8,0.4-2.7,0.4c-2.9,0-4.4-1.7-4.4-4.9c0-3.8,1.9-6.6,4.5-6.6c2.1,0,3.5,1.6,3.5,4 c0,0.8-0.1,1.6-0.3,2.7h-5.2c0,0.2,0,0.2,0,0.3c0,1.3,0.8,1.9,2.3,1.9c0.9,0,1.8-0.2,2.7-0.7L83.1,30.8z M81.6,24.2 c0-0.2,0-0.4,0-0.6c0-0.9-0.5-1.4-1.2-1.4c-0.8,0-1.4,0.7-1.7,2L81.6,24.2z"></path><path class="st1" d="M8.1,20.3c-0.5-0.3-1.2-0.6-2.2-0.6c-1.1,0-1.9,0.2-1.9,1.3c0,2,3.8,1.2,3.8,5.4c0,3.8-2.5,4.8-4.8,4.8 c-1,0-2.2-0.3-3.1-0.7l0.6-2.8c0.5,0.5,1.6,0.8,2.4,0.8c0.8,0,2.1-0.2,2.1-1.6c0-2.2-3.8-1.4-3.8-5.3c0-3.6,2.2-4.6,4.4-4.6 c1.2,0,2.4,0.2,3,0.6L8.1,20.3z"></path><path class="st1" d="M23.4,30.8c-0.5,0.2-1.3,0.4-2.3,0.4c-2.3,0-3.7-2.3-3.7-5c0-3.6,2-6.5,5-6.5c0.7,0,1.7,0.3,2.5,0.7l-0.6,2.6 c-0.6-0.4-1.1-0.6-1.7-0.6c-1.4,0-2.4,1.3-2.4,3.5c0,1.3,0.7,2.4,1.9,2.4c0.7,0,1.2-0.2,1.7-0.5L23.4,30.8z"></path><path class="st1" d="M33.2,28c-0.1,0.9-0.3,1.9-0.3,2.9h-2.5l0.2-1.8h0c-0.8,1.2-1.6,2-3,2c-1.6,0-2.4-1.6-2.4-3.8 c0-0.7,0-1.1,0.2-2.3l0.7-5.1h2.8L28,25c-0.1,0.6-0.2,1.1-0.2,1.7c0,0.6,0.3,1.3,1,1.3c1.1,0,1.8-1.4,2-3l0.8-5h2.7L33.2,28z"></path></svg>
          </div>
          <div class="svgWrapperIcon">
            <svg id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="39" viewBox="0 0 58.2 32.2" xml:space="preserve"><path class="st0" d="M49.9,21.4c-0.1,0.6-0.2,1.2-0.3,1.8c-0.6-0.2-1.2-0.5-2.1-0.4c-0.5,0-1.2,0.2-1.2,0.7c0,0.5,0.9,0.8,1.4,1.1 c0.9,0.4,1.8,1,1.9,2.1c0.1,0.9-0.4,1.6-0.8,2c-1.2,1.1-4,1.3-5.9,0.5c0.1-0.6,0.2-1.2,0.3-1.9c0.7,0.3,1.7,0.7,2.8,0.6 c0.5-0.1,1.1-0.3,1.1-0.8c0-0.6-1.2-1-1.8-1.3c-0.7-0.4-1.5-1-1.5-1.9c0-0.6,0.2-1.2,0.5-1.6C45.3,21.2,47.8,20.8,49.9,21.4z"></path><path class="st0" d="M27.5,9.5H30L28.5,19H26L27.5,9.5z"></path><path class="st0" d="M18.8,9.5h3.8c2.4,0,3.1,1.4,2.8,3c-0.2,1.4-1.2,2.3-2.5,2.6l2.4,3.9h-3.2l-1.8-3.7L19.8,19h-2.5L18.8,9.5z  M21,11.4l-0.4,2.4h0.7c0.7,0,1.4-0.5,1.5-1.2c0.1-0.7-0.4-1.2-1.1-1.2H21z"></path><path class="st0" d="M39,9.5h2.5L40,19h-2.5L39,9.5z"></path><path class="st0" d="M43.4,9.5h5.5l-0.3,2.1h-3l-0.3,1.6h2.9l-0.3,2.1H45L44.7,17h3L47.4,19h-5.5L43.4,9.5z"></path><path class="st0" d="M11.8,9.5h5.5L17,11.6h-3l-0.3,1.6h2.9l-0.3,2.1h-2.9L13.1,17h3L15.8,19h-5.5L11.8,9.5z"></path><path class="st0" d="M31.9,9.5h5.6l-0.3,2.1h-3.1l-0.3,1.6h2.8l-0.3,2.1h-2.8L32.9,19h-2.5L31.9,9.5z"></path><path class="st0" d="M50.4,9.5h3.3c3.9,0,4.8,2.9,4.5,4.8c-0.4,2.7-2.9,4.8-6,4.8h-3.3L50.4,9.5z M52.6,11.6h0.5 c1.9,0,2.7,1.3,2.5,2.6C55.3,15.9,54,17,52.4,17h-0.7L52.6,11.6z"></path><path class="st0" d="M0,8.2h4.7l0.6,6.9C8.3,9.9,11.4,4.9,14.6,0h1.5c-3.3,6.3-6.6,12.6-9.8,19H2.8L2,11.4C1.8,9.5,1.4,8.7,0,8.5 V8.2z"></path><path class="st1" d="M1.8,4.3l4,1.6l0.3,4.3h0.3l3.6-6V4H1.8L1.8,4.3z"></path><path class="st0" d="M20.1,25.9c0.6,0,1,0.5,0.9,1.2c-0.1,0.7-0.7,1.2-1.3,1.2c-0.6,0-1-0.5-0.9-1.2C18.9,26.4,19.5,25.9,20.1,25.9z  M18.1,21.3h1.6L19.1,25c0.5-0.4,1-0.7,1.7-0.7c1.3,0,2.2,1.2,1.9,2.7c-0.2,1.5-1.5,2.7-2.8,2.7c-0.6,0-1.1-0.3-1.4-0.8l-0.1,0.6 h-1.6L18.1,21.3z"></path><path class="st0" d="M22.9,24.4h2l0.9,2.7l1.7-2.7h1.9l-5,7.8h-1.9l2.1-3.3L22.9,24.4z"></path><path class="st0" d="M39,29.6l1.4-8.4h2.3l-1.4,8.4H39z"></path><path class="st0" d="M37,21.2c-0.8,1.9-1.5,3.8-2.3,5.7l-0.2-1.1c0,0,0,0,0,0l0,0.2c-0.2-0.6-0.5-1.1-0.9-1.6c0,0,0,0,0,0 c-0.1-0.1-0.1-0.2-0.2-0.3c0-0.1-0.1-0.1-0.1-0.2c-0.6-0.6-1.3-1.1-2-1.5l2.1,7.2h2.5c1.2-2.8,2.5-5.6,3.6-8.4H37z"></path><path class="st1" d="M32.6,21.2h-3.8v0.2c2.2,0.4,5,2.2,5.7,4.6l-0.8-3.9C33.6,21.5,33.1,21.2,32.6,21.2z"></path><path class="st0" d="M57.7,29.7h-2.1c-0.1-0.4-0.2-0.9-0.3-1.3h-2.9l-0.5,1.3h-2.5l3.2-7.2c0.1-0.3,0.4-0.7,0.5-0.9 c0.2-0.3,0.8-0.3,1.1-0.3h1.8L57.7,29.7z M54.2,23.6L53,26.7h1.9L54.2,23.6z"></path></svg>
          </div>
          <div class="svgWrapperIcon">
            <svg xmlns="http://www.w3.org/2000/svg" width="42" height="24" viewBox="0 0 51 24"><g fill="none" fill-rule="nonzero"><path fill="#666" d="M47.16 13.92a10.853 10.853 0 0 0-7.36-2.867h-6.467v-.293C33.32 4.813 28.493 0 22.547 0H0c.04.805.157 1.604.347 2.387 0 .173.08.346.133.52a1.107 1.107 0 0 0 0 .2 13.667 13.667 0 0 0 13.08 9.56h3.773c0 .32.107.626.174.946v.174l.093.346c0 .067 0 .147.067.214a13.92 13.92 0 0 0 4.906 6.986A13.707 13.707 0 0 0 30.813 24h19.694v-.12a9.84 9.84 0 0 0 .16-1.92 10.947 10.947 0 0 0-3.507-8.04zm3.107 9.8H30.813a13.414 13.414 0 0 1-8.066-2.667 13.64 13.64 0 0 1-4.827-6.773v-.213a3.107 3.107 0 0 1-.093-.334v-.173c-.067-.293-.12-.587-.174-.88h15.48c.076-.441.125-.886.147-1.333h6.52c5.891 0 10.667 4.775 10.667 10.666-.02.574-.087 1.145-.2 1.707z"></path><path fill="#666" d="M26.573 15.4l-1.96 4.227h.334l.533-1.174H28l.533 1.174h.334L26.92 15.4h-.347zm-.96 2.773l1.054-2.44 1.106 2.44h-2.16zM30.667 19.427a1.333 1.333 0 0 1-1.267-1.334 1.333 1.333 0 0 1 1.24-1.333c.396.01.768.196 1.013.507l.214-.227a1.587 1.587 0 0 0-2.787 1.04 1.573 1.573 0 0 0 1.587 1.613c.489.01.954-.213 1.253-.6l-.2-.186c-.252.327-.64.519-1.053.52zM33.88 19.427a1.333 1.333 0 0 1-1.253-1.334 1.253 1.253 0 0 1 1.226-1.333c.401.006.778.192 1.027.507l.213-.227a1.64 1.64 0 0 0-1.226-.56 1.587 1.587 0 0 0-1.56 1.6 1.573 1.573 0 0 0 1.56 1.587c.485.007.944-.215 1.24-.6l-.2-.187c-.24.33-.62.531-1.027.547zM36.933 16.493a1.507 1.507 0 0 0-1.453 1.6 1.52 1.52 0 0 0 1.507 1.587 1.627 1.627 0 0 0 1.333-.573l-.2-.174c-.266.303-.65.478-1.053.48a1.227 1.227 0 0 1-1.2-1.213H38.4a.333.333 0 0 0 0-.12 1.453 1.453 0 0 0-1.467-1.587zM35.8 17.96a1.2 1.2 0 0 1 1.12-1.2 1.147 1.147 0 0 1 1.107 1.2H35.8zM40.613 16.493a1.493 1.493 0 0 0-1.266.76v-.68h-.294v4h.294v-1.6c.268.444.748.717 1.266.72a1.52 1.52 0 0 0 1.48-1.6 1.52 1.52 0 0 0-1.48-1.6zm1.16 1.614a1.187 1.187 0 0 1-1.2 1.333 1.333 1.333 0 0 1-1.24-1.333 1.333 1.333 0 0 1 1.24-1.334 1.227 1.227 0 0 1 1.2 1.334zM43.187 15.587h-.294v.986h-.44v.267h.44v2a.787.787 0 0 0 .867.84c.17 0 .338-.037.493-.107v-.28a.973.973 0 0 1-.453.107c-.347 0-.613-.147-.613-.587V16.84h1.08v-.267h-1.08v-.986z"></path><path fill="#FFF" d="M23.213 6.227H19v2.186h1.333V7.187h.574l.746 1.226h1.52L22.28 7.08c.42-.135.76-.447.933-.853zM22.787 4.627a1.48 1.48 0 0 0-1-.387H18.92c-.014.11-.014.223 0 .333.236.79.962 1.333 1.787 1.334h2.466a1.64 1.64 0 0 0 0-.254 1.493 1.493 0 0 0-.386-1.026zM14.507 4.787l-.56 1.88h-.094l-.52-1.88a.773.773 0 0 0-.733-.547h-1.333v4.173H12.6V5.947h.067l.76 2.466h.946l.76-2.466h.094v2.466h1.333V4.24h-1.333a.76.76 0 0 0-.72.547M17.133 4.24h1.333v4.173h-1.333z"></path></g></svg>
          </div>
        </div>
      </div>
      <div class="languageSelector">
        <div class="languageSelectorWrapper">

        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { VueTelInput } from 'vue-tel-input';
import 'vue-tel-input/dist/vue-tel-input.css';

export default {
  components: {
    VueTelInput,
  },
  data() {
    return {
      orderInfo: null,

      pays: [],
      isSelectPay: false,

      phone: null,

      isBlock: true,
    }
  },
  async mounted() {

    let resOrder =  await fetch(`https://public.ecorpay.net/?class=order&method=info&id=${this.$route.params.id}`);
    let jsonOrder = await resOrder.json();

    if (jsonOrder.success) {
      this.orderInfo = jsonOrder.data;

      // switch (jsonOrder.status) {
      //   case 'rejected':
      //
      //     break;
      //   case 'error':
      //
      //     break;
      //   case 'expired':
      //
      //     break;
      // }
    }

    let res = await fetch('https://public.ecorpay.net/?class=info&method=payways');
    let json = await res.json();
    console.log('json', json);
    this.pays = json.data;
  },
  methods: {
    selectPay() {
      this.isSelectPay = true;
    },

    async sendRequest(id) {
      let res = await fetch('https://public.ecorpay.net/?class=order&method=link&hash=d2d724807a140c3daa737de866191b45&payway=' + id);
      let json = await res.json();
      console.log('json', json);

      if (json.success) {
        window.location.href = json.url;
      } else {
        alert(json.error)
      }
    }
  }
}
</script>

<style scoped lang="scss">
@import "./src/assets/scss/main";

.wrapper {
  font-family: -apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji;
  font-variant: tabular-nums;
  line-height: 1.5715;
  background-color: var(--PA_Surface_Tinted);
  min-height: 100vh;
  padding-top: 64px;

  @media only screen and (max-width: 425px) {
    padding-top: 20px;
  }
}

.invoice_container {
  margin: 0 auto;
  width: 720px;

  @media only screen and (max-width: 768px) {
    margin-top: 32px;
    min-width: 300px;
    width: 90vw;
  }

  @media only screen and (max-width: 425px) {
    margin-top: 20px;
  }
}

.invoiceBlock {
  background: var(--PA_Overlay_Text_Primary);
  border-radius: 20px;
  display: grid;
  grid-auto-flow: column;
  grid-template-areas: "payment info";
  grid-template-columns: 1fr 1fr;
  min-height: 440px;

  @media only screen and (max-width: 768px) {
    grid-template-areas:
        "info"
        "payment";
    grid-template-columns: 1fr;
    grid-template-rows: auto 1fr;
  }
}

.payment {
  padding: 32px;
  box-shadow: 33px 0 11px 0 rgb(0 0 0 / 2%);
  grid-area: payment;

  @media only screen and (max-width: 768px) {
    box-shadow: none;
  }
}

.paymentWrapper {
  position: relative;
  display: flex;
  flex-direction: column;
  min-height: 370px;
  transition: .25s;
}

.backBtn {
  position: absolute;
  left: -48px;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 32px;
  width: 32px;
  min-width: 32px;
  padding-left: 0;
  padding-right: 0;
  border: none;
  border-radius: 50%;
  box-shadow: var(--Box_Shadow_Elevation_1_Bordered);
  font-size: 16px;
  color: rgba(0,0,0,.85);
  cursor: pointer;
  transition: all .3s cubic-bezier(.645,.045,.355,1);
  user-select: none;
  background: #fff;

  &:hover {
    border-color: #40a9ff;
    color: #40a9ff;
  }
}

.paymentHeader {
  display: grid;
  font-size: 36px;
  font-weight: 600;
  grid-template-areas: ". logo logout";
  grid-template-columns: 1fr 2fr 1fr;
  letter-spacing: -.72px;
  line-height: 1.22;
  margin: 0 auto;
  width: 100%;

  @media only screen and (max-width: 824px) {
    font-size: 32px;
    font-weight: 600;
    letter-spacing: -.72px;
    line-height: 1.25;
  }

  @media only screen and (max-width: 375px) {
    font-size: 26px;
    font-weight: 600;
    letter-spacing: -.72px;
    line-height: 1.38;
  }
}

.paymentLogo {
  display: flex;
  align-items: center;
  color: var(--color-gray-scale-6)!important;
  justify-content: center;
  text-align: center;
  grid-area: logo;
  cursor: pointer;
}

.paymentTitle {
  font-size: 18px;
  font-weight: 600;
  line-height: 24px;
  margin: 32px 0;
  text-align: center;

  @media only screen and (max-width: 824px) {
    font-size: 18px;
  }

  @media only screen and (max-width: 375px) {
    font-size: 16px;
  }
}

.paymentContent {
  flex-grow: 1;
  text-align: center;
}

.paymentContentTitle {
  font-size: 18px;
  font-weight: 600;
  line-height: 24px;
  margin: 0 0 32px 0;
  text-align: center;

  @media only screen and (max-width: 824px) {
    font-size: 18px;
  }

  @media only screen and (max-width: 375px) {
    font-size: 16px;
  }
}

.paymentError {
  text-align: center;
  color: red;
}

.walletForm {
  grid-gap: 24px;
  display: grid;
  gap: 24px;
  text-align: center;
}

.container__input {
  margin-bottom: 12px;
  padding: 16px 11px 16px 0;
  width: 100%;
  background-color: var(--PA_Surface_Tinted);
  border: 1px solid transparent;
  border-radius: 12px;
  color: var(--PA_Text_Primary);
  font-size: 16px;
  transition: box-shadow .25s ease, border-color .25s ease;

  &:active,
  &:hover,
  &:focus-within {
    border-color: var(--PAA_Brand_Primary);
  }
}

.services {
  position: relative;
  grid-gap: 16px;
  display: grid;
  gap: 16px;
  max-height: 500px;
  overflow-y: auto;
}

.servicesBody {
  grid-gap: 16px;
  border-radius: 16px;
  box-shadow: var(--Box_Shadow_Elevation_1_Bordered);
  cursor: pointer;
  display: grid;
  gap: 16px;
  grid-template-columns: -webkit-max-content 1fr;
  grid-template-columns: max-content 1fr;
  padding: 10px 18px;
  transition: .25s;

  &:hover {
    box-shadow: var(--Box_Shadow_Elevation_2_Bordered);
  }
}

.servicesLogo {
  align-items: center;
  display: flex;

  & img {
    width: 40px;
  }
}

.serviceTitle {
  font-size: 16px;
  font-weight: 600;
  line-height: 24px;
}

.invoiceInfo {
  padding: 32px;
  grid-area: info;

  @media only screen and (max-width: 768px) {
    border-bottom: 1px solid var(--PA_Border_Default);
    overflow: hidden;
  }
}

.invoiceInfoBody {
  grid-gap: 32px;
  align-content: space-between;
  background-color: var(--color-gray-scale-1);
  color: #252129;
  display: grid;
  font-size: 16px;
  gap: 32px;
  height: 100%;
  line-height: 24px;
  overflow: hidden;

  @media only screen and (max-width: 375px) {
    font-size: 14px;
  }
}

.info {
  display: flex;
  flex-direction: column;
  row-gap: 32px;
}

.infoTop {
  display: grid;
  font-size: 18px;
  grid-template-columns: -webkit-max-content -webkit-max-content;
  grid-template-columns: max-content max-content;
  justify-content: space-between;
  line-height: 24px;

  @media only screen and (max-width: 824px) {
    font-size: 18px;
  }

  @media only screen and (max-width: 375px) {
    font-size: 16px;
  }
}

.infoSum {
  font-size: 36px;
  font-weight: 600;
  letter-spacing: -.72px;
  line-height: 1.22;

  @media only screen and (max-width: 824px) {
    font-size: 32px;
    font-weight: 600;
    letter-spacing: -.72px;
    line-height: 1.25;
  }

  @media only screen and (max-width: 375px) {
    font-size: 26px;
    font-weight: 600;
    letter-spacing: -.72px;
    line-height: 1.38;
  }
}

.infoToggleBtn {
  align-items: center;
  border: 1px solid var(--PA_Border_Default);
  border-radius: 90px;
  cursor: pointer;
  display: grid;
  height: 32px;
  justify-content: center;
  width: 32px;

  @media (min-width: 769px) {
    display: none;
  }
}

.infoTitle {
  color: var(--PA_Text_Placeholder);
}

.infoComment {
  word-break: break-all;
}

.invoiceBottom {
  height: -webkit-fit-content;
  height: -moz-fit-content;
  height: fit-content;
}

.help {
  font-size: 16px;
  font-weight: 600;
  line-height: 24px;
  margin-bottom: 20px;
}

.links {
  grid-gap: 8px;
  display: grid;
  gap: 8px;
  grid-template-columns: -webkit-max-content -webkit-max-content;
  grid-template-columns: max-content max-content;
  margin-top: 12px;

  & img {
    border-radius: 90px;
    cursor: pointer;
  }
}

.offer {
  & a {
    color: var(--PAA_Brand_Primary);
  }
}

.invoice_footer {
  margin: 20px auto 0 auto;
  width: 720px;
  grid-row-gap: 16px;
  background-color: var(--PA_Surface_Tinted);
  display: grid;
  grid-template-columns: 1fr 1fr;
  justify-items: center;
  row-gap: 16px;

  @media only screen and (max-width: 768px) {
    margin-top: 32px;
    min-width: 300px;
    width: 90vw;
    grid-template-columns: 1fr;
    grid-template-rows: 1fr 1fr;
  }

  @media only screen and (max-width: 425px) {
    margin-top: 20px;
  }
}

.certificates {
  align-items: center;
  display: flex;
  -webkit-filter: grayscale(1);
  filter: grayscale(1);
  justify-content: center;
  text-align: left;

  @media (max-width: 425px) {
    justify-content: center;
  }
}

.svgWrapperIcon {
  align-items: center;
  display: flex;
  height: 42px;
  justify-content: center;
  margin: 0 5px;
  overflow: visible;
  width: 51px;
}

.languageSelector {
  justify-self: right;

  @media only screen and (max-width: 768px) {
    justify-self: center;
  }
}


</style>