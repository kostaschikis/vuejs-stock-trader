<template>
  <b-col sm="6" md="4">
    <b-card>
        <div class="panel-heading">
          <h3 class="panel-title">{{ stock.name }}</h3>
          <small>(Price: {{ stock.price + '$' }} | Quantity: {{ stock.quantity }})</small>
        </div>
        <div class="panel-body">
          <div class="pull-left">
              <b-form-input type="number" v-model.number="quantity" placeholder="Quantity" :class="{danger: insufficientQuantity}"></b-form-input>
          </div>
          <b-button @click="sellStock"
                    :disabled="insufficientQuantity || quantity <= 0 || !Number.isInteger(quantity)"
                    variant="success">
          {{ insufficientQuantity ? 'Not Enough' : 'Sell' }}
          </b-button>
        </div>
    </b-card>
  </b-col>
</template>

<script>
export default {
  props: ['stock'],
  data () {
    return {
      quantity: 0
    }
  },
  computed: {
    insufficientQuantity () {
      return this.quantity > this.stock.quantity
    }
  },
  methods: {
    sellStock () {
      const order = {
        stockId: this.stock.id,
        stockPrice: this.stock.price,
        quantity: this.quantity
      }
      this.$store.dispatch('sellStock', order)
      this.quantity = 0
    }
  }
}
</script>

<style scoped>
  .card {
    margin-top: 1rem;
  }
  .panel-body {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }
  .danger {
    border: 1px solid red
  }
</style>
