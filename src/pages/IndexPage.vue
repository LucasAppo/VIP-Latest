<template>
  <q-page class="flex flex-center">
    <LoginCallout />
    <LoginPopup />
  </q-page>
</template>

<script>
import { defineComponent } from 'vue'
import LoginCallout from 'components/login/LoginCallout.vue'
import LoginPopup from 'components/login/LoginPopup.vue'

export default defineComponent({
  name: 'IndexPage',
  components: { LoginPopup, LoginCallout }
})
</script>
