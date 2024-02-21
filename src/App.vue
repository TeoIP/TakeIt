<script setup>
import { ref } from 'vue'
const language = ref(true)
const menu = ref(false)
const showLanguage = ref(true)

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
</script>
<template>
  <div class="app">
    <div class="app-wrapper">
      <div class="slider">
        <div class="slider-nav"></div>
        <div class="one-slide">
          <div class="nav wrapper">
            <div class="nav-left">
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
          <div class="first-slide wrapper">
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
          <div class="back-shape">
            <svg xmlns="http://www.w3.org/2000/svg" width="330" height="600" viewBox="0 0 330 600" fill="none">
              <g filter="url(#filter0_f_139_3249)">
                <path
                  d="M21.8446 376.417C-59.2003 426.654 -219.955 388.789 -248.231 343.173C-276.506 297.558 -150.276 200.345 -69.2307 150.108C11.8142 99.871 294.389 80.6603 322.665 126.276C350.941 171.892 102.889 326.18 21.8446 376.417Z"
                  fill="#009D06" fill-opacity="0.15" />
              </g>
              <defs>
                <filter id="filter0_f_139_3249" x="-352.28" y="0.480347" width="777.179" height="499.785"
                  filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                  <feFlood flood-opacity="0" result="BackgroundImageFix" />
                  <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                  <feGaussianBlur stdDeviation="50" result="effect1_foregroundBlur_139_3249" />
                </filter>
              </defs>
            </svg>
          </div>
          <div class="slide-title" v-if="language">Suntem mândri să oferim un parteneriat bazat pe excelență și încredere,
            construit pe fundamente solide și dedicat atingerii obiectivelor dumneavoastră.</div>
          <div class="slide-title" v-if="!language">Мы с гордостью предлагаем партнерство, основанное на совершенстве и
            доверии, построенное на прочной основе и ориентированное на достижение ваших целей.</div>
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
                    <circle cx="80" cy="80" r="70" stroke-linecap="round" />
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
                    <circle cx="80" cy="80" r="70" stroke-linecap="round" />
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
                    <circle cx="80" cy="80" r="70" stroke-linecap="round" />
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
                    <circle cx="80" cy="80" r="70" stroke-linecap="round" />
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
                    <circle cx="80" cy="80" r="70" stroke-linecap="round" />
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
                    <circle cx="80" cy="80" r="70" stroke-linecap="round" />
                  </svg>
                </div>
              </div>
            </div>
            <div class="percent-info">
              <div class="percent-info-title" v-if="language">
                INOVĂM CU <span class="bold-green">EFICIENȚĂ</span>, TRANSFORMĂM PROVOCĂRI ÎN <span
                  class="bold-green">OPORTUNITĂȚI</span>, ADUCÂND SOLUȚII DE IMPACT.
              </div>
              <div class="percent-title" v-if="!language">
                МЫ <span class="bold-green">ЭФФЕКТИВНО</span>ВНЕДРЯЕМ ИННОВАЦИИ, ПРЕВРАЩАЕМ ПРОБЛЕМЫ В<span
                  class="bold-green">ВОЗМОЖНОСТИ</span>, ПРЕДЛАГАЯ ЭФФЕКТИВНЫЕ РЕШЕНИЯ.
              </div>
              <div class="percent-link" v-if="language">Află mai multe despre noi</div>
              <div class="percent-link" v-if="!language">Узнайте больше о нас</div>
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

.nav-right {
  display: flex;
  gap: 100px;
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
  padding-top: 113px;
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
  font-family: "Work Sans";
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

.menu-info-suggestion-tel {
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

.slide-title {
  color: var(--paragraph, #F8F8F8);
  text-align: center;
  font-family: "Work Sans";
  font-size: 26px;
  font-style: normal;
  font-weight: 300;
  line-height: normal;
  max-width: 1081px;
  margin: 0 auto;
  margin-top: 54px;
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
  font-family: "Work Sans";
  font-size: 26px;
  font-style: normal;
  font-weight: 300;
  line-height: normal;
}

.card-text {
  color: var(--paragraph, #F8F8F8);
  font-family: "Work Sans";
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
}

.back-shape {
  display: none;
}

.percent-slide {
  display: flex;
  justify-content: space-between;
}

.percent-stats {
  display: flex;
  flex-direction: column;
  gap: 60px;
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
  font-family: "Work Sans";
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  max-width: 77px;
}

.percent-info-title {
  color: var(--paragraph, #F8F8F8);
  text-align: center;
  font-family: "Work Sans";
  font-size: 40px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  max-width: 662px;
  text-align: end;
}

.percent-nr {
  color: var(--paragraph, #F8F8F8);
  font-family: "Work Sans";
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
  font-family: "Work Sans";
  font-size: 40px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
}

.percent-link {
  color: var(--paragraph, #F8F8F8);
  text-align: right;
  font-family: "Work Sans";
  font-size: 20px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  position: relative;
  padding: 10px;
  border-bottom: 1px solid var(--accents, #009D06);
  cursor: pointer;
}


@media screen and (max-width: 1375px) {

  .nav-right {
    padding: 0 35px 0 0;
  }

  .first-slide {
    padding-left: 35px;
    padding-right: 35px;
  }

  .nav-left {
    padding-left: 35px;
  }

  .back-image {
    width: 475px;
    height: 410px;
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
    font-family: "Work Sans";
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
    font-family: "Work Sans";
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
    grid-template-columns: repeat(1, 1fr);
    position: relative;
  }

  .card-text {
    text-align: center;
  }

  .slide-title {
    padding: 0 35px 0;
  }

  .back-shape {
    display: flex;
    position: absolute;
  }

  .percent-slide {
    padding: 0 35px 0;
  }

  .percent-info-title {
    font-size: 25px;
    max-width: 368px;
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
    font-family: "Work Sans";
    font-size: 13px;
    font-style: normal;
    font-weight: 400;
    line-height: 145%;
  }

  .percent-nr {
    color: #FFF;
    font-family: "Work Sans";
    font-size: 24px;
    font-style: normal;
    font-weight: 500;
    line-height: 145%;
  }
}

@media screen and (max-width: 770px) {
  .nav {
    padding-top: 72px;
  }

  .nav-contact {
    position: absolute;
    left: 50px;
  }

  .nav-left {
    position: absolute;
    display: flex;
    flex-direction: column;
    align-items: center;
    right: 100px;
    top: 73px;
    width: 20px;
    z-index: 2;
  }

  .nav-right {
    justify-content: end;
    width: 100%;
    padding-right: 35px;
    align-items: center;
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
    font-family: "Work Sans";
    font-size: 12px;
    font-style: normal;
    font-weight: 500;
    line-height: 145%;
    gap: 14px;
  }

  .menu-info-title {
    color: #FFF;
    text-align: center;
    font-family: "Work Sans";
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

  .back-image {
    width: 352px;
    height: 345px;
    flex-shrink: 0;
    left: 50%;
    transform: translateX(-50%);
  }

  .first-slide {
    align-items: start;
    margin: 0 auto;
    padding: 80px 35px 0;
    gap: 70px;
  }

  .contact-phone {
    color: #FFF;
    font-family: "Work Sans";
    font-size: 10px;
    font-style: normal;
    font-weight: 400;
    line-height: 145%;
  }

  .nav-hamburger {
    gap: 9px;
  }

  .contact-title {
    color: var(--accents, #009D06);
    text-align: center;
    -webkit-text-stroke-width: 0.20000000298023224;
    -webkit-text-stroke-color: var(--accents, #009D06);
    font-family: "Work Sans";
    font-size: 10px;
    font-style: normal;
    font-weight: 400;
    line-height: 145%;
  }

  .first-slide-title {
    color: #FFF;
    font-family: "Work Sans";
    font-size: 24px;
    font-style: normal;
    font-weight: 600;
    line-height: 145%;
    text-align: start;
  }

  .first-slide-text {
    color: #FFF;
    font-family: "Work Sans";
    font-size: 16px;
    font-style: normal;
    font-weight: 500;
    line-height: 145%;
    text-align: start;
  }

  .first-slide-btn {
    font-size: 12px;
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
    font-family: "Work Sans";
    font-size: 20px;
    font-style: normal;
    font-weight: 500;
    line-height: 145%;
  }

  .bold-green {
    color: #009D06;
    font-family: "Work Sans";
    font-size: 20px;
    font-style: normal;
    font-weight: 500;
    line-height: 145%;
  }

  .percent-title {
    color: #FFF;
    text-align: center;
    font-family: "Work Sans";
    font-size: 10px;
    font-style: normal;
    font-weight: 400;
    line-height: 145%;
  }

  .percent-nr {
    color: #FFF;
    font-family: "Work Sans";
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
  }

  .one-circle {
    width: 100px;
    height: 100px;
  }
}
</style>
