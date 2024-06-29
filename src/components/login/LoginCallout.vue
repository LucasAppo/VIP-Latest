<template>
  <div class="login-prompt">
    <p class="message">{{ message }}</p>
    <q-btn @click="login" color="primary">{{ buttonText }}</q-btn>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useLoginStore } from 'stores/login'

const lStore = useLoginStore()
const message = ref('Please log in to continue')
const buttonText = ref('Log in')

function login () {
  // your login logic here
  lStore.showLoginModal()
}
</script>

<style scoped>
.login-prompt {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 200px;
}

.message {
  font-size: 24px;
  margin-bottom: 24px;
}
</style>
