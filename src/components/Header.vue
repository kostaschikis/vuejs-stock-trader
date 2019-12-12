<template>
    <div>
    <b-navbar toggleable="lg" type="light" variant="light">
        <b-navbar-brand active to="/">Stock Trader</b-navbar-brand>

        <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

    <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav>
            <b-nav-item to="/portfolio" active-class="active">Portfolio</b-nav-item>
            <b-nav-item to="/stocks" active-class="active">Stocks</b-nav-item>
        </b-navbar-nav>
        <b-navbar-nav>
            <b-nav-text>
                <Strong>{{ funds | currency }}</Strong>
            </b-nav-text>
        </b-navbar-nav>

        <!-- Right aligned nav items -->
        <b-navbar-nav class="ml-auto">
            <b-nav-item @click="endDay">End Day</b-nav-item>
            <b-nav-item-dropdown right>
                <!-- Using 'button-content' slot -->
                <template v-slot:button-content>
                    Save &amp; Load
                </template>
                <b-dropdown-item href="#" @click="saveData">Save Data</b-dropdown-item>
                <b-dropdown-item href="#" @click="loadData">Load Data</b-dropdown-item>
            </b-nav-item-dropdown>
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
</div>
</template>

<script>
import axios from 'axios'
axios.defaults.baseURL = process.env.VUE_APP_BASE_URL
export default {
  computed: {
    funds () {
      return this.$store.getters.funds
    }
  },
  methods: {
    endDay () {
      this.$store.dispatch('randomizeStocks')
    },
    saveData () {
      const data = {
        funds: this.$store.getters.funds,
        stockPortfolio: this.$store.getters.stockPortfolio,
        stocks: this.$store.getters.stocks
      }
      axios.put('data.json', data)
    },
    loadData () {
      this.$store.dispatch('loadData')
    }
  }
}
</script>
