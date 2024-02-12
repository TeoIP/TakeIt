<script setup>
import { ref } from 'vue'
const language = ref(true)

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
</script>

<template>
  <div class="app">
    <div class="app-wrapper">
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
          <div class="nav-hamburger">
            <span class="line"></span>
            <span class="line"></span>
            <span class="line"></span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.app {
  background-color: #011D3C;
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

.nav-right {
  display: flex;
  justify-content: space-between;
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
}

.line {
  width: 60px;
  height: 2px;
  background: #F8F8F8;
}
</style>
