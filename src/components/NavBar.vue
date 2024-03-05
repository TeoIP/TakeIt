<script setup>
import { ref, onMounted ,onBeforeUnmount } from 'vue';
import router from '../router';

const shorthandMenu = ref(false)
const showLanguage = ref(true)
const menu = ref(false)
const language = ref(true)
const isFixed = ref(false);

const props = defineProps(['links']);
const emit = defineEmits(['toggleLanguage'])

const handleScroll = () => {
  isFixed.value = window.scrollY > 100;
};
function languageRo() {
  if (language.value == false) {
    language.value = true
    emit('toggleLanguage');
  } else {
    return;
  }
}
function languageRu() {
  if (language.value == true) {
    language.value = false;
    emit('toggleLanguage');
  } else {
    return;
  }
}
function shorthand() {
  shorthandMenu.value = !shorthandMenu.value
}
function openMenu() {
  menu.value = !menu.value
}
function openLanguage() {
  showLanguage.value = !showLanguage.value
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll);
});

onBeforeUnmount(() => {
  window.removeEventListener('scroll', handleScroll);
});
</script>
<template>
<div :class="{ nav:!isFixed, 'navbar-fixed': isFixed }">
            <div class="nav-left">
              <a href="tel:+373 (79) 33 99 33" class="v">
                <div class="contact-svg">
                  <svg xmlns="http://www.w3.org/2000/svg" width="28" height="30" viewBox="0 0 28 30" fill="none">
                    <path
                      d="M28 20.265L19.8015 19.2729L15.8812 23.3714C11.4649 21.0233 7.87524 17.2705 5.62917 12.6534L9.56507 8.53862L8.6161 0H0.0442402C-0.85806 16.5568 12.1631 30.1698 28 29.2265V20.265Z"
                      fill="#009D06" />
                  </svg>
                </div>
                <div class="contact-phone">+373 (79) 33 99 33</div>
              </a>
            </div>
            <div class="main-nav">
              <div class="products">
                <span class="nav-btn" v-if="language">Catalog</span>
                <span class="nav-btn" v-if="!language">Каталог</span>
              </div>
              <div class="about">
                <router-link to="/About" class="nav-btn" v-if="language">Despre Noi</router-link>
                <router-link to="/About" class="nav-btn" v-if="!language">О нас</router-link>
              </div>
              <div class="shorthand">
                <div class="shorthand-opening" @click="shorthand()">
                <span class="nav-btn" v-if="language">Prescurtari</span>
                <span class="nav-btn" v-if="!language">Ярлыки</span>
                <div class="shorthand-svg" :class="{ rotate: shorthandMenu }">
                  <svg xmlns="http://www.w3.org/2000/svg" width="25" height="10" viewBox="0 0 25 10" fill="none">
                    <path
                      d="M1.09103 1.01616C0.90375 1.13548 0.755105 1.27745 0.653666 1.43387C0.552227 1.59028 0.5 1.75806 0.5 1.92751C0.5 2.09695 0.552227 2.26473 0.653666 2.42114C0.755105 2.57756 0.90375 2.71953 1.09103 2.83885L11.0814 9.25679C11.2671 9.3771 11.4881 9.47259 11.7316 9.53776C11.9751 9.60292 12.2362 9.63647 12.5 9.63647C12.7638 9.63647 13.0249 9.60292 13.2684 9.53776C13.5119 9.47259 13.7329 9.3771 13.9186 9.25679L23.909 2.83885C24.0963 2.71953 24.2449 2.57756 24.3463 2.42114C24.4478 2.26473 24.5 2.09695 24.5 1.92751C24.5 1.75806 24.4478 1.59028 24.3463 1.43387C24.2449 1.27745 24.0963 1.13548 23.909 1.01616C23.7232 0.895849 23.5022 0.800358 23.2588 0.735192C23.0153 0.670026 22.7541 0.636475 22.4903 0.636475C22.2266 0.636475 21.9654 0.670026 21.7219 0.735192C21.4785 0.800358 21.2575 0.895849 21.0717 1.01616L12.5 6.53559L3.92828 1.01616C3.74254 0.895849 3.52155 0.800358 3.27807 0.735192C3.03458 0.670026 2.77342 0.636475 2.50965 0.636475C2.24589 0.636475 1.98473 0.670026 1.74124 0.735192C1.49776 0.800358 1.27677 0.895849 1.09103 1.01616Z"
                      fill="#F8F8F8" />
                  </svg>
                </div>
              </div>
                <div :class="{ 'shorthand-menu': !shorthandMenu, 'shorthand-menu-opened': shorthandMenu }">
                  <router-link to="/" class="shorthand-one" v-if="language">Acasă</router-link>
                  <router-link to="/" class="shorthand-one" v-if="!language">Домой</router-link>
                  <a v-for="link in links" :key="link.id" :href="link.href" class="shorthand-one" v-if="language">
                     {{ link.label }}
                  </a>
                  <a v-for="link in links" :key="link.id" :href="link.href" class="shorthand-one" v-if="!language">
                     {{ link.rus }}
                  </a>
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
<div :class="{ 'closed-menu': !menu, 'opened-menu': menu && !isFixed , 'fixed':isFixed && menu }">
            <div class="menu-wrapper">
              <div class="company-logo"><img src="../assets/logo.png" alt=""></div>
              <div class="menu-info">
                <div class="menu-info-one">
                  <div class="menu-info-title" v-if="language">Prescurtări</div>
                  <div class="menu-info-title" v-if="!language">Сокращения</div>
                  <div class="menu-info-suggestion">
                    <a v-for="link in links" :key="link.id" :href="link.href" class="one-suggestion" v-if="language">
                     {{ link.label }}
                  </a>
                  <a v-for="link in links" :key="link.id" :href="link.href" class="one-suggestion" v-if="!language">
                     {{ link.rus }}
                  </a>
                  </div>
                </div>
                <div class="menu-info-one">
                  <div class="menu-info-title" v-if="language">Pagini Principale</div>
                  <div class="menu-info-title" v-if="!language">Главные страницы</div>
                  <div class="menu-info-suggestion">
                    <router-link to="/" class="one-suggestion" v-if="language">Acasă</router-link>
                    <router-link to="/" class="one-suggestion" v-if="!language">Домой</router-link>
                    <router-link to="/About" class="one-suggestion" v-if="language">Despre Noi</router-link>
                    <router-link to="/About" class="one-suggestion" v-if="!language">О нас</router-link>
                    <a href="" class="one-suggestion" v-if="language">Catalog</a>
                    <a href="" class="one-suggestion" v-if="!language">Каталог</a>
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
</template>

<style>

</style>