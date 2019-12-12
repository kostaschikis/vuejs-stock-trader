<template>
  <b-container>
    <app-header></app-header>
    <b-row>
      <b-col xs="12">
        <router-view></router-view>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
import Header from './components/Header.vue'

export default {
  components: {
    'app-header': Header
  },
  created () {
    this.$store.dispatch('initStocks')
  }
}
</script>

<style>
  body {
    padding: 30px
  }
</style>
