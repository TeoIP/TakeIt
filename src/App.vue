<script setup>
import { ref, onMounted } from 'vue';
import { Swiper, SwiperSlide } from 'swiper/vue';
import { useMotion } from '@vueuse/motion';
import axios from 'axios';
import 'swiper/css';
import 'swiper/css/pagination';
import './style.css';



const language = ref(true)
const shorthandMenu = ref(false)
const menu = ref(false)
const showLanguage = ref(true)
const fullName = ref('');
const email = ref('');
const message = ref('');
const token = ref('7129232644:AAHhevbgd0K1tn_8kSjmL9LxOKt4Gw9txxU');
const chatId = ref('776161361');


function shorthand(){
  shorthandMenu.value = !shorthandMenu.value
}
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
function openLanguage() {
  showLanguage.value = !showLanguage.value
}

function submitMessage() {
  const fullMessage = `FullName: ${fullName.value} Email: ${email.value} Message: ${message.value}`;

  axios.post(`https://api.telegram.org/bot${token.value}/sendMessage?chat_id=${chatId.value}&text=${fullMessage}`)
    .then(response => {
      fullName.value = '';
      message.value = '';
      email.value = '';
    })
    .catch(error => {
      console.error('Error sending message to Telegram:', error);
    });
}
</script>
<template>
  <div class="app">
    <div class="app-wrapper">
      <div class="slider">
        <div class="one-slide">
          <div class="nav wrapper">
            <div class="nav-left">
              <div class="nav-contact">
                <div class="contact-svg">
                  <svg xmlns="http://www.w3.org/2000/svg" width="28" height="30" viewBox="0 0 28 30" fill="none">
                    <path
                      d="M28 20.265L19.8015 19.2729L15.8812 23.3714C11.4649 21.0233 7.87524 17.2705 5.62917 12.6534L9.56507 8.53862L8.6161 0H0.0442402C-0.85806 16.5568 12.1631 30.1698 28 29.2265V20.265Z"
                      fill="#009D06" />
                  </svg>
                </div>
                <div class="contact-phone">+373 (79) 33 99 33</div>
              </div>
            </div>
            <div class="main-nav">
              <div class="products">
                <span class="nav-btn" v-if="language">Catalog</span>
                <span class="nav-btn" v-if="!language">Каталог</span>
              </div>
              <div class="about">
                <span class="nav-btn" v-if="language">Despre Noi</span>
                <span class="nav-btn" v-if="!language">О нас</span>
              </div>
              <div class="shorthand" @click="shorthand()">
                <span class="nav-btn" v-if="language">Prescurtari</span>
                <span class="nav-btn" v-if="!language">Ярлыки</span>
                <div class="shorthand-svg" :class="{rotate:shorthandMenu}">
                  <svg xmlns="http://www.w3.org/2000/svg" width="25" height="10" viewBox="0 0 25 10" fill="none">
                    <path
                      d="M1.09103 1.01616C0.90375 1.13548 0.755105 1.27745 0.653666 1.43387C0.552227 1.59028 0.5 1.75806 0.5 1.92751C0.5 2.09695 0.552227 2.26473 0.653666 2.42114C0.755105 2.57756 0.90375 2.71953 1.09103 2.83885L11.0814 9.25679C11.2671 9.3771 11.4881 9.47259 11.7316 9.53776C11.9751 9.60292 12.2362 9.63647 12.5 9.63647C12.7638 9.63647 13.0249 9.60292 13.2684 9.53776C13.5119 9.47259 13.7329 9.3771 13.9186 9.25679L23.909 2.83885C24.0963 2.71953 24.2449 2.57756 24.3463 2.42114C24.4478 2.26473 24.5 2.09695 24.5 1.92751C24.5 1.75806 24.4478 1.59028 24.3463 1.43387C24.2449 1.27745 24.0963 1.13548 23.909 1.01616C23.7232 0.895849 23.5022 0.800358 23.2588 0.735192C23.0153 0.670026 22.7541 0.636475 22.4903 0.636475C22.2266 0.636475 21.9654 0.670026 21.7219 0.735192C21.4785 0.800358 21.2575 0.895849 21.0717 1.01616L12.5 6.53559L3.92828 1.01616C3.74254 0.895849 3.52155 0.800358 3.27807 0.735192C3.03458 0.670026 2.77342 0.636475 2.50965 0.636475C2.24589 0.636475 1.98473 0.670026 1.74124 0.735192C1.49776 0.800358 1.27677 0.895849 1.09103 1.01616Z"
                      fill="#F8F8F8" />
                  </svg>
                </div>
                <div :class="{'shorthand-menu':!shorthandMenu ,'shorthand-menu-opened':shorthandMenu }">
                  <span class="shorthand-one" v-if="language">De ce Take IT?</span>
                  <span class="shorthand-one" v-if="!language">Почему Take IT?</span>
                  <span class="shorthand-one">Smart Facts</span>
                  <span class="shorthand-one" v-if="language">Servicii</span>
                  <span class="shorthand-one" v-if="!language">Услуги</span>
                  <span class="shorthand-one" v-if="language">Clienți</span>
                  <span class="shorthand-one" v-if="!language">Клиенты</span>
                  <span class="shorthand-one" v-if="language">Parteneri</span>
                  <span class="shorthand-one" v-if="!language">Партнеры</span>
                  <span class="shorthand-one" v-if="language">Ia Legătura</span>
                  <span class="shorthand-one" v-if="!language">Связаться</span>
                </div>
              </div>
            </div>
            <div class="nav-right">
              <div class="langauge-settings">
                <div class="language-select-mobile">
                  <div class="selected-language" v-if="language" @click="openLanguage()">Ro</div>
                  <div class="selected-language" v-if="!language" @click="openLanguage()">Ru</div>
                  <span class="language-svg">
                    <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 7 3" fill="none">
                      <path opacity="0.8"
                        d="M0.647756 0.126561C0.600937 0.166337 0.563776 0.213658 0.538416 0.265797C0.513057 0.317936 0.5 0.373861 0.5 0.430344C0.5 0.486827 0.513057 0.542751 0.538416 0.59489C0.563776 0.647029 0.600937 0.694351 0.647756 0.734126L3.14534 2.87344C3.19178 2.91354 3.24703 2.94537 3.3079 2.96709C3.36877 2.98882 3.43406 3 3.5 3C3.56594 3 3.63123 2.98882 3.6921 2.96709C3.75297 2.94537 3.80822 2.91354 3.85466 2.87344L6.35224 0.734126C6.39906 0.694351 6.43622 0.647029 6.46158 0.59489C6.48694 0.542751 6.5 0.486827 6.5 0.430344C6.5 0.373861 6.48694 0.317936 6.46158 0.265797C6.43622 0.213658 6.39906 0.166337 6.35224 0.126561C6.30581 0.0864582 6.25056 0.0546279 6.18969 0.0329058C6.12882 0.0111837 6.06353 0 5.99759 0C5.93164 0 5.86635 0.0111837 5.80548 0.0329058C5.74461 0.0546279 5.68937 0.0864582 5.64293 0.126561L3.5 1.96637L1.35707 0.126561C1.31063 0.0864582 1.25539 0.0546279 1.19452 0.0329058C1.13365 0.0111837 1.06836 0 1.00241 0C0.936471 0 0.871182 0.0111837 0.810311 0.0329058C0.74944 0.0546279 0.694193 0.0864582 0.647756 0.126561Z"
                        fill="#F8F8F8" />
                    </svg>
                  </span>
                </div>
                <div class="language" :class="{ 'opacity': showLanguage }">
                  <div class="ro-language" :class="{ 'selected-language': language }" @click="languageRo"> Ro </div>
                  <div class=" ru-language" :class="{ 'selected-language': !language }" @click="languageRu">Ru</div>
                </div>
              </div>
              <div class="nav-hamburger" @click="openMenu()">
                <span class="line"></span>
                <span class="line"></span>
                <span class="line"></span>
              </div>
            </div>
          </div>
          <div class="first-slide wrapper">
            <div class="first-slide-svg"><img src="../src/assets/background.png" alt=""></div>
            <div class="first-slide-words">
              <div class="first-slide-title" v-if="language">E TIMPUL SĂ-ȚI MODERNIZEZI AFACEREA!</div>
              <div class="first-slide-title" v-if="!language">ПРИШЛО ВРЕМЯ МОДЕРНИЗИРОВАТЬ ВАШ БИЗНЕС!</div>
              <div class="first-slide-text" v-if="language">Automatizare proceselor operaționale, soluții complexe pentru
                magazine, centre comerciale, restaurante, bănci, farmacii, centre auto și alte unități comerciale.</div>
              <div class="first-slide-text" v-if="!language">Автоматизация операционных процессов, комплексные решения для
                магазинов, торговых центров, ресторанов, банков, аптек, автоцентров и других коммерческих объектов.</div>
            </div>
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
                  <div class="menu-info-suggestion-tel">
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
                <div class="logos-info" v-if="language">Abonează-te și la alte pagini de-a noastre!</div>
                <div class="logos-info" v-if="!language">Подписывайтесь и на другие наши страницы!</div>
                <div class="logos-images">
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
        <div class="one-slide wrapper">
          <div class="slide-cards wrapper">
            <div class="one-card">
              <div class="card-logo">
                <svg xmlns="http://www.w3.org/2000/svg" width="91" height="84" viewBox="0 0 91 84" fill="none">
                  <g clip-path="url(#clip0_178_16)">
                    <path
                      d="M72.8268 21.0378L56.7773 54.0972H88.8763L72.8268 21.0378ZM19.3283 21.0378L3.2788 54.0972H35.3779L19.3283 21.0378ZM53.6426 12.0216C53.2525 13.2738 52.6186 14.393 51.7409 15.3792C50.8632 16.3653 49.867 17.0775 48.7525 17.5158V78.1404H74.1643C74.5543 78.1404 74.8748 78.2812 75.1255 78.563C75.3763 78.8447 75.5017 79.2048 75.5017 79.6431V82.6484C75.5017 83.0867 75.3763 83.4468 75.1255 83.7285C74.8748 84.0103 74.5543 84.1511 74.1643 84.1511H17.9909C17.6008 84.1511 17.2804 84.0103 17.0296 83.7285C16.7788 83.4468 16.6534 83.0867 16.6534 82.6484V79.6431C16.6534 79.2048 16.7788 78.8447 17.0296 78.563C17.2804 78.2812 17.6008 78.1404 17.9909 78.1404H43.4026V17.5158C42.2881 17.0775 41.292 16.3653 40.4143 15.3792C39.5365 14.393 38.9026 13.2738 38.5126 12.0216H17.9909C17.6008 12.0216 17.2804 11.8807 17.0296 11.599C16.7788 11.3172 16.6534 10.9572 16.6534 10.5189V7.51349C16.6534 7.07521 16.7788 6.71519 17.0296 6.43343C17.2804 6.15167 17.6008 6.0108 17.9909 6.0108H38.5126C39.0977 4.22634 40.0729 2.77843 41.4382 1.66706C42.8036 0.555686 44.35 0 46.0776 0C47.8051 0 49.3516 0.555686 50.7169 1.66706C52.0822 2.77843 53.0574 4.22634 53.6426 6.0108H74.1643C74.5543 6.0108 74.8748 6.15167 75.1255 6.43343C75.3763 6.71519 75.5017 7.07521 75.5017 7.51349V10.5189C75.5017 10.9572 75.3763 11.3172 75.1255 11.599C74.8748 11.8807 74.5543 12.0216 74.1643 12.0216H53.6426ZM46.0776 12.7729C46.9971 12.7729 47.7842 12.4051 48.439 11.6694C49.0938 10.9337 49.4212 10.0493 49.4212 9.01619C49.4212 7.98309 49.0938 7.09869 48.439 6.36299C47.7842 5.62729 46.9971 5.25945 46.0776 5.25945C45.1581 5.25945 44.3709 5.62729 43.7161 6.36299C43.0613 7.09869 42.7339 7.98309 42.7339 9.01619C42.7339 10.0493 43.0613 10.9337 43.7161 11.6694C44.3709 12.4051 45.1581 12.7729 46.0776 12.7729ZM91.5512 54.0972C91.5512 56.3825 90.9034 58.4331 89.6077 60.2488C88.3121 62.0646 86.6751 63.489 84.6968 64.5221C82.7184 65.5552 80.7053 66.3301 78.6573 66.8466C76.6093 67.3632 74.6658 67.6215 72.8268 67.6215C70.9878 67.6215 69.0443 67.3632 66.9963 66.8466C64.9483 66.3301 62.9351 65.5552 60.9568 64.5221C58.9785 63.489 57.3415 62.0646 56.0458 60.2488C54.7502 58.4331 54.1023 56.3825 54.1023 54.0972C54.1023 53.7528 54.5899 52.4849 55.5652 50.2935C56.5404 48.102 57.8221 45.3706 59.4104 42.0991C60.9986 38.8276 62.4893 35.7674 63.8825 32.9185C65.2757 30.0696 66.6968 27.1895 68.1457 24.278C69.5946 21.3665 70.3748 19.8012 70.4862 19.582C70.9878 18.5489 71.768 18.0324 72.8268 18.0324C73.8856 18.0324 74.6658 18.5489 75.1673 19.582C75.2788 19.8012 76.059 21.3665 77.5079 24.278C78.9568 27.1895 80.3779 30.0696 81.7711 32.9185C83.1642 35.7674 84.655 38.8276 86.2432 42.0991C87.8314 45.3706 89.1132 48.102 90.0884 50.2935C91.0636 52.4849 91.5512 53.7528 91.5512 54.0972ZM38.0528 54.0972C38.0528 56.3825 37.405 58.4331 36.1093 60.2488C34.8136 62.0646 33.1766 63.489 31.1983 64.5221C29.22 65.5552 27.2068 66.3301 25.1588 66.8466C23.1108 67.3632 21.1673 67.6215 19.3283 67.6215C17.4893 67.6215 15.5458 67.3632 13.4978 66.8466C11.4499 66.3301 9.4367 65.5552 7.45837 64.5221C5.48004 63.489 3.84305 62.0646 2.54738 60.2488C1.25171 58.4331 0.603882 56.3825 0.603882 54.0972C0.603882 53.7528 1.0915 52.4849 2.06673 50.2935C3.04196 48.102 4.3237 45.3706 5.91193 42.0991C7.50017 38.8276 8.99088 35.7674 10.3841 32.9185C11.7773 30.0696 13.1983 27.1895 14.6472 24.278C16.0961 21.3665 16.8763 19.8012 16.9878 19.582C17.4893 18.5489 18.2695 18.0324 19.3283 18.0324C20.3872 18.0324 21.1673 18.5489 21.6689 19.582C21.7804 19.8012 22.5605 21.3665 24.0095 24.278C25.4584 27.1895 26.8794 30.0696 28.2726 32.9185C29.6658 35.7674 31.1565 38.8276 32.7447 42.0991C34.333 45.3706 35.6147 48.102 36.5899 50.2935C37.5652 52.4849 38.0528 53.7528 38.0528 54.0972Z"
                      fill="white" />
                  </g>
                  <defs>
                    <clipPath id="clip0_178_16">
                      <rect width="90" height="83.271" fill="white" transform="translate(0.601562)" />
                    </clipPath>
                  </defs>
                </svg>
              </div>
              <div class="card-words">
                <div class="card-title" v-if="language">Excelență în Servicii</div>
                <div class="card-title" v-if="!language">Превосходство в сфере услуг</div>
                <div class="card-text" v-if="language">Ne-am dedicat să oferim servicii de cea mai înaltă calitate,
                  depășind mereu
                  așteptările clienților noștri. Echipa noastră talentată și experimentată este pregătită să ofere soluții
                  personalizate pentru a satisface nevoile unice ale afacerii tale.</div>
                <div class="card-text" v-if="!language">Мы стремимся предоставлять услуги высочайшего качества, всегда
                  превосходя ожидания наших клиентов. Наша талантливая и опытная команда готова предоставить
                  индивидуальные решения для удовлетворения уникальных потребностей вашего бизнеса.</div>
              </div>
            </div>
            <div class="one-card">
              <div class="card-logo">
                <svg xmlns="http://www.w3.org/2000/svg" width="91" height="90" viewBox="0 0 91 90" fill="none">
                  <path
                    d="M45.5 5.56641C43.2622 5.56641 41.1161 6.44609 39.5338 8.01195C37.9515 9.57781 37.0625 11.7016 37.0625 13.916C37.0625 16.1305 37.9515 18.2542 39.5338 19.8201C41.1161 21.3859 43.2622 22.2656 45.5 22.2656C47.7378 22.2656 49.8839 21.3859 51.4662 19.8201C53.0486 18.2542 53.9375 16.1305 53.9375 13.916C53.9375 11.7016 53.0486 9.57781 51.4662 8.01195C49.8839 6.44609 47.7378 5.56641 45.5 5.56641ZM31.4375 13.916C31.4375 10.2253 32.9191 6.68567 35.5563 4.07591C38.1935 1.46615 41.7704 0 45.5 0C49.2296 0 52.8065 1.46615 55.4437 4.07591C58.0809 6.68567 59.5625 10.2253 59.5625 13.916C59.5625 17.6068 58.0809 21.1464 55.4437 23.7561C52.8065 26.3659 49.2296 27.832 45.5 27.832C41.7704 27.832 38.1935 26.3659 35.5563 23.7561C32.9191 21.1464 31.4375 17.6068 31.4375 13.916ZM76.4375 11.1328C74.9457 11.1328 73.5149 11.7193 72.46 12.7632C71.4051 13.8071 70.8125 15.2229 70.8125 16.6992C70.8125 18.1755 71.4051 19.5914 72.46 20.6353C73.5149 21.6792 74.9457 22.2656 76.4375 22.2656C77.9293 22.2656 79.3601 21.6792 80.415 20.6353C81.4699 19.5914 82.0625 18.1755 82.0625 16.6992C82.0625 15.2229 81.4699 13.8071 80.415 12.7632C79.3601 11.7193 77.9293 11.1328 76.4375 11.1328ZM65.1875 16.6992C65.1875 13.7466 66.3728 10.9149 68.4826 8.82713C70.5923 6.73932 73.4538 5.56641 76.4375 5.56641C79.4212 5.56641 82.2827 6.73932 84.3925 8.82713C86.5022 10.9149 87.6875 13.7466 87.6875 16.6992C87.6875 19.6518 86.5022 22.4835 84.3925 24.5713C82.2827 26.6591 79.4212 27.832 76.4375 27.832C73.4538 27.832 70.5923 26.6591 68.4826 24.5713C66.3728 22.4835 65.1875 19.6518 65.1875 16.6992ZM8.9375 16.6992C8.9375 15.2229 9.53013 13.8071 10.585 12.7632C11.6399 11.7193 13.0707 11.1328 14.5625 11.1328C16.0543 11.1328 17.4851 11.7193 18.54 12.7632C19.5949 13.8071 20.1875 15.2229 20.1875 16.6992C20.1875 18.1755 19.5949 19.5914 18.54 20.6353C17.4851 21.6792 16.0543 22.2656 14.5625 22.2656C13.0707 22.2656 11.6399 21.6792 10.585 20.6353C9.53013 19.5914 8.9375 18.1755 8.9375 16.6992ZM14.5625 5.56641C11.5788 5.56641 8.71733 6.73932 6.60755 8.82713C4.49776 10.9149 3.3125 13.7466 3.3125 16.6992C3.3125 19.6518 4.49776 22.4835 6.60755 24.5713C8.71733 26.6591 11.5788 27.832 14.5625 27.832C17.5462 27.832 20.4077 26.6591 22.5175 24.5713C24.6272 22.4835 25.8125 19.6518 25.8125 16.6992C25.8125 13.7466 24.6272 10.9149 22.5175 8.82713C20.4077 6.73932 17.5462 5.56641 14.5625 5.56641ZM17.9375 72.3521C16.4144 72.4276 14.8918 72.1958 13.462 71.671C12.0323 71.1461 10.7253 70.339 9.62045 69.2988C8.51564 68.2586 7.63606 67.007 7.03517 65.62C6.43428 64.233 6.12462 62.7396 6.125 61.2305V40.3564C6.125 39.9874 6.27316 39.6334 6.53688 39.3724C6.8006 39.1115 7.15829 38.9648 7.53125 38.9648H17.4538C17.6788 36.922 18.41 35.0238 19.5069 33.3984H7.53125C3.65 33.3984 0.5 36.5156 0.5 40.3564V61.2305C0.499738 63.6136 1.0149 65.9691 2.01088 68.1388C3.00686 70.3085 4.46059 72.2422 6.27437 73.8098C8.08816 75.3774 10.22 76.5427 12.5266 77.2274C14.8333 77.9121 17.2613 78.1003 19.6475 77.7794C18.8904 76.0333 18.3174 74.2146 17.9375 72.3521ZM71.3525 77.7794C73.7387 78.1003 76.1667 77.9121 78.4734 77.2274C80.78 76.5427 82.9118 75.3774 84.7256 73.8098C86.5394 72.2422 87.9931 70.3085 88.9891 68.1388C89.9851 65.9691 90.5003 63.6136 90.5 61.2305V40.3564C90.5 36.5156 87.35 33.3984 83.4688 33.3984H71.4931C72.5956 35.0238 73.3213 36.922 73.5463 38.9648H83.4688C83.8417 38.9648 84.1994 39.1115 84.4631 39.3724C84.7268 39.6334 84.875 39.9874 84.875 40.3564V61.2305C84.8754 62.7396 84.5657 64.233 83.9648 65.62C83.3639 67.007 82.4844 68.2586 81.3795 69.2988C80.2747 70.339 78.9678 71.1461 77.538 71.671C76.1082 72.1958 74.5856 72.4276 73.0625 72.3521C72.6825 74.2146 72.1095 76.0333 71.3525 77.7794ZM30.0312 33.3984C26.15 33.3984 23 36.5156 23 40.3564V66.7969C23 72.7021 25.3705 78.3654 29.5901 82.541C33.8097 86.7167 39.5326 89.0625 45.5 89.0625C51.4674 89.0625 57.1903 86.7167 61.4099 82.541C65.6295 78.3654 68 72.7021 68 66.7969V40.3564C68 36.5156 64.85 33.3984 60.9688 33.3984H30.0312ZM28.625 40.3564C28.625 39.9874 28.7732 39.6334 29.0369 39.3724C29.3006 39.1115 29.6583 38.9648 30.0312 38.9648H60.9688C61.3417 38.9648 61.6994 39.1115 61.9631 39.3724C62.2268 39.6334 62.375 39.9874 62.375 40.3564V66.7969C62.375 71.2258 60.5971 75.4733 57.4324 78.605C54.2678 81.7367 49.9755 83.4961 45.5 83.4961C41.0245 83.4961 36.7323 81.7367 33.5676 78.605C30.4029 75.4733 28.625 71.2258 28.625 66.7969V40.3564Z"
                    fill="#F8F8F8" />
                </svg>
              </div>
              <div class="card-words">
                <div class="card-title" v-if="language">Experiență în Muncă</div>
                <div class="card-title" v-if="!language">Опыт работы</div>
                <div class="card-text" v-if="language">Echipa Take IT se remarcă prin echipa sa de experți cu 20+ ani de
                  experiență, asigurând clienții cu cunoștințe solide și înțelegere profundă a cerințelor tehnologice,
                  contribuind la oferirea de soluții personalizate și suport tehnic de calitate.</div>
                <div class="card-text" v-if="!language">Команду Take IT отличает команда экспертов с более чем 20-летним
                  опытом работы, предоставляющая клиентам глубокие знания и глубокое понимание технологических требований,
                  помогающая предоставлять индивидуальные решения и качественную техническую поддержку.</div>
              </div>
            </div>
            <div class="one-card">
              <div class="card-logo">
                <svg xmlns="http://www.w3.org/2000/svg" width="90" height="90" viewBox="0 0 90 90" fill="none">
                  <path
                    d="M65.1282 0H86.6986L87.1723 0.0629997L87.6412 0.189L87.9254 0.306C88.3043 0.459 88.6501 0.6885 88.9627 0.981L89.1521 1.179L89.3606 1.4355L89.6163 1.8405L89.8011 2.2455L89.8911 2.5335L89.9574 2.8215L90 3.249V23.643C89.9997 24.4981 89.6578 25.3212 89.0433 25.9461C88.4289 26.5709 87.5877 26.9508 86.6897 27.0091C85.7917 27.0674 84.904 26.7997 84.2057 26.2601C83.5075 25.7204 83.051 24.9491 82.9283 24.102L82.8951 23.643V11.5155L52.3916 40.4955C51.7901 41.0671 50.9927 41.4146 50.1443 41.4749C49.2959 41.5352 48.453 41.3042 47.7687 40.824L47.3708 40.5L33.019 27.405L6.06784 53.0055C5.43397 53.6094 4.58296 53.9629 3.68593 53.9949C2.7889 54.027 1.91236 53.7352 1.23254 53.1782C0.552725 52.6213 0.12004 51.8405 0.021485 50.9928C-0.0770703 50.1452 0.165811 49.2935 0.701296 48.609L1.04707 48.231L30.5086 20.241C31.1107 19.6701 31.9084 19.3234 32.7567 19.2639C33.6051 19.2045 34.4477 19.4362 35.1315 19.917L35.5294 20.241L49.8812 33.336L77.8649 6.75H65.1235C64.2659 6.74888 63.4376 6.45303 62.7916 5.91707C62.1457 5.38111 61.7256 4.64122 61.6089 3.834L61.5758 3.375C61.5758 2.55943 61.8867 1.77146 62.451 1.15681C63.0152 0.542163 63.7946 0.142417 64.6451 0.0314999L65.1282 0ZM3.55745 67.5C4.49962 67.5 5.40319 67.8556 6.0694 68.4885C6.73561 69.1214 7.10989 69.9799 7.10989 70.875V86.625C7.10989 87.5201 6.73561 88.3785 6.0694 89.0115C5.40319 89.6444 4.49962 90 3.55745 90C2.61529 90 1.71171 89.6444 1.0455 89.0115C0.379292 88.3785 0.00501889 87.5201 0.00501889 86.625V70.875C0.00501889 69.9799 0.379292 69.1214 1.0455 68.4885C1.71171 67.8556 2.61529 67.5 3.55745 67.5ZM30.7928 52.875C30.7928 51.9799 30.4185 51.1215 29.7523 50.4885C29.0861 49.8556 28.1825 49.5 27.2403 49.5C26.2982 49.5 25.3946 49.8556 24.7284 50.4885C24.0622 51.1215 23.6879 51.9799 23.6879 52.875V86.625C23.6879 87.5201 24.0622 88.3785 24.7284 89.0115C25.3946 89.6444 26.2982 90 27.2403 90C28.1825 90 29.0861 89.6444 29.7523 89.0115C30.4185 88.3785 30.7928 87.5201 30.7928 86.625V52.875ZM50.9232 58.5C51.8654 58.5 52.769 58.8556 53.4352 59.4885C54.1014 60.1214 54.4757 60.9799 54.4757 61.875V86.625C54.4757 87.5201 54.1014 88.3785 53.4352 89.0115C52.769 89.6444 51.8654 90 50.9232 90C49.9811 90 49.0775 89.6444 48.4113 89.0115C47.7451 88.3785 47.3708 87.5201 47.3708 86.625V61.875C47.3708 60.9799 47.7451 60.1214 48.4113 59.4885C49.0775 58.8556 49.9811 58.5 50.9232 58.5ZM78.1586 39.375C78.1586 38.4799 77.7843 37.6215 77.1181 36.9885C76.4519 36.3556 75.5483 36 74.6061 36C73.6639 36 72.7604 36.3556 72.0942 36.9885C71.428 37.6215 71.0537 38.4799 71.0537 39.375V86.625C71.0537 87.5201 71.428 88.3785 72.0942 89.0115C72.7604 89.6444 73.6639 90 74.6061 90C75.5483 90 76.4519 89.6444 77.1181 89.0115C77.7843 88.3785 78.1586 87.5201 78.1586 86.625V39.375Z"
                    fill="white" />
                </svg>
              </div>
              <div class="card-words">
                <div class="card-title" v-if="language">Creștere Continuă</div>
                <div class="card-title" v-if="!language">Продолжающийся рост</div>
                <div class="card-text" v-if="language">Take IT promovează creșterea continuă prin implementarea
                  tehnologiilor inovatoare. Echipa noastră de experți contribuie la dezvoltarea afacerii dvs,
                  implementând soluții tehnologice avansate și orientate spre viitor.</div>
                <div class="card-text" v-if="!language">Take IT способствует постоянному росту за счет внедрения
                  инновационных технологий. Наша команда экспертов способствует развитию вашего бизнеса, внедряя передовые
                  и перспективные технологические решения.</div>
              </div>
            </div>
          </div>
          <div class="slide-title" v-if="language">Suntem mândri să oferim un parteneriat bazat pe excelență și încredere,
            construit pe fundamente solide și dedicat atingerii obiectivelor dumneavoastră.</div>
          <div class="slide-title" v-if="!language">Мы с гордостью предлагаем партнерство, основанное на совершенстве и
            доверии, построенное на прочной основе и ориентированное на достижение ваших целей.</div>
        </div>
        <div class="one-slide wrapper">
          <div class="percent-slide">
            <div class="percent-stats">
              <div class="top-percent">
                <div class="one-circle">
                  <div class="percent-title" v-if="language">Obiecte deschise</div>
                  <div class="percent-title" v-if="!language">Открытые объекты</div>
                  <div class="percent-nr">700</div>
                  <svg xmlns="http://www.w3.org/2000/svg" version="1.1">
                    <defs>
                      <linearGradient id="GradientColor">
                        <stop offset="0%" stop-color="#e91e63" />
                        <stop offset="100%" stop-color="#673ab7" />
                      </linearGradient>
                    </defs>
                    <circle v-motion :initial="{'stroke-dashoffset': 471}" :visibleOnce="{'stroke-dashoffset': 250,  transition: { duration: 2000, delay: 200,}}" cx="80" cy="80" r="70" stroke-linecap="round" />
                  </svg>
                </div>
                <div class="one-circle">
                  <div class="percent-title" v-if="language">Produse</div>
                  <div class="percent-title" v-if="!language">Продукты</div>
                  <div class="percent-nr">10000</div>
                  <svg xmlns="http://www.w3.org/2000/svg" version="1.1">
                    <defs>
                      <linearGradient id="GradientColor">
                        <stop offset="0%" stop-color="#e91e63" />
                        <stop offset="100%" stop-color="#673ab7" />
                      </linearGradient>
                    </defs>
                    <circle v-motion :initial="{'stroke-dashoffset': 471}" :visibleOnce="{'stroke-dashoffset': 150,  transition: { duration: 2000, delay: 200,}}" cx="80" cy="80" r="70" stroke-linecap="round" />
                  </svg>
                </div>
              </div>
              <div class="midlle-percent">
                <div class="one-circle">
                  <div class="percent-title" v-if="language">Clienți mulțumiți</div>
                  <div class="percent-title" v-if="!language">Довольные клиенты</div>
                  <div class="percent-nr">1000</div>
                  <svg xmlns="http://www.w3.org/2000/svg" version="1.1">
                    <defs>
                      <linearGradient id="GradientColor">
                        <stop offset="0%" stop-color="#e91e63" />
                        <stop offset="100%" stop-color="#673ab7" />
                      </linearGradient>
                    </defs>
                    <circle v-motion :initial="{'stroke-dashoffset': 471}" :visibleOnce="{'stroke-dashoffset': 200,  transition: { duration: 2000, delay: 200,}}" cx="80" cy="80" r="70" stroke-linecap="round" />
                  </svg>
                </div>
                <div class="one-circle">
                  <div class="percent-title" v-if="language">Experți angajați</div>
                  <div class="percent-title" v-if="!language">Нанятые специалисты</div>
                  <div class="percent-nr">38</div>
                  <svg xmlns="http://www.w3.org/2000/svg" version="1.1">
                    <defs>
                      <linearGradient id="GradientColor">
                        <stop offset="0%" stop-color="#e91e63" />
                        <stop offset="100%" stop-color="#673ab7" />
                      </linearGradient>
                    </defs>
                    <circle v-motion :initial="{'stroke-dashoffset': 471}" :visibleOnce="{'stroke-dashoffset': 49,  transition: { duration: 2000, delay: 200,}}" cx="80" cy="80" r="70" stroke-linecap="round" />
                  </svg>
                </div>
              </div>
              <div class="bottom-percent">
                <div class="one-circle">
                  <div class="percent-title" v-if="language">Experiența angajaților</div>
                  <div class="percent-title" v-if="!language">Опыт сотрудников</div>
                  <div class="percent-nr">+20</div>
                  <svg xmlns="http://www.w3.org/2000/svg" version="1.1">
                    <defs>
                      <linearGradient id="GradientColor">
                        <stop offset="0%" stop-color="#e91e63" />
                        <stop offset="100%" stop-color="#673ab7" />
                      </linearGradient>
                    </defs>
                    <circle v-motion :initial="{'stroke-dashoffset': 471}" :visibleOnce="{'stroke-dashoffset': 49,  transition: { duration: 2000, delay: 200,}}" cx="80" cy="80" r="70" stroke-linecap="round" />
                  </svg>
                </div>
                <div class="one-circle">
                  <div class="percent-title">Call-center</div>
                  <div class="percent-nr">24/7</div>
                  <svg xmlns="http://www.w3.org/2000/svg" version="1.1">
                    <defs>
                      <linearGradient id="GradientColor">
                        <stop offset="0%" stop-color="#e91e63" />
                        <stop offset="100%" stop-color="#673ab7" />
                      </linearGradient>
                    </defs>
                    <circle v-motion :initial="{'stroke-dashoffset': 471}" :visibleOnce="{'stroke-dashoffset': 49, transition: { duration: 2000, delay: 200,}}" cx="80" cy="80" r="70" stroke-linecap="round" />
                  </svg>
                </div>
              </div>
            </div>
            <div class="percent-info">
              <div class="percent-info-title" v-if="language">
                INOVĂM CU <span class="bold-green">EFICIENȚĂ</span>, TRANSFORMĂM PROVOCĂRI ÎN <span
                  class="bold-green">OPORTUNITĂȚI</span>, ADUCÂND SOLUȚII DE IMPACT.
              </div>
              <div class="percent-info-title" v-if="!language">МЫ <span class="bold-green">ЭФФЕКТИВНО</span> ВНЕДРЯЕМ
                ИННОВАЦИИ, ПРЕВРАЩАЕМ ПРОБЛЕМЫ В <span class="bold-green">ВОЗМОЖНОСТИ</span>, ПРЕДЛАГАЯ ЭФФЕКТИВНЫЕ
                РЕШЕНИЯ.
              </div>
              <div class="percent-link" v-if="language">Află mai multe despre noi</div>
              <div class="percent-link" v-if="!language">Узнайте больше о нас</div>
            </div>
          </div>
        </div>
        <div class="one-slide">
          <div class="service-title" v-if="language">
            Serviciile Noastre
          </div>
          <div class="service-title" v-if="!language">
            Наши услуги
          </div>
          <div class="service-slider">
            <div class="top-slides">
              <div class="service-one-slide">
                <div class="service-one-slide-title" v-if="language">Dezvoltăm soluții și aplicații complexe</div>
                <div class="service-one-slide-title" v-if="!language">Мы разрабатываем сложные решения и приложения
                </div>
                <div class="service-one-slide-content" v-if="language">Take IT oferă soluții integrate, cu accent pe
                  implementarea rapidă
                  într-un mediu competitiv. Prioritățile includ fidelizarea clienților, optimizarea proceselor și
                  asigurarea securității prin soluții complete. Diferențierea constă în crearea unor experiențe
                  inovatoare. Suportul tehnic și serviciile cu acoperire națională consolidează relațiile durabile cu
                  clienții. Take IT se evidențiază prin abordare comprehensivă și parteneriate strânse pe parcursul
                  colaborării.</div>
                <div class="service-one-slide-content" v-if="!language">Take IT предлагает интегрированные решения с
                  акцентом на
                  в конкурентной среде.Приоритеты включают лояльность клиентов, оптимизация процессов и
                  Обеспечение безопасности с помощью полных решений.Дифференциация состоит из создания опыта
                  инновационный.Техническая поддержка и услуги с национальным охватом укрепляют устойчивые отношения с
                  клиенты.Take IT, подчеркивается комплексным подходом и партнерскими отношениями, собранными в течение
                  всего
                  Сотрудничество.</div>
              </div>
              <div class="service-one-slide">
                <div class="service-one-slide-title" v-if="language">Dezvoltăm soluții și aplicații complexe</div>
                <div class="service-one-slide-title" v-if="!language">Мы разрабатываем сложные решения и приложения
                </div>
                <div class="service-one-slide-content" v-if="language">Take IT oferă soluții integrate, cu accent pe
                  implementarea rapidă
                  într-un mediu competitiv. Prioritățile includ fidelizarea clienților, optimizarea proceselor și
                  asigurarea securității prin soluții complete. Diferențierea constă în crearea unor experiențe
                  inovatoare. Suportul tehnic și serviciile cu acoperire națională consolidează relațiile durabile cu
                  clienții. Take IT se evidențiază prin abordare comprehensivă și parteneriate strânse pe parcursul
                  colaborării.</div>
                <div class="service-one-slide-content" v-if="!language">Take IT предлагает интегрированные решения с
                  акцентом на
                  в конкурентной среде.Приоритеты включают лояльность клиентов, оптимизация процессов и
                  Обеспечение безопасности с помощью полных решений.Дифференциация состоит из создания опыта
                  инновационный.Техническая поддержка и услуги с национальным охватом укрепляют устойчивые отношения с
                  клиенты.Take IT, подчеркивается комплексным подходом и партнерскими отношениями, собранными в течение
                  всего
                  Сотрудничество.</div>
              </div>
              <div class="service-one-slide">
                <div class="service-one-slide-title" v-if="language">Dezvoltăm soluții și aplicații complexe</div>
                <div class="service-one-slide-title" v-if="!language">Мы разрабатываем сложные решения и приложения
                </div>
                <div class="service-one-slide-content" v-if="language">Take IT oferă soluții integrate, cu accent pe
                  implementarea rapidă
                  într-un mediu competitiv. Prioritățile includ fidelizarea clienților, optimizarea proceselor și
                  asigurarea securității prin soluții complete. Diferențierea constă în crearea unor experiențe
                  inovatoare. Suportul tehnic și serviciile cu acoperire națională consolidează relațiile durabile cu
                  clienții. Take IT se evidențiază prin abordare comprehensivă și parteneriate strânse pe parcursul
                  colaborării.</div>
                <div class="service-one-slide-content" v-if="!language">Take IT предлагает интегрированные решения с
                  акцентом на
                  в конкурентной среде.Приоритеты включают лояльность клиентов, оптимизация процессов и
                  Обеспечение безопасности с помощью полных решений.Дифференциация состоит из создания опыта
                  инновационный.Техническая поддержка и услуги с национальным охватом укрепляют устойчивые отношения с
                  клиенты.Take IT, подчеркивается комплексным подходом и партнерскими отношениями, собранными в течение
                  всего
                  Сотрудничество.</div>
              </div>
              <div class="service-one-slide">
                <div class="service-one-slide-title" v-if="language">Dezvoltăm soluții și aplicații complexe</div>
                <div class="service-one-slide-title" v-if="!language">Мы разрабатываем сложные решения и приложения
                </div>
                <div class="service-one-slide-content" v-if="language">Take IT oferă soluții integrate, cu accent pe
                  implementarea rapidă
                  într-un mediu competitiv. Prioritățile includ fidelizarea clienților, optimizarea proceselor și
                  asigurarea securității prin soluții complete. Diferențierea constă în crearea unor experiențe
                  inovatoare. Suportul tehnic și serviciile cu acoperire națională consolidează relațiile durabile cu
                  clienții. Take IT se evidențiază prin abordare comprehensivă și parteneriate strânse pe parcursul
                  colaborării.</div>
                <div class="service-one-slide-content" v-if="!language">Take IT предлагает интегрированные решения с
                  акцентом на
                  в конкурентной среде.Приоритеты включают лояльность клиентов, оптимизация процессов и
                  Обеспечение безопасности с помощью полных решений.Дифференциация состоит из создания опыта
                  инновационный.Техническая поддержка и услуги с национальным охватом укрепляют устойчивые отношения с
                  клиенты.Take IT, подчеркивается комплексным подходом и партнерскими отношениями, собранными в течение
                  всего
                  Сотрудничество.</div>
              </div>
            </div>
            <div class="bottom-slides">
              <div class="service-one-slide">
                <div class="service-one-slide-title" v-if="language">Dezvoltăm soluții și aplicații complexe</div>
                <div class="service-one-slide-title" v-if="!language">Мы разрабатываем сложные решения и приложения
                </div>
                <div class="service-one-slide-content" v-if="language">Take IT oferă soluții integrate, cu accent pe
                  implementarea rapidă
                  într-un mediu competitiv. Prioritățile includ fidelizarea clienților, optimizarea proceselor și
                  asigurarea securității prin soluții complete. Diferențierea constă în crearea unor experiențe
                  inovatoare. Suportul tehnic și serviciile cu acoperire națională consolidează relațiile durabile cu
                  clienții. Take IT se evidențiază prin abordare comprehensivă și parteneriate strânse pe parcursul
                  colaborării.</div>
                <div class="service-one-slide-content" v-if="!language">Take IT предлагает интегрированные решения с
                  акцентом на
                  в конкурентной среде.Приоритеты включают лояльность клиентов, оптимизация процессов и
                  Обеспечение безопасности с помощью полных решений.Дифференциация состоит из создания опыта
                  инновационный.Техническая поддержка и услуги с национальным охватом укрепляют устойчивые отношения с
                  клиенты.Take IT, подчеркивается комплексным подходом и партнерскими отношениями, собранными в течение
                  всего
                  Сотрудничество.</div>
              </div>
              <div class="service-one-slide">
                <div class="service-one-slide-title" v-if="language">Dezvoltăm soluții și aplicații complexe</div>
                <div class="service-one-slide-title" v-if="!language">Мы разрабатываем сложные решения и приложения
                </div>
                <div class="service-one-slide-content" v-if="language">Take IT oferă soluții integrate, cu accent pe
                  implementarea rapidă
                  într-un mediu competitiv. Prioritățile includ fidelizarea clienților, optimizarea proceselor și
                  asigurarea securității prin soluții complete. Diferențierea constă în crearea unor experiențe
                  inovatoare. Suportul tehnic și serviciile cu acoperire națională consolidează relațiile durabile cu
                  clienții. Take IT se evidențiază prin abordare comprehensivă și parteneriate strânse pe parcursul
                  colaborării.</div>
                <div class="service-one-slide-content" v-if="!language">Take IT предлагает интегрированные решения с
                  акцентом на
                  в конкурентной среде.Приоритеты включают лояльность клиентов, оптимизация процессов и
                  Обеспечение безопасности с помощью полных решений.Дифференциация состоит из создания опыта
                  инновационный.Техническая поддержка и услуги с национальным охватом укрепляют устойчивые отношения с
                  клиенты.Take IT, подчеркивается комплексным подходом и партнерскими отношениями, собранными в течение
                  всего
                  Сотрудничество.</div>
              </div>
              <div class="service-one-slide">
                <div class="service-one-slide-title" v-if="language">Dezvoltăm soluții și aplicații complexe</div>
                <div class="service-one-slide-title" v-if="!language">Мы разрабатываем сложные решения и приложения
                </div>
                <div class="service-one-slide-content" v-if="language">Take IT oferă soluții integrate, cu accent pe
                  implementarea rapidă
                  într-un mediu competitiv. Prioritățile includ fidelizarea clienților, optimizarea proceselor și
                  asigurarea securității prin soluții complete. Diferențierea constă în crearea unor experiențe
                  inovatoare. Suportul tehnic și serviciile cu acoperire națională consolidează relațiile durabile cu
                  clienții. Take IT se evidențiază prin abordare comprehensivă și parteneriate strânse pe parcursul
                  colaborării.</div>
                <div class="service-one-slide-content" v-if="!language">Take IT предлагает интегрированные решения с
                  акцентом на
                  в конкурентной среде.Приоритеты включают лояльность клиентов, оптимизация процессов и
                  Обеспечение безопасности с помощью полных решений.Дифференциация состоит из создания опыта
                  инновационный.Техническая поддержка и услуги с национальным охватом укрепляют устойчивые отношения с
                  клиенты.Take IT, подчеркивается комплексным подходом и партнерскими отношениями, собранными в течение
                  всего
                  Сотрудничество.</div>
              </div>
              <div class="service-one-slide">
                <div class="service-one-slide-title" v-if="language">Dezvoltăm soluții și aplicații complexe</div>
                <div class="service-one-slide-title" v-if="!language">Мы разрабатываем сложные решения и приложения
                </div>
                <div class="service-one-slide-content" v-if="language">Take IT oferă soluții integrate, cu accent pe
                  implementarea rapidă
                  într-un mediu competitiv. Prioritățile includ fidelizarea clienților, optimizarea proceselor și
                  asigurarea securității prin soluții complete. Diferențierea constă în crearea unor experiențe
                  inovatoare. Suportul tehnic și serviciile cu acoperire națională consolidează relațiile durabile cu
                  clienții. Take IT se evidențiază prin abordare comprehensivă și parteneriate strânse pe parcursul
                  colaborării.</div>
                <div class="service-one-slide-content" v-if="!language">Take IT предлагает интегрированные решения с
                  акцентом на
                  в конкурентной среде.Приоритеты включают лояльность клиентов, оптимизация процессов и
                  Обеспечение безопасности с помощью полных решений.Дифференциация состоит из создания опыта
                  инновационный.Техническая поддержка и услуги с национальным охватом укрепляют устойчивые отношения с
                  клиенты.Take IT, подчеркивается комплексным подходом и партнерскими отношениями, собранными в течение
                  всего
                  Сотрудничество.</div>
              </div>
            </div>

          </div>
        </div>
        <div class="one-slide">
          <div class="clients" v-if="language">Clienți ce au <span class="clients-green">încredere</span> în echipa
            noastră</div>
          <div class="clients" v-if="!language">Клиенты, которые <span class="clients-green">доверяют</span> нашей команде
          </div>
          <div class="clients-slide">
            <div class="clients-logos-wrapper">
              <div class="clients-logos">
                <span class="clients-logos-img"><img src="../src/assets/Clienti/carmez.png" alt=""></span>
                <span class="clients-logos-img"><img src="../src/assets/Clienti/colin's.png" alt=""></span>
                <span class="clients-logos-img"><img src="../src/assets/Clienti/darwin.png" alt=""></span>
                <span class="clients-logos-img"><img src="../src/assets/Clienti/linella.png" alt=""></span>
                <span class="clients-logos-img"><img src="../src/assets/Clienti/maximum.png" alt=""></span>
                <span class="clients-logos-img"><img src="../src/assets/Clienti/merci.png" alt=""></span>
                <span class="clients-logos-img"><img src="../src/assets/Clienti/milavitsa.png" alt=""></span>
                <span class="clients-logos-img"><img src="../src/assets/Clienti/nr 1.png" alt=""></span>
                <span class="clients-logos-img"><img src="../src/assets/Clienti/ovico.png" alt=""></span>
                <span class="clients-logos-img"><img src="../src/assets/Clienti/ovs.png" alt=""></span>
                <span class="clients-logos-img"><img src="../src/assets/Clienti/salamander.png" alt=""></span>
                <span class="clients-logos-img"><img src="../src/assets/Clienti/sisley.png" alt=""></span>
                <span class="clients-logos-img"><img src="../src/assets/Clienti/sportlandia.png" alt=""></span>
                <span class="clients-logos-img"><img src="../src/assets/Clienti/terranova.png" alt=""></span>
                <span class="clients-logos-img"><img src="../src/assets/Clienti/trend.png" alt=""></span>
              </div>
              <div class="clients-logos">
                <span class="clients-logos-img"><img src="../src/assets/Clienti/carmez.png" alt=""></span>
                <span class="clients-logos-img"><img src="../src/assets/Clienti/colin's.png" alt=""></span>
                <span class="clients-logos-img"><img src="../src/assets/Clienti/darwin.png" alt=""></span>
                <span class="clients-logos-img"><img src="../src/assets/Clienti/linella.png" alt=""></span>
                <span class="clients-logos-img"><img src="../src/assets/Clienti/maximum.png" alt=""></span>
                <span class="clients-logos-img"><img src="../src/assets/Clienti/merci.png" alt=""></span>
                <span class="clients-logos-img"><img src="../src/assets/Clienti/milavitsa.png" alt=""></span>
                <span class="clients-logos-img"><img src="../src/assets/Clienti/nr 1.png" alt=""></span>
                <span class="clients-logos-img"><img src="../src/assets/Clienti/ovico.png" alt=""></span>
                <span class="clients-logos-img"><img src="../src/assets/Clienti/ovs.png" alt=""></span>
                <span class="clients-logos-img"><img src="../src/assets/Clienti/salamander.png" alt=""></span>
                <span class="clients-logos-img"><img src="../src/assets/Clienti/sisley.png" alt=""></span>
                <span class="clients-logos-img"><img src="../src/assets/Clienti/sportlandia.png" alt=""></span>
                <span class="clients-logos-img"><img src="../src/assets/Clienti/terranova.png" alt=""></span>
                <span class="clients-logos-img"><img src="../src/assets/Clienti/trend.png" alt=""></span>
              </div>
            </div>
          </div>
        </div>
        <div class="one-slide wrapper">
          <div class="parteners-card">
            <div class="parteners-card-words">
              <div class="parteners-card-title" v-if="language">
                PARTENERII NOȘTRI
              </div>
              <div class="parteners-card-title" v-if="!language">
                Наши партнеры
              </div>
              <div class="parteners-subtitle" v-if="language">Take IT - <span class="parteners-green">importator
                  oficial</span> pe teritoriul Republicii Moldova, partener de încredere a producătorilor de echipamente
                cu mărci de <span class="parteners-green">renumite mondial</span>.</div>
              <div class="parteners-subtitle" v-if="!language">Take IT - <span class="parteners-green">импортер
                  официальный</span> на территории Республики Молдовы, доверенного партнера производителей оборудования
                с брендами <span class="parteners-green">известный во всем мире</span>.</div>
            </div>
            <div class="parteners-card-slider">
              <div class="parteners-card-slider-wrapper">
                <Swiper  :slidesPerView="1" :spaceBetween="30" :pagination="true" :modules="modules"
                  class="parteners-card-one-slide">
                  <swiper-slide class="parteners-one-slide-img">
                    <div><img src="../src/assets/Partenerii/shopguard.png" alt=""></div>
                    <div><img src="../src/assets/Partenerii/sato.png" alt=""></div>
                    <div><img src="../src/assets/Partenerii/zebra.png" alt=""></div>
                    <div><img src="../src/assets/Partenerii/bizebra.png" alt=""></div>
                  </swiper-slide>
                  <swiper-slide class="parteners-one-slide-img">
                    <div><img src="../src/assets/Partenerii/datalogic.png" alt=""></div>
                    <div><img src="../src/assets/Partenerii/ccl.png" alt=""></div>
                    <div><img src="../src/assets/Partenerii/tsc.png" alt=""></div>
                    <div><img src="../src/assets/Partenerii/sensormatic.png" alt=""></div>
                  </swiper-slide>
                </Swiper>
                <div class="swipe-hand">
                  <svg xmlns="http://www.w3.org/2000/svg" width="50" height="40" viewBox="0 0 50 40" fill="none">
                    <path
                      d="M24.5139 39.1934C23.5806 39.1934 22.7028 39.0639 21.8806 38.805C21.0583 38.5475 20.3065 38.1646 19.625 37.6565L5.93889 27.451L7.275 26.4811C7.69537 26.1931 8.17222 26.0076 8.70555 25.9245C9.23704 25.8401 9.775 25.8484 10.3194 25.9495L18.0556 27.3762V10.1178C18.0556 9.82292 18.1889 9.57647 18.4556 9.37848C18.7222 9.17911 19.0518 9.07942 19.4444 9.07942C19.837 9.07942 20.1667 9.17911 20.4333 9.37848C20.6981 9.57786 20.8306 9.82431 20.8306 10.1178V30.1633L10.7278 28.1218L21.6056 36.2131C21.9796 36.4928 22.4213 36.7136 22.9306 36.8756C23.4398 37.0362 23.9667 37.1165 24.5111 37.1165H34.7222C36.6778 37.1165 38.3241 36.6167 39.6611 35.6171C40.9981 34.6174 41.6667 33.3866 41.6667 31.9245V23.6172C41.6667 23.3223 41.8 23.0758 42.0667 22.8778C42.3333 22.6798 42.663 22.5802 43.0556 22.5788C43.4481 22.5788 43.7778 22.6785 44.0444 22.8778C44.3093 23.0772 44.4417 23.3237 44.4417 23.6172V31.9245C44.4417 33.9431 43.4963 35.6593 41.6056 37.0729C39.7148 38.4865 37.4241 39.1934 34.7333 39.1934H24.5139ZM25.9083 25.694V17.3867C25.9083 17.0918 26.0417 16.8447 26.3083 16.6453C26.575 16.4473 26.9056 16.3483 27.3 16.3483C27.6926 16.3483 28.0222 16.448 28.2889 16.6474C28.5537 16.8467 28.6861 17.0932 28.6861 17.3867V25.694H25.9083ZM33.8139 25.694V19.4635C33.8139 19.1686 33.9472 18.9215 34.2139 18.7221C34.4806 18.5227 34.8111 18.4237 35.2056 18.4251C35.6 18.4251 35.9296 18.5248 36.1944 18.7242C36.4593 18.9236 36.5917 19.17 36.5917 19.4635V25.694H33.8139ZM0 10.9174V1.81054H2.45833V7.01506C6.14722 4.89254 9.86296 3.31416 13.6056 2.2799C17.3481 1.24841 21.2 0.732666 25.1611 0.732666C30.7093 0.732666 35.7463 1.65893 40.2722 3.51146C44.7981 5.36537 48.0407 7.83402 50 10.9174H47.3889C45.2722 8.3283 42.2352 6.28955 38.2778 4.80116C34.3185 3.31277 29.9463 2.56858 25.1611 2.56858C21.3 2.56858 17.5481 3.10509 13.9056 4.17812C10.2611 5.25114 6.64444 6.88491 3.05556 9.07942H12.1806V10.9174H0Z"
                      fill="#F8F8F8" fill-opacity="0.5" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="one-slide ">
          <div class="send-message">
            <div class="send-message-title" v-if="language">Suntem aici pentru dvs!</div>
            <div class="send-message-title" v-if="!language">Мы здесь для вас!</div>
            <div class="send-message-subtitle" v-if="language">Echipa noastră este mereu pregătită să vă răspundă la orice
              întrebare.</div>
            <div class="send-message-subtitle" v-if="!language">Наша команда всегда готова ответить на любой вопрос.</div>
            <form class="form-wrapper" method="Post" @submit.prevent="submitMessage()">
              <div class="user-info">
                <input required v-model="fullName" class="send-message-input" placeholder="Nume" type="text">
                <input required v-model="email" class="send-message-input" placeholder="Email" type="email">
              </div>
              <textarea required v-model="message" class="send-message-text" placeholder="Mesaj" id="Message"></textarea>
              <button class="send-message-btn" type="submit">Trimiteți Mesajul</button>
            </form>
          </div>
        </div>
        <div class="banner">
        <div class="products-banner wrapper">
          <div class="banner-title" v-if="language">Descoperiți produsele partenerilor noștri.</div>
          <div class="banner-title" v-if="!language">Откройте для себя продукты наших партнеров.</div>
          <div class="banner-btn" v-if="language">Vizualizați Ofertele</div>
          <div class="banner-btn" v-if="!language">Посмотреть предложения</div>
        </div>
      </div>
      </div>
    </div>
    <footer class="footer">
        <div class="footer-logo">
          <img src="../src/assets/logo.png" alt="">
        </div>
        <div class="footer-links">
          <div class="footer-links-one">
            <div class="footer-links-one-title" v-if="language">Pagini Principale</div>
            <div class="footer-links-one-title" v-if="!language">Основные страницы</div>
            <div class="footer-links-one-under">
              <div class="links" v-if="language">Acasă</div>
              <div class="links" v-if="!language">Домой</div>
              <div class="links" v-if="language">Despre Noi</div>
              <div class="links" v-if="!language">О нас</div>
              <div class="links" v-if="language">Catalog</div>
              <div class="links" v-if="!language">Каталог</div>
            </div>
          </div>
          <div class="footer-links-one">
            <div class="footer-links-one-title" v-if="language">Contactează-ne</div>
            <div class="footer-links-one-title" v-if="!language">Связаться с нами</div>
            <div class="footer-links-one-under">
              <div class="links">
                <div class="links-svg">
                  <svg xmlns="http://www.w3.org/2000/svg" width="40" height="41" viewBox="0 0 40 41" fill="none">
  <g opacity="0.5">
    <path d="M35 26.2901L26.2166 25.2734L22.0166 29.4734C17.2853 27.0671 13.4396 23.2215 11.0333 18.4901L15.25 14.2734L14.2333 5.52344H5.04996C4.08329 22.4901 18.0333 36.4401 35 35.4734V26.2901Z" fill="#F8F8F8"/>
  </g>
</svg>
                </div>
                <div class="links-info">+373 (79) 33 99 33</div>
              </div>
              <div class="links">
                <div class="links-svg">
                  <svg xmlns="http://www.w3.org/2000/svg" width="40" height="41" viewBox="0 0 40 41" fill="none">
  <g opacity="0.5">
    <path d="M7.73998 8.52344H34.24C36.74 8.52344 38 9.70344 38 12.1034V28.9434C38 31.3234 36.74 32.5234 34.24 32.5234H7.73998C5.23998 32.5234 3.97998 31.3234 3.97998 28.9434V12.1034C3.97998 9.70344 5.23998 8.52344 7.73998 8.52344ZM20.98 25.7234L34.46 14.6634C34.94 14.2634 35.32 13.3434 34.72 12.5234C34.14 11.7034 33.08 11.6834 32.38 12.1834L20.98 19.9034L9.59998 12.1834C8.89998 11.6834 7.83998 11.7034 7.25998 12.5234C6.65998 13.3434 7.03998 14.2634 7.51998 14.6634L20.98 25.7234Z" fill="#F8F8F8"/>
  </g>
</svg>
                </div>
                <div class="links-info">sales.b2b@takeit.md</div>
              </div>
            </div>
          </div>
          <div class="social-links">
          <div>
            <svg xmlns="http://www.w3.org/2000/svg" width="40" height="41" viewBox="0 0 40 41" fill="none">
  <path d="M40 20.5736C40 9.50589 31.04 0.523438 20 0.523438C8.96 0.523438 0 9.50589 0 20.5736C0 30.2778 6.88 38.358 16 40.2227V26.5886H12V20.5736H16V15.561C16 11.6914 19.14 8.54349 23 8.54349H28V14.5585H24C22.9 14.5585 22 15.4608 22 16.5635V20.5736H28V26.5886H22V40.5234C32.1 39.5209 40 30.9796 40 20.5736Z" fill="#F8F8F8" fill-opacity="0.5"/>
</svg>
</div>
<div>
  <svg xmlns="http://www.w3.org/2000/svg" width="40" height="41" viewBox="0 0 40 41" fill="none">
  <path d="M19.9946 10.2615C14.3159 10.2615 9.73288 14.8446 9.73288 20.5234C9.73288 26.2023 14.3159 30.7854 19.9946 30.7854C25.6734 30.7854 30.2564 26.2023 30.2564 20.5234C30.2564 14.8446 25.6734 10.2615 19.9946 10.2615ZM19.9946 27.1929C16.3222 27.1929 13.3252 24.1959 13.3252 20.5234C13.3252 16.851 16.3222 13.8539 19.9946 13.8539C23.667 13.8539 26.664 16.851 26.664 20.5234C26.664 24.1959 23.667 27.1929 19.9946 27.1929ZM30.6766 7.4496C29.3508 7.4496 28.2801 8.52033 28.2801 9.84622C28.2801 11.1721 29.3508 12.2428 30.6766 12.2428C32.0025 12.2428 33.0732 11.1771 33.0732 9.84622C33.0736 9.53138 33.0119 9.21956 32.8916 8.92861C32.7713 8.63766 32.5948 8.3733 32.3722 8.15068C32.1495 7.92805 31.8852 7.75153 31.5942 7.63123C31.3033 7.51093 30.9915 7.44921 30.6766 7.4496ZM39.9978 20.5234C39.9978 17.7616 40.0228 15.0247 39.8677 12.2679C39.7126 9.0657 38.9821 6.22378 36.6406 3.88219C34.294 1.53561 31.4572 0.810118 28.2551 0.655014C25.4932 0.499909 22.7564 0.524926 19.9996 0.524926C17.2378 0.524926 14.501 0.499909 11.7442 0.655014C8.5421 0.810118 5.70023 1.54061 3.35869 3.88219C1.01215 6.22878 0.286675 9.0657 0.131574 12.2679C-0.0235283 15.0297 0.0014882 17.7666 0.0014882 20.5234C0.0014882 23.2803 -0.0235283 26.0222 0.131574 28.779C0.286675 31.9812 1.01716 34.8231 3.35869 37.1647C5.70524 39.5113 8.5421 40.2368 11.7442 40.3919C14.506 40.547 17.2428 40.5219 19.9996 40.5219C22.7614 40.5219 25.4982 40.547 28.2551 40.3919C31.4572 40.2368 34.299 39.5063 36.6406 37.1647C38.9871 34.8181 39.7126 31.9812 39.8677 28.779C40.0278 26.0222 39.9978 23.2853 39.9978 20.5234ZM35.5949 32.3214C35.2296 33.232 34.7893 33.9125 34.0839 34.613C33.3784 35.3184 32.703 35.7587 31.7924 36.124C29.1606 37.1697 22.9115 36.9345 19.9946 36.9345C17.0777 36.9345 10.8236 37.1697 8.19187 36.129C7.28127 35.7637 6.60082 35.3234 5.90036 34.618C5.1949 33.9125 4.75461 33.237 4.38937 32.3264C3.34869 29.6896 3.58384 23.4404 3.58384 20.5234C3.58384 17.6065 3.34869 11.3522 4.38937 8.72046C4.75461 7.80985 5.1949 7.12939 5.90036 6.42891C6.60583 5.72844 7.28127 5.28314 8.19187 4.91789C10.8236 3.87719 17.0777 4.11235 19.9946 4.11235C22.9115 4.11235 29.1657 3.87719 31.7974 4.91789C32.708 5.28314 33.3884 5.72344 34.0889 6.42891C34.7943 7.13439 35.2346 7.80985 35.5999 8.72046C36.6406 11.3522 36.4054 17.6065 36.4054 20.5234C36.4054 23.4404 36.6406 29.6896 35.5949 32.3214Z" fill="#F8F8F8" fill-opacity="0.5"/>
</svg>
</div>
<div>
  <svg xmlns="http://www.w3.org/2000/svg" width="40" height="41" viewBox="0 0 40 41" fill="none">
  <path opacity="0.5" d="M35.5556 0.523438C36.7343 0.523438 37.8648 0.99169 38.6983 1.82518C39.5317 2.65868 40 3.78914 40 4.96788V36.079C40 37.2577 39.5317 38.3882 38.6983 39.2217C37.8648 40.0552 36.7343 40.5234 35.5556 40.5234H4.44444C3.2657 40.5234 2.13524 40.0552 1.30175 39.2217C0.468252 38.3882 0 37.2577 0 36.079V4.96788C0 3.78914 0.468252 2.65868 1.30175 1.82518C2.13524 0.99169 3.2657 0.523438 4.44444 0.523438H35.5556ZM34.4444 34.9679V23.1901C34.4444 21.2688 33.6812 19.4261 32.3226 18.0675C30.964 16.7089 29.1213 15.9457 27.2 15.9457C25.3111 15.9457 23.1111 17.1012 22.0444 18.8345V16.3679H15.8444V34.9679H22.0444V24.0123C22.0444 22.3012 23.4222 20.9012 25.1333 20.9012C25.9585 20.9012 26.7498 21.229 27.3332 21.8124C27.9167 22.3959 28.2444 23.1872 28.2444 24.0123V34.9679H34.4444ZM8.62222 12.879C9.61236 12.879 10.562 12.4857 11.2621 11.7855C11.9622 11.0854 12.3556 10.1358 12.3556 9.14566C12.3556 7.07899 10.6889 5.3901 8.62222 5.3901C7.62619 5.3901 6.67095 5.78578 5.96664 6.49008C5.26234 7.19438 4.86667 8.14962 4.86667 9.14566C4.86667 11.2123 6.55556 12.879 8.62222 12.879ZM11.7111 34.9679V16.3679H5.55556V34.9679H11.7111Z" fill="#F8F8F8"/>
</svg>
</div>
        </div>
        <div class="addreas">
          <div class="addreas-svg">
            <svg xmlns="http://www.w3.org/2000/svg" width="40" height="41" viewBox="0 0 40 41" fill="none">
  <g opacity="0.5">
    <path d="M20 19.69C18.895 19.69 17.8352 19.251 17.0538 18.4696C16.2724 17.6882 15.8334 16.6284 15.8334 15.5234C15.8334 14.4183 16.2724 13.3585 17.0538 12.5771C17.8352 11.7957 18.895 11.3567 20 11.3567C21.1051 11.3567 22.1649 11.7957 22.9463 12.5771C23.7277 13.3585 24.1667 14.4183 24.1667 15.5234C24.1667 16.0705 24.0589 16.6123 23.8495 17.1179C23.6401 17.6234 23.3332 18.0827 22.9463 18.4696C22.5594 18.8565 22.1001 19.1635 21.5946 19.3729C21.089 19.5822 20.5472 19.69 20 19.69ZM20 3.85669C16.9058 3.85669 13.9384 5.08585 11.7505 7.27378C9.56254 9.4617 8.33337 12.4292 8.33337 15.5234C8.33337 24.2734 20 37.19 20 37.19C20 37.19 31.6667 24.2734 31.6667 15.5234C31.6667 12.4292 30.4375 9.4617 28.2496 7.27378C26.0617 5.08585 23.0942 3.85669 20 3.85669Z" fill="#F8F8F8"/>
  </g>
</svg>
          </div>
          <div class="adreas-word">
            str. Vasile Alecsandri, 63
          </div>
        </div>
        </div>
        <div class="footer-map">
          <img src="../src/assets/map.png" alt="">
        </div>
      </footer>
  </div>
  <router-view>

  </router-view>
</template>

<style scoped>
.app {
  background-color: #011D3C;
  width: 100%;
}

.wrapper {
  max-width: 1349px;
  margin: 0 auto;
}

.slider {
  display: flex;
  flex-direction: column;
  gap: 100px;
  position: relative;
}

.slider-nav {
  position: absolute;
}

.nav {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 53px 0px 0px 0px;
  position: relative;
  width: 100%;
}

.nav::after {
  content: " ";
  position: absolute;
  width: 100%;
  height: 100%;
  top: 20px;
  background: rgba(0, 157, 5, 0.418);
  filter: blur(50px);
  z-index: -1;
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

.opacity {
  opacity: 1;
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
  position: relative;
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
  font-family: "Montserrat";
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
  display: none;
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
  gap: 80px;
  position: relative;
  align-items: center;
  padding-top: 113px;
  margin-bottom: 50px;
}




.first-slide-words {
  display: flex;
  justify-content: center;
  flex-direction: column;
  gap: 40px;
  z-index: 2;
}

.first-slide-title {
  color: var(--paragraph, #F8F8F8);
  -webkit-text-stroke-width: 1;
  -webkit-text-stroke-color: var(--paragraph, #F8F8F8);
  font-family: "Montserrat";
  font-size: 30px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
}

.first-slide-text {
  color: var(--paragraph, #F8F8F8);
  font-family: "Montserrat";
  font-size: 24px;
  font-style: normal;
  font-weight: 300;
  line-height: normal;
}


.closed-menu {
  opacity: 0;
  display: none;
}

.language-svg {
  width: 100%;
  height: 100%;
  display: flex;
  padding-top: 3px;
  justify-content: center;
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
  opacity: 0.70;
  z-index: 2;
  top: -139px;
  background: var(--background, #011D3C);
}

.logos-info {
  color: rgba(255, 255, 255, 0.50);
  font-family: "Montserrat";
  font-size: 12px;
  font-style: normal;
  font-weight: 500;
  line-height: 145%;
  display: none;
}

.logos-images {
  display: flex;
  align-items: center;
  gap: 50px;
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

.language-select-mobile {
  display: none;
}

.menu-info-logos {
  position: absolute;
  left: 375px;
  bottom: 65px;
  display: flex;
  gap: 15px;
  flex-direction: column;
}

.menu-info-one {
  display: flex;
  flex-direction: column;
  gap: 30px;
}

.nav-right {
  display: flex;
}

.menu-info-title {
  color: #FFF;
  font-family: "Montserrat";
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

.menu-info-suggestion-tel {
  display: flex;
  flex-direction: column;
  gap: 15px;
  width: max-content;
}

.naveBtnStyle {
  display: none;
}

.one-suggestion {
  color: #FFF;
  font-family: "Montserrat";
  font-size: 20px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  display: flex;
  align-items: center;
  gap: 8px;
}

.slide-title {
  color: var(--paragraph, #F8F8F8);
  text-align: center;
  font-family: "Montserrat";
  font-size: 26px;
  font-style: normal;
  font-weight: 300;
  line-height: normal;
  max-width: 1081px;
  margin: 0 auto;
  margin-top: 40px;
  margin-bottom: 70px;
}

.slide-cards {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  padding: 0 35px 0;
  grid-gap: 50px;
}

.one-card {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 35px;
  flex-shrink: 0;
  border-radius: 20px;
  background: #09356582;
  gap: 70px;
}

.card-words {
  display: flex;
  flex-direction: column;
  gap: 30px;
}

.card-title {
  color: var(--paragraph, #F8F8F8);
  text-align: center;
  font-family: "Montserrat";
  font-size: 26px;
  font-style: normal;
  font-weight: 300;
  line-height: normal;
}

.card-text {
  color: var(--paragraph, #F8F8F8);
  font-family: "Montserrat";
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
}


.about{
  cursor: pointer;
}
.percent-slide {
  display: flex;
  justify-content: space-between;
}

.percent-stats {
  display: flex;
  flex-direction: column;
  gap: 60px;
  padding-right: 20px;
}


.one-circle {
  display: flex;
  flex-direction: column;
  width: 166px;
  height: 167px;
  justify-content: center;
  align-items: center;
  position: relative;
}

.one-circle circle {
  fill: none;
  stroke-width: 20px;
  stroke: green;
  stroke-dasharray: 471;
  stroke-dashoffset: 105;
  stroke-linecap: square;
}

.one-circle svg {
  position: absolute;
  transform: scale(1) rotate(240deg);
  width: 160px;
  height: 160px;
}

.percent-title {
  color: var(--paragraph, #F8F8F8);
  text-align: center;
  font-family: "Montserrat";
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  max-width: 111px;
}

.percent-info-title {
  color: var(--paragraph, #F8F8F8);
  text-align: center;
  font-family: "Montserrat";
  font-size: 40px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  max-width: 662px;
  text-align: end;
}

.percent-nr {
  color: var(--paragraph, #F8F8F8);
  font-family: "Montserrat";
  font-size: 26px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
}

.midlle-percent,
.bottom-percent,
.top-percent {
  display: flex;
  gap: 60px;
}


.percent-info {
  display: flex;
  justify-content: center;
  align-items: end;
  flex-direction: column;
  gap: 88px;
}

.bold-green {
  color: var(--paragraph, #009D06);
  font-family: "Montserrat";
  font-size: 40px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
}

.percent-link {
  color: var(--paragraph, #F8F8F8);
  text-align: right;
  font-family: "Montserrat";
  font-size: 20px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  position: relative;
  padding: 10px;
  border-bottom: 1px solid var(--accents, #009D06);
  cursor: pointer;
}

.main-nav {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 50%;
}


.nav-btn {
  color: var(--paragraph, #F8F8F8);
  text-align: center;
  font-family: "Montserrat";
  font-size: 20px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
}

.shorthand {
  display: flex;
  gap: 7px;
  align-items: center;
  position: relative;
  cursor: pointer;
}

.shorthand-svg {
  transform: rotate(0);
  transition: all 0.2s ease-in;
}

.shorthand-menu {
  position: absolute;
  top: 30px;
  left: -115px;
  border-radius: 20px;
  background: #001730;
  z-index: 3;
  display: flex;
  overflow: hidden;
  opacity: 0 ;
  appearance: 0;
  padding: 35px 66px 34px 66px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  transition: all 0.3s linear;
}

.shorthand-one {
  color: #FFF;
  text-align: center;
  font-family: "Montserrat";
  font-size: 20px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  display: flex;
  width: 200px;
  padding: 10px;
  justify-content: center;
  align-items: center;
  gap: 10px;
  cursor: pointer;
  border-bottom: 1px solid rgba(9, 53, 101, 0.50);
}
.first-slide-svg {
  display: flex;
  width: 800px;
  height: 300px;
}

.first-slide-svg img {
  width: 100%;
  height: 100%;
  object-fit: contain;
}

.service-title {
  color: var(--paragraph, #F8F8F8);
  text-align: center;
  font-family: "Montserrat";
  font-size: 32px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  margin-bottom: 30px;
}

.service-one-slide {
  width: 710px;
  flex-shrink: 0;
  border-radius: 20px;
  background: #093565;
  mix-blend-mode: luminosity;
  padding: 40px 75px;
  display: flex;
  flex-direction: column;
  gap: 31px;
}

.service-one-slide-title {
  color: var(--paragraph, #F8F8F8);
  font-family: "Montserrat";
  font-size: 26px;
  font-style: normal;
  font-weight: 300;
  line-height: normal;
}

.service-one-slide-content {
  color: var(--paragraph, #F8F8F8);
  font-family: "Montserrat";
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
}

.service-slider {
  display: flex;
  flex-direction: column;
  width: 100%;
  overflow-y: scroll;
  scrollbar-width: none;
  cursor: grab;
}

.service-slider::-webkit-scrollbar {
  display: none;
}

.top-slides {
  display: flex;
  gap: 20px;
  margin-bottom: 20px;
  margin-left: 115px;
}

.bottom-slides {
  display: flex;
  gap: 20px;
}

.clients {
  color: var(--paragraph, #F8F8F8);
  text-align: center;
  font-family: "Montserrat";
  font-size: 32px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
}

.clients-green {
  color: var(--paragraph, #009D06);
  font-family: "Montserrat";
  font-size: 32px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
}

.clients-logos-wrapper {
  display: flex;
  width: 100%;
  overflow: hidden;
  align-items: center;
  gap: 156px;

}

.clients-slide {
  display: flex;
  justify-content: center;
  margin-top: 30px;
  overflow: hidden;
  padding: 46px 0px;
  background: var(--darker-blocks, #001730);
}

.clients-logos {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 156px;
  animation: 40s clients infinite linear;
}


@keyframes clients {
  from {
    transform: translateX(0);
  }

  to {
    transform: translateX(-100%);
  }
}

.parteners-card {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 105px;
  border-radius: 50px;
  background: #072343;
  padding: 50px 120px;
}

.parteners-card-words {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 65px;
}

.parteners-card-title {
  color: #F8F8F8;
  text-align: center;
  font-family: "Montserrat";
  font-size: 32px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
}

.parteners-subtitle {
  color: #F8F8F8;
  text-align: center;
  font-family: "Montserrat";
  font-size: 20px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
}

.parteners-green {
  color: #009D06;
  font-family: "Montserrat";
  font-size: 20px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
}

.parteners-card-slider-wrapper {
  display: flex;
  align-items: center;
  position: relative;
}

.parteners-card-one-slide {
  display: flex;
  gap: 100px;
  align-items: center;
  max-width: 1105px;
  height: 100%;
  width: 100%;
  overflow: hidden;
}

.parteners-one-slide-img {
  display: flex;
  align-items: center;
  gap: 35px;
}

.swipe-hand {
  position: absolute;
  bottom: -30px;
  left: 50%;
  transform: translateX(-50%);
  animation: 1s shakehand infinite linear;
}

@keyframes shakehand {
  from {
    transform: translateX(-50%);
  }

  to {
    transform: translateX(-100%);
  }
}

.send-message {
  max-width: 898px;
  margin: 0 auto;
}

.send-message-title {
  color: #F8F8F8;
  text-align: center;
  font-family: "Montserrat";
  font-size: 40px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  margin-bottom: 30px;
}

.send-message-subtitle {
  color: #F8F8F8;
  text-align: center;
  font-family: "Work Sans";
  font-size: 26px;
  font-style: normal;
  font-weight: 300;
  line-height: normal;
  margin-bottom: 40px;
}

.form-wrapper {
  display: flex;
  flex-direction: column;
  gap: 30px;
}

.user-info {
  display: flex;
  width: 100%;
  gap: 30px;
}

.send-message-input {
  width: 100%;
  padding: 20px 32px;
  border: 0;
  outline: none;
  border-radius: 10px;
  background: rgba(9, 53, 101, 0.50);
  mix-blend-mode: luminosity;
  color: rgb(248, 248, 248);
  font-family: "Montserrat";
  font-size: 20px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
}

.send-message-text {
  border-radius: 10px;
  background: rgba(9, 53, 101, 0.50);
  mix-blend-mode: luminosity;
  outline: none;
  border: none;
  height: 311px;
  resize: none;
  padding: 43px 17px;
  color: rgb(248, 248, 248);
  font-family: "Montserrat";
  font-size: 20px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
}

.send-message-btn {
  outline: none;
  background: transparent;
  border: 1px solid #F8F8F8;
  color: #ffffff;
  text-align: center;
  font-family: "Montserrat";
  font-size: 20px;
  font-style: normal;
  font-weight: 500;
  line-height: 145%;
  border-radius: 100px;
  padding: 15px 0;
}
.shorthand-menu-opened{
  position: absolute;
  top: 30px;
  left: -115px;
  border-radius: 20px;
  background: #001730;
  z-index: 3;
  display: flex;
  height: fit-content;
  padding: 35px 66px 34px 66px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  transition: all 0.3s linear;
}
.rotate{
  transform: rotate(180deg);
}
.banner{
  background: #006004;
}
.products{
  cursor: pointer;
}
.products-banner {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  padding: 28.5px 0;
}
.banner-title {
  color: #F8F8F8;
font-family: "Montserrat";
font-size: 26px;
font-style: normal;
font-weight: 300;
line-height: normal;
}
.banner-btn {
  display: flex;
width: 239px;
height: 54px;
justify-content: center;
align-items: center;
border-radius: 100px;
border: 2px solid #F8F8F8;
background: rgba(186, 186, 186, 0.00);
color: #F8F8F8;
font-family: "Montserrat";
font-size: 20px;
font-style: normal;
font-weight: 500;
line-height: normal;
}
.footer {
  background: #001730;
  padding: 121px 100px;
  display: flex;
  height: 310px;
  gap:61px;
  align-items: center;
}
.footer-links {
  display: flex;
  gap: 80px;
  width: 100%;
  position: relative;
}
.footer-links-one {
  display: flex;
  flex-direction: column;
  gap: 30px;
  width: 100%;
}
.footer-links-one-title {
  color: rgba(248, 248, 248, 0.50);
font-family: "Montserrat";
font-size: 20px;
font-style: normal;
font-weight: 500;
line-height: normal;
}
.footer-links-one-under {
  display: flex;
  flex-direction: column;
  gap: 15px;
}
.links {
  display: flex;
  align-items: center;
  gap: 8px;
  color: rgba(248, 248, 248, 0.50);
font-family: "Montserrat";
font-size: 20px;
font-style: normal;
font-weight: 500;
line-height: normal;
}
.social-links {
  display: flex;
  gap: 50px;
  position: absolute;
  bottom: -100px;
}
.addreas {
  display: flex;
  align-items: center;
  position: absolute;
  right: 10px;
  bottom: -100px;
}
.adreas-word {
  color: #F8F8F8;
font-family: "Montserrat";
font-size: 20px;
font-style: normal;
font-weight: 500;
line-height: normal;
}
@media screen and (max-width: 1375px) {

  .nav-right {
    padding: 0 35px 0 0;
  }

  .first-slide {
    padding-left: 35px;
    padding-right: 35px;
  }

  .main-nav {
    padding: 0 8px 0;
  }

  .nav-left {
    padding-left: 35px;
  }

  .nav-btn {
    font-size: 16px;
  }

  .menu-wrapper {
    flex-direction: column;
    align-items: start;
    padding: 36px 71px 55px 35px;
    background: var(--darker-blocks, #001730);
  }

  .menu-info {
    display: grid;
    grid-template-columns: 200px 200px;
    grid-column-gap: 330px;
    grid-row-gap: 65px;
  }

  .one-suggestion-svg {
    width: 20px;
    height: 20px;
    display: flex;
    align-items: center;
  }

  .menu-info-one {
    gap: 15px;
  }

  .menu-info-one:last-child {
    margin-bottom: 65px;
  }

  .menu-info-logos {
    left: 35px;
  }

  .menu-info-suggestion-tel {
    display: flex;
    flex-direction: row;
  }

  .one-suggestion {
    color: rgba(255, 255, 255, 0.50);
    font-family: "Montserrat";
    font-size: 15px;
    font-style: normal;
    font-weight: 500;
    line-height: 145%;
    gap: 14px;
  }

  .logos-info {
    display: block;
  }

  .menu-info-title {
    color: #FFF;
    text-align: center;
    font-family: "Montserrat";
    font-size: 18px;
    font-style: normal;
    font-weight: 500;
    line-height: 145%;
  }

  .menu-info-suggestion {
    display: flex;
  }

  .company-logo {
    width: 189px;
    height: 45px;
  }

  .contact-phone {
    font-size: 15px;
  }

  .contact-title {
    font-size: 15px;
  }

  .slide-cards {
    grid-template-columns: repeat(1, 500px);
    position: relative;
    justify-content: center;
  }

  .card-text {
    text-align: center;
  }

  .slide-title {
    padding: 0 35px 0;
  }

  .percent-slide {
    padding: 0 35px 0;
  }

  .percent-info-title {
    font-size: 25px;
    max-width: 368px;
  }

  .one-card {
    max-width: 500px;
  }

  .midlle-percent,
  .bottom-percent,
  .top-percent {
    display: flex;
    gap: 50px;
  }

  .bold-green {
    font-size: 25px;
  }

  .one-circle svg {
    transform: scale(0.8) rotate(240deg);
  }

  .percent-title {
    color: #FFF;
    text-align: center;
    font-family: "Montserrat";
    font-size: 13px;
    font-style: normal;
    font-weight: 400;
    line-height: 145%;
    max-width: 95px;
  }

  .percent-title-left {
    display: flex;
    color: #F8F8F8;
    font-family: "Work Sans";
    font-size: 40px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
  }

  .percent-nr {
    color: #FFF;
    font-family: "Montserrat";
    font-size: 24px;
    font-style: normal;
    font-weight: 500;
    line-height: 145%;
  }
  .parteners-card{
    padding: 57px 15px;
  }
  .parteners-one-slide-img{
    display:grid;
    grid-template-columns:100px 100px;
    grid-column-gap: 70px;
    grid-row-gap: 50px;
    width: 100%;
  }
}

@media screen and (max-width: 770px) {
  .nav {
    padding-top: 72px;
  }


  .language {
    border-radius: 20px;
    background: var(--darker-blocks, #001730);
    border: none;
    width: 118px;
    height: 36px;
    flex-shrink: 0;
    margin-top: 7px;
    opacity: 1;
  }

  .ru-language {
    color: var(--paragraph, #F8F8F8);
    text-align: center;
    font-family: Inter;
    font-size: 15px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    border: none;
  }

  .nav-right {
    gap: 20px;
  }

  .main-nav {
    display: none;
  }

  .ro-language {
    color: var(--paragraph, #F8F8F8);
    text-align: center;
    font-family: Inter;
    font-size: 15px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    position: relative;
  }

  .ro-language::after {
    content: '';
    position: absolute;
    width: 0.3px;
    height: 23px;
    background: #F8F8F8;
    right: 0;
  }

  .slide-cards {
    grid-template-columns: repeat(1, 300px);
  }

  .one-card {
    gap: 30px;
  }

  .menu-wrapper {
    flex-direction: column;
    align-items: start;
    padding: 36px 71px 55px 35px;
    background: var(--darker-blocks, #001730);
    gap: 65px;
  }

  .logos-info {
    display: block;
  }

  .menu-info {
    display: grid;
    grid-template-columns: 100px 100px;
    grid-column-gap: 119px;
    grid-row-gap: 65px;
  }

  .menu-info-one {
    gap: 15px;
  }

  .menu-info-one:last-child {
    margin-bottom: 65px;
  }

  .menu-info-logos {
    left: 35px;
  }

  .menu-info-suggestion-tel {
    display: flex;
    flex-direction: row;
  }

  .one-suggestion {
    color: rgba(255, 255, 255, 0.50);
    font-family: "Montserrat";
    font-size: 12px;
    font-style: normal;
    font-weight: 500;
    line-height: 145%;
    gap: 14px;
  }

  .menu-info-title {
    color: #FFF;
    text-align: center;
    font-family: "Montserrat";
    font-size: 12px;
    font-style: normal;
    font-weight: 500;
    line-height: 145%;
  }

  .company-logo {
    width: 189px;
    height: 45px;
  }

  .language-select-mobile {
    display: block;
  }

  .line {
    background: #009D06;
    width: 40px;
  }

  .opacity {
    opacity: 0;
    pointer-events: none
  }



  .first-slide {
    margin: 0 auto;
    padding: 80px 35px 0;
    gap: 70px;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .first-slide-svg {
    width: 200px;
    height: 200px;
  }

  .first-slide-words {
    align-items: center;
  }

  .langauge-settings {
    position: absolute;
    top: 77px;
    right: 15%;
    z-index: 2;
  }

  .contact-phone {
    color: #FFF;
    font-family: "Montserrat";
    font-size: 10px;
    font-style: normal;
    font-weight: 400;
    line-height: 145%;
  }

  .nav-hamburger {
    gap: 9px;
    display: flex;
  }

  .contact-title {
    color: var(--accents, #009D06);
    text-align: center;
    -webkit-text-stroke-width: 0.20000000298023224;
    -webkit-text-stroke-color: var(--accents, #009D06);
    font-family: "Montserrat";
    font-size: 10px;
    font-style: normal;
    font-weight: 400;
    line-height: 145%;
  }

  .first-slide-title {
    color: #FFF;
    font-family: "Montserrat";
    font-size: 24px;
    font-style: normal;
    font-weight: 600;
    line-height: 145%;
    text-align: center;
  }

  .first-slide-text {
    color: #FFF;
    font-family: "Montserrat";
    font-size: 16px;
    font-style: normal;
    font-weight: 500;
    line-height: 145%;
    text-align: center;
  }


  .percent-slide {
    flex-direction: column-reverse;
    gap: 70px;
  }

  .percent-info {
    gap: 20px;
  }

  .percent-info-title {
    color: #FFF;
    text-align: right;
    font-family: "Montserrat";
    font-size: 20px;
    font-style: normal;
    font-weight: 500;
    line-height: 145%;
  }

  .bold-green {
    color: #009D06;
    font-family: "Montserrat";
    font-size: 20px;
    font-style: normal;
    font-weight: 500;
    line-height: 145%;
  }

  .percent-title {
    color: #FFF;
    text-align: center;
    font-family: "Montserrat";
    font-size: 10px;
    font-style: normal;
    font-weight: 400;
    line-height: 145%;
  }

  .percent-nr {
    color: #FFF;
    font-family: "Montserrat";
    font-size: 20px;
    font-style: normal;
    font-weight: 500;
    line-height: 145%;
  }

  .one-circle svg {
    transform: scale(0.65) rotate(240deg);
  }

  .percent-stats {
    align-items: center;
    gap: 50px;
    padding-right: 0;
  }

  .one-circle {
    width: 100px;
    height: 100px;
  }
}
</style>
