<script setup>
import axios from 'axios';
import { ref, onMounted ,onBeforeUnmount } from 'vue';
const props = defineProps(['language']);

const fullName = ref('');
const email = ref('');
const message = ref('');
const token = ref('7129232644:AAHhevbgd0K1tn_8kSjmL9LxOKt4Gw9txxU');
const chatId = ref('776161361');
const sended = ref(false)

function showWindow (){
  sended.value = !sended.value
}
function submitMessage() {
  const fullMessage = `FullName: ${fullName.value} Email: ${email.value} Message: ${message.value}`;

  axios.post(`https://api.telegram.org/bot${token.value}/sendMessage?chat_id=${chatId.value}&text=${fullMessage}`)
    .then(response => {
      showWindow();
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
   <div class="one-slide " id="contact">
          <div class="send-message">
            <div class="send-message-title" v-if="language">Suntem aici pentru dvs!</div>
            <div class="send-message-title" v-if="!language">Мы здесь для вас!</div>
            <div class="send-message-subtitle" v-if="language">Echipa noastră este mereu pregătită să vă răspundă la orice
              întrebare</div>
            <div class="send-message-subtitle" v-if="!language">Наша команда всегда готова ответить на любой вопрос</div>
            <form class="form-wrapper" method="Post" @submit.prevent="submitMessage()">
              <div class="user-info">
                <input v-if="language" required v-model="fullName" class="send-message-input" placeholder="Nume" type="text">
                <input v-if="!language" required v-model="fullName" class="send-message-input" placeholder="Имя" type="text">
                <input v-if="language" required v-model="email" class="send-message-input" placeholder="exemplu@email.com" type="email">
                <input v-if="!language" required v-model="email" class="send-message-input" placeholder="пример@email.com" type="email">
              </div>
              <textarea v-if="language" required v-model="message" class="send-message-text" placeholder="Mesaj" id="Message"></textarea>
              <textarea v-if="!language" required v-model="message" class="send-message-text" placeholder="Сообщение" id="Message"></textarea>
              <button v-if="language" class="send-message-btn" type="submit">Trimiteți mesajul</button>
              <button v-if="!language" class="send-message-btn" type="submit">Отправить сообщение</button>
            </form>
          </div>
          <div class="message-sended" v-if="sended">
            <div class="message-sended-wrapper">
              <div class="title-window" v-if="language">Mesajul Dvs a fost trimis cu succes!</div>
              <div class="title-window" v-if="!language">Ваше сообщение было успешно отправлено!</div>
              <div class="btn-window" @click="showWindow()"  v-if="language">Închideți</div>
              <div class="btn-window" @click="showWindow()" v-if="!language">Закрыть</div>
            </div>
          </div>
        </div>
</template>
<style scoped>
.one-slide{
  position: relative;
}
.message-sended {
  position: absolute;
  top: 50%;
  transform: translate(-50%, -50%);
  width: 100%;
  padding: 0 20px;
  z-index: 2;
  left: 50%;
  transition: all 100ms ease-out;
  max-width: 940px;
}
.message-sended-wrapper {
  background-color: #001730;
  padding: 100px 169px;
  display: flex;
  flex-direction: column;
  gap: 60px;
  align-items: center;
  border-radius: 20px;
}
.title-window {
  font-family: Montserrat;
  color:#F4F4F4;
  font-size: 32px;
  font-weight: 400;
}
.btn-window {
  font-family: Montserrat;
  font-size: 20px;
  font-weight: 500;
  color: #F8F8F8;
  width: 100%;
  display: flex;
  padding: 15px 0;
  border: 1px solid #F8F8F8;
  border-radius: 100px;
  justify-content: center;
  cursor: pointer;
}
@media screen and (max-width: 1000px){
  .message-sended-wrapper{
    padding: 100px 30px;
    gap: 30px;
  }
  .title-window{
    font-size: 17px;
    text-align: center;
  }
  .btn-window{
    font-size: 13px;
    width: 30%;
    padding: 5px 0;
  }
}
</style>