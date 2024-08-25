<template>
    <div>
      <h1>Daftar Pesanan</h1>
      <div class="order-cards">
        <OrderCard v-for="order in orders" :key="order.id" :order="order" />
      </div>
      <button @click="navigateToOrderForm">Buat Order Baru</button>
    </div>
  </template>
  
  <script>
  import OrderCard from '~/components/OrderCard.vue'
  import { mapState } from 'vuex'
  
  export default {
    components: {
      OrderCard
    },
    computed: {
      ...mapState(['orders']) // Assuming you have a Vuex store managing orders
    },
    methods: {
      navigateToOrderForm() {
        this.$router.push('/pelanggan/order-form')
      }
    }
  }
  </script>
  
  <style scoped>
  .order-cards {
    display: flex;
    flex-wrap: wrap;
    gap: 1rem;
  }
  button {
    margin-top: 1rem;
  }
  </style>
  