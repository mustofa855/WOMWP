<template>
    <div>
      <h1>Buat Pesanan Baru</h1>
      <OrderForm @submit-order="handleSubmitOrder" />
    </div>
  </template>
  
  <script>
  import OrderForm from '~/components/OrderForm.vue'
  
  export default {
    components: {
      OrderForm
    },
    methods: {
      handleSubmitOrder(orderData) {
        // Assuming you have a Vuex action to handle order creation
        this.$store.dispatch('createOrder', orderData).then(() => {
          this.$router.push('/order')
        }).catch(error => {
          console.error('Error creating order:', error)
        })
      }
    }
  }
  </script>
  