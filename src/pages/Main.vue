<script setup>
import {ref, watch, onMounted} from 'vue';
import {Swiper, SwiperSlide} from 'swiper/vue';
import {register} from 'swiper/element/bundle';
import 'bootstrap/dist/css/bootstrap.css'
import NavBar from "../components/NavBar.vue";
import Footer from '../components/Footer.vue'
import Contact from "../components/Contact.vue"


register();

import 'swiper/css';
import 'swiper/css/pagination';
import '../style.css';

onMounted(() => {
  window.scrollTo(0, 0);
});

const language = ref(true)

function toggleLanguage() {
  language.value = !language.value
}

watch(language, (newVal, oldVal) => {
  console.log('Valoarea limbii a fost actualizată în părinte:', newVal);
});
const romanianLinks = [
  {id: 'section1', label: 'De ce Take IT?', rus: 'Почему Take IT?', href: '#why'},
  {id: 'section2', label: 'Smart Facts', rus: 'Smart Facts', href: '#smart-facts'},
  {id: 'section3', label: 'Servicii', rus: 'Услуги', href: '#services'},
  {id: 'section4', label: 'Clienți', rus: 'Клиенты', href: '#clients'},
  {id: 'section5', label: 'Parteneri', rus: 'Партнеры', href: '#parteners'},
  {id: 'section6', label: 'Ia Legătura', rus: 'Связаться', href: '#contact'},
];


</script>
<template>
  <div class="app-wrapper">
    <div class="slider">
      <div class="one-slide">
        <Nav-bar @toggleLanguage="toggleLanguage" :links="romanianLinks"></Nav-bar>
        <div class="first-slide wrapper" id="why">
          <div class="first-slide-svg"><img src="/src/assets/background.svg" alt=""></div>
          <div class="first-slide-words">
            <div class="first-slide-title" v-if="language">E timpul să-ți modernizezi afacerea!</div>
            <div class="first-slide-title" v-if="!language">Пришло время модернизировать ваш бизнес!</div>
            <div class="first-slide-text" v-if="language">Automatizare proceselor operaționale, soluții complexe pentru
              magazine, centre comerciale, restaurante, bănci, farmacii, centre auto și alte unități comerciale
            </div>
            <div class="first-slide-text" v-if="!language">Автоматизация операционных процессов, комплексные решения для
              магазинов, торговых центров, ресторанов, банков, аптек, автоцентров и других коммерческих объектов
            </div>
          </div>
        </div>
      </div>
      <div class="one-slide wrapper" id="smart-facts">
        <div class="slide-cards wrapper">
          <div class="one-card">
            <div class="card-logo">
              <svg xmlns="http://www.w3.org/2000/svg" width="91" height="84" viewBox="0 0 91 84" fill="none">
                <g clip-path="url(#clip0_178_16)">
                  <path
                      d="M72.8268 21.0378L56.7773 54.0972H88.8763L72.8268 21.0378ZM19.3283 21.0378L3.2788 54.0972H35.3779L19.3283 21.0378ZM53.6426 12.0216C53.2525 13.2738 52.6186 14.393 51.7409 15.3792C50.8632 16.3653 49.867 17.0775 48.7525 17.5158V78.1404H74.1643C74.5543 78.1404 74.8748 78.2812 75.1255 78.563C75.3763 78.8447 75.5017 79.2048 75.5017 79.6431V82.6484C75.5017 83.0867 75.3763 83.4468 75.1255 83.7285C74.8748 84.0103 74.5543 84.1511 74.1643 84.1511H17.9909C17.6008 84.1511 17.2804 84.0103 17.0296 83.7285C16.7788 83.4468 16.6534 83.0867 16.6534 82.6484V79.6431C16.6534 79.2048 16.7788 78.8447 17.0296 78.563C17.2804 78.2812 17.6008 78.1404 17.9909 78.1404H43.4026V17.5158C42.2881 17.0775 41.292 16.3653 40.4143 15.3792C39.5365 14.393 38.9026 13.2738 38.5126 12.0216H17.9909C17.6008 12.0216 17.2804 11.8807 17.0296 11.599C16.7788 11.3172 16.6534 10.9572 16.6534 10.5189V7.51349C16.6534 7.07521 16.7788 6.71519 17.0296 6.43343C17.2804 6.15167 17.6008 6.0108 17.9909 6.0108H38.5126C39.0977 4.22634 40.0729 2.77843 41.4382 1.66706C42.8036 0.555686 44.35 0 46.0776 0C47.8051 0 49.3516 0.555686 50.7169 1.66706C52.0822 2.77843 53.0574 4.22634 53.6426 6.0108H74.1643C74.5543 6.0108 74.8748 6.15167 75.1255 6.43343C75.3763 6.71519 75.5017 7.07521 75.5017 7.51349V10.5189C75.5017 10.9572 75.3763 11.3172 75.1255 11.599C74.8748 11.8807 74.5543 12.0216 74.1643 12.0216H53.6426ZM46.0776 12.7729C46.9971 12.7729 47.7842 12.4051 48.439 11.6694C49.0938 10.9337 49.4212 10.0493 49.4212 9.01619C49.4212 7.98309 49.0938 7.09869 48.439 6.36299C47.7842 5.62729 46.9971 5.25945 46.0776 5.25945C45.1581 5.25945 44.3709 5.62729 43.7161 6.36299C43.0613 7.09869 42.7339 7.98309 42.7339 9.01619C42.7339 10.0493 43.0613 10.9337 43.7161 11.6694C44.3709 12.4051 45.1581 12.7729 46.0776 12.7729ZM91.5512 54.0972C91.5512 56.3825 90.9034 58.4331 89.6077 60.2488C88.3121 62.0646 86.6751 63.489 84.6968 64.5221C82.7184 65.5552 80.7053 66.3301 78.6573 66.8466C76.6093 67.3632 74.6658 67.6215 72.8268 67.6215C70.9878 67.6215 69.0443 67.3632 66.9963 66.8466C64.9483 66.3301 62.9351 65.5552 60.9568 64.5221C58.9785 63.489 57.3415 62.0646 56.0458 60.2488C54.7502 58.4331 54.1023 56.3825 54.1023 54.0972C54.1023 53.7528 54.5899 52.4849 55.5652 50.2935C56.5404 48.102 57.8221 45.3706 59.4104 42.0991C60.9986 38.8276 62.4893 35.7674 63.8825 32.9185C65.2757 30.0696 66.6968 27.1895 68.1457 24.278C69.5946 21.3665 70.3748 19.8012 70.4862 19.582C70.9878 18.5489 71.768 18.0324 72.8268 18.0324C73.8856 18.0324 74.6658 18.5489 75.1673 19.582C75.2788 19.8012 76.059 21.3665 77.5079 24.278C78.9568 27.1895 80.3779 30.0696 81.7711 32.9185C83.1642 35.7674 84.655 38.8276 86.2432 42.0991C87.8314 45.3706 89.1132 48.102 90.0884 50.2935C91.0636 52.4849 91.5512 53.7528 91.5512 54.0972ZM38.0528 54.0972C38.0528 56.3825 37.405 58.4331 36.1093 60.2488C34.8136 62.0646 33.1766 63.489 31.1983 64.5221C29.22 65.5552 27.2068 66.3301 25.1588 66.8466C23.1108 67.3632 21.1673 67.6215 19.3283 67.6215C17.4893 67.6215 15.5458 67.3632 13.4978 66.8466C11.4499 66.3301 9.4367 65.5552 7.45837 64.5221C5.48004 63.489 3.84305 62.0646 2.54738 60.2488C1.25171 58.4331 0.603882 56.3825 0.603882 54.0972C0.603882 53.7528 1.0915 52.4849 2.06673 50.2935C3.04196 48.102 4.3237 45.3706 5.91193 42.0991C7.50017 38.8276 8.99088 35.7674 10.3841 32.9185C11.7773 30.0696 13.1983 27.1895 14.6472 24.278C16.0961 21.3665 16.8763 19.8012 16.9878 19.582C17.4893 18.5489 18.2695 18.0324 19.3283 18.0324C20.3872 18.0324 21.1673 18.5489 21.6689 19.582C21.7804 19.8012 22.5605 21.3665 24.0095 24.278C25.4584 27.1895 26.8794 30.0696 28.2726 32.9185C29.6658 35.7674 31.1565 38.8276 32.7447 42.0991C34.333 45.3706 35.6147 48.102 36.5899 50.2935C37.5652 52.4849 38.0528 53.7528 38.0528 54.0972Z"
                      fill="white"/>
                </g>
                <defs>
                  <clipPath id="clip0_178_16">
                    <rect width="90" height="83.271" fill="white" transform="translate(0.601562)"/>
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
                personalizate pentru a satisface nevoile unice ale afacerii tale.
              </div>
              <div class="card-text" v-if="!language">Мы стремимся предоставлять услуги высочайшего качества, всегда
                превосходя ожидания наших клиентов. Наша талантливая и опытная команда готова предоставить
                индивидуальные решения для удовлетворения уникальных потребностей вашего бизнеса.
              </div>
            </div>
          </div>
          <div class="one-card">
            <div class="card-logo">
              <svg xmlns="http://www.w3.org/2000/svg" width="91" height="90" viewBox="0 0 91 90" fill="none">
                <path
                    d="M45.5 5.56641C43.2622 5.56641 41.1161 6.44609 39.5338 8.01195C37.9515 9.57781 37.0625 11.7016 37.0625 13.916C37.0625 16.1305 37.9515 18.2542 39.5338 19.8201C41.1161 21.3859 43.2622 22.2656 45.5 22.2656C47.7378 22.2656 49.8839 21.3859 51.4662 19.8201C53.0486 18.2542 53.9375 16.1305 53.9375 13.916C53.9375 11.7016 53.0486 9.57781 51.4662 8.01195C49.8839 6.44609 47.7378 5.56641 45.5 5.56641ZM31.4375 13.916C31.4375 10.2253 32.9191 6.68567 35.5563 4.07591C38.1935 1.46615 41.7704 0 45.5 0C49.2296 0 52.8065 1.46615 55.4437 4.07591C58.0809 6.68567 59.5625 10.2253 59.5625 13.916C59.5625 17.6068 58.0809 21.1464 55.4437 23.7561C52.8065 26.3659 49.2296 27.832 45.5 27.832C41.7704 27.832 38.1935 26.3659 35.5563 23.7561C32.9191 21.1464 31.4375 17.6068 31.4375 13.916ZM76.4375 11.1328C74.9457 11.1328 73.5149 11.7193 72.46 12.7632C71.4051 13.8071 70.8125 15.2229 70.8125 16.6992C70.8125 18.1755 71.4051 19.5914 72.46 20.6353C73.5149 21.6792 74.9457 22.2656 76.4375 22.2656C77.9293 22.2656 79.3601 21.6792 80.415 20.6353C81.4699 19.5914 82.0625 18.1755 82.0625 16.6992C82.0625 15.2229 81.4699 13.8071 80.415 12.7632C79.3601 11.7193 77.9293 11.1328 76.4375 11.1328ZM65.1875 16.6992C65.1875 13.7466 66.3728 10.9149 68.4826 8.82713C70.5923 6.73932 73.4538 5.56641 76.4375 5.56641C79.4212 5.56641 82.2827 6.73932 84.3925 8.82713C86.5022 10.9149 87.6875 13.7466 87.6875 16.6992C87.6875 19.6518 86.5022 22.4835 84.3925 24.5713C82.2827 26.6591 79.4212 27.832 76.4375 27.832C73.4538 27.832 70.5923 26.6591 68.4826 24.5713C66.3728 22.4835 65.1875 19.6518 65.1875 16.6992ZM8.9375 16.6992C8.9375 15.2229 9.53013 13.8071 10.585 12.7632C11.6399 11.7193 13.0707 11.1328 14.5625 11.1328C16.0543 11.1328 17.4851 11.7193 18.54 12.7632C19.5949 13.8071 20.1875 15.2229 20.1875 16.6992C20.1875 18.1755 19.5949 19.5914 18.54 20.6353C17.4851 21.6792 16.0543 22.2656 14.5625 22.2656C13.0707 22.2656 11.6399 21.6792 10.585 20.6353C9.53013 19.5914 8.9375 18.1755 8.9375 16.6992ZM14.5625 5.56641C11.5788 5.56641 8.71733 6.73932 6.60755 8.82713C4.49776 10.9149 3.3125 13.7466 3.3125 16.6992C3.3125 19.6518 4.49776 22.4835 6.60755 24.5713C8.71733 26.6591 11.5788 27.832 14.5625 27.832C17.5462 27.832 20.4077 26.6591 22.5175 24.5713C24.6272 22.4835 25.8125 19.6518 25.8125 16.6992C25.8125 13.7466 24.6272 10.9149 22.5175 8.82713C20.4077 6.73932 17.5462 5.56641 14.5625 5.56641ZM17.9375 72.3521C16.4144 72.4276 14.8918 72.1958 13.462 71.671C12.0323 71.1461 10.7253 70.339 9.62045 69.2988C8.51564 68.2586 7.63606 67.007 7.03517 65.62C6.43428 64.233 6.12462 62.7396 6.125 61.2305V40.3564C6.125 39.9874 6.27316 39.6334 6.53688 39.3724C6.8006 39.1115 7.15829 38.9648 7.53125 38.9648H17.4538C17.6788 36.922 18.41 35.0238 19.5069 33.3984H7.53125C3.65 33.3984 0.5 36.5156 0.5 40.3564V61.2305C0.499738 63.6136 1.0149 65.9691 2.01088 68.1388C3.00686 70.3085 4.46059 72.2422 6.27437 73.8098C8.08816 75.3774 10.22 76.5427 12.5266 77.2274C14.8333 77.9121 17.2613 78.1003 19.6475 77.7794C18.8904 76.0333 18.3174 74.2146 17.9375 72.3521ZM71.3525 77.7794C73.7387 78.1003 76.1667 77.9121 78.4734 77.2274C80.78 76.5427 82.9118 75.3774 84.7256 73.8098C86.5394 72.2422 87.9931 70.3085 88.9891 68.1388C89.9851 65.9691 90.5003 63.6136 90.5 61.2305V40.3564C90.5 36.5156 87.35 33.3984 83.4688 33.3984H71.4931C72.5956 35.0238 73.3213 36.922 73.5463 38.9648H83.4688C83.8417 38.9648 84.1994 39.1115 84.4631 39.3724C84.7268 39.6334 84.875 39.9874 84.875 40.3564V61.2305C84.8754 62.7396 84.5657 64.233 83.9648 65.62C83.3639 67.007 82.4844 68.2586 81.3795 69.2988C80.2747 70.339 78.9678 71.1461 77.538 71.671C76.1082 72.1958 74.5856 72.4276 73.0625 72.3521C72.6825 74.2146 72.1095 76.0333 71.3525 77.7794ZM30.0312 33.3984C26.15 33.3984 23 36.5156 23 40.3564V66.7969C23 72.7021 25.3705 78.3654 29.5901 82.541C33.8097 86.7167 39.5326 89.0625 45.5 89.0625C51.4674 89.0625 57.1903 86.7167 61.4099 82.541C65.6295 78.3654 68 72.7021 68 66.7969V40.3564C68 36.5156 64.85 33.3984 60.9688 33.3984H30.0312ZM28.625 40.3564C28.625 39.9874 28.7732 39.6334 29.0369 39.3724C29.3006 39.1115 29.6583 38.9648 30.0312 38.9648H60.9688C61.3417 38.9648 61.6994 39.1115 61.9631 39.3724C62.2268 39.6334 62.375 39.9874 62.375 40.3564V66.7969C62.375 71.2258 60.5971 75.4733 57.4324 78.605C54.2678 81.7367 49.9755 83.4961 45.5 83.4961C41.0245 83.4961 36.7323 81.7367 33.5676 78.605C30.4029 75.4733 28.625 71.2258 28.625 66.7969V40.3564Z"
                    fill="#F8F8F8"/>
              </svg>
            </div>
            <div class="card-words">
              <div class="card-title" v-if="language">Experiență în Muncă</div>
              <div class="card-title" v-if="!language">Опыт работы</div>
              <div class="card-text" v-if="language">Take IT se remarcă prin echipa sa de experți cu 20+ ani de
                experiență, asigurând clienții cu cunoștințe solide și înțelegere profundă a cerințelor tehnologice,
                contribuind la oferirea de soluții personalizate și suport tehnic de calitate.
              </div>
              <div class="card-text" v-if="!language">Take IT отличает команда экспертов с более чем 20-летним
                опытом работы, предоставляющая клиентам глубокие знания и глубокое понимание технологических требований,
                помогающая предоставлять индивидуальные решения и качественную техническую поддержку.
              </div>
            </div>
          </div>
          <div class="one-card">
            <div class="card-logo">
              <svg xmlns="http://www.w3.org/2000/svg" width="90" height="90" viewBox="0 0 90 90" fill="none">
                <path
                    d="M65.1282 0H86.6986L87.1723 0.0629997L87.6412 0.189L87.9254 0.306C88.3043 0.459 88.6501 0.6885 88.9627 0.981L89.1521 1.179L89.3606 1.4355L89.6163 1.8405L89.8011 2.2455L89.8911 2.5335L89.9574 2.8215L90 3.249V23.643C89.9997 24.4981 89.6578 25.3212 89.0433 25.9461C88.4289 26.5709 87.5877 26.9508 86.6897 27.0091C85.7917 27.0674 84.904 26.7997 84.2057 26.2601C83.5075 25.7204 83.051 24.9491 82.9283 24.102L82.8951 23.643V11.5155L52.3916 40.4955C51.7901 41.0671 50.9927 41.4146 50.1443 41.4749C49.2959 41.5352 48.453 41.3042 47.7687 40.824L47.3708 40.5L33.019 27.405L6.06784 53.0055C5.43397 53.6094 4.58296 53.9629 3.68593 53.9949C2.7889 54.027 1.91236 53.7352 1.23254 53.1782C0.552725 52.6213 0.12004 51.8405 0.021485 50.9928C-0.0770703 50.1452 0.165811 49.2935 0.701296 48.609L1.04707 48.231L30.5086 20.241C31.1107 19.6701 31.9084 19.3234 32.7567 19.2639C33.6051 19.2045 34.4477 19.4362 35.1315 19.917L35.5294 20.241L49.8812 33.336L77.8649 6.75H65.1235C64.2659 6.74888 63.4376 6.45303 62.7916 5.91707C62.1457 5.38111 61.7256 4.64122 61.6089 3.834L61.5758 3.375C61.5758 2.55943 61.8867 1.77146 62.451 1.15681C63.0152 0.542163 63.7946 0.142417 64.6451 0.0314999L65.1282 0ZM3.55745 67.5C4.49962 67.5 5.40319 67.8556 6.0694 68.4885C6.73561 69.1214 7.10989 69.9799 7.10989 70.875V86.625C7.10989 87.5201 6.73561 88.3785 6.0694 89.0115C5.40319 89.6444 4.49962 90 3.55745 90C2.61529 90 1.71171 89.6444 1.0455 89.0115C0.379292 88.3785 0.00501889 87.5201 0.00501889 86.625V70.875C0.00501889 69.9799 0.379292 69.1214 1.0455 68.4885C1.71171 67.8556 2.61529 67.5 3.55745 67.5ZM30.7928 52.875C30.7928 51.9799 30.4185 51.1215 29.7523 50.4885C29.0861 49.8556 28.1825 49.5 27.2403 49.5C26.2982 49.5 25.3946 49.8556 24.7284 50.4885C24.0622 51.1215 23.6879 51.9799 23.6879 52.875V86.625C23.6879 87.5201 24.0622 88.3785 24.7284 89.0115C25.3946 89.6444 26.2982 90 27.2403 90C28.1825 90 29.0861 89.6444 29.7523 89.0115C30.4185 88.3785 30.7928 87.5201 30.7928 86.625V52.875ZM50.9232 58.5C51.8654 58.5 52.769 58.8556 53.4352 59.4885C54.1014 60.1214 54.4757 60.9799 54.4757 61.875V86.625C54.4757 87.5201 54.1014 88.3785 53.4352 89.0115C52.769 89.6444 51.8654 90 50.9232 90C49.9811 90 49.0775 89.6444 48.4113 89.0115C47.7451 88.3785 47.3708 87.5201 47.3708 86.625V61.875C47.3708 60.9799 47.7451 60.1214 48.4113 59.4885C49.0775 58.8556 49.9811 58.5 50.9232 58.5ZM78.1586 39.375C78.1586 38.4799 77.7843 37.6215 77.1181 36.9885C76.4519 36.3556 75.5483 36 74.6061 36C73.6639 36 72.7604 36.3556 72.0942 36.9885C71.428 37.6215 71.0537 38.4799 71.0537 39.375V86.625C71.0537 87.5201 71.428 88.3785 72.0942 89.0115C72.7604 89.6444 73.6639 90 74.6061 90C75.5483 90 76.4519 89.6444 77.1181 89.0115C77.7843 88.3785 78.1586 87.5201 78.1586 86.625V39.375Z"
                    fill="white"/>
              </svg>
            </div>
            <div class="card-words">
              <div class="card-title" v-if="language">Creștere Continuă</div>
              <div class="card-title" v-if="!language">Продолжающийся рост</div>
              <div class="card-text" v-if="language">Take IT promovează creșterea continuă prin implementarea
                tehnologiilor inovatoare. Echipa noastră de experți contribuie la dezvoltarea afacerii Dvs,
                implementând soluții tehnologice avansate și orientate spre viitor.
              </div>
              <div class="card-text" v-if="!language">Take IT способствует постоянному росту за счет внедрения
                инновационных технологий. Наша команда экспертов способствует развитию вашего бизнеса, внедряя передовые
                и перспективные технологические решения.
              </div>
            </div>
          </div>
        </div>
        <div class="slide-title" v-if="language">Suntem mândri să oferim un parteneriat bazat pe excelență și încredere,
          construit pe fundamente solide și dedicat atingerii obiectivelor dumneavoastră.
        </div>
        <div class="slide-title" v-if="!language">Мы с гордостью предлагаем партнерство, основанное на совершенстве и
          доверии, построенное на прочной основе и ориентированное на достижение ваших целей.
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
                      <stop offset="0%" stop-color="#e91e63"/>
                      <stop offset="100%" stop-color="#673ab7"/>
                    </linearGradient>
                  </defs>
                  <circle v-motion :initial="{ 'stroke-dashoffset': 471 }"
                          :visibleOnce="{ 'stroke-dashoffset': 120, transition: { duration: 2000, delay: 200, } }"
                          cx="80"
                          cy="80" r="70" stroke-linecap="round"/>
                </svg>
              </div>
              <div class="one-circle">
                <div class="percent-title" v-if="language">Produse</div>
                <div class="percent-title" v-if="!language">Продукты</div>
                <div class="percent-nr">10000</div>
                <svg xmlns="http://www.w3.org/2000/svg" version="1.1">
                  <defs>
                    <linearGradient id="GradientColor">
                      <stop offset="0%" stop-color="#e91e63"/>
                      <stop offset="100%" stop-color="#673ab7"/>
                    </linearGradient>
                  </defs>
                  <circle v-motion :initial="{ 'stroke-dashoffset': 471 }"
                          :visibleOnce="{ 'stroke-dashoffset': 120, transition: { duration: 2000, delay: 200, } }"
                          cx="80"
                          cy="80" r="70" stroke-linecap="round"/>
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
                      <stop offset="0%" stop-color="#e91e63"/>
                      <stop offset="100%" stop-color="#673ab7"/>
                    </linearGradient>
                  </defs>
                  <circle v-motion :initial="{ 'stroke-dashoffset': 471 }"
                          :visibleOnce="{ 'stroke-dashoffset': 120, transition: { duration: 2000, delay: 200, } }"
                          cx="80"
                          cy="80" r="70" stroke-linecap="round"/>
                </svg>
              </div>
              <div class="one-circle">
                <div class="percent-title" v-if="language">Experți angajați</div>
                <div class="percent-title" v-if="!language">Нанятые специалисты</div>
                <div class="percent-nr">38</div>
                <svg xmlns="http://www.w3.org/2000/svg" version="1.1">
                  <defs>
                    <linearGradient id="GradientColor">
                      <stop offset="0%" stop-color="#e91e63"/>
                      <stop offset="100%" stop-color="#673ab7"/>
                    </linearGradient>
                  </defs>
                  <circle v-motion :initial="{ 'stroke-dashoffset': 471 }"
                          :visibleOnce="{ 'stroke-dashoffset': 120, transition: { duration: 2000, delay: 200, } }"
                          cx="80"
                          cy="80" r="70" stroke-linecap="round"/>
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
                      <stop offset="0%" stop-color="#e91e63"/>
                      <stop offset="100%" stop-color="#673ab7"/>
                    </linearGradient>
                  </defs>
                  <circle v-motion :initial="{ 'stroke-dashoffset': 471 }"
                          :visibleOnce="{ 'stroke-dashoffset': 120, transition: { duration: 2000, delay: 200, } }"
                          cx="80"
                          cy="80" r="70" stroke-linecap="round"/>
                </svg>
              </div>
              <div class="one-circle">
                <div class="percent-title">Call-center</div>
                <div class="percent-nr">24/7</div>
                <svg xmlns="http://www.w3.org/2000/svg" version="1.1">
                  <defs>
                    <linearGradient id="GradientColor">
                      <stop offset="0%" stop-color="#e91e63"/>
                      <stop offset="100%" stop-color="#673ab7"/>
                    </linearGradient>
                  </defs>
                  <circle v-motion :initial="{ 'stroke-dashoffset': 471 }"
                          :visibleOnce="{ 'stroke-dashoffset': 120, transition: { duration: 2000, delay: 200, } }"
                          cx="80"
                          cy="80" r="70" stroke-linecap="round"/>
                </svg>
              </div>
            </div>
          </div>
          <div class="percent-info">
            <div class="percent-info-title" v-if="language">
              Inovăm cu <span class="bold-green"> eficiență</span>, transformăm <span
                class="bold-green"> oportunități</span>, aducând soluții de impact
            </div>
            <div class="percent-info-title" v-if="!language">Мы <span class="bold-green"> эффективно</span> недряем
              инновации , превращаем проблемы в <span class="bold-green"> возможности</span>, предлагая эффективные
              решения.
            </div>
            <router-link to="/About" class="percent-link" v-if="language">Află mai multe despre noi</router-link>
            <router-link to="/About" class="percent-link" v-if="!language">Узнайте больше о нас</router-link>
          </div>
          <div class="percent-background">
            <svg width="882" height="794" viewBox="0 0 882 794" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g filter="url(#filter0_f_320_769)">
                <path
                    d="M390.823 615.272C227.663 580.666 79.7092 294.52 103.453 182.573C127.197 70.6254 405.557 94.5271 568.717 129.133C731.877 163.739 1101.53 531.064 1077.78 643.012C1054.04 754.959 553.983 649.878 390.823 615.272Z"
                    fill="#009D06" fill-opacity="0.15"/>
              </g>
              <defs>
                <filter id="filter0_f_320_769" x="0.936157" y="0.32019" width="1177.94" height="792.948"
                        filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                  <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                  <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
                  <feGaussianBlur stdDeviation="50" result="effect1_foregroundBlur_320_769"/>
                </filter>
              </defs>
            </svg>

          </div>
        </div>
      </div>
      <div class="one-slide" id="services">
        <div class="service-title" v-if="language">
          Serviciile Noastre
        </div>
        <div class="service-title" v-if="!language">
          Наши услуги
        </div>
        <div class="container">
          <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
            <ol class="carousel-indicators">
              <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
              <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
              <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
              <li data-target="#carouselExampleIndicators" data-slide-to="3"></li>
            </ol>
            <div class="carousel-inner">
              <div class="carousel-item active-style active">
                <div class="service-one-slide-title" v-if="language">Dezvoltăm soluții și aplicații complexe</div>
                <div class="service-one-slide-title" v-if="!language">Мы разрабатываем сложные решения и приложения
                </div>
                <div class="service-one-slide-content" v-if="language">Take IT oferă soluții integrate, cu accent pe
                  implementarea rapidă
                  într-un mediu competitiv. Prioritățile includ fidelizarea clienților, optimizarea proceselor și
                  asigurarea securității prin soluții complete. Diferențierea constă în crearea unor experiențe
                  inovatoare. Suportul tehnic și serviciile cu acoperire națională consolidează relațiile durabile cu
                  clienții. Take IT se evidențiază prin abordare comprehensivă și parteneriate strânse pe parcursul
                  colaborării.
                </div>
                <div class="service-one-slide-content" v-if="!language">Take IT предлагает интегрированные решения с
                  акцентом на
                  в конкурентной среде.Приоритеты включают лояльность клиентов, оптимизация процессов и
                  Обеспечение безопасности с помощью полных решений.Дифференциация состоит из создания опыта
                  инновационный.Техническая поддержка и услуги с национальным охватом укрепляют устойчивые отношения с
                  клиенты.Take IT, подчеркивается комплексным подходом и партнерскими отношениями, собранными в течение
                  всего
                  Сотрудничество.
                </div>
              </div>
              <div class="carousel-item active-style">
                <div class="service-one-slide-title" v-if="language">Sisteme de securitate</div>
                <div class="service-one-slide-title" v-if="!language">Охранные системы</div>
                <div class="service-one-slide-content" v-if="language">Sistemele de securitate sunt colecții de
                  dispozitive menite să asigure securitatea într-o instituție. Acestea facilitează gestionarea accesului
                  pe teritoriu, verificarea vizitatorilor și monitorizarea activităților angajaților. Sistemele pot
                  controla dispozitivele de blocare, gestiona înregistrarea orelor de lucru, preveni situații de urgență
                  și proteja proprietatea împotriva potențialelor infracțiuni.
                </div>
                <div class="service-one-slide-content" v-if="!language">Системы безопасности - это коллекции устройств,
                  предназначенных для обеспечения безопасности в учреждении.Они облегчают управление доступом к
                  территории, проверяют посетителей и следят за деятельностью сотрудников.Системы могут управлять
                  блокирующими устройствами, управлять регистрацией рабочего времени, предотвращать чрезвычайные
                  ситуации и защищать имущество от потенциальных преступлений.
                </div>
              </div>
              <div class="carousel-item active-style">
                <div class="service-one-slide-title" v-if="language">Sisteme EAS anti-furt</div>
                <div class="service-one-slide-title" v-if="!language">EAS Анти-кражы системы</div>
                <div class="service-one-slide-content" v-if="language">Protejați eficient resursele folosind soluții
                  inovatoare, inclusiv sistemele anti-furt EAS și senzori adaptabili pentru diverse produse și
                  configurații de magazine. Oferim produse integrate și universale, precum sisteme antifurt AM, RF și
                  RFID de la lideri globali precum Sensormatic și Shopguard. Asigurăm o gamă completă de instrumente
                  pentru securitatea magazinelor, contribuind la protejarea eficientă a produselor și a mediului de
                  retail.
                </div>
                <div class="service-one-slide-content" v-if="!language">Эффективно защищает ресурсы с использованием
                  инновационных решений, в том числе систем антитипов EAS и адаптируемые датчики для различных продуктов
                  и конфигураций магазинов.Мы предлагаем интегрированные и универсальные продукты, такие как системы AM,
                  RF и RFID от Global Leaders и ShopGuard.Мы предоставляем полный спектр инструментов для безопасности
                  магазина, способствуя эффективной защите продуктов и розничной среды.
                </div>
              </div>
              <div class="carousel-item active-style">
                <div class="service-one-slide-title" v-if="language">Service Centru</div>
                <div class="service-one-slide-title" v-if="!language">Сервисный центр</div>
                <div class="service-one-slide-content" v-if="language">Take IT este partenerul oficial de service al
                  Datalogic în Moldova. Tehnicienii noștri înalt calificați oferă servicii de garanție și post-garanție
                  pentru echipamente noi și existente. Specializați în gestionarea documentației și altor aspecte
                  esențiale, contribuim la funcționarea optimă a companiei dvs., asigurându-ne că toate necesitățile
                  sunt îndeplinite în mod profesional. O echipă de tehnicieni este întotdeauna la dispoziția dvs.,
                  acoperind fiecare colț al țării.
                </div>
                <div class="service-one-slide-content" v-if="!language">Take ITОн является официальным партнером по
                  обслуживанию DataLogic в Молдове.Наши высококвалифицированные специалисты предлагают гарантию и услуги
                  постгаранты для нового и существующего оборудования.Специализируясь на управлении документацией и
                  другими основными аспектами, мы способствуем оптимальному функционированию вашей компании, следя за
                  тем, чтобы все потребности удовлетворялись профессионально.Команда техников всегда в вашем
                  распоряжении, охватывающей каждый угол страны.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="one-slide clients-wrapper" id="clients">
        <div class="clients" v-if="language">Clienți ce au <span class="clients-green">încredere</span> în echipa
          noastră
        </div>
        <div class="clients" v-if="!language">Клиенты, которые <span class="clients-green">доверяют</span> нашей команде
        </div>
        <div class="clients-slide">
          <div class="clients-logos-wrapper">
            <div class="clients-logos">
              <span class="clients-logos-img"><img src="../assets/Clienti/carmez.png" alt=""></span>
              <span class="clients-logos-img"><img src="../assets/Clienti/colins.png" alt=""></span>
              <span class="clients-logos-img"><img src="../assets/Clienti/darwin.png" alt=""></span>
              <span class="clients-logos-img"><img src="../assets/Clienti/linella.png" alt=""></span>
              <span class="clients-logos-img"><img src="../assets/Clienti/maximum.png" alt=""></span>
              <span class="clients-logos-img"><img src="../assets/Clienti/merci.png" alt=""></span>
              <span class="clients-logos-img"><img src="../assets/Clienti/milavitsa.png" alt=""></span>
              <span class="clients-logos-img"><img src="../assets/Clienti/nr 1.png" alt=""></span>
              <span class="clients-logos-img"><img src="../assets/Clienti/ovico.png" alt=""></span>
              <span class="clients-logos-img"><img src="../assets/Clienti/ovs.png" alt=""></span>
              <span class="clients-logos-img"><img src="../assets/Clienti/salamander.png" alt=""></span>
              <span class="clients-logos-img"><img src="../assets/Clienti/sisley.png" alt=""></span>
              <span class="clients-logos-img"><img src="../assets/Clienti/sportlandia.png" alt=""></span>
              <span class="clients-logos-img"><img src="../assets/Clienti/terranova.png" alt=""></span>
              <span class="clients-logos-img"><img src="../assets/Clienti/trend.png" alt=""></span>
              <span class="clients-logos-img"><img src="../assets/Clienti/McDonalds.png" alt=""></span>
            </div>
            <div class="clients-logos" id="clients-logo-copy">
              <span class="clients-logos-img"><img src="../assets/Clienti/carmez.png" alt=""></span>
              <span class="clients-logos-img"><img src="../assets/Clienti/colins.png" alt=""></span>
              <span class="clients-logos-img"><img src="../assets/Clienti/darwin.png" alt=""></span>
              <span class="clients-logos-img"><img src="../assets/Clienti/linella.png" alt=""></span>
              <span class="clients-logos-img"><img src="../assets/Clienti/maximum.png" alt=""></span>
              <span class="clients-logos-img"><img src="../assets/Clienti/merci.png" alt=""></span>
              <span class="clients-logos-img"><img src="../assets/Clienti/milavitsa.png" alt=""></span>
              <span class="clients-logos-img"><img src="../assets/Clienti/nr 1.png" alt=""></span>
              <span class="clients-logos-img"><img src="../assets/Clienti/ovico.png" alt=""></span>
              <span class="clients-logos-img"><img src="../assets/Clienti/ovs.png" alt=""></span>
              <span class="clients-logos-img"><img src="../assets/Clienti/salamander.png" alt=""></span>
              <span class="clients-logos-img"><img src="../assets/Clienti/sisley.png" alt=""></span>
              <span class="clients-logos-img"><img src="../assets/Clienti/sportlandia.png" alt=""></span>
              <span class="clients-logos-img"><img src="../assets/Clienti/terranova.png" alt=""></span>
              <span class="clients-logos-img"><img src="../assets/Clienti/trend.png" alt=""></span>
              <span class="clients-logos-img"><img src="../assets/Clienti/McDonalds.png" alt=""></span>
            </div>
          </div>
        </div>
      </div>
      <div class="one-slide parteners-wrapper wrapper" id="parteners">
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
              cu mărci de <span class="parteners-green">renumite mondial</span>.
            </div>
            <div class="parteners-subtitle" v-if="!language">Take IT - <span class="parteners-green">импортер
                  официальный</span> на территории Республики Молдовы, доверенного партнера производителей оборудования
              с брендами <span class="parteners-green">известный во всем мире</span>.
            </div>
          </div>
          <div class="parteners-card-slider">
            <div class="parteners-card-slider-wrapper">
              <Swiper :slidesPerView="1" spaceBetween="40" :pagination="true"
                      class="parteners-card-one-slide">
                <swiper-slide>
                  <div class="parteners-img"><img src="/src/assets/Partenerii/zebra.png" alt=""></div>
                  <div class="parteners-img"><img src="/src/assets/Partenerii/sato.png" alt=""></div>
                  <div class="parteners-img"><img src="/src/assets/Partenerii/datalogic.png" alt=""></div>
                  <div class="parteners-img sensormatic"><img src="/src/assets/Partenerii/sensormatic.png" alt=""></div>
                </swiper-slide>
                <swiper-slide>
                  <div class="parteners-img"><img src="/src/assets/Partenerii/bizebra.png" alt=""></div>
                  <div class="parteners-img"><img style="height:100%;" src="/src/assets/Partenerii/ccl.png" alt="">
                  </div>
                  <div class="parteners-img"><img src="/src/assets/Partenerii/shopguard.png" alt=""></div>
                  <div class="parteners-img"><img style="height:100%;" src="/src/assets/Partenerii/tsc.png" alt="">
                  </div>
                </swiper-slide>
              </Swiper>
              <div class="swipe-hand">
                <svg xmlns="http://www.w3.org/2000/svg" width="50" height="40" viewBox="0 0 50 40" fill="none">
                  <path
                      d="M24.5139 39.1934C23.5806 39.1934 22.7028 39.0639 21.8806 38.805C21.0583 38.5475 20.3065 38.1646 19.625 37.6565L5.93889 27.451L7.275 26.4811C7.69537 26.1931 8.17222 26.0076 8.70555 25.9245C9.23704 25.8401 9.775 25.8484 10.3194 25.9495L18.0556 27.3762V10.1178C18.0556 9.82292 18.1889 9.57647 18.4556 9.37848C18.7222 9.17911 19.0518 9.07942 19.4444 9.07942C19.837 9.07942 20.1667 9.17911 20.4333 9.37848C20.6981 9.57786 20.8306 9.82431 20.8306 10.1178V30.1633L10.7278 28.1218L21.6056 36.2131C21.9796 36.4928 22.4213 36.7136 22.9306 36.8756C23.4398 37.0362 23.9667 37.1165 24.5111 37.1165H34.7222C36.6778 37.1165 38.3241 36.6167 39.6611 35.6171C40.9981 34.6174 41.6667 33.3866 41.6667 31.9245V23.6172C41.6667 23.3223 41.8 23.0758 42.0667 22.8778C42.3333 22.6798 42.663 22.5802 43.0556 22.5788C43.4481 22.5788 43.7778 22.6785 44.0444 22.8778C44.3093 23.0772 44.4417 23.3237 44.4417 23.6172V31.9245C44.4417 33.9431 43.4963 35.6593 41.6056 37.0729C39.7148 38.4865 37.4241 39.1934 34.7333 39.1934H24.5139ZM25.9083 25.694V17.3867C25.9083 17.0918 26.0417 16.8447 26.3083 16.6453C26.575 16.4473 26.9056 16.3483 27.3 16.3483C27.6926 16.3483 28.0222 16.448 28.2889 16.6474C28.5537 16.8467 28.6861 17.0932 28.6861 17.3867V25.694H25.9083ZM33.8139 25.694V19.4635C33.8139 19.1686 33.9472 18.9215 34.2139 18.7221C34.4806 18.5227 34.8111 18.4237 35.2056 18.4251C35.6 18.4251 35.9296 18.5248 36.1944 18.7242C36.4593 18.9236 36.5917 19.17 36.5917 19.4635V25.694H33.8139ZM0 10.9174V1.81054H2.45833V7.01506C6.14722 4.89254 9.86296 3.31416 13.6056 2.2799C17.3481 1.24841 21.2 0.732666 25.1611 0.732666C30.7093 0.732666 35.7463 1.65893 40.2722 3.51146C44.7981 5.36537 48.0407 7.83402 50 10.9174H47.3889C45.2722 8.3283 42.2352 6.28955 38.2778 4.80116C34.3185 3.31277 29.9463 2.56858 25.1611 2.56858C21.3 2.56858 17.5481 3.10509 13.9056 4.17812C10.2611 5.25114 6.64444 6.88491 3.05556 9.07942H12.1806V10.9174H0Z"
                      fill="#F8F8F8" fill-opacity="0.5"/>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Contact :language="language"/>
      <div class="banner">
        <div class="products-banner wrapper">
          <div class="banner-title" v-if="language">Descoperiți produsele partenerilor noștri</div>
          <div class="banner-title" v-if="!language">Откройте для себя продукты наших партнеров</div>
          <a v-if="language" href="https://catalog.takeit.md/index.php?dispatch=categories.view&category_id=204"
             class="banner-btn">Vizualizați
            Ofertele</a>
          <a v-if="!language" href="https://catalog.takeit.md/index.php?dispatch=categories.view&category_id=204&sl=ru"
             class="banner-btn">Предложения</a>
        </div>
      </div>
    </div>
  </div>
  <Footer :language="language"/>
</template>
<style scoped>
.shorthand-svg {
  transform: rotate(0);
  transition: all 0.2s ease-in;
  position: absolute;
  left: -100px;
}
</style>