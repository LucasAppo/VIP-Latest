<template>
  <q-dialog v-model="showModal" position="top">
    <q-card>
      <q-card-section class="q-pa-md" v-if="!isLoggedIn">
        <h6 class="text-h6">Login</h6>
        <q-form @submit="login">
          <q-input
            v-model="email"
            label="Email"
            type="email"
            required
          />
          <q-input
            v-model="password"
            label="Password"
            type="password"
            required
          />
          <q-space />
          <q-btn type="submit" label="Login" class="full-width" />
        </q-form>
      </q-card-section>
      <q-card-section v-else>
        You are already logged in
      </q-card-section>
    </q-card>
  </q-dialog>
</template>

<script setup>
import { ref } from 'vue'
import { useLoginStore } from 'stores/login'
import { storeToRefs } from 'pinia'

const lStore = useLoginStore()
const { showModal, isLoggedIn } = storeToRefs(lStore)
const email = ref('')
const password = ref('')

async function login () {
  console.log('you are trying to login with', email.value, password.value)
}
</script>
