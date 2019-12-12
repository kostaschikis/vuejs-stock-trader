<template>
  <div>
    <app-stock v-for="(stock, index) in stocks" :key="index" :stock="stock"></app-stock>
  </div>
</template>

<script>
import Stock from './Stock.vue'
export default {
  computed: {
    stocks () {
      return this.$store.getters.stockPortfolio
    }
  },
  components: {
    appStock: Stock
  }
}
</script>
