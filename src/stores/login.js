import { defineStore } from 'pinia'

export const useLoginStore = defineStore('login', {
  state: () => ({
    showModal: false,
    isLoggedIn: false,
    user: null
  }),
  actions: {
    showLoginModal () {
      this.showModal = true
    },
    hideLoginModal () {
      this.showModal = false
    },
    login (email, password) {
      // Do API request to login user
      // ...
      // If successful, update store
      this.isLoggedIn = true
      this.user = {
        name: 'John Doe',
        email
      }
    },
    logout () {
      // Do API request to logout user
      // ...
      // If successful, update store
      this.isLoggedIn = false
      this.user = null
    }
  }
})
