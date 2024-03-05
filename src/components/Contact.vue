<script setup>
import axios from 'axios';
import { ref, onMounted ,onBeforeUnmount } from 'vue';
const props = defineProps(['language']);

const fullName = ref('');
const email = ref('');
const message = ref('');
const token = ref('7129232644:AAHhevbgd0K1tn_8kSjmL9LxOKt4Gw9txxU');
const chatId = ref('776161361');

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
   <div class="one-slide " id="contact">
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
</template>