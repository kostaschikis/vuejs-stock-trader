<template>
  <div>
    <b-card-group>
      <app-stock v-for="(stock, index) in stocks" :key="index" :stock="stock"></app-stock>
    </b-card-group>
  </div>
</template>

<script>
import Stock from './Stock.vue'
export default {
  components: {
    appStock: Stock
  },
  computed: {
    stocks () {
      return this.$store.getters.stocks
    }
  }
}
</script>
