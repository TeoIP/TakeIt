<script setup>
import { ref } from 'vue'
const language = ref(true)
const menu = ref(true)

function languageRo() {
  if (language.value == false) {
    language.value = true
  } else {
    return;
  }
}
function languageRu() {
  if (language.value == true) {
    language.value = false
  } else {
    return;
  }
}
function openMenu() {
  menu.value = !menu.value
}
</script>
<template>
  <div class="app">
    <div class="app-wrapper">
      <div class="slider">
        <div class="slider-nav"></div>
        <div class="one-slide">
          <div class="nav">
            <div class="nav-left">
              <div class="language">
                <div class="ro-language" :class="{ 'selected-language': language }" @click="languageRo"> Ro </div>
                <div class=" ru-language" :class="{ 'selected-language': !language }" @click="languageRu">Ru</div>
              </div>
            </div>
            <div class="nav-right">
              <div class="nav-contact">
                <div class="contact-title" v-if="language">Contactează-ne</div>
                <div class="contact-title" v-if="!language">Связаться с нами</div>
                <div class="contact-phone">+373 (79) 33 99 33</div>
              </div>
              <div class="nav-hamburger" @click="openMenu()">
                <span class="line"></span>
                <span class="line"></span>
                <span class="line"></span>
              </div>
            </div>
          </div>
          <div class="first-slide">
            <div class="back-image"><img src="./assets/Background.png" alt=""></div>
            <div class="first-slide-words">
              <div class="first-slide-title" v-if="language">E TIMPUL SĂ-ȚI MODERNIZEZI AFACEREA!</div>
              <div class="first-slide-title" v-if="!language">ПРИШЛО ВРЕМЯ МОДЕРНИЗИРОВАТЬ ВАШ БИЗНЕС!</div>
              <div class="first-slide-text" v-if="language">Automatizare proceselor operaționale, soluții complexe pentru
                magazine, centre comerciale, restaurante, bănci, farmacii, centre auto și alte unități comerciale.</div>
              <div class="first-slide-text" v-if="!language">Автоматизация операционных процессов, комплексные решения для
                магазинов, торговых центров, ресторанов, банков, аптек, автоцентров и других коммерческих объектов.</div>
            </div>
            <div class="first-slide-btn" v-if="language">Catalog</div>
            <div class="first-slide-btn" v-if="!language">Каталог</div>
          </div>
          <div :class="{ 'closed-menu': !menu, 'opened-menu': menu }">
            <div class="menu-wrapper">
              <div class="company-logo"><img src="./assets/logo.png" alt=""></div>
              <div class="menu-info">
                <div class="menu-info-one">
                  <div class="menu-info-title" v-if="language">Prescurtări</div>
                  <div class="menu-info-title" v-if="!language">Сокращения</div>
                  <div class="menu-info-suggestion">
                    <span class="one-suggestion" v-if="language">De ce Take IT?</span>
                    <span class="one-suggestion" v-if="!language">Почему Take IT?</span>
                    <span class="one-suggestion" v-if="language">Smart Facts</span>
                    <span class="one-suggestion" v-if="!language">Умные факты</span>
                    <span class="one-suggestion" v-if="language">Servicii</span>
                    <span class="one-suggestion" v-if="!language">Услуги</span>
                    <span class="one-suggestion" v-if="language">Clienți</span>
                    <span class="one-suggestion" v-if="!language">Клиенты</span>
                    <span class="one-suggestion" v-if="language">Parteneri</span>
                    <span class="one-suggestion" v-if="!language">Партнер</span>
                  </div>
                </div>
                <div class="menu-info-one">
                  <div class="menu-info-title" v-if="language">Pagini Principale</div>
                  <div class="menu-info-title" v-if="!language">Главные страницы</div>
                  <div class="menu-info-suggestion">
                    <span class="one-suggestion" v-if="language">Acasă</span>
                    <span class="one-suggestion" v-if="!language">Дома</span>
                    <span class="one-suggestion" v-if="language">Despre Noi</span>
                    <span class="one-suggestion" v-if="!language">О нас</span>
                    <span class="one-suggestion" v-if="language">Catalog</span>
                    <span class="one-suggestion" v-if="!language">Каталог</span>
                  </div>
                </div>
                <div class="menu-info-one">
                  <div class="menu-info-title" v-if="language">Contactează-ne</div>
                  <div class="menu-info-title" v-if="!language">Связаться с нами</div>
                  <div class="menu-info-suggestion">
                    <span class="one-suggestion">
                      <div class="one-suggestion-svg">
                        <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40" fill="none">
                          <g opacity="0.5">
                            <path
                              d="M35 25.7667L26.2166 24.75L22.0166 28.95C17.2853 26.5437 13.4396 22.698 11.0333 17.9667L15.25 13.75L14.2333 5H5.04996C4.08329 21.9667 18.0333 35.9167 35 34.95V25.7667Z"
                              fill="white" />
                          </g>
                        </svg>
                      </div>
                      <div class="one-sugestion-word">+373 (79) 33 99 33</div>
                    </span>
                    <span class="one-suggestion">
                      <div class="one-suggestion-svg">
                        <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40" fill="none">
                          <g opacity="0.5">
                            <path
                              d="M7.73998 8H34.24C36.74 8 38 9.18 38 11.58V28.42C38 30.8 36.74 32 34.24 32H7.73998C5.23998 32 3.97998 30.8 3.97998 28.42V11.58C3.97998 9.18 5.23998 8 7.73998 8ZM20.98 25.2L34.46 14.14C34.94 13.74 35.32 12.82 34.72 12C34.14 11.18 33.08 11.16 32.38 11.66L20.98 19.38L9.59998 11.66C8.89998 11.16 7.83998 11.18 7.25998 12C6.65998 12.82 7.03998 13.74 7.51998 14.14L20.98 25.2Z"
                              fill="white" />
                          </g>
                        </svg>
                      </div>
                      <div class="one-sugestion-word">sales.b2b@takeit.md</div>
                    </span>
                  </div>
                </div>
              </div>
              <div class="menu-info-logos">
                <span class="logos-change">
                  <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40" fill="none">
                    <path
                      d="M40 20.0501C40 8.98246 31.04 0 20 0C8.96 0 0 8.98246 0 20.0501C0 29.7544 6.88 37.8346 16 39.6992V26.0652H12V20.0501H16V15.0376C16 11.1679 19.14 8.02005 23 8.02005H28V14.0351H24C22.9 14.0351 22 14.9373 22 16.0401V20.0501H28V26.0652H22V40C32.1 38.9975 40 30.4561 40 20.0501Z"
                      fill="white" fill-opacity="0.5" />
                  </svg>
                </span>
                <span class="logos-change">
                  <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40" fill="none">
                    <path
                      d="M19.9946 9.73807C14.3159 9.73807 9.73288 14.3212 9.73288 20C9.73288 25.6788 14.3159 30.2619 19.9946 30.2619C25.6734 30.2619 30.2564 25.6788 30.2564 20C30.2564 14.3212 25.6734 9.73807 19.9946 9.73807ZM19.9946 26.6695C16.3222 26.6695 13.3252 23.6725 13.3252 20C13.3252 16.3275 16.3222 13.3305 19.9946 13.3305C23.667 13.3305 26.664 16.3275 26.664 20C26.664 23.6725 23.667 26.6695 19.9946 26.6695ZM30.6766 6.92617C29.3508 6.92617 28.2801 7.99689 28.2801 9.32279C28.2801 10.6487 29.3508 11.7194 30.6766 11.7194C32.0025 11.7194 33.0732 10.6537 33.0732 9.32279C33.0736 9.00795 33.0119 8.69612 32.8916 8.40517C32.7713 8.11422 32.5948 7.84986 32.3722 7.62724C32.1495 7.40461 31.8852 7.2281 31.5942 7.10779C31.3033 6.98749 30.9915 6.92577 30.6766 6.92617ZM39.9978 20C39.9978 17.2381 40.0228 14.5013 39.8677 11.7444C39.7126 8.54226 38.9821 5.70034 36.6406 3.35876C34.294 1.01217 31.4572 0.286681 28.2551 0.131576C25.4932 -0.0235287 22.7564 0.00148823 19.9996 0.00148823C17.2378 0.00148823 14.501 -0.0235287 11.7442 0.131576C8.5421 0.286681 5.70023 1.01717 3.35869 3.35876C1.01215 5.70534 0.286675 8.54226 0.131574 11.7444C-0.0235283 14.5063 0.0014882 17.2431 0.0014882 20C0.0014882 22.7569 -0.0235283 25.4987 0.131574 28.2556C0.286675 31.4577 1.01716 34.2997 3.35869 36.6412C5.70524 38.9878 8.5421 39.7133 11.7442 39.8684C14.506 40.0235 17.2428 39.9985 19.9996 39.9985C22.7614 39.9985 25.4982 40.0235 28.2551 39.8684C31.4572 39.7133 34.299 38.9828 36.6406 36.6412C38.9871 34.2947 39.7126 31.4577 39.8677 28.2556C40.0278 25.4987 39.9978 22.7619 39.9978 20ZM35.5949 31.798C35.2296 32.7086 34.7893 33.389 34.0839 34.0895C33.3784 34.795 32.703 35.2353 31.7924 35.6005C29.1606 36.6462 22.9115 36.4111 19.9946 36.4111C17.0777 36.4111 10.8236 36.6462 8.19187 35.6055C7.28127 35.2403 6.60082 34.8 5.90036 34.0945C5.1949 33.389 4.75461 32.7136 4.38937 31.803C3.34869 29.1662 3.58384 22.917 3.58384 20C3.58384 17.083 3.34869 10.8288 4.38937 8.19703C4.75461 7.28641 5.1949 6.60595 5.90036 5.90548C6.60583 5.205 7.28127 4.7597 8.19187 4.39446C10.8236 3.35375 17.0777 3.58891 19.9946 3.58891C22.9115 3.58891 29.1657 3.35375 31.7974 4.39446C32.708 4.7597 33.3884 5.2 34.0889 5.90548C34.7943 6.61095 35.2346 7.28641 35.5999 8.19703C36.6406 10.8288 36.4054 17.083 36.4054 20C36.4054 22.917 36.6406 29.1662 35.5949 31.798Z"
                      fill="white" fill-opacity="0.5" />
                  </svg>
                </span>
                <span class="logos-change">
                  <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40" fill="none">
                    <path opacity="0.5"
                      d="M35.5556 0C36.7343 0 37.8648 0.468252 38.6983 1.30175C39.5317 2.13524 40 3.2657 40 4.44444V35.5556C40 36.7343 39.5317 37.8648 38.6983 38.6983C37.8648 39.5317 36.7343 40 35.5556 40H4.44444C3.2657 40 2.13524 39.5317 1.30175 38.6983C0.468252 37.8648 0 36.7343 0 35.5556V4.44444C0 3.2657 0.468252 2.13524 1.30175 1.30175C2.13524 0.468252 3.2657 0 4.44444 0H35.5556ZM34.4444 34.4444V22.6667C34.4444 20.7453 33.6812 18.9027 32.3226 17.5441C30.964 16.1855 29.1213 15.4222 27.2 15.4222C25.3111 15.4222 23.1111 16.5778 22.0444 18.3111V15.8444H15.8444V34.4444H22.0444V23.4889C22.0444 21.7778 23.4222 20.3778 25.1333 20.3778C25.9585 20.3778 26.7498 20.7056 27.3332 21.289C27.9167 21.8724 28.2444 22.6638 28.2444 23.4889V34.4444H34.4444ZM8.62222 12.3556C9.61236 12.3556 10.562 11.9622 11.2621 11.2621C11.9622 10.562 12.3556 9.61236 12.3556 8.62222C12.3556 6.55556 10.6889 4.86667 8.62222 4.86667C7.62619 4.86667 6.67095 5.26234 5.96664 5.96664C5.26234 6.67095 4.86667 7.62619 4.86667 8.62222C4.86667 10.6889 6.55556 12.3556 8.62222 12.3556ZM11.7111 34.4444V15.8444H5.55556V34.4444H11.7111Z"
                      fill="white" />
                  </svg>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.app {
  background-color: #011D3C;
  width: 100%;
}

.app-wrapper {
  max-width: 1349px;
  margin: 0 auto;
}

.nav {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: 53px;
  width: 100%;
}

.language {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 30px;
  width: 100px;
  color: rgba(255, 255, 255, 0.50);
  text-align: center;
  font-family: Inter;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  border-radius: 5px;
  border: 1px solid var(--paragraph, #F8F8F8);
}

.ro-language {
  padding: 0 13px 0 15px;
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
}

.ru-language {
  padding: 0 15px 0 13px;
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  border-left: 1px solid var(--paragraph, #F8F8F8);
}

.selected-language {
  color: var(--paragraph, #F8F8F8);
  text-align: center;
  font-family: Inter;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
}

.nav-left {
  width: 60%;
}

.nav-right {
  display: flex;
  justify-content: space-between;
  width: 40%;
}

.nav-contact {
  display: flex;
  gap: 34px;
  align-items: center;
}

.contact-title {
  color: var(--accents, #009D06);
  text-align: center;
  -webkit-text-stroke-width: 0.20000000298023224;
  -webkit-text-stroke-color: var(--accents, #009D06);
  font-family: "Work Sans";
  font-size: 20px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  position: relative;
}

.contact-title::before {
  content: " ";
  position: absolute;
  width: 1px;
  height: 100%;
  right: -17px;
  background: #F8F8F8;
  ;
}

.contact-phone {
  color: var(--paragraph, #F8F8F8);
  font-family: Montserrat;
  font-size: 20px;
  font-style: normal;
  font-weight: 600;
  line-height: 145%;
}

.nav-hamburger {
  display: flex;
  flex-direction: column;
  gap: 15px;
  z-index: 4;
  cursor: pointer;
}

.line {
  width: 60px;
  height: 2px;
  background: #F8F8F8;
}

.first-slide {
  display: flex;
  flex-direction: column;
  gap: 130px;
  position: relative;
  align-items: center;
  padding-top: 190px;
  min-height: 800px;
}

.back-image {
  position: absolute;
  top: 50px;
  width: 710px;
  height: 633px;
  z-index: 1;
}

.back-image img {
  width: 100%;
  height: 100%;
  opacity: 0.5;
}

.one-slide {
  max-height: 800px;
}

.first-slide-words {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 50px;
  z-index: 2;
}

.first-slide-title {
  color: var(--paragraph, #F8F8F8);
  text-align: center;
  -webkit-text-stroke-width: 1;
  -webkit-text-stroke-color: var(--paragraph, #F8F8F8);
  font-family: "Work Sans";
  font-size: 40px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
}

.first-slide-text {
  color: var(--paragraph, #F8F8F8);
  text-align: center;
  font-family: "Work Sans";
  font-size: 32px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
}

.first-slide-btn {
  display: flex;
  padding: 19px 72px;
  justify-content: center;
  align-items: center;
  border-radius: 50px;
  background: var(--accents, #009D06);
  color: var(--paragraph, #F8F8F8);
  text-align: center;
  font-family: "Work Sans";
  z-index: 2;
  font-size: 20px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
}

.closed-menu {
  opacity: 0;
  display: none;
}

.opened-menu {
  position: absolute;
  width: 100%;
  top: 124px;
  height: 479px;
  gap: 140px;
  left: 0;
  z-index: 3;
  background: var(--darker-blocks, #001730);
}

.opened-menu::before {
  content: " ";
  width: 100%;
  height: 140px;
  position: absolute;
  background: var(--background, #011D3C);
  opacity: 0.70;
  z-index: 2;
  top: -150px;
}

.menu-wrapper {
  display: flex;
  max-width: 1334px;
  min-height: 479px;
  align-items: center;
  margin: 0 auto;
  gap: 104px;
  position: relative;
}

.menu-info {
  display: flex;
  gap: 197px;
  margin-bottom: 67px;
}

.menu-info-logos {
  position: absolute;
  left: 375px;
  bottom: 65px;
  display: flex;
  gap: 50px;
}

.menu-info-one {
  display: flex;
  flex-direction: column;
  gap: 30px;
}

.menu-info-title {
  color: #FFF;
  font-family: "Work Sans";
  font-size: 20px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  width: max-content;
}

.menu-info-suggestion {
  display: flex;
  flex-direction: column;
  gap: 15px;
  width: max-content;
}

.one-suggestion {
  color: #FFF;
  font-family: "Work Sans";
  font-size: 20px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  display: flex;
  align-items: center;
  gap: 8px;
}
</style>
